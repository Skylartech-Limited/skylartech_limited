import React, { useRef, useEffect } from "react";
import Quotations from "../../assets/Homepage images/Quotationmark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ClientReview = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      const interval = setInterval(() => {
        if (swiperInstance.isEnd) {
          swiperInstance.slideTo(0);
        } else {
          swiperInstance.slideNext();
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  const Card = ({ text }) => (
    <div
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 
      min-h-[360px] flex flex-col justify-between relative overflow-hidden h-full"
    >
      {/* Quote bubble */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-blue-500 rounded-full translate-x-10 -translate-y-10 flex items-end justify-start pb-5 pl-5">
        <img src={Quotations} alt="quote" className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <p className="text-gray-600 text-sm sm:text-base leading-7 mt-10 sm:mt-14 font-medium">
          {text}
        </p>

        {/* Stars pinned bottom */}
        <div className="mt-auto pt-6 flex justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <i
              key={i}
              className="fa-solid fa-star text-yellow-400 text-sm mr-1"
            ></i>
          ))}
        </div>
      </div>
    </div>
  );

  const slider = [
    `"It was a great experience to acquire Project Management Training Skills, 23 PDUs with an additional bonus of 24 coaching sessions for exam preparation. The PMI Africa Initiative Program is equipped with a powerful source of support." - Susanne Mwaitsi, CAPM®`,

    `"I passed the CAPM exam 6 days ago. Thank you Coach for your helpful tips, practice and mindset readiness" - Brice Seri, MBA, CAPM®`,

    `"Thank you Skylartech Limited PMP, here I come!" – Rachael Njoki Gachui, CAPM®`,

    `"Thank you Skylartech Limited for the great support on this journey. Good preparations made this possible." – John Njenga, PMP®`,

    `"Thank You Skylartech Limited." - Alex Odhiambo Otieno, CAPM®`,

    `"I'm absolutely thrilled to announce I have successfully passed the CAPM exam. Thank you Skylartech Limited for your mentorship." – Helga Ries, CAPM®`,

    `"Thanks, Skylartech Limited for your partnership in this journey. You are a huge part of this success!" – Branice M. Mengesa, PMP®`,

    `"Thank you Skylartech Limited for your dedication and support in this success journey." – Michael Muthui, PMP®`,
  ];

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 py-12">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 24 },
        }}
        className="max-w-7xl w-full"
      >
        {slider.map((text, index) => (
          <SwiperSlide key={index} className="h-auto flex">
            <Card text={text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;
