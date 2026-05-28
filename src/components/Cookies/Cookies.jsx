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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      
      {/* Soft dark overlay (Apple-style dim) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Clean Mac-style card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl px-6 py-5">
        
        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900">
          Cookie Usage
        </h2>

        {/* Text */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          We use cookies to ensure the website works properly and to improve your experience.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          
          <button
            onClick={reject}
            className="flex-1 py-2 rounded-lg text-sm font-medium text-gray-700
                       bg-gray-100 hover:bg-gray-200 transition"
          >
            Reject
          </button>

          <button
            onClick={accept}
            className="flex-1 py-2 rounded-lg text-sm font-medium text-white
                       bg-black hover:bg-gray-900 transition"
          >
            Accept
          </button>
        </div>

        {/* Subtext */}
        <p className="text-[11px] text-gray-400 mt-4 text-center">
          You can change this anytime in your browser settings.
        </p>
      </div>
    </div>
  );
}