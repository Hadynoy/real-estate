import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import properties from '../data/properties';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('ai-chat');
    return saved ? JSON.parse(saved) : [
      { text: "Welcome to Cityscape Realty! How can I assist you today?", isUser: false }
    ];
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('ai-chat', JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct",
          messages: [
            {
              role: "system",
              content:
                "You are a luxury Nigerian real estate assistant. Understand user needs, respond politely, and extract this JSON silently: { location, bedrooms, budget }. Do NOT show the JSON or technical details to the user. If information is missing, politely ask for it.",
            },
            {
              role: "user",
              content: input,
            },
          ],
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "🤖 I'm here to help. Could you say that another way?";
      console.log("GPT Reply:", reply);

      const match = reply.match(/{[\s\S]*}/);
      let extracted = {};
      let responseText = reply;

      if (match) {
        try {
          extracted = JSON.parse(match[0]);
          responseText = reply.replace(match[0], '').trim();
        } catch {
          extracted = {};
        }
      }

      const filtered = properties.filter((prop) => {
        const matchLocation = extracted.location ? prop.location?.toLowerCase().includes(extracted.location.toLowerCase()) : true;
        const matchBed = extracted.bedrooms ? prop.bed >= extracted.bedrooms : true;
        const matchBudget = extracted.budget ? parseInt(prop.price.replace(/\D/g, '')) <= extracted.budget : true;
        return matchLocation && matchBed && matchBudget;
      });

      if (filtered.length > 0) {
        const list = filtered.slice(0, 3).map((prop) => (
          `🏠 *${prop.title}* – ₦${prop.price}\n🛏 ${prop.bed} Bed | 🛁 ${prop.bath} Bath | 📍 ${prop.location}`
        )).join("\n\n");

        responseText += `\n\nHere are some listings you might like:\n\n${list}`;
      }

      setMessages((prev) => [...prev, { text: responseText, isUser: false }]);
    } catch (err) {
      console.error("AI error:", err);
      setMessages((prev) => [...prev, {
        text: "⚠️ Unable to reach AI server. Try again later.",
        isUser: false,
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#0a0f1c] border border-[#d4af37]/60 text-[#d4af37] rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a2a44] hover:scale-105 transition duration-300"
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={22} />
        </motion.button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-96 h-96 bg-[#0a0f1c] rounded-xl shadow-2xl border border-[#d4af37]/20 mt-4 flex flex-col"
        >
          {/* Header */}
          <div className="p-4 border-b border-[#d4af37]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                <span className="text-[#d4af37] font-bold">AI</span>
              </div>
              <div>
                <h3 className="text-white font-serif font-bold">Luxury Assistant</h3>
                <p className="text-xs text-[#d4af37]/70">{loading ? "Typing..." : "Online"}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} className="text-white/60 hover:text-[#d4af37]" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-4 rounded-xl ${
                  msg.isUser ? 'bg-[#d4af37] text-[#0a0f1c]' : 'bg-[#1a2a44] text-white'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-white text-sm animate-pulse">Luxury Assistant is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#d4af37]/20">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-[#1a2a44]/50 rounded-full border border-[#d4af37]/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center"
              >
                <Send size={18} className="text-[#0a0f1c]" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AIAssistant;
