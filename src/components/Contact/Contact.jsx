import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import City from "../../assets/Contact Images/City.jpeg";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 bg-amber-50">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 py-2 pt-10">
            Get in{" "}
            <span className="text-amber-500 font-medium">
              <Typewriter
                words={["Touch"]}
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

          <p className="text-base md:lg:text-xl max-w-md py-5 text-gray-600">
            If you are looking for specialized app development solutions and
            custom software development services, reach out to us, and we'll
            make your work our priority. With our team of experts and our broad
            range of IT services, we make sure to deliver the best IT solutions
            with top quality and 100% success.
          </p>
        </div>
      </div>

      {/* Talk to our team form */}
      <div className="flex justify-center items-center mt-8">
        <form className="max-w-2xl w-full mb-12">
          <h1 className="text-4xl mb-5 font-semibold text-gray-900">
            Talk to our team
          </h1>
          <p className="text-lg font-light tracking-wide mb-16">
            We'd love to discuss your ideas and look forward to bringing them to
            life!
          </p>

          {/* Two columns for input fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              ></label>
              <input
                type="text"
                id="name"
                className="border-b border-gray-500 w-full h-6 mb-4 focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              ></label>
              <input
                type="text"
                id="email"
                className="border-b border-gray-500 w-full h-6 mb-4 focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              ></label>
              <input
                type="text"
                id="subject"
                className="border-b border-gray-500 w-full h-6 mb-4 focus:outline-none"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              ></label>
              <input
                type="text"
                id="phoneNumber"
                className="border-b border-gray-500 w-full h-6 mb-4 focus:outline-none"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Large and centered div for messages */}
          <div className="mb-4 text-center">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            ></label>
            <textarea
              id="message"
              className="border-b border-gray-500 w-full h-32 mb-4 focus:outline-none"
              placeholder="Message"
            />
          </div>

          {/* Submit button */}
          <motion.button
            className="bg-slate-800 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
          >
            SUBMIT
          </motion.button>
        </form>
      </div>

      {/* location */}
      <div
  className="flex items-center justify-center min-h-1/2-screen relative" // Adjusted min-height
  style={{
    backgroundImage: `url(${City})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div
    className="absolute inset-0 bg-black opacity-80"
    style={{ zIndex: 1 }}
  ></div>
  <div className="py-4 md:py-8 lg:py-16 text-center relative z-10"> {/* Adjusted padding */}
    <div className="flex flex-col items-center space-y-4">
      {/* Center content vertically */}
      <div className="rounded-full bg-gray-600 p-9 h-25 w-25"> {/* Adjusted size */}
        <i className="fa-solid fa-location-dot inline-block text-amber-500 text-xl md:text-2xl lg:text-5xl"></i>
      </div>

      <h1 className="text-white font-serif text-lg md:text-xl lg:text-2xl py-2"> {/* Adjusted font size */}
        Location
      </h1>
      <h2 className="text-white text-md font-serif">Kenya</h2> {/* Adjusted font size */}
      <p className="text-amber-500 text-md font-serif">The Water Front, Karen</p> {/* Adjusted font size */}
      <p className="text-white text-md font-serif">+254 718-257-293</p> {/* Adjusted font size */}
      <p className="text-white text-md font-serif">info@skylartech.co.ke</p> {/* Adjusted font size */}
    </div>
  </div>
</div>

    </>
  );
};

export default Contact;
