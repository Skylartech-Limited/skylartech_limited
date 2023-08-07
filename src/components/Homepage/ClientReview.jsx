import React from "react";
import Corporate from "../../assets/Homepage images/corporate.jpg";
import Quotations from "../../assets/Homepage images/Quotationmark.png";

const ClientReview = () => {
  const slider = [
    <div className="card text-center p-[30px] bg-slate-50 rounded-xl  h-[341px] w-[546px] relative overflow-hidden">
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
        <span className="text-sm text-slate-500 mt-2">Head of Marketing</span>
        <ul className="flex mt-6 mb-5">
          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>
        </ul>
        <p className="text-slate-500 text-sm">
          Their client focus is very evident with constant communication, highly
          professional and considerate customer service. They have high
          standards for everything, it shows in their work.
        </p>
      </div>
    </div>,

    <div className=" card text-center p-[30px] bg-slate-50 rounded-xl  h-[341px] w-[546px] relative overflow-hidden">
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
        <span className="text-sm text-slate-500 mt-2">Head of Marketing</span>
        <ul className="flex mt-6 mb-5">
          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>
        </ul>
        <p className="text-slate-500 text-sm">
          Their client focus is very evident with constant communication, highly
          professional and considerate customer service. They have high
          standards for everything, it shows in their work.
        </p>
      </div>
    </div>,

    <div className=" card text-center p-[30px] bg-slate-50 rounded-xl  h-[341px] w-[546px] relative overflow-hidden">
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
        <span className="text-sm text-slate-500 mt-2">Head of Marketing</span>
        <ul className="flex mt-6 mb-5">
          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>

          <li>
            <i
              className="fa-solid fa-star fa-sm mr-2"
              style={{ color: "#FFEA00" }}
            ></i>
          </li>
        </ul>
        <p className="text-slate-500 text-sm">
          Their client focus is very evident with constant communication, highly
          professional and considerate customer service. They have high
          standards for everything, it shows in their work.
        </p>
      </div>
    </div>,
  ];

  return (
    <div className="flex justify-center -mt-28 mb-16">
      <div className="flex flex-row space-x-4">
        {slider.map((slides, index) => (
          <div key={index}>{slides}</div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
