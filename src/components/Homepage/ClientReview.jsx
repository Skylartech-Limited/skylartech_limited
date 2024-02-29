import React, { useRef, useEffect } from "react";
import Quotations from "../../assets/Homepage images/Quotationmark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

const ClientReview = () => {
  const slider = [
    // Slide 1
    <div className="card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          "It was a great experience to acquire Project Management Training
          Skills, 23 PDUs with an additional bonus of 24 coaching sessions for
          exam preparation. The PMI Africa Initiative Program is equipped with a
          powerful source of support. " - Susanne Mwaitsi, CAPM®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,

    // Slide 2
    <div className=" card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          "I passed the CAPM exam 6 days ago. Thank you Coach (my lovely coach)
          for your helpful tips, practice and mindset readiness" - Brice Seri,
          MBA, CAPM®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,

    // Slide 3
    <div className=" card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          "Thank you Skylartech Limited PMP, here I come!" – Rachael Njoki
          Gachui, CAPM®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    //Slide 4
    <div className=" card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          "Thank you Skylartech Limited for the great support on this journey.
          good preparations made this possible, indebted for your efforts." –
          John Njenga, PMP®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    //Slide 5
    <div className=" card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          "Thank You Skylartech Limited."- Alex Odhiambo Otieno, CAPM®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    //Slide 6
    <div className=" card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          "I'm absolutely thrilled to announce that I have successfully passed
          the CAPM exam and achieved certification from the esteemed Project
          Management Institute. Thank you Skylartech Limited for being an
          essential part of my success story. Your dedication and mentorship
          have made a lasting impact, and I will carry the lessons learned with
          me throughout my career. "“- Helga Ries, CAPM®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    //Slide 7
    <div className=" card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          "Thanks, Skylartech Limited for your partnership in this journey. You
          are a huge part of this success!"- Branice M. Mengesa, PMP®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    //Slide 8,
    <div className=" card text-center p-4 lg:p-[30px] bg-slate-50 rounded-xl sm:h-[400px] md:h-[450px] lg:h-[341px] lg:w-[546px] relative overflow-hidden">
      <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500 rounded-full -translate-y-12">
        <img
          src={Quotations}
          alt="Quotations"
          className="w-[32px] h-[32px] mt-16 ml-5"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <p className="text-slate-500 text-md mx-auto mt-20 font-semibold">
          Thank you Skylartech Limited for being such a dedicated partner in
          this pursuit. Your commitment in making sure this turns out so
          successful, on time and budget is outstanding. I'm happy our paths
          crossed Joan Chepkemoi, Instructor Coach, PMP Trainer, Exam Prep
          Coach“- Michael Muthui, PMP®
        </p>
        <ul className="flex mt-6 mb-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index}>
              <i
                className="fa-solid fa-star fa-sm mr-2"
                style={{ color: "#FFEA00" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>,
  ];

  const swiperRef = useRef(null); // Declare swiperRef here

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      // Start the auto-slide interval
      const interval = setInterval(() => {
        // Check if we are on the last slide
        if (swiperInstance.activeIndex === swiperInstance.slides.length - 1) {
          // If on the last slide, update and move to the first slide immediately
          swiperInstance.update();
          swiperInstance.slideTo(0, 0, true);
        } else {
          // Otherwise, move to the next slide
          swiperInstance.slideNext();
        }
      }, 5000);

      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="flex justify-center mb-16 lg:-mt-28 xl:-mt-28">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={4}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        }}
        className="max-w-[1150px] lg:h-[341.2px]"
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index} className="px-2 md:px-4">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;
