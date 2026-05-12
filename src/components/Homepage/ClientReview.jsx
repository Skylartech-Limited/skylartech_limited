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
    <div className="py-20 px-4 sm:px-6 lg:px-10 bg-transparent">
      
      {/* HEADER */}
      <h2 className="text-center text-3xl sm:text-4xl font-semibold text-white mb-12">
        Client <span className="text-amber-400">Success Stories</span>
      </h2>

      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        loop
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="max-w-6xl mx-auto"
      >
        {slider.map((text, i) => (
          <SwiperSlide key={i} className="h-auto flex">
            
            {/* CARD (FORCED EQUAL HEIGHT) */}
            <div className="h-[320px] w-full flex flex-col justify-between
              bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">

              {/* decorative glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 
                bg-amber-400/20 blur-2xl rounded-full" />

              {/* QUOTE ICON */}
              <img
                src={Quotations}
                alt="quote"
                className="w-8 h-8 opacity-70 mb-4"
              />

              {/* TEXT (fixed area so height doesn't change) */}
              <div className="flex-1 overflow-hidden">
                <p className="text-white/80 leading-7 text-sm sm:text-base">
                  {text}
                </p>
              </div>

              {/* STARS */}
              <div className="mt-6 flex justify-center">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;