import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

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

  return (
    <AnimatePresence>
      {visible && (
        // No full-screen backdrop, no inset-0, and z-40 — sits well below
        // the newsletter's z-[9999] modal, so it can never block or fight
        // with it for the center of the screen or for click focus.
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pointer-events-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-4xl bg-gradient-to-r from-[#0a0f1e] via-[#0f1a2e] to-[#0a0f1e] rounded-2xl shadow-2xl shadow-purple-500/15 border border-white/10 px-5 sm:px-6 py-4 overflow-hidden pointer-events-auto">
            {/* Glow accents, consistent with Newsletter's language */}
            <div className="absolute -top-10 right-0 w-32 h-32 bg-purple-500/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 left-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Icon + text */}
              <div className="flex items-start sm:items-center gap-3 flex-1">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/25 flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Cookie Usage
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed mt-0.5">
                    We use cookies to ensure the website works properly and to improve your experience.{" "}
                    <span className="text-white/35">You can change this anytime in your browser settings.</span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 shrink-0 self-end sm:self-auto">
                <button
                  onClick={reject}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-white/80
                             bg-white/5 hover:bg-white/10 border border-white/10
                             transition-all duration-300"
                >
                  Reject
                </button>
                <button
                  onClick={accept}
                  className="px-4 py-2 rounded-lg text-sm font-bold text-white
                             bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500
                             transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Accept
                </button>
                <button
                  onClick={reject}
                  aria-label="Dismiss"
                  className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}