import React from "react";
import Quotations from "../../assets/Homepage images/Quotationmark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientReview = () => {
  const slider = [
    {
      review:
        "It was a great experience training with Skylartech. The instructors were knowledgeable, supportive, and ensured every concept was well understood. The guidance and mentorship throughout the program gave me the confidence I needed to prepare for my certification journey successfully.",
      name: "Susanne Mwaitsi",
    },
    {
      review:
        "I passed the CAPM exam successfully thanks to the excellent training and support from Skylartech. The lessons were practical, engaging, and well structured. The team was always available to answer questions and provide encouragement throughout the preparation process.",
      name: "Brice Seri",
    },
    {
      review:
        "Thank you Skylartech for the professionalism, support, and mentorship during my training journey. The learning environment was excellent, and the trainers simplified complex project management concepts in a very practical and understandable way.",
      name: "Rachael Njoki",
    },
    {
      review:
        "Great support from the trainers and the entire Skylartech team. The sessions were interactive, insightful, and highly practical. I gained valuable knowledge that I have already started applying in my professional work environment.",
      name: "John Njenga",
    },
    {
      review:
        "Thank you Skylartech for the outstanding guidance and commitment to student success. The training materials, mentorship, and exam preparation sessions were extremely helpful and played a major role in my professional growth.",
      name: "Alex Odhiambo",
    },
    {
      review:
        "Thrilled to announce that I successfully completed my training journey with Skylartech. The instructors were supportive, highly experienced, and passionate about helping students succeed. I truly appreciated the structured learning approach.",
      name: "Helga Ries",
    },
    {
      review:
        "Skylartech played a huge part in this success. The support, coaching, and mentorship throughout the program were exceptional. I felt fully prepared and confident during my certification process thanks to the quality of training provided.",
      name: "Branice M. Mengesa",
    },
    {
      review:
        "Great mentorship and an incredible learning experience overall. The trainers were patient, professional, and always willing to provide additional guidance whenever needed. I would highly recommend Skylartech to anyone pursuing project management training.",
      name: "Michael Muthui",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-10 bg-transparent">
      {/* HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Client{" "}
          <span className="text-amber-400">Success Stories</span>
        </h2>

        <p className="text-white/60 mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
          Hear from professionals and organizations that have worked with
          Skylartech across project management training, consulting, and PMO
          transformation initiatives.
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={24}
        loop
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="max-w-7xl mx-auto"
      >
        {slider.map((item, i) => (
     <SwiperSlide key={i} className="h-auto flex">
  <div
    className="
      w-full
      h-[420px] sm:h-[440px] lg:h-[460px]
      flex flex-col
      justify-between
      bg-white/5
      border border-white/10
      rounded-3xl
      p-6 sm:p-7
      text-white
      relative
      overflow-hidden
      backdrop-blur-xl
      transition-all
      duration-300
      hover:bg-white/[0.07]
    "
  >
    {/* GLOW */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 blur-2xl rounded-full" />

    {/* QUOTE ICON */}
    <img
      src={Quotations}
      alt="quotation mark"
      className="w-8 h-8 opacity-70 mb-5"
    />

    {/* REVIEW (CLAMPED FOR CONSISTENCY) */}
    <p className="text-white/80 leading-7 text-sm sm:text-base relative z-10 line-clamp-6">
      “{item.review}”
    </p>

    {/* FOOTER */}
    <div className="mt-8 relative z-10 text-center">
      <div className="flex justify-center text-amber-400 text-lg mb-4">
        ★★★★★
      </div>

      <div>
        <h3 className="font-semibold text-base sm:text-lg">
          {item.name}
        </h3>

        <p className="text-white/50 text-sm mt-1">
          Verified Client Review
        </p>
      </div>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;