import React from "react";
import countryCallingCodes from "../../country_calling_codes.json";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="container mx-auto mt-9 mb-9">
      <form className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2">
            <label className="block mb-2 text-lg font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block mb-2 text-lg font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2">
            <label className="block mb-2 text-lg font-bold" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block mb-2 text-lg font-bold" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex">
              <select
                className="px-2 py-2 border rounded-l-md focus:outline-none focus:border-amber-500 w-32"
                name="country-code"
                id="country-code"
              >
                {countryCallingCodes.map((country) => (
                  <option key={country.code} value={country.code}>{`${country.name} (${country.dial_code})`}</option>
                ))}
              </select>
              <input
                className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:border-amber-500"
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
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
        <div className="mb-4">
          <div
            className="g-recaptcha"
            data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
          ></div>
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
