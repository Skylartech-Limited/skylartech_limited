import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom"
import Analytics from "../../assets/Services image/analytics (1).png";
import Hour from "../../assets/Services image/24-hours-support.png";
import Budget from "../../assets/Services image/budgeting.png";
import Choice from "../../assets/Services image/choice.png";
import Code from "../../assets/Services image/coding.png";
import Quality from "../../assets/Services image/good-quality.png";
import Maintain from "../../assets/Services image/maintenance.png";
import Migrate from "../../assets/Services image/migrating.png";
import People from "../../assets/Services image/people.png";
import Reuse from "../../assets/Services image/reuse.png";
import Search from "../../assets/Services image/search (1).png";
import Solution from "../../assets/Services image/solution.png";
import Sustain from "../../assets/Services image/sustainability.png";
import Technique from "../../assets/Services image/technique.png";
import Mockup from "../../assets/Services image/mockup (1).png";

const support = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 bg-amber-50 ">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Support &{" "}
            <span className="text-amber-500">
              <Typewriter
                words={["Maintenance"]}
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
            Application Maintenance & Support Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Utilize streamlined IT support services to reduce costs. accelerate
            the adoption of cutting-edge technology to boost customer
            satisfaction. Obtain real-time technical assistance and 24-hour
            preventative maintenance.
          </p>
          <ul>
            <li>
            <Link to="/contact-us">
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
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*maintenance plans*/}
      <div className="container mt-12 mb-24">
        <div className="mb-6">
          <h1 className="font-semibold text-3xl text-center">
            Maintenance <span className="text-amber-500">Plans</span>
          </h1>
          <div className="flex justify-center gap-10 mt-8">
            {" "}
            <div className="card bg-slate-50 shadow-xl rounded-lg h-[260px] w-[24rem]">
              <div className="text-center p-10">
                <img src={Budget} alt="budget" className="ml-[120px] mb-6" />
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Actual Budget
                </h3>
                <ul>
                  <li>
                    <motion.button
                      className="bg-amber-500 text-white px-4 py-2 rounded-full"
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      Let's Talk
                      <span
                        className="ml-2 text-xl"
                        style={{ lineHeight: "0.7", transform: "scale(1.2)" }}
                      ></span>
                    </motion.button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card bg-slate-50 shadow-xl rounded-lg h-[260px] w-[24rem]">
              <div className="text-center p-10">
                <img src={Reuse} alt="reuse" className="ml-[124px] mb-6" />
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  How Does it Work?
                </h3>
                <ul>
                  <li>
                    <motion.button
                      className="bg-amber-500 text-white px-4 py-2 rounded-full"
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      Let's Talk
                      <span
                        className="ml-2 text-xl"
                        style={{ lineHeight: "0.7", transform: "scale(1.2)" }}
                      ></span>
                    </motion.button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card bg-slate-50 shadow-xl rounded-lg h-[260px] w-[24rem]">
              <div className="text-center p-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  What Is The Cost Involved?
                </h3>
                <p
                  className="mb-6 leading-6 text-gray-600"
                  style={{ maxWidth: "24rem" }}
                >
                  There are three maintenance packages: Basic, Silver, and
                  Platinum. For more information, contact our account manager.
                </p>
                <ul>
                  <li>
                    <motion.button
                      className="bg-amber-500 text-white px-4 py-2 rounded-full"
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      Let's Talk
                      <span
                        className="ml-2 text-xl"
                        style={{ lineHeight: "0.7", transform: "scale(1.2)" }}
                      ></span>
                    </motion.button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*why skylartech*/}
      <div className="bg-amber-50 py-20">
        <div className="pb-6">
          <h1 className="font-semibold text-3xl text-center">
            Why <span className="text-amber-500">Skylartech</span>
          </h1>
        </div>
        <p className="text-xl max-w-4xl ml-auto mr-auto pb-6 text-center">
          Your business software must remain operational at all times which is
          why getting website maintenance and support services, application
          maintenance and support services, as well as network maintenance and
          support services, is significant for increased stability and profits.
        </p>

        <div className="pt-5 pb-10 sm:text-center lg:flex lg:flex-wrap px-10 justify-center gap-10">
          <div class="card bg-white hover:shadow-xl rounded-lg h-[350px] w-[23rem] transition ">
            <div className="text-left p-10">
              <div>
                <img src={Solution} alt="sd" className="w-[45px] h-[45px]" />
              </div>
              <h3 className="pt-6 text-xl font-semibold max-w-xs text-gray-800">
                Exceptional Knowledge
              </h3>
              <p
                className="py-5 leading-6 text-gray-800"
                style={{ maxWidth: "24rem" }}
              >
                We serve 15 different industries and have completed more than
                5000 projects. Worked with our clients for nearly three decades.
              </p>
            </div>
          </div>

          <div class="card bg-white hover:shadow-xl rounded-lg h-[350px] w-[23rem] transition ">
            <div className="text-left p-10">
              <div>
                <img src={Search} alt="dw" className="w-[45px] h-[45px]" />
              </div>

              <h3 className="pt-6 text-xl font-semibold max-w-xs text-gray-800">
                Transparency
              </h3>
              <p
                className="py-5 leading-6 text-gray-800"
                style={{ maxWidth: "20rem" }}
              >
                Transparency is at the core of every project we undertake. You
                will have full visibility into your project’s progress, and
                milestones.
              </p>
            </div>
          </div>

          <div class="card bg-white hover:shadow-xl rounded-lg h-[350px] w-[23rem] transition ">
            <div className="text-left p-10">
              <div>
                <img src={Choice} className="w-[45px] h-[45px]" alt="ue" />
              </div>

              <h3 className="pt-6 text-xl font-semibold max-w-xs text-gray-800">
                Your Choice​
              </h3>
              <p
                className="py-5 leading-6 text-gray-800"
                style={{ maxWidth: "18rem" }}
              >
                Fixed bid and dedicated development are our two business models.
                You can choose the best one as per your project requirements.
                For more information, connect with our Business Development
                Officer.
              </p>
            </div>
          </div>

          <div class="card bg-white hover:shadow-xl rounded-lg h-[350px] w-[23rem] transition ">
            <div className="text-left p-10">
              <div>
                <img src={Quality} alt="iot" className="w-[45px] h-[45px]" />
              </div>

              <h3 className="pt-6 text-xl font-semibold max-w-xs text-gray-800">
                Quality Driven
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-800">
                The quality of your service is essential to your business
                growth, which is why it's important to take it seriously. We
                provide you with top-notch software solutions that are
                thoroughly tested by our QA team before delivery.
              </p>
            </div>
          </div>

          <div class="card bg-white hover:shadow-xl rounded-lg h-[350px] w-[23rem] transition ">
            <div className="text-left p-10">
              <div>
                <img src={Maintain} alt="sup" className="w-[45px] h-[45px]" />
              </div>

              <h3 className="pt-6 text-xl font-semibold max-w-xs text-gray-800">
                Affordable Services
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-800">
                The reason we are competitively priced is that we choose to be
                affordable. Our expertise is priced in such a way that anyone
                can benefit from it when they need it.
              </p>
            </div>
          </div>

          <div class="card bg-white hover:shadow-xl rounded-lg h-[350px] w-[23rem] transition ">
            <div className="text-left p-10">
              <div>
                <img src={Analytics} alt="web" className="w-[45px] h-[45px]" />
              </div>

              <h3 className="pt-6 text-xl font-semibold max-w-xs text-gray-800">
                Business Analysts
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-800">
                We perform a seamless integration of the new system with
                existing technical processes, based on a multi-faceted analysis
                conducted by our Business Analysts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*drive...*/}
      <div className="mb-16">
        <div className="mb-16">
          <h1 className="font-semibold text-3xl mt-10">
            Drive Growth Through Three-Tiered{" "}
            <span className="text-amber-500">Technical Support</span>
          </h1>
        </div>
        <div className="flex">
          <div className="ml-[8rem]">
            <img src={Mockup} alt="mockup" className="rounded-lg " />
          </div>
          <div className="ml-16">
            <h1 className="text-left max-w-xl mb-10">
              Escalate your technical processes through Skylartech simplified
              strategies and unlock compelling opportunities, making the best
              use of your time and investment.
            </h1>
            <ul className="text-lg font-semibold px-5 list-disc leading-10 text-left marker:text-amber-500 marker:text-2xl">
              <li>Prevent Scope Creep</li>
            </ul>
            <p className="px-5 leading-10 text-left">
              Issues deduction, Basic Support
            </p>
            <ul className="text-lg font-semibold px-5 list-disc leading-10 text-left marker:text-amber-500 marker:text-2xl">
              <li>Advanced Level</li>
            </ul>
            <p className="px-5 leading-10 text-left">
              Product Support and Technical Support
            </p>
            <ul className="text-lg font-semibold px-5 list-disc leading-10 text-left marker:text-amber-500 marker:text-2xl">
              <li>Specialist Level</li>
            </ul>
            <p className="px-5 leading-10 text-left">
              Product/Application Improvement
            </p>
          </div>
        </div>
      </div>

      {/*maintenance and support services*/}
      <div className="mt-[6rem]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">
            Maintenance &{" "}
            <span className="text-amber-500">Support Services</span>
          </h1>
          <p className="text-xl max-w-3xl ml-[300px] mb-8">
            Depending on your specific needs, we can provide you with support
            and maintenance for your complex applications. We keep our
            professionals up-to-date with the latest technologies and operating
            procedures. Our expertise and experience cover a wide range of
            languages, databases, enterprise applications, software systems, and
            platforms. Enhance the overall performance of your product with
            end-to-end support services that include the following:
          </p>
        </div>
        <div className="pt-5 pb-10 sm:text-center lg:flex lg:flex-wrap px-10 justify-center gap-10">
          <div class="card bg-gray-200 shadow-xl rounded-lg h-[200px] w-[23rem] ">
            <div className="text-center px-10">
              <div>
                <img
                  src={Hour}
                  alt="sd"
                  className="w-[70px] h-[70px] ml-[7rem] mt-6 mb-5"
                />
              </div>
              <p
                className="leading-6 text-gray-800"
                style={{ maxWidth: "30rem" }}
              >
                Ongoing maintenance – troubleshooting, bug fixes, backups,
                stability monitoring, and 24/7 options.
              </p>
            </div>
          </div>

          <div class="card bg-gray-200 shadow-xl rounded-lg h-[200px] w-[23rem]">
            <div className="text-center px-10">
              <div>
                <img
                  src={Code}
                  alt="sd"
                  className="w-[70px] h-[70px] ml-[7rem] mb-5 mt-6"
                />
              </div>
              <p
                className="leading-6 text-gray-800"
                style={{ maxWidth: "30rem" }}
              >
                Enhancements and upgrades to applications and systems, as well
                as new functionality integration.
              </p>
            </div>
          </div>

          <div class="card bg-gray-200 shadow-xl rounded-lg h-[200px] w-[23rem]">
            <div className="text-center px-10">
              <div>
                <img
                  src={Sustain}
                  alt="sd"
                  className="w-[70px] h-[70px] ml-[7rem] mb-5 mt-6"
                />
              </div>
              <p
                className="leading-6 text-gray-800"
                style={{ maxWidth: "30rem" }}
              >
                Re-engineering software solutions to meet changes in the
                environment and business needs.
              </p>
            </div>
          </div>

          <div class="card bg-gray-200 shadow-xl rounded-lg h-[200px] w-[23rem]">
            <div className="text-center p-10">
              <div>
                <img
                  src={Migrate}
                  alt="sd"
                  className="w-[70px] h-[70px] ml-[7rem] mb-5"
                />
              </div>
              <p
                className="leading-6 text-gray-800"
                style={{ maxWidth: "30rem" }}
              >
                Migration from one platform to another.
              </p>
            </div>
          </div>

          <div class="card bg-gray-200 shadow-xl rounded-lg h-[200px] w-[23rem]">
            <div className="text-center">
              <div>
                <img
                  src={Technique}
                  alt="sd"
                  className="w-[70px] h-[70px] ml-[9rem] mb-5 mt-6"
                />
              </div>
              <p
                className="leading-6 text-gray-800"
                style={{ maxWidth: "30rem" }}
              >
                Product/solution end-users and clients’ support (using online
                chats, ticket systems), 24/7 option available.
              </p>
            </div>
          </div>

          <div class="card bg-gray-200 shadow-xl rounded-lg h-[200px] w-[23rem]">
            <div className="text-center p-10">
              <div>
                <img
                  src={People}
                  alt="sd"
                  className="w-[80px] h-[80px] ml-[7rem]"
                />
              </div>
              <p
                className="leading-6 text-gray-800"
                style={{ maxWidth: "30rem" }}
              >
                Hire a dedicated support team for any sort of project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default support;
