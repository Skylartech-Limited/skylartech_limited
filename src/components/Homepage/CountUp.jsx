import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountupSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="py-16 flex justify-center">

      <div className="w-full max-w-6xl mx-4 rounded-3xl bg-white/5 border border-white/10 shadow-2xl">

        <ScrollTrigger onEnter={() => setCounterOn(true)}>

          <div className="grid grid-cols-1 md:grid-cols-3 text-center py-14">

            {[
              { value: 500, label: "Professionals Trained" },
              { value: 99, suffix: "%", label: "Certification Success Rate" },
              { value: 50, suffix: "+", label: "Industries Served" },
            ].map((item, i) => (
              <div key={i} className="px-6">

                <h1 className="text-4xl font-bold text-white">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2}
                    />
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
  );
};

export default CountupSection;