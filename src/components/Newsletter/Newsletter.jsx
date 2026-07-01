import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const signedUp = localStorage.getItem("newsletter_signed_up");
    const dismissedBefore = localStorage.getItem("newsletter_dismissed");
    if (!signedUp && !dismissedBefore) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  if (!email.trim()) {
    setError("Please enter your email address");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address");
    return;
  }

  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (
        data.title === "Member Exists" ||
        data.detail?.includes("already")
      ) {
        setError("You're already subscribed!");
        return;
      }

      throw new Error(data.detail || "Subscription failed");
    }

    localStorage.setItem("newsletter_signed_up", "true");
    setSubmitted(true);
  } catch (err) {
    console.error(err);
    setError("Unable to subscribe. Please try again.");
  }
};

  const handleDismiss = () => {
    localStorage.setItem("newsletter_dismissed", "true");
    setDismissed(true);
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Card */}
          <motion.div
            className="relative w-full max-w-lg bg-gradient-to-br from-[#0a0f1e] via-[#0f1a2e] to-[#0a0f1e] rounded-3xl shadow-2xl shadow-cyan-500/15 border border-white/10 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {/* Glow Orbs */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full animate-pulse pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-sky-500/15 blur-3xl rounded-full animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            {/* Close Button */}
            <button onClick={handleClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white/80 transition-all duration-300 hover:scale-105" aria-label="Close">
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="relative z-10">
              {!submitted ? (
                <>
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-500/20 border border-cyan-400/25 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                      <Mail className="w-7 h-7 text-cyan-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white leading-tight">
                    Stay Ahead with
                    <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400">
                      Expert Insights
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-white/60 text-sm sm:text-base mt-4 leading-relaxed text-center max-w-sm mx-auto">
                    Get the latest on project management best practices, industry trends, and exclusive resources delivered to your inbox.
                  </p>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-2 my-6">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/50" />
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/50" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300"
                      />
                    </div>

                    {error && <p className="text-red-400 text-xs text-left pl-1">{error}</p>}

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-sky-500 text-black hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Subscribe to Newsletter
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>

                  {/* No thanks link */}
                  <div className="mt-5 text-center">
                    <button
                      onClick={handleDismiss}
                      className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200 underline underline-offset-2 decoration-white/10"
                    >
                      No thanks, I'll pass
                    </button>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-4">
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/25 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-7 h-7 text-emerald-300" />
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    You're In! 🎉
                  </h2>

                  <p className="text-white/60 text-sm sm:text-base mt-4 leading-relaxed max-w-xs mx-auto">
                    Thanks for subscribing! We'll send you the latest insights, tips, and resources to help you excel in project management.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-8 px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-sky-500 text-black hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Got it!
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
