import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Discover from "../../assets/Services image/discover.png";
import Idea from "../../assets/Services image/idea (1).png";
import Write from "../../assets/Services image/edit-message (1).png";
import Contact from "../../assets/Services image/user.png";
import Checker from "../../assets/Services image/correct (1).png";
import Wallet from "../../assets/Services image/wallet (1).png";
import Clock from "../../assets/Services image/time (1).png";
import Mockup from "../../assets/Services image/mockup (1).png";
import Lap from "../../assets/Services image/laptopinside.jpg";
import Doc from "../../assets/Services image/docs.png";
import Eval from "../../assets/Services image/digitalization.png";
import Prototype from "../../assets/Services image/prototyping.png";
import Plan from "../../assets/Services image/planning.png";
import Hierarchy from "../../assets/Services image/hierarchy chain.webp";

const discovery = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 ">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Discovery{" "}
            <span className="text-amber-500">
              <Typewriter
                words={["Workshop"]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="text-gray-800">
              <Cursor cursorStyle="~" />
            </span>
          </h2>
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Discovering Your Goals
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Skylartech's discovery workshop is a collaborative session where we
            help you with Idea Validation, Requirements Engineering, and Product
            Visualization.
          </p>
          <ul>
            <li>
              <motion.button
                className="border-2 border-amber-500 bg-white hover:bg-amber-500 text-black px-4 py-2 rounded"
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

      <div className="mt-16">
        <div className="flex flex-wrap items-start justify-center md:justify-between gap-8 md:gap-20">
          <div className="flex justify-center md:ml-[6rem]">
            <img
              src={Discover}
              alt="discover"
              className="h-[26rem] w-[24rem] rounded-lg pb-10"
            />
          </div>
          <div className="flex flex-col justify-start md:max-w-2xl md:mr-[6rem]">
            <h1 className="pb-4 font-semibold text-4xl text-left max-w-xl">
              Accelerate business growth with solution{" "}
              <span className="text-amber-500">discovery workshop</span>
            </h1>
            <p className="text-left">
              Condense months of work into days, solve complex business problems
              and develop successful products that are highly tailored to users’
              needs. Starting with a product discovery workshop can help
              mitigate risks and save you from the hassle of product changes,
              revisions or major tweaks in later development or testing stages.
            </p>
            <p className="text-left mt-5">
              Use human-centered design tools and methodologies to deliver
              flawless product experience to your users, and reduce the risk of
              failure.
            </p>
          </div>
        </div>
      </div>

      {/*benefits*/}
      <div>
        <div className="pb-6">
          <h1 className="pb-4 font-semibold text-4xl text-center">BENEFITS</h1>
          <h1 className="text-xl">Skylartech's Discovery Workshop Helps You</h1>
        </div>

        <div className="sm:text-center px-10 justify-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <img src={Idea} className="w-[40px] h-[40px]" />
                <h3 className="pt-2 text-2xl font-semibold max-w-sm text-amber-500 transition hover:text-gray-800">
                  Validate Your Idea
                </h3>
                <p className="max-w-sm py-5 leading-6 text-gray-600">
                  Helping you understand the pros and cons associated with your
                  idea.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <img src={Write} className="w-[40px] h-[40px]" />
                <h3 className="pt-2 text-2xl font-semibold max-w-sm text-amber-500 transition hover:text-gray-800">
                  Build concrete Requirements
                </h3>
                <p className=" max-w-sm py-5 leading-6 text-gray-600">
                  Defining key objectives, and deciding on the features you
                  desire in your new software product.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <img src={Contact} className="w-[40px] h-[40px]" />

                <h3 className="pt-2 text-2xl font-semibold max-w-sm text-amber-500 transition hover:text-gray-800">
                  Involve Stakeholders
                </h3>
                <p className=" max-w-sm py-5 leading-6 text-gray-600">
                  Aligning stakeholders and end users from day one to get higher
                  adaptability post deployment.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <img src={Checker} className="w-[40px] h-[40px]" />

                <h3 className="pt-2 text-2xl font-semibold max-w-sm text-amber-500 transition hover:text-gray-800">
                  Visualize your Idea
                </h3>
                <p className=" max-w-sm py-5 leading-6 text-gray-600">
                  Developing rapid prototypes to help you see how your new
                  project will look and behave.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <img src={Wallet} className="w-[40px] h-[40px]" />

                <h3 className="pt-2 text-2xl font-semibold max-w-sm text-amber-500 transition hover:text-gray-800">
                  Save valuable Resources
                </h3>
                <p className=" max-w-sm py-5 leading-6 text-gray-600">
                  Defining cost estimates for desired features up front, so you
                  don't go over budget on your project.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <img src={Clock} className="w-[40px] h-[40px]" />

                <h3 className="pt-2 text-2xl font-semibold max-w-sm text-amber-500 transition hover:text-gray-800">
                  Prevent Scope Creep
                </h3>
                <p className=" max-w-sm py-5 leading-6 text-gray-600">
                  Setting requirements before development to prevent scope creep
                  and avoid delays on delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*discovery workshop products*/}
      <div>
        <div>
          <h1 className="pb-4 font-semibold text-3xl text-center">
            What are the{" "}
            <span className="text-amber-500">discovery workshop products?</span>
          </h1>
          <h1 className="pb-4">
            The main product of the discovery process is the technical
            documentation, which includes:
          </h1>
        </div>
        <div className="flex">
          <ul className="flex-row ml-28 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
            <li>Selection of appropriate technologies</li>
            <li>Backlog of requirements</li>
            <li>User stories and user journey</li>
          </ul>
          <ul className="ml-[25rem] list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
            <li>Diagram of the application structure</li>
            <li>Initial estimated delivery time and cost</li>
          </ul>
        </div>
        <div className="mt-16">
          <div className="flex items-start justify-center md:justify-between gap-8 md:gap-20">
            <div className="flex justify-center ml-[4rem]">
              <img src={Mockup} alt="mockup" className="rounded-lg pb-10" />
            </div>
            <div className="flex flex-col justify-start md:max-w-2xl md:mr-[6rem]">
              <p className="text-left">
                All of these elements affect the final cost of the product. To
                minimize the spending, it’s best to make research and
                feedback-based choices before the proper development. Product
                Discovery Workshop gives the best fitting technology to your
                tech idea. Product Discovery Workshop – a place where Project
                Management, Design and Technology meet.
              </p>
              <p className="text-left mt-5">
                What we should underline, if all documentation is ready, the
                company is able to start the project’s realization at any time
                and involve any provider. Product requirements can be used as a
                reference in further stages of development. The Product Manager
                can quickly and easily validate the prototype and start product
                delivery with the right software team, like the Frontend House
                team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*deliverable*/}
      <div className="pb-20 container">
        <div className="text-center">
          <h1 className="pb-4 font-semibold text-3xl text-center">
            Discovery Workshop Deliverable
          </h1>
          <h1 className="text-amber-500 text-xl pb-10">
            Main Problems for Clients
          </h1>
        </div>
        <div className="flex">
          <img
            src={Lap}
            className="w-[500px] h-[340px] rounded-lg ml-[7rem] mt-10"
          />
          <ul className="pt-32 ml-[8rem] list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
            <li>Underestimating project implementation costs.</li>
            <li>
              Launching a product in the market with less or no potential.
            </li>
            <li>Finding on product not solving user needs.</li>
          </ul>
        </div>
      </div>

      {/*what you get */}
      <div className="container mx-auto px-4 pt-14 bg-amber-50 mb-20">
        <div>
          <h1 className="font-semibold text-3xl text-center">What You Get</h1>
        </div>
        <div className="flex justify-center items-center space-x-6 ">
          <div className="flex flex-col items-center space-y-2 mt-20 mb-20">
            <div
              style={{
                background: "#F5F5F5",
                width: "62px",
                height: "60px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={Doc}
                className="w-[40px] h-[40px] ml-[11px]"
                alt="Delivery"
              />
            </div>
            <div>
              <h3 className="text-amber-500 transition hover:text-black text-2xl font-medium">
                Requirements Document
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-500 max-w-sm">
                A detailed document highlighting your goals for the project, and
                the features you require.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div
              style={{
                background: "#F5F5F5",
                width: "62px",
                height: "60px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={Eval}
                className="w-[40px] h-[40px] ml-[11px]"
                alt="Scale"
              />
            </div>
            <div>
              <h3 className="text-amber-500 transition hover:text-black text-2xl font-medium">
                Technical Evaluation
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-500 max-w-sm">
                Identifying technical challenges and crafting the best possible
                solutions to achieve your business goals.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div
              style={{
                background: "#F5F5F5",
                width: "62px",
                height: "60px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={Prototype}
                className="w-[40px] h-[40px] ml-[11px]"
                alt="Lock"
              />
            </div>
            <div>
              <h3 className="text-amber-500 transition hover:text-black text-2xl font-medium">
                Clickable prototype
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-500 max-w-sm">
                Visualization of your idea in the form of a clickable prototype
                that works on the platforms of your choice.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div
              style={{
                background: "#F5F5F5",
                width: "62px",
                height: "60px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={Plan}
                className="w-[40px] h-[40px] ml-[11px]"
                alt="Use"
              />
            </div>
            <div>
              <h3 className="text-amber-500 transition hover:text-black text-2xl font-medium">
                Project Plan
              </h3>
            </div>
            <div>
              <p className="text-left text-gray-500 max-w-sm">
                Defining schedules for development, and providing cost estimates
                based on defined requirements.
              </p>
            </div>
          </div>
        </div>
      

      {/*allow ui/ux*/}
      <div className="pt-20">
        <div>
          <h1 className="font-semibold text-3xl text-center">
            Allowing{" "}
            <span className="text-amber-500">UI/UX and development</span> teams
            to go through detailed information for flawless deliverables
          </h1>
        </div>
        <div className="mt-16">
          <div className="flex items-start justify-center md:justify-between gap-8 md:gap-20">
            <div className="flex justify-center ml-[4rem]">
              <img src={Hierarchy} alt="mockup" className="rounded-lg pb-10 " />
            </div>
            <div className="flex flex-col justify-start md:max-w-2xl md:mr-[6rem]">
              <p className="text-left pt-16">
                In more simpler terms, for a software development or mobile app
                development project, Discovery Workshop is the pre-development
                stage of gathering and sharing relevant project information
                between client and the project team. The platform for
                information sharing could be on site/off site meetups and online
                conferences.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default discovery;
