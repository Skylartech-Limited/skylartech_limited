import { useState } from "react";
import Logo from "../../assets/Homepage images/PMI.png";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  const openWhatsAppMobile = () => {
    window.location.href = "https://wa.me/254718257293";
  };

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Welcome to Skylartech. Our support team is ready to assist you. How can we help?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;

    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage, time: now },
    ]);

    setInput("");

    const url = `https://wa.me/254718257293?text=${encodeURIComponent(
      userMessage,
    )}`;

    if (window.innerWidth < 768) {
      window.location.href = url;
      return;
    }

    setTimeout(() => {
      window.open(url, "_blank");
    }, 200);
  };

  return (
    <div
      className="
        fixed z-[999]
        bottom-6 right-4 sm:right-6
        flex flex-col items-end gap-3
        max-w-[95vw]
      "
    >
      {/* ================= PREMIUM CHAT WINDOW ================= */}
      {open && (
        <div
          className="
      w-[90vw] sm:w-80 md:w-[340px]
      h-[60vh] sm:h-[420px]
      rounded-2xl overflow-hidden
      shadow-2xl border border-white/20
      backdrop-blur-xl bg-gradient-to-br from-[#0f1115]/95 via-slate-950/95 to-indigo-950/90
      flex flex-col
      relative
    "
        >
          {/* PREMIUM ANIMATED BACKGROUND GLOW */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/15 blur-3xl rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
          
          {/* HEADER */}
          <div className="relative bg-gradient-to-r from-[#0B8F5A] via-[#25D366] to-[#0B8F5A] text-white p-3 flex items-center justify-between shadow-lg">
            {/* Premium shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            <div className="relative flex items-center gap-3 z-10">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Skylartech"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white/40 shadow-lg"
                />
                {/* Online indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse" />
              </div>

              <div className="leading-tight">
                <p className="font-semibold text-sm flex items-center gap-1">
                  Skylartech Support
                  <span className="text-xs">✓</span>
                </p>
                <p className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Online • Replies in under 2 min
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/95 text-[#0f1115] hover:bg-white transition-all duration-300 hover:rotate-90 shadow-lg"
            >
              ✕
            </button>
          </div>

          {/* PREMIUM CHAT AREA */}
          <div className="relative flex-1 p-3 overflow-y-auto space-y-3 bg-gradient-to-b from-[#0b0d10] to-[#05060A]">
            {/* Premium pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`relative flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`
  max-w-[85%] px-4 py-3 text-[15px] text-left
  rounded-2xl break-words
  transition-all duration-300 hover:scale-[1.02]
  ${
    msg.from === "user"
      ? "bg-gradient-to-br from-[#25D366] to-[#20B358] text-black shadow-lg shadow-green-500/20"
      : "bg-gradient-to-br from-[#1a1f27] to-[#151a22] text-gray-100 border border-white/10 shadow-lg"
  }
`}
                >
                  <p className="text-left w-full leading-relaxed">{msg.text}</p>
                  <p className={`text-[9px] mt-1 text-right ${msg.from === "user" ? "text-black/60" : "text-white/50"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* PREMIUM INPUT */}
          <div className="relative p-2 bg-gradient-to-r from-[#0f1115] via-[#151a22] to-[#0f1115] border-t border-white/10 flex items-center gap-2">
            {/* Premium glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />
            
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Type your message..."
              className="relative z-10 flex-1 px-4 py-2.5 rounded-full bg-[#151a22] text-white text-sm outline-none border border-white/5 focus:border-[#25D366]/50 transition-all duration-300 placeholder:text-gray-500"
            />

            <button
              onClick={sendMessage}
              className="relative z-10 bg-gradient-to-r from-[#25D366] to-[#20B358] text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* ================= PREMIUM FLOATING BUTTON (RESPONSIVE FIXED) ================= */}
      <button
        onClick={() => {
          if (window.innerWidth < 768) {
            openWhatsAppMobile();
          } else {
            setOpen(!open);
          }
        }}
        className="
          flex items-center gap-3 px-4 py-3
          rounded-full
          bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl
          border border-white/30
          shadow-2xl shadow-indigo-500/20

          transition-all duration-300
          hover:scale-[1.08] hover:-translate-y-1.5
          hover:shadow-2xl hover:shadow-green-500/40

          relative overflow-hidden
          group
        "
      >
        {/* Premium animated gradient background */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#25D366]/40 via-[#0B8F5A]/30 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></span>

        {/* Premium shimmer effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

        {/* Enhanced pulse */}
        <span className="absolute w-16 h-16 rounded-full bg-[#25D366]/40 animate-ping"></span>
        <span className="absolute w-16 h-16 rounded-full bg-indigo-500/20 animate-ping" style={{ animationDelay: '0.5s' }}></span>

        {/* Premium icon with glow */}
        <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#20B358] flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:shadow-green-500/70 transition-all duration-300">
          <i className="fa-brands fa-whatsapp text-white text-xl" />
          {/* Online indicator */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse" />
        </div>

        {/* PREMIUM TEXT hidden on mobile */}
        <div className="relative z-10 hidden sm:flex flex-col text-left">
          <span className="text-white text-sm font-bold tracking-wide">Chat with us</span>
          <span className="text-white/70 text-[11px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Online
          </span>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
