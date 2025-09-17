import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi! I’m Cuda, your personal assistant for GorNarendrasinh.me. Ask me anything about skills, projects, resume, or contact!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Bot Replies
  const botReplies = {
    skills:
      "🛠 My technical expertise includes:\n- JavaScript\n- React.js\n- Python\n- Flask & Django\n- Databases (MySQL, MongoDB)\n\nI love working across the full-stack to build modern, scalable solutions 🚀",
    projects:
      "📂 You can explore my projects in the **Projects section** of this site. Each one reflects my passion for modern web solutions and problem-solving with clean, scalable code.",
    resume:
      "📄 Here’s my Resume: [View Resume](#) (replace this with your actual link).",
    contact:
      "📧 You can contact me directly through the **Contact section** or email me at: gornarndrasinh18@gmail.com",
    default: [
      "🤖 Thanks for connecting! How can I assist you today?",
      "✨ I appreciate your interest, feel free to explore my skills or projects!",
      "💼 Always open to collaborations and exciting opportunities.",
      "🚀 Keep learning, keep growing — that’s my mantra.",
      "📊 Did you know? I also enjoy working with data & analytics!",
      "🌍 Let’s build something impactful together.",
      "🧑‍💻 Coding is not just work — it’s creativity with logic.",
      "🎯 Focus + Consistency = Success. I believe in that.",
      "📂 You can always ask me about my Resume, Skills, or Projects.",
      "🔥 Passion drives me to build scalable and modern solutions.",
      "🙌 Great talking to you! What would you like to know more about?",
    ],
  };

  // Function to simulate typing
  const simulateTyping = (fullText) => {
    setTyping(true);
    let index = 0;
    const words = fullText.split(" ");
    let currentText = "";

    const interval = setInterval(() => {
      currentText += (index > 0 ? " " : "") + words[index];
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: currentText },
      ]);
      index++;

      if (index >= words.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 120);
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;
    setMessages([...messages, { from: "user", text }]);
    setInput("");

    setTimeout(() => {
      let reply;
      const lower = text.toLowerCase();

      if (lower.includes("skill")) reply = botReplies.skills;
      else if (lower.includes("project")) reply = botReplies.projects;
      else if (lower.includes("resume")) reply = botReplies.resume;
      else if (lower.includes("contact")) reply = botReplies.contact;
      else {
        const randomReply =
          botReplies.default[
            Math.floor(Math.random() * botReplies.default.length)
          ];
        reply = randomReply;
      }

      // Add empty bot message first (for typing)
      setMessages((prev) => [...prev, { from: "bot", text: "" }]);
      simulateTyping(reply);
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-32 right-5 bg-gradient-to-r from-red-600 to-pink-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform text-white text-xl z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-40 right-5 w-80 shadow-2xl rounded-2xl overflow-hidden bg-white border flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-3">
              <h2 className="font-bold text-lg">💼 Gour Narendrasinh</h2>
              <p className="text-sm">Full-Stack Developer</p>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm bg-gray-50 flex flex-col">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl max-w-[75%] whitespace-pre-line ${
                    msg.from === "bot"
                      ? "bg-gray-200 text-gray-800 self-start"
                      : "bg-red-500 text-white ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {typing && (
                <div className="bg-gray-200 text-gray-800 p-2 rounded-xl w-16 flex justify-center">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce delay-150">●</span>
                  <span className="animate-bounce delay-300">●</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Buttons */}
            <div className="flex flex-wrap gap-2 p-2 border-t bg-gray-100">
              {["Skills", "Projects", "Resume", "Contact"].map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(btn)}
                  className="flex-1 bg-red-500 text-white text-xs py-1 rounded-lg hover:bg-red-600"
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 outline-none text-sm"
              />
              <button
                onClick={() => handleSend()}
                className="bg-red-600 text-white px-4 text-sm"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;
