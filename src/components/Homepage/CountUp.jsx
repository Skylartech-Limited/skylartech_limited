import React, { useState } from "react";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountUp = () => {
  const [counterOn, setCounterOn] = useState(0);

  return (
    <>
 <div className="py-16 flex justify-center">
  <div className="w-full max-w-6xl mx-4 rounded-3xl 
    bg-white/5 backdrop-blur-xl border border-white/10 
    shadow-2xl relative overflow-hidden">

    {/* glow */}
    <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-400/20 blur-3xl rounded-full" />

    <ScrollTrigger
      onEnter={() => setCounterOn(1)}
      onExit={() => setCounterOn(0)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 text-center py-14">
        
        {[
          { value: 500, label: "Professionals Trained" },
          { value: 99, suffix: "%", label: "Certification Success Rate" },
          { value: 50, suffix: "+", label: "Industries Served" },
        ].map((item, i) => (
          <div key={i} className="px-6">
            <h1 className="text-4xl font-bold text-white">
              {counterOn && (
                <Countup start={0} end={item.value} duration={2} />
              )}
              {item.suffix}
            </h1>
            <p className="text-white/60 mt-2 text-sm uppercase tracking-wider">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </ScrollTrigger>
  </div>
</div>
    </>
  );
};

export default CountUp;
