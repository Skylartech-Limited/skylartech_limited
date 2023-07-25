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
      <div
        className="h-[600px] w-[1150px] bg-gradient-to-br from-blue-600 to-cyan-500"
        style={{ margin: "50px 40px 50px 95px" }}
      >
        <div className="text-white text-left pl-[3rem] pt-[4rem]">
          <div className="pb-6">
            <h1 className="text-xl font-medium">The Temp Hub</h1>
          </div>
          <div className="pb-6">
            <h1 className="font-medium text-4xl max-w-lg leading-normal">
              A web application that helps user to find all kinds of daily-use
              services.
            </h1>
          </div>
          <div className="pb-5">
            <p className="max-w-lg text-xl">
              To add value to service providers by creating a platform that
              allows for a safe and secure transaction.
            </p>
          </div>
          <div>
            <div className="w-[435px] h-[170px] card shadow-xl bg-gradient-to-r from-slate-400 to-slate-300 rounded-lg">
              <p className="text-lg max-w-sm pt-4 pl-[2rem]">
                I have high hopes to take this project forward and looking to
                develop phase 2 with{" "}
                <span className="font-semibold text-black">Skylartech</span>
                <div className="flex">
                  <img src={Amazon} className="w-9 h-12 pt-4 " />
                  <p className="pt-4 pl-3 leading-5">
                    <span className="font-semibold">Lana James</span> <br />
                    CEO
                  </p>
                </div>
              </p>
            </div>
          </div>
          <div>
            <img src={Comp1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
