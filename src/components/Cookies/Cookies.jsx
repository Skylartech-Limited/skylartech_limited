import { useEffect, useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 animate-fadeIn">
      
      {/* PREMIUM BACKDROP WITH BLUR */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      {/* PREMIUM CARD */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-purple-500/20 px-6 py-6 border border-white/10 overflow-hidden group">
        
        {/* PREMIUM ANIMATED GLOWS */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/15 blur-3xl rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
        
        {/* PREMIUM SHIMMER EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
        
        {/* PREMIUM PATTERN OVERLAY */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        {/* PREMIUM ICON */}
        <div className="relative z-10 flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 flex items-center justify-center">
            <span className="text-2xl">🍪</span>
          </div>
        </div>
        
        {/* Title */}
        <h2 className="relative z-10 text-lg font-bold text-center bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          Cookie Usage
        </h2>

        {/* Text */}
        <p className="relative z-10 text-sm text-white/70 mt-3 leading-relaxed text-center">
          We use cookies to ensure the website works properly and to improve your experience.
        </p>

        {/* PREMIUM DIVIDER */}
        <div className="relative z-10 flex items-center justify-center gap-2 my-5">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400/50" />
          <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400/50" />
        </div>

        {/* PREMIUM BUTTONS */}
        <div className="relative z-10 flex gap-3">
          
          <button
            onClick={reject}
            className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-white/80
                       bg-white/10 hover:bg-white/15 border border-white/20
                       transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Reject
          </button>

          <button
            onClick={accept}
            className="flex-1 py-2.5 rounded-lg text-sm font-bold text-white
                       bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500
                       transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            Accept
          </button>
        </div>

        {/* Subtext */}
        <p className="relative z-10 text-[11px] text-white/40 mt-4 text-center">
          You can change this anytime in your browser settings.
        </p>
      </div>
    </div>
  );
}