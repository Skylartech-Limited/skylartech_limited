import React from "react";
import { motion } from "framer-motion";
import Tele from "../../assets/Industries/layout.png";
import Ehealth from "../../assets/Industries/medical-record.png";
import Insure from "../../assets/Industries/health-insurance.png";
import Exercise from "../../assets/Industries/exercise.png";
import Serv from "../../assets/Services image/custom-software-1-1.png";
import Healtht from "../../assets/Industries/doctor.png";
import Team from "../../assets/Industries/teamwork.png";
import Background from "../../assets/Industries/healthbann.jpg";
import Carehealth from "../../assets/Industries/healthcr1.jpg";

const Health = () => {
  return (
    <>
      <div
        className="h-[35rem] flex flex-col lg:flex-row text-left p-10 bg-amber-50"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            HealthCare
          </h2>
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Healthcare Software Development Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Skylartech is providing smart healthcare solutions and development
            services to revolutionize the field of medicine.
          </p>
          <ul>
            <li>
              <motion.button
                className="border-2 border-amber-500 bg-white 0 text-black px-4 py-2 rounded"
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
              >
                Let's Talk
                <span
                  className="ml-2 text-xl"
                  style={{ lineHeight: "0.7", transform: "scale(1.2)" }}
                >
                  &#8594;
                </span>
              </motion.button>
            </li>
          </ul>
        </div>
      </div>

      {/*healthcare reasons*/}
      <div className="ml-[14rem]">
        <h1 className="text-3xl font-semibold mt-12 max-w-4xl">
          Providing Reliable{" "}
          <span className="text-amber-500">
            Healthcare Software Development
          </span>{" "}
          Services at Reasonable Costs, Fit for all Medical Facades
        </h1>
      </div>
      <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <img src={Tele} alt="tele" />
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Telehealth Software
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              Our new telehealth software services are now enabling medical
              personnel to diagnose, consult and monitor patients remotely
              through telecommunication. You can be next to become part of this
              medical and tech blend.
            </p>
          </div>
        </div>
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <img src={Ehealth} alt="ehealth" />
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Electronic Health Record Software (EHR)
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              You can now automate your clinical workflow with the help of our
              new HER services that allows interacting with patients via patient
              portals and facilitating patients to access electronic medical
              records.
            </p>
          </div>
        </div>
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <img src={Insure} alt="insure" />
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Health Insurance Software
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              With the help of advanced new automation methods, you can now have
              software to handle your insurance claims and the processing of
              medical bills. You can forget the hassle of manually handling
              patient’s insurance.
            </p>
          </div>
        </div>
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <img src={Exercise} alt="exercise" />
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Health Tracking Apps
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              Allow your patients to monitor their health by having a smart
              health- tracking app. Patients can monitor their blood pressure,
              sleep cycle, nutrition, and medication using such apps which can
              benefit healthcare professionals a great deal.
            </p>
          </div>
        </div>
      </div>

      {/*healthcare section*/}
      <div
        style={{
          backgroundImage: `url(${Carehealth})`,
          backgroundSize: "cover",
          height: "38rem",
          marginTop: "6rem",
        }}
      >
        <div className="ml-[42rem] pt-[9rem]">
          <h1 className="font-semibold text-3xl text-left mb-5">Healthcare</h1>
          <p className="text-left max-w-xl leading-10">
            We have worked alongside health professionals to create smart
            systems that help them to streamline workflows, such as booking,
            forecasting, and scheduling appointments. With the help of our
            developers, we have been able to develop multiple web apps that
            monitor a patient’s vital signs and maintain all the medical history
            of that patient. Our AI & ML departments have also developed
            advanced apps that detect diseases. We know everything about this
            industry, hence can help you design and develop any sort of
            application or software.
          </p>
        </div>
      </div>

      {/*entrusting*/}
      <div>
        <div className="ml-[22rem] mt-[3rem]">
          <h1 className="font-semibold text-3xl max-w-2xl">
            Entrust Your Medical Technology Development Needs to Skylartech
          </h1>
        </div>
        <div className="flex mt-[6rem]">
          <div className="card bg-amber-500 shadow-2xl rounded-lg h-[300px] w-[24rem] ml-[17rem]">
            <div className="text-left pl-[5rem] pt-8">
              <h1 className="font-semibold text-white text-xl mb-5">
                Telehealth Software{" "}
              </h1>
              <p style={{ maxWidth: "16rem" }}>
                Telehealthcare software development covers a broad range of
                healthcare software services including, remote patient
                monitoring, mobile health solutions, real-time healthcare,
                mHealth apps, and telemedicine software.
              </p>
            </div>
          </div>
          <div className="card shadow-2xl rounded-lg h-[300px] w-[24rem] ml-[3rem]">
            <div className="text-left pl-[5rem] pt-8">
              <h1 className="font-semibold text-xl mb-5 text-amber-500">
                Project-Based Model{" "}
              </h1>
              <p style={{ maxWidth: "16rem" }}>
                Telehealthcare software development covers a broad range of
                healthcare software services including, remote patient
                monitoring, mobile health solutions, real-time healthcare,
                mHealth apps, and telemedicine software.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[8rem]">
        <h1 className="text-3xl font-semibold">Automate Your Clinic</h1>
      </div>

      {/*automate clinic*/}
      <div className="flex ml-[8rem] mr-[5rem] mb-16 mt-12">
        <div className="flex justify-center">
          <img src={Serv} alt="serv" className="w-[564px] h-[250px] mt-10" />
        </div>
        <div className="flex flex-col text-left ml-28 mt-28">
          <p className="max-w-xl">
            ClinicConnect is a modern practice management solution built for
            both healthcare professionals and patients. Built by a group of
            seasoned healthcare professionals and IT experts, ClinicConnect
            brings strength to meet requirements of any size of clinic and yet
            not compromising on the quality of care and administration.
          </p>
        </div>
      </div>
    </>
  );
};

export default Health;
