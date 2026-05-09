import React from "react";
import Project from "../../assets/Footer Hero/Frame 4.png";
import Clock from "../../assets/Footer Hero/Frame 3.png";
import Team from "../../assets/Footer Hero/Frame 2.png";
import { Link } from "react-router-dom";

const FooterHero = () => {
  return (
    <>
      <div className="bg-amber-50 py-20">
        <div className="mx-auto px-4 sm:px-8 md:px-16">
          {/* HEADING */}
          <h1 className="font-bold text-4xl lg:text-5xl pb-4 text-center text-black">
            Hire for Excellence
          </h1>

          {/* BRIDGE STATEMENT */}
          <p className="text-center text-gray-700 text-lg leading-8 max-w-4xl mx-auto pb-6">
            Beyond professional training, we support organizations with
            dedicated technology and software engineering solutions that enable
            scalable delivery, operational efficiency, and digital
            transformation.
          </p>

          {/* SUBHEADING */}
          <h2 className="font-medium text-xl lg:text-2xl text-center text-gray-700 leading-8">
            Choose Your{" "}
            <span className="text-amber-500 font-semibold">
              Engagement Model
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 mt-14">
          
          {/* CARD 1 */}
          <div className="bg-white shadow-xl rounded-3xl py-16 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src={Project}
              className="pb-6 mx-auto transition ease-in-out delay-75 hover:scale-90 duration-300"
              alt="Project Based Hiring"
            />

            <h4 className="font-semibold text-xl text-gray-800">
              Project-Based Engagement
            </h4>

            <p className="text-gray-600 mt-4 leading-7">
              End-to-end delivery support for defined projects with scalable
              execution capability.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-xl rounded-3xl py-16 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src={Clock}
              className="pb-6 mx-auto transition ease-in-out delay-75 hover:scale-90 duration-300"
              alt="Hourly Developers"
            />

            <h4 className="font-semibold text-xl text-gray-800">
              Flexible Hourly Resources
            </h4>

            <p className="text-gray-600 mt-4 leading-7">
              Access highly skilled developers and technical specialists on a
              flexible hourly basis.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white shadow-xl rounded-3xl py-16 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src={Team}
              className="pb-6 mx-auto transition ease-in-out delay-75 hover:scale-90 duration-300"
              alt="Dedicated Teams"
            />

            <h4 className="font-semibold text-xl text-gray-800">
              Dedicated Engineering Teams
            </h4>

            <p className="text-gray-600 mt-4 leading-7">
              Build high-performing remote engineering teams aligned to your
              organizational goals.
            </p>
          </div>
        </div>

        {/* TRAIN. CERTIFY. LEAD SECTION */}
        <div className="flex flex-col items-center justify-center text-center mt-20 px-6">
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Train. Certify. Lead.
          </h3>

          <p className="text-gray-700 mt-6 text-lg leading-8 max-w-4xl">
            Partner with Skylartech Limited to build certified professionals,
            high-performing teams, and scalable technology solutions.
          </p>

          <div className="mt-8">
            <Link to="/contact-us">
              <button className="bg-amber-500 hover:bg-amber-600 transition-all duration-300 text-white px-8 py-3 rounded-2xl text-lg font-medium shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHero;