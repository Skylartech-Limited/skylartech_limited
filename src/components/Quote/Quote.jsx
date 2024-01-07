import React from "react";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="container mx-auto mt-9 mb-9 px-4">
      <h1 className="text-4xl mb-5 font-semibold text-gray-900">Get a Quote</h1>
      <p className="text-lg font-light tracking-wide mb-8 md:mb-16">
        Fill up the form and our Team will get back to you within 24 hours.
      </p>
      <form className="max-w-lg mx-auto p-4 rounded-lg">
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-b border-gray-500 w-full h-8 mb-4 md:mb-0 focus:outline-none"
              placeholder="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-b border-gray-500 w-full h-8 mb-4 md:mb-0 focus:outline-none"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 pr-0 md:pr-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="border-b border-gray-500 w-full h-8 mb-4 md:mb-0 focus:outline-none"
              placeholder="Subject"
              required
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="border-b border-gray-500 w-full h-8 mb-4 md:mb-0 focus:outline-none"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2">
            <label className="block mb-2 text-lg font-bold" htmlFor="price">
              Price
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500"
              name="price"
              id="price"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="mb-4">
              <p className="mb-2 text-lg font-bold">I'm interested in:</p>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="web"
                  name="interest"
                  value="web"
                  className="mr-2"
                />
                <label htmlFor="web">Web</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="ios"
                  name="interest"
                  value="ios"
                  className="mr-2"
                />
                <label htmlFor="ios">iOS</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="android"
                  name="interest"
                  value="android"
                  className="mr-2"
                />
                <label htmlFor="android">Android</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-lg font-bold">Services:</p>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="custom"
              name="service"
              value="custom"
              className="mr-2"
            />
            <label htmlFor="custom">Custom Software Development</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="discovery"
              name="service"
              value="discovery"
              className="mr-2"
            />
            <label htmlFor="discovery">Discovery Workshop</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="ux-design"
              name="service"
              value="ux-design"
              className="mr-2"
            />
            <label htmlFor="ux-design">User Experience &amp; Design</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="web-mobile"
              name="service"
              value="web-mobile"
              className="mr-2"
            />
            <label htmlFor="web-mobile">Web &amp; Mobile App Development</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="iot"
              name="service"
              value="iot"
              className="mr-2"
            />
            <label htmlFor="iot">IoT</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="support"
              name="service"
              value="support"
              className="mr-2"
            />
            <label htmlFor="support">Support &amp; Maintenance</label>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.8 }}
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-amber-500"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Quote;
