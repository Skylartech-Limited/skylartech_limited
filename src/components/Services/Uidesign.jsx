import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import Phone from "../../assets/Technology Images/phone.png";

const Uidesign = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row text-left p-10 bg-amber-50">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10">
              User Experience and{" "}
              <span className="text-amber-500 font-medium">
                <Typewriter
                  words={["Design", "Design"]}
                  loop={50}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <span className="text-gray-800">
                <Cursor cursorStyle="~" />
              </span>
            </h2>
            <h1 className="max-w-md text-3xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
              We design and launch digital products that deliver great user
              experiences
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-md py-5 text-gray-600">
              By designing an intuitive user experience, you can increase future
              product acceptance. For improved conversion rates and greater
              revenue, spend money on user interface design. By creating
              purpose-driven UI/UX design, you may increase customer retention.
            </p>
            <ul>
              <li>
              <Link to="/contact-us">
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
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*design services */}
      <div>
        <h1 className="text-4xl font-semibold text-black text-center mt-12">
          DESIGN SERVICES
        </h1>
        <h3 className="text-xl font-medium text-black text-center pt-5">
          We Build Delightful Experiences, Understanding User Needs
        </h3>
      </div>
      <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              User Research
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              Before getting our hands dirty, we do extensive research to build
              up your user personas, in order to map your product’s full
              customer journey.
            </p>
          </div>
        </div>
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Usability Testing
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              We create prototypes and test our ideas with real users. This way
              we can really get more feedback about your upcoming product’s
              usability.
            </p>
          </div>
        </div>
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              UX Design
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              We bring together professional user experience design and
              top-notch technology to deliver compelling experiences that solve
              business challenges and make people happy.
            </p>
          </div>
        </div>
        <div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Development
            </h3>
            <p className="text-md max-w-sm py-5 leading-6 text-gray-800">
              Our software engineers collaborate with designers to ensure that
              products we deliver to our clients are perfect from experience,
              design and technology perspectives..
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-black text-center mt-12">
          Kickstart Your Project with{" "}
          <span className="text-amber-500">Skylartech</span> Reliable UI/UX Process
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={Phone} className="h-72 w-90" alt="Phone" />
      </div>
    </>
  );
};

export default Uidesign;
