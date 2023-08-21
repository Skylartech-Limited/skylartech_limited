import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import SoftwareDevelopment from "../../assets/Homepage images/computer 1.png";
import DiscoveryWorkshop from "../../assets/Homepage images/search 1.png";
import UserExperience from "../../assets/Homepage images/testing 1.png";
import Iot from "../../assets/Homepage images/Group 4.png";
import Support from "../../assets/Homepage images/support (1) 1.png";
import Web from "../../assets/Homepage images/Group 2.png";
import Rocket from "../../assets/softwareprocess/rocket 1.png";
import Discover from "../../assets/softwareprocess/discovery 1.png";
import Design from "../../assets/softwareprocess/graphic-design 1.png";
import Build from "../../assets/softwareprocess/build 1.png";

import ClientReview from "./ClientReview";
import HomeSlider from "./HomeSlider";
import Work from "./WorkSlider";
import Menu from "./Menu";
import Client from "./ClientSlider";
import CountUp from "./CountUp";

const Home = () => {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/1 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-medium text-gray-800 py-2 pt-10">
          Ensuring excellence in PMI-PMP®{" "}
            <span className="text-amber-500 font-medium">
              <Typewriter
                words={["Training Initiatives", "Training Initiatives"]}
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl py-6 font-semibold text-gray-800">
            Transform your business into the digital age by embracing our
            cutting-edge development solutions
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl py-6 text-gray-600 leading-10 text-center">
            Skylartech, a distinguished company specializing in mobile and web
            app development, prioritizes intelligent technologies and ensuring
            utmost customer contentment. Established in 2014, our firm has
            consistently provided top-notch solutions to businesses worldwide,
            achieving a remarkable 100% success rate. Benefit from our skilled
            team's services at budget-friendly rates and equip your company with
            the perfect technological solutions it needs.
          </p>
          <ul className="flex justify-center">
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

      {/* services we Offer  */}
      <div>
        <h1 className="text-4xl font-bold text-black text-center mt-12">
          Offered Expertise
        </h1>
      </div>

      <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
        <div className="lg:w-1/3 service-section">
          <div className="text-left shadow-xs p-10 rounded-xl">
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
                src={SoftwareDevelopment}
                style={{ marginLeft: "11px" }}
                alt="sd"
              />
            </div>
            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Custom Software Development
            </h3>
            <p className="max-w-sm py-5 leading-6 text-gray-800">
              Experience the power of tailor-made software development
              solutions. Our team crafts custom software solutions from the
              ground up, perfectly tailored to suit the distinct requirements of
              your users or organization. Leverage our expertise in custom
              software development to build fast-growing and scalable products
              that cater to your clients' needs and drive success for your
              business.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 service-section">
          <div className="text-left shadow-xs p-10 rounded-xl">
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
                src={DiscoveryWorkshop}
                style={{ marginLeft: "11px" }}
                alt="dw"
              />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Requirements Gathering Session
            </h3>
            <p className="max-w-sm py-5 leading-6 text-gray-800">
              We build software completely from the beginning, perfectly aligned
              with the specific requirements of your users or organization.
              Utilizing our specialized custom software development services,
              you have the opportunity to develop fast-growing and easily
              expandable products that cater precisely to your clients' needs.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 service-section">
          <div className="text-left shadow-xs p-10 rounded-xl">
            <div
              style={{
                width: "62px",
                height: "60px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                background: "#F5F5F5",
              }}
            >
              <img
                src={UserExperience}
                style={{ marginLeft: "9px" }}
                alt="ue"
              />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              UX/UI Design
            </h3>
            <p className="max-w-sm py-5 leading-6 text-gray-800">
              Our team specializes in crafting exceptional user experiences and
              intuitive designs. We start by understanding the distinctive
              requirements of your users or organization and then proceed to
              create software from scratch that perfectly aligns with those
              needs. By leveraging our custom software development services, you
              can produce rapid and scalable products that cater precisely to
              your clients' demands.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 service-section">
          <div className="text-left shadow-xs p-10 rounded-xl">
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
              <img src={Iot} style={{ marginLeft: "11px" }} alt="iot" />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Internet of Things (IoT)
            </h3>
            <p className="max-w-sm py-5 leading-6 text-gray-800">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 service-section">
          <div className="text-left shadow-xs p-10 rounded-xl">
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
              <img src={Support} style={{ marginLeft: "11px" }} alt="sup" />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Support and Maintenance
            </h3>
            <p className="max-w-sm py-5 leading-6 text-gray-800">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 service-section">
          <div className="text-left shadow-xs p-10 rounded-xl">
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
              <img src={Web} style={{ marginLeft: "11px" }} alt="web" />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Web & Mobile App Development
            </h3>
            <p className="max-w-sm py-5 leading-6 text-gray-800">
              We design and create software from scratch to fit the unique needs
              of your users or organization. With the help of our custom
              software development services, you can create fast-growing and
              scalable products for your clients.
            </p>
          </div>
        </div>
      </div>

      {/*our expertise */}

      <div
        div
        className="bg-amber-50 flex flex-col justify-center items-center"
      >
        <h1 className="pt-12 text-4xl text-black text-center font-semibold">
          Our Expertise
        </h1>
        <h3 className="text-lg text-gray-900 mx-auto max-w-2xl font-semibold py-6">
          We excel in providing cutting-edge solutions and development services
          that drive business performance, cultivate startups, and accelerate
          growth.
        </h3>
        <div className="lg:flex lg:flex-row lg:justify-between flex-col gap-10 px-10">
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Enterprise Solutions
            </h1>
            <p className="text-left text-gray-800 text-md pb-4 max-w-xs lg:text-md">
              We offer our clients a wide variety of modern platform solutions
              that they can leverage for the management and growth of their
              company. Our enterprise solutions include platforms such as the
              following
            </p>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>SharePoint</li>
              <li>Workday</li>
              <li>Salesforce</li>
              <li>AWS</li>
              <li>Shopify</li>
            </ul>
          </div>
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Industry Solutions
            </h1>
            <p className="text-left text-gray-800 text-md pb-4 max-w-xs lg:text-md">
              We ensure to have hands-on experience with the latest technology
              trends in the industry to offer the most transformative business
              solutions to our customers. Our stack of industry solutions covers
              the following novel technologies:
            </p>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>Data Science</li>
              <li>AR/VR</li>
              <li>AI & ML</li>
              <li>IoT</li>
              <li>Blockchain</li>
            </ul>
          </div>
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Software Development
            </h1>
            <p className="text-left text-gray-800 text-md pb-4 max-w-xs lg:text-md">
              Our expertise lies in providing top-quality software development
              services to businesses like start-ups, SEMs, and global
              enterprises. We are known for delivering exceptional tech
              solutions experiences to our customers. We offer the following:
            </p>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>Web and App development</li>
              <li>Custom Software Development</li>
              <li>UI/UX Design</li>
              <li>DevOps</li>
              <li>QA/Testing</li>
            </ul>
          </div>
        </div>
      </div>

      <Client />

      <HomeSlider />

      <Menu />

      <Work />

      {/*software development process */}
      <div className="pt-5 ">
        <h1 className="font-semibold text-3xl text-center">
          We Simplify Software{" "}
          <span className="text-amber-500">Development Process</span>
        </h1>
      </div>
      <div className="container  mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex flex-wrap ml-20 justify-center items-center pb-10 mt-8 px-4 sm:px-2 md:px-16">
          <div className="pt-5 text-center w-full sm:w-64 h-80 mb-8 sm:mb-0 sm:mr-4 md:mr-0">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              className="pr-4"
            >
              <div />
              <div className="pb-4 pr-4">
                <img src={Discover} style={{ width: "3rem" }} alt="discover" />
              </div>
              <div
                style={{ flex: 1, height: "1px", border: "1px dashed #6A1B9A" }}
                className="hidden lg:block"
              />
            </div>

            <div className="pb-6">
              <h4 className="font-medium text-xl text-left text-amber-500">
                Discover
              </h4>
            </div>
            <div className="text-center">
              <p className="text-left" style={{ maxWidth: "12rem" }}>
                We shape brands through exploration, applying in-depth research,
                and with the consultation of the client to produce the best
                outcomes.
              </p>
            </div>
          </div>
          <div className="pt-5 text-center w-64 h-80 mb-8 sm:mb-0 sm:mr-4 md:mr-0">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              className="pr-4 "
            >
              <div />
              <div className="pb-4 pr-4">
                <img src={Design} style={{ width: "3rem" }} alt="design" />
              </div>
              <div
                style={{ flex: 1, height: "1px", border: "1px dashed #FFC107" }}
                className="hidden lg:block"
              />
            </div>

            <div className="pb-6">
              <h4 className="font-medium text-xl text-left text-amber-500">
                Design
              </h4>
            </div>
            <div>
              <p className="text-left" style={{ maxWidth: "12rem" }}>
                All our designs ensure an easy and unique interface that will
                allow customers to easily navigate apps. We embrace the joy in
                creating something unique.
              </p>
            </div>
          </div>
          <div className="pt-5 text-center w-64 h-80 mb-8 sm:mb-0 sm:mr-4 md:mr-0">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              className="pr-4"
            >
              <div />
              <div className="pb-4 pr-4">
                <img src={Build} style={{ width: "3rem" }} alt="build" />
              </div>
              <div
                style={{ flex: 1, height: "1px", border: "1px dashed #4CAF50" }}
                className="hidden lg:block"
              />
            </div>
            <div className="pb-6">
              <h4 className="font-medium text-xl text-left text-amber-500">
                Build
              </h4>
            </div>
            <div>
              <p className="text-left" style={{ maxWidth: "12rem" }}>
                We apply our efficiency and skills to create flexible and
                scalable business-driven solutions using modern technologies.{" "}
              </p>
            </div>
          </div>
          <div className="pt-5 text-center w-64 h-80 mb-8 sm:mb-0 sm:mr-4 md:mr-0">
            <div className="pb-4">
              <img src={Rocket} style={{ width: "3rem" }} alt="deliver" />
            </div>
            <div className="pb-6">
              <h4 className="font-medium text-xl text-left text-amber-500">
                Deliver
              </h4>
            </div>
            <div>
              <p className="text-left" style={{ maxWidth: "12rem" }}>
                We have achieved excellence in our project deliveries with zero
                compromises on quality and by providing a 100% success rate.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <CountUp />

      <ClientReview/>
    </>
  );
};

export default Home;
