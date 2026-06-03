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
      {/* ================= CHAT WINDOW ================= */}
      {open && (
        <div
          className="
      w-[90vw] sm:w-80 md:w-[340px]
      h-[60vh] sm:h-[420px]
      rounded-2xl overflow-hidden
      shadow-2xl border border-white/20
      backdrop-blur-xl bg-[#0f1115]/90
      flex flex-col
    "
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#0B8F5A] to-[#25D366] text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Skylartech"
                className="w-9 h-9 rounded-full object-cover border border-white/30"
              />

              <div className="leading-tight">
                <p className="font-semibold text-sm">Skylartech Support</p>
                <p className="text-[11px] text-white/70">
                  Replies in under 2 minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-[#0f1115]"
            >
              ✕
            </button>
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-[#0b0d10]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
              max-w-[80%] px-3 py-2 text-sm
              rounded-xl break-words
              ${
                msg.from === "user"
                  ? "bg-[#25D366] text-black"
                  : "bg-[#1a1f27] text-gray-100 border border-white/5"
              }
            `}
                >
                <p className="text-left w-full leading-">
  {msg.text}
</p>
                  <p className="text-[9px] mt-1 text-white text-right">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-2 bg-[#0f1115] border-t border-white/10 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Message..."
              className="flex-1 px-3 py-2 rounded-full bg-[#151a22] text-white text-sm outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-[#25D366] text-black px-4 py-2 rounded-full text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* ================= FLOATING BUTTON (RESPONSIVE FIXED) ================= */}
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
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-lg

          transition-all duration-300
          hover:scale-[1.05] hover:-translate-y-1

          relative overflow-hidden
          group
        "
      >
        {/* glow */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#25D366]/30 to-[#0B8F5A]/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></span>

        {/* pulse */}
        <span className="absolute w-16 h-16 rounded-full bg-[#25D366]/40 animate-ping"></span>

        {/* icon only (always visible) */}
        <div className="relative z-10 w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
          <i className="fa-brands fa-whatsapp text-white text-xl" />
        </div>

        {/* TEXT hidden on mobile */}
        <div className="relative z-10 hidden sm:flex flex-col text-left">
          <span className="text-white text-sm font-semibold">Chat with us</span>
          <span className="text-white/60 text-[11px]">Powered by WhatsApp</span>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
