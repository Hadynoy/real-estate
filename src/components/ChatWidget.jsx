// src/components/ChatWidget.jsx
import React, { useState } from "react";
import ChatBot from "./ChatBot";
import { X, MessageCircle } from "lucide-react";
import AIAssistant from "./AIAssistant";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#0a0f1c] text-white p-4 rounded-full shadow-lg hover:bg-[#d4af37] hover:text-black transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Slide-In Chat Panel */}
      {open && (
        <div className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 border-l border-gray-200 transition-transform duration-300">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold text-lg text-[#0a0f1c]">AI Property Advisor</h2>
            <button onClick={() => setOpen(false)}>
              <X className="w-6 h-6 text-gray-500 hover:text-red-600" />
            </button>
          </div>
          <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
            <AIAssistant />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
