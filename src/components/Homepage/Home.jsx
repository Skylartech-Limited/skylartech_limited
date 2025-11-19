import React, { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

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
import PMPTeacher from "../../assets/Homepage images/PMPTEACHER.png";
import Cert1 from "../../assets/Homepage images/Cert1.jpg";
import Cert2 from "../../assets/Homepage images/Cert2.jpg";
import Cert3 from "../../assets/Homepage images/Cert3.jpg";
import Cert4 from "../../assets/Homepage images/Cert4.jpg";
import GroupPhoto from "../../assets/Homepage images/GroupPhoto.png";

import ClientReview from "./ClientReview";
import HomeSlider from "./HomeSlider";
import Menu from "./Menu";
import Client from "./ClientSlider";
import CountUp from "./CountUp";

const Home = () => {
const images = [Cert1, Cert2, Cert3, Cert4];

const [index, setIndex] = useState(0);

// Auto-slide effect
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <>
      <Helmet>
        <title>Skylartech Limited | PMI Partner</title>
        <meta
          name="description"
          content="Skylartech Limited, a trusted PMI Partner, offering comprehensive tech solutions in Kenya. Visit us at skylartech.co.ke"
        />
        <meta
          name="keywords"
          content="Skylartech, PMI Partner, Tech Solutions, Kenya, Software Development"
        />

        <link rel="canonical" href="https://skylartech.co.ke" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-4/5">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 py-6 text-center">
            Leading the Future of
            <span
              className="font-medium"
              style={{
                background:
                  "linear-gradient(to right, violet, indigo, blue, green, #f1c40f, orange, red)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <Typewriter
                words={[" Project Management"]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="text-gray-800">
              <Cursor cursorStyle="" />
            </span>
          </h2>

          <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl py-6 font-semibold text-gray-800 text-center">
            Driving Powerful Transformation Across People, Processes and
            Technology for Exceptional Results
            <br />
            <span className="text-lg md:text-xl lg:text-2xl text-gray-600 block mt-8">
              Transform your business into the digital age with <br />
              Skylartech’s practical, tech-driven, and leadership-centered
              solutions.
            </span>
          </h1>

          <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
              Who We Are
            </h3>
            <p className="mb-6">
              We specialize in project management consulting, leadership
              development, and technology integration. We empower professionals
              to lead change through world-class certifications, capacity
              building, and agile systems implementation.
            </p>

            {/* Auto-sliding enlarged slideshow */}
            <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto mt-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={`Certificate ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
              </AnimatePresence>
            </div>
          </section>

          <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              What We Do
            </h3>

            <ul className=" space-y-4">
              <li>
                We build leadership and team capacity through coaching,
                training, and human-centered design.
              </li>
              <li>
                We streamline workflows using PMP®, Agile, and Scrum to deliver
                results aligned with your strategy.
              </li>
              <li>
                We develop scalable digital solutions—from mobile apps to
                intelligent platforms—that support business growth.
              </li>
            </ul>
            <img
              src={GroupPhoto}
              alt="What We Do"
              className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto mb-6 mt-8 rounded-lg shadow"
            />
          </section>

          <div className="flex justify-center mt-8 mb-8">
            <Link to="/contact-us">
              <motion.button
                className="border-2 border-purple-500 bg-white hover:bg-violet-400 text-black px-6 py-2 rounded-xl text-lg"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              >
                Let's Talk
                <span className="ml-2 text-xl transform scale-125">
                  &#8594;
                </span>
              </motion.button>
            </Link>
          </div>
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

      <div className="bg-amber-50 flex flex-col justify-center items-center">
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

      <div className="flex justify-center mb-10">
        {/* Here, you can adjust the classes to fit your desired size */}
        <img src={PMPTeacher} alt="PMPTEACHER" className="w-6/12 h-auto" />
      </div>
      {/* <Work /> */}

      {/*software development process */}

      <div className="container  mx-auto px-4 sm:px-8 md:px-16">
        {" "}
        <div className="pt-5 ">
          <h1 className="font-semibold text-3xl text-center">
            We Simplify Software{" "}
            <span className="text-amber-500">Development Process</span>
          </h1>
        </div>
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

      <ClientReview />
    </>
  );
};

export default Home;
