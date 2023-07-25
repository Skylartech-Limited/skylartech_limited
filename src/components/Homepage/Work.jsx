import React from "react";
import Amazon from "../../assets/Technology slider/amazon.png";
import Comp1 from "../../assets/Homepage images/compimg.png";

const Work = () => {
  return (
    <div className="container">
      <div className="sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
        <h1 className="font-semibold text-4xl text-center mt-10">
          Our <span className="text-amber-500">Work</span>
        </h1>
      </div>
      <div className="lg:h-[600px] lg:w-[1150px] bg-gradient-to-br from-blue-600 to-cyan-500 mx-4 md:mx-8 lg:mx-auto my-8 lg:flex lg:items-center">
        <div className="text-white text-center md:text-left md:pl-[3rem] lg:pt-[4rem] lg:w-1/2">
          <div className="pb-6">
            <h1 className="text-xl font-medium">The Temp Hub</h1>
          </div>
          <div className="pb-6">
            <h1 className="font-medium text-4xl max-w-lg leading-normal">
              A web application that helps users find all kinds of daily-use services.
            </h1>
          </div>
          <div className="pb-5">
            <p className="max-w-lg text-xl">
              To add value to service providers by creating a platform that allows for a safe and secure transaction.
            </p>
          </div>
          <div>
            <div className="w-[435px] h-[170px] card shadow-xl bg-gradient-to-r from-slate-400 to-slate-300 rounded-lg">
              <p className="text-lg max-w-sm pt-4 pl-[2rem]">
                I have high hopes to take this project forward and looking to develop phase 2 with{" "}
                <span className="font-semibold text-black">Skylartech</span>
                <div className="flex items-center">
                  <img src={Amazon} className="w-10 h-14 pt-3" alt="Amazon Logo" />
                  <p className="pt-4 md:pt-0 md:pl-3 leading-5">
                    <span className="font-semibold">Lana James</span> <br />
                    CEO
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center py-8">
          <img src={Comp1} alt="Company Image" className="max-h-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default Work;
