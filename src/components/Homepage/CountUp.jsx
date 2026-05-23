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
    <div className="w-full">
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((item, i) => (
              <div key={i} className="px-4 py-6 sm:py-5 text-center space-y-2">
                {/* NUMBER (SMALLER + CLEANER) */}
                <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {counterOn && (
                    <CountUp start={0} end={item.value} duration={2} />
                  )}
                  <span className="text-purple-300">{item.suffix}</span>
                </h1>

                {/* LABEL */}
                <p className="text-white/60 text-[11px] sm:text-xs leading-5 max-w-[180px] mx-auto">
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
