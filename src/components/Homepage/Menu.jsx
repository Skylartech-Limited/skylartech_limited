import React, { useState } from "react";
import PriceModels from "../../assets/Menu images/Pricemodel.png";
import TimeframeBudget from "../../assets/Menu images/Timeframe.png";
import ClientsControl from "../../assets/Menu images/Client.png";
import ProjectRequirements from "../../assets/Menu images/Project.png";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("price-models");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 md:p-8 lg:p-16">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Menu Tabs */}
          <div className="flex flex-col md:space-y-2 md:w-64">
            {/* Price Models Tab */}
            <div className="flex items-center">
              <button
                className={`${
                  activeTab === "price-models"
                    ? "bg-amber-500 text-white text-sm py-3 px-6 rounded-lg w-full"
                    : "bg-gray-200 text-black text-sm py-3 px-6 rounded-lg w-full"
                }`}
                onClick={() => handleTabClick("price-models")}
              >
                Price Models
              </button>
              {activeTab === "price-models" && (
                <i
                  className="fa-solid fa-caret-right"
                  style={{
                    color: "#ffbf00",
                    marginLeft: "-1px",
                    fontSize: "1.5rem",
                  }}
                ></i>
              )}
            </div>

            {/* Timeframe & Budget Flexibility Tab */}
            <div className="flex items-center">
              <button
                className={`${
                  activeTab === "timeframe-budget-flexibility"
                    ? "bg-amber-500 text-white text-sm py-3 px-6 rounded-lg w-full"
                    : "bg-gray-200 text-black text-sm py-3 px-6 rounded-lg w-full"
                }`}
                onClick={() => handleTabClick("timeframe-budget-flexibility")}
              >
                Timeframe & Budget Flexibility
              </button>
              {activeTab === "timeframe-budget-flexibility" && (
                <i
                  className="fa-solid fa-caret-right"
                  style={{
                    color: "#ffbf00",
                    marginLeft: "-1px",
                    fontSize: "1.5rem",
                  }}
                ></i>
              )}
            </div>

            {/* Client's Control Over Project Tab */}
            <div className="flex items-center">
              <button
                className={`${
                  activeTab === "clients-control-over-project"
                    ? "bg-amber-500 text-white text-sm py-3 px-6 rounded-lg w-full"
                    : "bg-gray-200 text-black text-sm py-3 px-6 rounded-lg w-full"
                }`}
                onClick={() => handleTabClick("clients-control-over-project")}
              >
                Client's Control Over Project
              </button>
              {activeTab === "clients-control-over-project" && (
                <i
                  className="fa-solid fa-caret-right"
                  style={{
                    color: "#ffbf00",
                    marginLeft: "-1px",
                    fontSize: "1.5rem",
                  }}
                ></i>
              )}
            </div>

            {/* Project Requirements Tab */}
            <div className="flex items-center">
              <button
                className={`${
                  activeTab === "project-requirements"
                    ? "bg-amber-500 text-white text-sm py-3 px-6 rounded-lg w-full"
                    : "bg-gray-200 text-black text-sm py-3 px-6 rounded-lg w-full"
                }`}
                onClick={() => handleTabClick("project-requirements")}
              >
                Project Requirements
              </button>
              {activeTab === "project-requirements" && (
                <i
                  className="fa-solid fa-caret-right"
                  style={{
                    color: "#ffbf00",
                    marginLeft: "-1px",
                    fontSize: "1.5rem",
                  }}
                ></i>
              )}
            </div>
          </div>
          {/* Tab Content */}
          <div className="flex-grow md:w-720 h-350">
            {activeTab === "price-models" && (
              <div className="flex items-center">
                <img
                  src={PriceModels}
                  alt="Price Models"
                  className="mx-auto rounded-lg max-w-full max-h-full"
                />
              </div>
            )}
            {activeTab === "timeframe-budget-flexibility" && (
              <div className="p-8 bg-gray-100 rounded-lg text-center h-96">
                <img
                  src={TimeframeBudget}
                  alt="Timeframe & Budget Flexibility"
                  className="mx-auto rounded-lg mt-14"
                />
                <p className="mt-8 text-md">
                  Fixed Price Model is the right idea when you...
                </p>
              </div>
            )}
            {activeTab === "clients-control-over-project" && (
              <div className="p-8 bg-gray-100 rounded-lg text-center h-96">
                <img
                  src={ClientsControl}
                  alt="Client's Control Over Project"
                  className="mx-auto rounded-lg mt-14"
                />
                <p className="mt-8 text-md">
                  Need to have a particular service provided:
                </p>
              </div>
            )}
            {activeTab === "project-requirements" && (
              <div className="p-8 bg-gray-100 rounded-lg text-center h-96">
                <img
                  src={ProjectRequirements}
                  alt="Client's Control Over Project"
                  className="mx-auto rounded-lg mt-14"
                />
                <p className="mt-8 break-words text-md">
                  Dedicated Team Model is the right idea when you...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
