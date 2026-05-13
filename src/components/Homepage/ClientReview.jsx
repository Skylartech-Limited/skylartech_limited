import React from "react";
import Quotations from "../../assets/Homepage images/Quotationmark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientReview = () => {
  const slider = [
    `"It was a great experience..." - Susanne Mwaitsi`,
    `"I passed the CAPM exam..." - Brice Seri`,
    `"Thank you Skylartech..." – Rachael Njoki`,
    `"Great support..." – John Njenga`,
    `"Thank You Skylartech..." - Alex Odhiambo`,
    `"Thrilled to announce..." – Helga Ries`,
    `"Huge part of this success!" – Branice M. Mengesa`,
    `"Great mentorship..." – Michael Muthui`,
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-10 bg-transparent">

      <h2 className="text-center text-3xl sm:text-4xl font-semibold text-white mb-12">
        Client <span className="text-amber-400">Success Stories</span>
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
          <SwiperSlide key={i}>
            <div className="h-[320px] flex flex-col justify-between bg-white/5 border border-white/10 rounded-3xl p-6 text-white relative overflow-hidden">

              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 blur-2xl rounded-full" />

              <img src={Quotations} alt="quoatations" className="w-8 h-8 opacity-70 mb-4" />

              <p className="text-white/80 leading-7 text-sm sm:text-base">
                {text}
              </p>

              <div className="mt-6 flex justify-center text-amber-400 text-lg">
                ★★★★★
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;