<<<<<<< HEAD
"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Moon, Sun } from "lucide-react";

export default function Whatspp() {
  const adminNumber = "919045100349";

  /* RESET CHAT HISTORY EVERY TIME WEBSITE LOADS */
  if (typeof window !== "undefined") {
    localStorage.removeItem("wa_chat_history");
  }

  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() =>
    (typeof window !== "undefined" && localStorage.getItem("wa_theme")) || "dark"
  );

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(() => {
    if (typeof window === "undefined") return [];
    return [];
  });

  const [isTyping, setIsTyping] = useState(false);
  const messagesRef = useRef(null);

  const quickReplies = [
    "Hello, I want pricing",
    "Do you offer design services?",
    "Can I get a quote for a Creative/Ads/Video?",
    "May I know your Working hours?"
  ];

  useEffect(() => {
    localStorage.setItem("wa_theme", theme);
  }, [theme]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight + 200;
    }
  }, [messages]);

  useEffect(() => {
    // Always start fresh
    setMessages([
      {
        id: Date.now(),
        from: "agent",
        text: "Hi! 👋 I'm here to help. Tap a quick reply or type your message.",
        ts: new Date().toISOString(),
      },
    ]);
  }, []);

  const appendMessage = (from, text) => {
    const newMsg = {
      id: Date.now() + Math.floor(Math.random() * 999),
      from,
      text,
      ts: new Date().toISOString(),
    };
    setMessages((s) => [...s, newMsg]);
  };

  const handleSend = (openWhatsApp = true) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    appendMessage("user", trimmed);
    setMessage("");

    setIsTyping(true);
    setTimeout(() => {
      appendMessage("agent", "Thanks for your message! We'll respond shortly.");
      setIsTyping(false);
    }, 1500);

    if (openWhatsApp) {
      const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
        trimmed
      )}`;
      window.open(url, "_blank");
    }
  };

  const handleQuickReply = (text) => {
    appendMessage("user", text);
    setMessage("");

    setIsTyping(true);
    setTimeout(() => {
      appendMessage("agent", "Thanks for your message! We'll respond shortly.");
      setIsTyping(false);
    }, 1500);

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const dark = theme === "dark";

  return (
    <div className={dark ? "dark" : ""}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-2xl hover:scale-105 transition z-50"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {open && (
        <div
          className={`fixed bottom-6 right-6 w-80 max-w-full z-50 rounded-2xl overflow-hidden shadow-2xl transition
            ${
              dark
                ? "bg-black text-white border border-black/40"
                : "bg-white text-gray-900 border border-gray-200"
            }
          `}
          style={{ backdropFilter: "blur(6px)" }}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between px-4 py-3 ${
              dark ? "bg-gradient-to-r from-black to-neutral-900" : "bg-black"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange-400">
                <img
                  alt="Agent"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-sm font-semibold">Cypher</div>
                <div className="flex items-center gap-2 text-xs text-white/90 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="opacity-90">Online now</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={toggleTheme}
                className="p-1 rounded-md hover:bg-white/10 transition"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-md hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className={`p-3 h-56 overflow-y-auto space-y-3 ${
              dark ? "bg-black/60" : "bg-gray-50"
            }`}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] ${
                  m.from === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl break-words text-sm shadow-sm
                    ${
                      m.from === "user"
                        ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-br-md"
                        : dark
                        ? "bg-neutral-800 text-white rounded-bl-md border border-black/20"
                        : "bg-white text-gray-900 rounded-bl-md border border-gray-200"
                    }`}
                >
                  {m.text}
                </div>
                <div
                  className={`text-[10px] mt-1 ${
                    m.from === "user"
                      ? "text-right text-white/70"
                      : "text-left text-gray-500/80"
                  }`}
                >
                  {new Date(m.ts).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="max-w-[40%] mr-auto flex items-center gap-1">
                <div className="px-3 py-2 rounded-2xl bg-neutral-800 text-white flex gap-[3px]">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-0"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-400"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div
            className={`px-3 pt-2 pb-2 ${
              dark ? "bg-black/70" : "bg-white"
            }`}
          >
            <div className="flex gap-2 flex-wrap">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickReply(q)}
                  className={`text-xs px-3 py-1 rounded-full border hover:scale-[1.02] transition
                    ${
                      dark
                        ? "bg-white/5 border-white/10 text-white/90"
                        : "bg-white border-gray-200 text-gray-800"
                    }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className={`px-3 py-3 ${
              dark
                ? "bg-gradient-to-t from-neutral-900 via-black to-neutral-900"
                : "bg-white border-t border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(true);
                  }
                }}
                placeholder="Type a message..."
                className={`flex-1 px-3 py-2 rounded-2xl text-sm outline-none
                  ${
                    dark
                      ? "bg-white/5 text-white placeholder-white/60"
                      : "bg-gray-50 text-gray-900 placeholder-gray-500"
                  }
                `}
              />

              <button
                onClick={() => handleSend(true)}
                className="p-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white transition"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .dark { color-scheme: dark; }
        @keyframes rise { from { transform: translateY(20px) scale(.98); opacity:0 } to { transform: translateY(0) scale(1); opacity:1 } }
        .fixed.bottom-6.right-6 > div { animation: rise 260ms cubic-bezier(.22,.9,.3,1); }
        .animate-bounce { animation: bounce 0.6s infinite; }
        .delay-0 { animation-delay: 0s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0) } 40% { transform: scale(1) } }
      `}</style>
    </div>
  );
}
=======
"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Moon, Sun } from "lucide-react";

export default function Whatspp() {
  const adminNumber = "919045100349";

  /* RESET CHAT HISTORY EVERY TIME WEBSITE LOADS */
  if (typeof window !== "undefined") {
    localStorage.removeItem("wa_chat_history");
  }

  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() =>
    (typeof window !== "undefined" && localStorage.getItem("wa_theme")) || "dark"
  );

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(() => {
    if (typeof window === "undefined") return [];
    return [];
  });

  const [isTyping, setIsTyping] = useState(false);
  const messagesRef = useRef(null);

  const quickReplies = [
    "Hello, I want pricing",
    "Do you offer design services?",
    "Can I get a quote for a Creative/Ads/Video?",
    "May I know your Working hours?"
  ];

  useEffect(() => {
    localStorage.setItem("wa_theme", theme);
  }, [theme]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight + 200;
    }
  }, [messages]);

  useEffect(() => {
    // Always start fresh
    setMessages([
      {
        id: Date.now(),
        from: "agent",
        text: "Hi! 👋 I'm here to help. Tap a quick reply or type your message.",
        ts: new Date().toISOString(),
      },
    ]);
  }, []);

  const appendMessage = (from, text) => {
    const newMsg = {
      id: Date.now() + Math.floor(Math.random() * 999),
      from,
      text,
      ts: new Date().toISOString(),
    };
    setMessages((s) => [...s, newMsg]);
  };

  const handleSend = (openWhatsApp = true) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    appendMessage("user", trimmed);
    setMessage("");

    setIsTyping(true);
    setTimeout(() => {
      appendMessage("agent", "Thanks for your message! We'll respond shortly.");
      setIsTyping(false);
    }, 1500);

    if (openWhatsApp) {
      const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
        trimmed
      )}`;
      window.open(url, "_blank");
    }
  };

  const handleQuickReply = (text) => {
    appendMessage("user", text);
    setMessage("");

    setIsTyping(true);
    setTimeout(() => {
      appendMessage("agent", "Thanks for your message! We'll respond shortly.");
      setIsTyping(false);
    }, 1500);

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const dark = theme === "dark";

  return (
    <div className={dark ? "dark" : ""}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-2xl hover:scale-105 transition z-50"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {open && (
        <div
          className={`fixed bottom-6 right-6 w-80 max-w-full z-50 rounded-2xl overflow-hidden shadow-2xl transition
            ${
              dark
                ? "bg-black text-white border border-black/40"
                : "bg-white text-gray-900 border border-gray-200"
            }
          `}
          style={{ backdropFilter: "blur(6px)" }}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between px-4 py-3 ${
              dark ? "bg-gradient-to-r from-black to-neutral-900" : "bg-black"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange-400">
                <img
                  alt="Agent"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-sm font-semibold">Cypher</div>
                <div className="flex items-center gap-2 text-xs text-white/90 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="opacity-90">Online now</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={toggleTheme}
                className="p-1 rounded-md hover:bg-white/10 transition"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-md hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className={`p-3 h-56 overflow-y-auto space-y-3 ${
              dark ? "bg-black/60" : "bg-gray-50"
            }`}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] ${
                  m.from === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl break-words text-sm shadow-sm
                    ${
                      m.from === "user"
                        ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-br-md"
                        : dark
                        ? "bg-neutral-800 text-white rounded-bl-md border border-black/20"
                        : "bg-white text-gray-900 rounded-bl-md border border-gray-200"
                    }`}
                >
                  {m.text}
                </div>
                <div
                  className={`text-[10px] mt-1 ${
                    m.from === "user"
                      ? "text-right text-white/70"
                      : "text-left text-gray-500/80"
                  }`}
                >
                  {new Date(m.ts).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="max-w-[40%] mr-auto flex items-center gap-1">
                <div className="px-3 py-2 rounded-2xl bg-neutral-800 text-white flex gap-[3px]">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-0"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-400"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div
            className={`px-3 pt-2 pb-2 ${
              dark ? "bg-black/70" : "bg-white"
            }`}
          >
            <div className="flex gap-2 flex-wrap">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickReply(q)}
                  className={`text-xs px-3 py-1 rounded-full border hover:scale-[1.02] transition
                    ${
                      dark
                        ? "bg-white/5 border-white/10 text-white/90"
                        : "bg-white border-gray-200 text-gray-800"
                    }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className={`px-3 py-3 ${
              dark
                ? "bg-gradient-to-t from-neutral-900 via-black to-neutral-900"
                : "bg-white border-t border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(true);
                  }
                }}
                placeholder="Type a message..."
                className={`flex-1 px-3 py-2 rounded-2xl text-sm outline-none
                  ${
                    dark
                      ? "bg-white/5 text-white placeholder-white/60"
                      : "bg-gray-50 text-gray-900 placeholder-gray-500"
                  }
                `}
              />

              <button
                onClick={() => handleSend(true)}
                className="p-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white transition"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .dark { color-scheme: dark; }
        @keyframes rise { from { transform: translateY(20px) scale(.98); opacity:0 } to { transform: translateY(0) scale(1); opacity:1 } }
        .fixed.bottom-6.right-6 > div { animation: rise 260ms cubic-bezier(.22,.9,.3,1); }
        .animate-bounce { animation: bounce 0.6s infinite; }
        .delay-0 { animation-delay: 0s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0) } 40% { transform: scale(1) } }
      `}</style>
    </div>
  );
}
>>>>>>> 9a1f4c69a04e8ed813a0f35f875fa7e1c4b74a05
