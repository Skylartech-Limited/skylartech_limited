import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountupSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Professionals trained across East Africa",
    },
    {
      value: 5,
      suffix: "+",
      label: "Key sectors including banking, telecom, government & NGOs",
    },
    {
      value: 95,
      suffix: "%",
      label: "First-attempt certification success rate",
    },
  ];

  return (
    <div className="w-full relative">
      {/* PREMIUM BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-violet-500/10 blur-3xl rounded-2xl" />
      
      <div className="relative rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 backdrop-blur-xl shadow-2xl shadow-purple-500/10 overflow-hidden group">
        {/* PREMIUM ANIMATED GLOWS */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
        
        {/* PREMIUM SHIMMER EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
        
        {/* PREMIUM PATTERN OVERLAY */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map((item, i) => (
              <div key={i} className="px-4 py-6 sm:py-5 text-center space-y-2 transition-all duration-500 hover:bg-white/5 group/item">
                {/* PREMIUM NUMBER */}
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent tracking-tight drop-shadow-lg group-hover/item:scale-105 transition-transform duration-300">
                  {counterOn && (
                    <CountUp start={0} end={item.value} duration={2.5} />
                  )}
                  <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent font-extrabold">{item.suffix}</span>
                </h1>

                {/* PREMIUM LABEL */}
                <p className="text-white/70 text-[11px] sm:text-xs leading-5 max-w-[180px] mx-auto group-hover/item:text-white/90 transition-colors duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default CountupSection;
