import React, { useState } from "react";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountUp = () => {
  const [counterOn, setCounterOn] = useState(0);

  return (
    <>
      <div className="hidden xl:block lg:h-[315px] lg:w-[1138px] bg-gradient-to-br from-blue-500 to-sky-500 mx-4 md:mx-8 lg:mx-auto my-8 lg:items-center rounded-md p-4">
        <ScrollTrigger
          onEnter={() => setCounterOn(1)}
          onExit={() => setCounterOn(0)}
        >
          <div className="mt-16 flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:divide-x">
            <div className="lg:px-8 mb-8 lg:mb-0 text-xl text-white text-center">
              <h1 className="text-5xl font-semibold mb-10">
                {counterOn && (
                  <Countup start={0} end={124} duration={2} delay={0} />
                )}
              </h1>
              <h1 className="font-normal">
                COMPLETE
                <br />
                PROJECTS
              </h1>
            </div>
            <div className="lg:px-8 mb-8 lg:mb-0 text-xl text-white text-center">
              <h1 className="text-5xl font-semibold mb-10">
                {counterOn && (
                  <Countup start={0} end={99} duration={2} delay={0} />
                )}
                %
              </h1>
              <h1 className="font-normal">
                SATISFIED
                <br />
                CLIENTS
              </h1>
            </div>
            <div className="lg:px-8 text-xl text-white text-center">
              <h1 className="text-5xl font-semibold mb-10">
                {counterOn && (
                  <Countup start={0} end={325} duration={2} delay={0} />
                )}
              </h1>
              <h1 className="font-normal">
                SUCCESSS
                <br />
                CAMPAIGN
              </h1>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default CountUp;
