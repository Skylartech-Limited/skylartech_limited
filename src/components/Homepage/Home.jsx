import React from "react";
import { Helmet } from "react-helmet";
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
import PMPTeacher from "../../assets/Homepage images/PMPTEACHER.png";
// import Logo from "../../assets/Logo.png";

import ClientReview from "./ClientReview";
import HomeSlider from "./HomeSlider";
// import Work from "./WorkSlider";
import Menu from "./Menu";
import Client from "./ClientSlider";
import CountUp from "./CountUp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Skylartech Limited | PMI partner</title>
        <meta
          name="description"
          content="Skylartech Limited, a trusted PMI partner, offering comprehensive tech solutions in Kenya. Visit us at skylartech.co.ke"
        />
        <meta
          name="keywords"
          content="Skylartech, PMI partner, tech solutions, Kenya, software development"
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
            Transform your business into the digital age with <br />Skylartech’s
            practical, tech-driven, and leadership-centered solutions.
          </span>
        </h1>

        <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">About Us: Who We Are</h3>
          <p className="mb-4">
            We are a dynamic business operating at the intersection of project management consulting, leadership development, and technology — developing solutions, implementing systems, and building capacity for long-term sustainability.
          </p>
          <p className="mb-4">
            As an Authorized Training Partner (ATP) of the Project Management Institute (PMI), we deliver globally recognized certification programs that empower professionals and institutions to lead change and deliver value across Africa and beyond.
          </p>
          <p className="mb-4">
            Our mission is to advance excellence through practical, context-relevant training and consulting solutions tailored to the evolving needs of leaders, development practitioners, and organizations.
          </p>
          <p className="mb-4">
            Since our establishment in 2014, we’ve served businesses worldwide with a 100% success rate, combining world-class consulting, agile software development, and capacity building to help our clients lead and thrive in a fast-changing world.
          </p>
        </section>

        <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">
            Our Value Proposition: Driving Transformation Across People, Processes, and Technology
          </h3>

          <p className="mb-2">
            <strong className="text-gray-800">People:</strong> We prioritize human-centered design, ensuring that our solutions are both innovative and user-centric. Through skills development, coaching, and leadership training, we empower teams to lead change, collaborate effectively, and inspire high performance.
          </p>

          <p className="mb-2">
            <strong className="text-gray-800">Processes:</strong> We help organizations streamline workflows, improve agility, and reduce complexity. Using proven project management methodologies (PMP®, Agile, Scrum), we align every phase of delivery with strategic goals—balancing time, cost, and quality.
          </p>

          <p className="mb-2">
            <strong className="text-gray-800">Technology:</strong> At Skylartech, we are at the forefront of mobile and web application development, integrating intelligent technologies to provide scalable, future-proof digital solutions that meet real business needs.
          </p>
        </section>

        <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Our Project Management Approach</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-gray-800">Clear Communication –</strong> Transparent stakeholder engagement at every phase.
            </li>
            <li>
              <strong className="text-gray-800">Tailored Solutions –</strong> Every project is uniquely crafted to meet specific client needs.
            </li>
            <li>
              <strong className="text-gray-800">Risk Management –</strong> Proactive identification and mitigation of risks from day one.
            </li>
            <li>
              <strong className="text-gray-800">Agile Methodology –</strong> Adaptive, iterative delivery that incorporates client feedback.
            </li>
            <li>
              <strong className="text-gray-800">Continuous Monitoring & Improvement –</strong> Real-time tracking for quality and efficiency.
            </li>
          </ul>
        </section>

        <div className="flex justify-center mt-8 mb-8">
          <Link to="/contact-us">
            <motion.button
              className="border-2 border-purple-500 bg-white hover:bg-violet-400 text-black px-6 py-2 rounded-xl text-lg"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
            >
              Let's Talk
              <span className="ml-2 text-xl transform scale-125">&#8594;</span>
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
