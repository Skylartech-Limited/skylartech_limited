import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Softwaredevelopment from "../../assets/img.png/SKYLARTECH IMG/desktopsky.png"
import Discoveryworkshop from "../../assets/img.png/SKYLARTECH IMG/searchiconsky.png"
import Userexp from "../../assets/img.png/SKYLARTECH IMG/desktopwebsky.png"
import Iot from "../../assets/img.png/SKYLARTECH IMG/iotsky.png"
import Support from "../../assets/img.png/SKYLARTECH IMG/custcaresky.png"
import Web from "../../assets/img.png/SKYLARTECH IMG/codesky.png"

const Home = () => {
  return (
    <>
  <div className="flex flex-col lg:flex-row text-left p-10">
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10">
          Delivering quality projects{" "}
          <span className="text-amber-500 font-medium">
            <Typewriter
              words={["beyond expectations", "beyond expectations"]}
              loop={50}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span className="text-gray-700">
            <Cursor cursorStyle="~" />
          </span>
        </h2>
        <h1 className="max-w-xl text-3xl md:text-4xl lg:text-5xl xl:text-4xl py-2 font-semibold text-gray-800">
          Digitize Your Business With Our Modern Development Solutions
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
          Skylartech is a specialized mobile and web app development company with a
          focus on smart technologies and customer satisfaction. Born in 2014,
          our company has been delivering high-end quality solutions to global
          businesses with a success rate of 100%. Hire our expertise at
          affordable prices to have the right tech solutions for your company.
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
      <div className="lg:w-1/2">
        <img
          className="hidden lg:block max-w-full h-auto"
          src="image.jpg"
          alt="Image"
        />
      </div>
    </div>
      
      {/* services we Offer  */}

      <div>
        <h1 className="text-4xl text-bold text-black text-center ">Services We Offer</h1>
      </div>
      <div className="lg:flex gap-10 px-10">
        <>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <img src={Softwaredevelopment} style={{"width":"4rem", "height":"3.75rem"}} className="mb-5"/>
            <h3 className="text-2xl text-bold max-w-xs ">
              Custom Software Development
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-700">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
          <div className="text-left shadow-xs p-10 rounded-xl">
            <img src={Discoveryworkshop} style={{"width":"6rem", "height":"5.5rem"}} className="mb-3"/>
            <h3 className="text-2xl text-bold max-w-xs ">Discovery Workshop</h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-700">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
          <div className="text-left shadow-xs p-10 rounded-xl">
          <img src={Userexp} style={{"width":"4rem", "height":"3.75rem"}} className="mb-5"/>
            <h3 className="text-2xl text-bold max-w-xs ">
              User Experience and Design
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-700">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
        </>
      </div>
      <div className="lg:flex gap-10 px-10">
        <>
          <div className="text-left shadow-xs p-10 rounded-xl">
          <img src={Iot} style={{"width":"4rem", "height":"3.75rem"}} className="mb-5"/>
            <h3 className="text-2xl text-bold max-w-xs ">
              Internet of Things (IoT)
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-700">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
          <div className="text-left shadow-xs p-10 rounded-xl">
          <img src={Support} style={{"width":"6.5rem", "height":"4.75rem"}} className="mb-5"/>
            <h3 className="text-2xl text-bold max-w-xs ">
              Support and Maintenance
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-700">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
          <div className="text-left shadow-xs p-10 rounded-xl">
          <img src={Web} style={{"width":"4.5rem", "height":"3.5rem"}} className="mb-5"/>
            <h3 className="text-2xl text-bold max-w-xs ">
              Web & Mobile App Development
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-700">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
        </>
      </div>
  </>
  );
};

export default Home;
