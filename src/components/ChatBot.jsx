// src/components/ChatBot.jsx
import React, { useState } from "react";
import properties from "../data/properties";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m your Property Concierge. What are you looking for today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct",
          messages: [
            {
              role: "system",
              content: `
You are an AI property advisor on a Nigerian real estate website. 
Reply like a friendly assistant. If the user is just chatting (e.g. "hi", "how are you"), respond naturally. 
If they mention location, bedroom, or budget, extract that into JSON like:

{ "location": "Lekki", "bedrooms": 4, "budget": 150000000 }

Only include fields they mention.

Return just a friendly response or results. Don't explain JSON to the user.
`,
            },
            { role: "user", content: input },
          ],
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content;

      // Try to extract JSON from reply (if any)
      let extracted = {};
      try {
        const match = reply.match(/{[\s\S]*}/);
        if (match) {
          extracted = JSON.parse(match[0]);
        }
      } catch (err) {
        console.warn("No JSON extracted.");
      }

      // Try to filter properties if extraction exists
      let filtered = [];
      if (Object.keys(extracted).length > 0) {
        filtered = properties.filter((prop) => {
          const priceNumber = Number(
            prop.price.replace(/[^0-9]/g, "")
          );
          const inLocation = extracted.location
            ? prop.location
                ?.toLowerCase()
                .includes(extracted.location.toLowerCase())
            : true;
          const inBudget = extracted.budget
            ? priceNumber <= extracted.budget
            : true;
          const hasBeds = extracted.bedrooms
            ? Number(prop.bed) >= Number(extracted.bedrooms)
            : true;
          return inLocation && inBudget && hasBeds;
        });
      }

      if (filtered.length > 0) {
        const list = filtered
          .slice(0, 3)
          .map(
            (prop) =>
              `🏠 *${prop.title}* – ${prop.price}
🛏 ${prop.bed} Bed | 🛁 ${prop.bath} Bath | 📍 ${prop.location}`
          )
          .join("\n\n");

        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: `${reply}\n\nHere are some matches:\n\n${list}` },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: reply || "🤖 I'm here to help!" },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded-xl bg-white shadow-lg space-y-4">
      <div className="h-96 overflow-y-auto flex flex-col gap-3 p-2 bg-gray-50 rounded-lg">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap max-w-[85%] px-4 py-2 rounded-lg ${
              msg.sender === "bot"
                ? "bg-[#0a0f1c] text-white self-start"
                : "bg-gray-200 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-500 animate-pulse">
            🧠 AI is thinking...
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 4-bedroom in Lekki under ₦150M"
          className="flex-1 border px-4 py-2 rounded-md focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#d4af37] hover:text-black transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
