import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Phone from "../../assets/phone.png";
import Frontend from "../../assets/frontend.png";
import Backend from "../../assets/backend.png";
import Cloud from "../../assets/cloud.png";

const Technologies = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 bg-amber-50">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10">
            Features and{" "}
            <span className="text-amber-500 font-medium">
              <Typewriter
                words={["Technologies", "Technologies"]}
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
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-md py-5 text-gray-600">
            We at Skylartech ensure to work with the latest technologies
            available in the market to develop the best products for our
            customers. Our expertise and resources are used to accomplish the
            latest software solutions that comply with high-tech mobile/website
            development frameworks and languages.
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
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center text-black">
          Building Native & Cross Platform{" "}
          <span className="text-3xl font-semibold text-center text-amber-500">
            Mobile Apps
          </span>
        </h1>
        <div className="flex flex-wrap items-start justify-center md:justify-between gap-8 md:gap-20">
          <div className="flex justify-center">
            <img
              src={Phone}
              alt="phone"
              className="h-72 w-90 rounded-lg pb-10"
            />
          </div>
          <div className="flex flex-col justify-start max-w-xs md:max-w-2xl">
            <p className="text-left px-4 md:px-10 pt-8 md:pt-20 text-sm md:text-base">
              We have equipped ourselves with up-to-date mobile app platforms
              for development which include native and cross-platform apps. Our
              purpose is to ensure our customers can find all mobile app
              solutions in one place.
            </p>
            <div className="flex justify-start mt-1">
              <img
                src={Cloud}
                alt="cloud"
                className="rounded-xl w-24 md:w-48 ml-2 md:ml-6 hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10">
          <h1 className="mx-auto text-3xl font-semibold text-center">
            Hire Certified IOS, Android, Flutter
            <span className="text-amber-500">App Developers</span>
          </h1>
        </div>
        <div className="sm:text-center px-10 justify-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                  Consultation with Client
                </h3>
                <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
                  The first step of our process is to establish a meeting with
                  the client and note down their requirements and expectations
                  of the app, figure out the layout and functionalities they are
                  looking for and create wireframes according to them.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                  Prototyping, Wireframes & Mockups
                </h3>
                <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
                  With the app idea, we proceed to the design by creating
                  wireframes, prototypes, and Mockup Apps. This allows users to
                  understand the flow of the app and its basic functionality
                  upon clicking of buttons, scrolls, etc.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                  Custom iOS, Android, Flutter Development
                </h3>
                <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
                  Enhance your existing iOS apps as well as get full maintenance
                  support by our experienced iOS developers, whenever and
                  wherever you need it.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                  UI/UX Design
                </h3>
                <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
                  Wireframes and Prototypes serve as the base for designing
                  compelling user interfaces (UI) with high-functioning user
                  experiences (UX) that show close to the real design of how the
                  actual app will look.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                  Development and Debugging
                </h3>
                <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
                  The designed interfaces allow us to move towards development,
                  where we turn the app ideas into reality with efficient codes
                  and iterative testing to create a bug-free app that performs
                  at its best abilities.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="text-left shadow-xs p-10 rounded-xl">
                <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                  Testing and Cloud Integration
                </h3>
                <p className="text-lg max-w-sm py-5 leading-6 text-gray-800">
                  Once the app is developed, it goes through the quality
                  assurance phase where vigorous testing is performed to
                  eliminate all kinds of errors that may arise during the usage
                  of the app. After completion, our experts help you connect the
                  app with the cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-10 mx-auto">
        <div className="mb-20">
          <h1 className="text-3xl font-semibold text-center">
            Frontend Technologies{" "}
            <span className="text-amber-500">we work with</span>
          </h1>
          <div className="flex flex-wrap items-start justify-center md:justify-between gap-20">
            <div className="flex justify-center">
              <img
                src={Phone}
                alt="phone"
                className="h-72 w-90 rounded-lg pb-10"
              />
            </div>
            <div className="flex flex-col justify-start max-w-2xl">
              <p className="text-left px-10 pt-20" style={{ fontSize: "17px" }}>
                A well-designed UI determines the engagement and interaction of
                customers with the apps. A monotonous UI with poor navigation
                and confusing design can drive your target audience away from
                your website. By using advanced technologies, we certify a
                smooth and attractive user interface that will keep your
                audience hooked.
              </p>
              <div className="flex justify-start mt-1">
                <img
                  src={Frontend}
                  alt="frontend"
                  className="rounded-xl w-48 ml-6 hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h1 className="text-3xl font-semibold text-center">
            Backend Technologies{" "}
            <span className="text-amber-500">we work with</span>
          </h1>
          <div className="flex flex-wrap items-start justify-center md:justify-between gap-20">
            <div className="flex flex-col justify-start max-w-2xl w-full md:w-auto md:flex-initial">
              <p className="text-left px-10 pt-20" style={{ fontSize: "17px" }}>
                A full-cycle software requires a strong and dependable backend
                integration along with an interactive frontend. With the use of
                modern available technologies, our experts make sure to deliver
                solutions that are secure, fast, and reliable and can handle the
                complex functionalities of your desired software.
              </p>
              <div className="flex justify-start mt-1">
                <img
                  src={Backend}
                  alt="backend"
                  className="rounded-xl w-48 ml-6 hidden md:block"
                />
              </div>
            </div>
            <div className="flex justify-start mt-10">
              <img
                src={Phone}
                alt="phone"
                className="h-72 w-90 rounded-lg pb-10"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h1 className="text-3xl font-semibold text-center text-amber-500">
            Cloud{" "}
            <span className="text-3xl font-semibold text-center text-black">
              Technologies we work with
            </span>
          </h1>
          <div className="flex flex-wrap items-start justify-center md:justify-between gap-20">
            <div className="flex justify-center">
              <img
                src={Phone}
                alt="phone"
                className="h-72 w-90 rounded-lg pb-10"
              />
            </div>
            <div className="flex flex-col justify-start max-w-2xl">
              <p className="text-left px-10 pt-20" style={{ fontSize: "17px" }}>
                A well-designed cloud architecture ensures scalability,
                availability, and security for your applications. With our
                expertise in cloud technologies, we can help you harness the
                power of the cloud to optimize your infrastructure, deploy and
                manage applications, and deliver reliable and efficient services
                to your users.
              </p>
              <div className="flex justify-start mt-1">
                <img
                  src={Cloud}
                  alt="cloud"
                  className="rounded-xl w-48 ml-6 hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Technologies;
