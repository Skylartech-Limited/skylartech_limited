import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import SoftwareDevelopment from "../../assets/img.png/computer 1.png";
import DiscoveryWorkshop from "../../assets/img.png/search 1.png";
import UserExperience from "../../assets/img.png/testing 1.png";
import Iot from "../../assets/img.png/Group 4.png";
import Support from "../../assets/img.png/support (1) 1.png";
import Web from "../../assets/img.png/Group 2.png";
import HomepageImage from "../../assets/HomepageImage.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 ">
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
            <span className="text-gray-800">
              <Cursor cursorStyle="~" />
            </span>
          </h2>
          <h1 className="max-w-md text-3xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Digitize Your Business With Our Modern Development Solutions
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Skylartech is a specialized mobile and web app development company
            with a focus on smart technologies and customer satisfaction. Born
            in 2014, our company has been delivering high-end quality solutions
            to global businesses with a success rate of 100%. Hire our expertise
            at affordable prices to have the right tech solutions for your
            company.
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
        <div className="hidden lg:block lg:w-1/2 items-center">
          <img
            className="max-w-full mx-auto h-72 w-90 rounded-lg mt-16"
            src={HomepageImage}
            alt="home"
          />
        </div>
      </div>

      {/* services we Offer  */}
      <div>
        <h1 className="text-4xl font-bold text-black text-center mt-12">
          Services We Provide
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
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
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
              <img
                src={DiscoveryWorkshop}
                 style={{ marginLeft: "11px" }}
                alt="dw"
              />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Discovery Workshop
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
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
              <img
                src={UserExperience}
                 style={{ marginLeft: "9px" }}
                alt="ue"
              />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              User Experience and Design
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
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
              <img
                src={Iot}
                 style={{ marginLeft: "11px" }}
                alt="iot"
              />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Internet of Things (IoT)
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
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
              <img
                src={Support}
                 style={{ marginLeft: "11px" }}
                alt="sup"
              />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Support and Maintenance
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
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
              <img
                src={Web}
                 style={{ marginLeft: "11px" }}
                alt="web"
              />
            </div>

            <h3 className="text-2xl font-bold max-w-xs text-gray-800">
              Web & Mobile App Development
            </h3>
            <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
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
      <div className="p-5 h-96">
        <h1 className="font-semibold text-4xl text-center mt-10">
          Our <span className="text-amber-500">Clients</span>
        </h1>
        <div className="mt-4">
          <div className="swiper-container mt-24">
            <div className="swiper-wrapper">
              <Swiper
                navigation={true}
                spaceBetween={0}
                modules={[Navigation]}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                direction="horizontal"
                className="flex justify-center"
              >
                <SwiperSlide>
                  <div className="slide-content flex justify-center">
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="1" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="2" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="3" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="4" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="5" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content flex justify-center">
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="6" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="7" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="8" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="9" />
                    <img className="w-4/5 sm:w-2/5" src="image.jpg" alt="10" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
