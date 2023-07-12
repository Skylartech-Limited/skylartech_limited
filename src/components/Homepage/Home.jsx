import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (

    <>
      <div>
        <h1 className="text-4xl text-bold text-black text-center ">Services We Offer</h1>
      </div>
      <div className="lg:flex gap-10 px-10">
        <>
          <div className="text-left shadow-xs p-10 rounded-xl">
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
            <h3 className="text-2xl text-bold max-w-xs ">Discovery Workshop</h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-700">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
          <div className="text-left shadow-xs p-10 rounded-xl">
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
