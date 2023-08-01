import React, { useState } from "react";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Corporate from "../../assets/Homepage images/corporate.jpg";
import Quotations from "../../assets/Homepage images/Quotationmark.png";

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
      <div className="flex justify-center -mt-16 mb-16">
        <div className="flex flex-col sm:flex-row">
          <div className="text-center p-4 mx-6 bg-gray-500 rounded-xl w-[349px] relative overflow-hidden">
            <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
              <img
                src={Quotations}
                alt="Quotations"
                className="w-[32px] h-[32px] mt-16 ml-5"
              />
            </div>
            <div className="flex flex-col items-center relative">
              <img
                src={Corporate}
                alt="person"
                className="mb-4 rounded-full w-[70px] h-[70px]"
              />
              <h1 className="text-xl font-bold">Emma M</h1>
              <span className="text-sm">Head of Marketing</span>
              <ul className="flex mt-6 mb-5">
                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>
              </ul>
              <p>
                Their client focus is very evident with constant communication,
                highly professional and considerate customer service. They have
                high standards for everything, it shows in their work.
              </p>
            </div>
          </div>

          <div className="text-center p-4 mx-6 bg-gray-500 rounded-xl w-[349px] relative overflow-hidden">
            <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
              <img
                src={Quotations}
                alt="Quotations"
                className="w-[32px] h-[32px] mt-16 ml-5"
              />
            </div>
            <div className="flex flex-col items-center relative">
              <img
                src={Corporate}
                alt="person"
                className="mb-4 rounded-full w-[70px] h-[70px]"
              />
              <h1 className="text-xl font-bold">Emma M</h1>
              <span className="text-sm">Head of Marketing</span>
              <ul className="flex mt-6 mb-5">
                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>
              </ul>
              <p>
                Their client focus is very evident with constant communication,
                highly professional and considerate customer service. They have
                high standards for everything, it shows in their work.
              </p>
            </div>
          </div>
          <div className="text-center p-4 mx-6 bg-gray-500 rounded-xl w-[349px] relative overflow-hidden">
            <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
              <img
                src={Quotations}
                alt="Quotations"
                className="w-[32px] h-[32px] mt-16 ml-5"
              />
            </div>
            <div className="flex flex-col items-center relative">
              <img
                src={Corporate}
                alt="person"
                className="mb-4 rounded-full w-[70px] h-[70px]"
              />
              <h1 className="text-xl font-bold">Emma M</h1>
              <span className="text-sm">Head of Marketing</span>
              <ul className="flex mt-6 mb-5">
                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>

                <li>
                  <i className="fa-solid fa-star fa-xs text-yellow-500 mr-2"></i>
                </li>
              </ul>
              <p>
                Their client focus is very evident with constant communication,
                highly professional and considerate customer service. They have
                high standards for everything, it shows in their work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountUp;
