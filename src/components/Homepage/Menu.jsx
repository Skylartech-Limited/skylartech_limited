import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PriceModels from "../../assets/Menu images/Pricemodel.png";
import TimeframeBudget from "../../assets/Menu images/Timeframe.png";
import ClientsControl from "../../assets/Menu images/Client.png";
import ProjectRequirements from "../../assets/Menu images/Project.png";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("price-models");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth <= 1024) {
    return (
      <div className="sm:text-center lg:flex lg:flex-wrap px-5 justify-center mb-12">
        <div className="inline-block">
        <h1 className="font-semibold text-2xl text-center">
            Our <span className="text-amber-500">Engagement Models</span>
          </h1>
          <h2 className="font-semibold text-lg text-center mt-10">
            <span className="text-amber-500">Fixed Price</span> Model
          </h2>
          <h2 className="font-semibold text-lg text-center mt-10">
            <span className="text-amber-500">Timeframe &</span> Budget
            Flexibility
          </h2>
          <h2 className="font-semibold text-lg text-center mt-10">
            <span className="text-amber-500">Client's Control</span> Over
            Project
          </h2>
          <h2 className="font-semibold text-lg text-center mt-10">
            <span className="text-amber-500">Project</span> Requirements
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="p-4 md:p-8 lg:p-16">
        <h1 className="font-semibold text-4xl text-center mb-20">
            Our <span className="text-amber-500">Engagement Models</span>
          </h1>
          <h2 className="font-semibold text-2xl text-center -mt-10 mb-10">
            <span className="text-amber-500">Fixed Price</span> Model
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Menu Tabs */}
            <div className="w-64 flex flex-col md:space-y-2">
              {/* Price Models Tab */}
              <div
                className={`${
                  activeTab === "price-models"
                    ? "bg-amber-500 text-white text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left "
                    : "bg-gray-200 text-black text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left"
                }`}
                onClick={() => handleTabClick("price-models")}
              >
                Price Models
                {/* {activeTab === "price-models" && (
                <i
                  class="fa-solid fa-caret-right fa-2xl"
                  style={{ color: "#ffc107" }}
                ></i>
              )} */}
              </div>

              {/* Timeframe & Budget Flexibility Tab */}
              <div
                className={`${
                  activeTab === "timeframe-budget-flexibility"
                    ? "bg-amber-500 text-white text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left"
                    : "bg-gray-200 text-black text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left"
                }`}
                onClick={() => handleTabClick("timeframe-budget-flexibility")}
              >
                Timeframe & Budget Flexibility
                {/* {activeTab === "timeframe-budget-flexibility" && (
                <i
                  class="fa-solid fa-caret-right fa-2xl"
                  style={{ color: "#ffc107" }}
                ></i>
              )} */}
              </div>

              {/* Client's Control Over Project Tab */}
              <div
                className={`${
                  activeTab === "clients-control-over-project"
                    ? "bg-amber-500 text-white text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left"
                    : "bg-gray-200 text-black text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left"
                }`}
                onClick={() => handleTabClick("clients-control-over-project")}
              >
                Client's Control Over Project
                {/* {activeTab === "clients-control-over-project" && (
                <i
                  class="fa-solid fa-caret-right fa-2xl"
                  style={{ color: "#ffc107" }}
                ></i>
              )} */}
              </div>

              {/* Project Requirements Tab */}
              <div
                className={`${
                  activeTab === "project-requirements"
                    ? "bg-amber-500 text-white text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left"
                    : "bg-gray-200 text-black text-sm font-medium tracking-wide py-4 px-6 rounded cursor-pointer text-left"
                }`}
                onClick={() => handleTabClick("project-requirements")}
              >
                Project Requirements
                {/* {activeTab === "project-requirements" && (
                <i
                  class="fa-solid fa-caret-right fa-2xl"
                  style={{ color: "#ffc107" }}
                ></i>
              )} */}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-grow">
              {/* Add h-96 for fixed height */}
              {activeTab === "price-models" && (
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={PriceModels}
                    alt="Price Models"
                    className="mx-auto rounded-lg max-w-full max-h-full"
                    style={{ height: "350px", width: "720px" }}
                  />
                </motion.div>
              )}
              <motion.div className="flex flex-row">
                {/* First Timeframe Tab */}
                {activeTab === "timeframe-budget-flexibility" && (
                  <motion.div
                    className="w-96 p-8 bg-gray-100 rounded-lg text-center flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={TimeframeBudget}
                      alt="Timeframe & Budget Flexibility"
                      className="mx-auto rounded-lg mt-10"
                    />
                    <p className="mt-8 text-lg font-normal tracking-wide">
                      Fixed Price Model is
                      <br /> the right idea when you:
                    </p>
                  </motion.div>
                )}
                {/* Second Timeframe Tab */}
                {activeTab === "timeframe-budget-flexibility" && (
                  <motion.div
                    className="ml-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 bg-gray-100 rounded-lg text-left flex-1 tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Have clearly defined scope of work
                    </div>
                    <div className=" mt-10 p-8 bg-gray-100 rounded-lg text-left flex-1 tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Have fixed budget
                    </div>
                    <div className=" mt-10 p-8 bg-gray-100 rounded-lg text-left flex-1 tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Need to have a particular service <br />
                      provided
                    </div>
                  </motion.div>
                )}
              </motion.div>
              <div className="flex flex-row">
                {/* First Client Tab */}
                {activeTab === "clients-control-over-project" && (
                  <motion.div
                    className="w-96 p-8 bg-gray-100 rounded-lg text-center flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={ClientsControl}
                      alt="Client's Control Over Project"
                      className="mx-auto rounded-lg mt-16"
                    />
                    <p className="mt-8 text-lg font-normal tracking-wide">
                      Need to have
                      <br /> a particular service provided:
                    </p>
                  </motion.div>
                )}
                {/* Second Client Tab */}
                {activeTab === "clients-control-over-project" && (
                  <motion.div
                    className="ml-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-md p-8 bg-gray-100 rounded-lg text-left flex-1 tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Want to have full controll over development
                    </div>
                    <div className=" max-w-md mt-10 p-8 bg-gray-100 rounded-lg text-left flex-1 tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Expect to be able to alter the project
                      <br /> requirements along the way
                    </div>
                    <div className=" max-w-md mt-10 p-8 bg-gray-100 rounded-lg text-left flex-1 tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Need a vendor to provide not only <br /> development but
                      also business consultancy <br />
                      services
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="flex flex-row">
                {/* First Project Requirements Tab */}
                {activeTab === "project-requirements" && (
                  <motion.div
                    className="w-96 p-8 bg-gray-100 rounded-lg text-center flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={ProjectRequirements}
                      alt="Project Requirements"
                      className="mx-auto rounded-lg mt-10"
                    />
                    <p className="mt-8 text-lg font-normal tracking-wide">
                      Dedicated Team Model is <br />
                      the right idea when you:
                    </p>
                  </motion.div>
                )}

                {/* Second Project Requirements Tab */}
                {activeTab === "project-requirements" && (
                  <motion.div
                    className="ml-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-md p-8 bg-gray-100 rounded-lg text-left flex-1 text-md font-normal tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Want your outsourcing vendor to manage <br />
                      the development process
                    </div>
                    <div className="max-w-md mt-10 p-8 bg-gray-100 rounded-lg text-left flex-1 text-md font-normal tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Know exactly whats tasks needs to be
                      <br /> completed
                    </div>
                    <div className=" max-w-md mt-10 p-8 bg-gray-100 rounded-lg text-left flex-1 text-md font-normal tracking-wide">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#fabb00" }}
                      ></i>{" "}
                      Wish to speed up time-to-market
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
