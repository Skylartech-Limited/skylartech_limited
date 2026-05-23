import React from "react";
import Quotations from "../../assets/Homepage images/Quotationmark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientReview = () => {
const slider = [
  {
    review:
      "Before joining Skylartech, I was unsure about structured project management practices. After completing the PMP® training, I successfully transitioned into a regional PMO leadership role overseeing multi-country project delivery and governance.",
    name: "Susanne Mwaitsi",
  },
  {
    review:
      "I passed my CAPM® exam on the first attempt after completing the Skylartech program. The mock exams and structured revision plan helped me improve my readiness and confidence significantly.",
    name: "Brice Seri",
  },
  {
    review:
      "The training helped me shift from theoretical understanding to practical application. I immediately applied the tools at work and improved project clarity and stakeholder communication across my team.",
    name: "Rachael Njoki",
  },
  {
    review:
      "After the training, I started applying structured planning techniques that reduced project delays by improving task visibility and coordination across departments.",
    name: "John Njenga",
  },
  {
    review:
      "The PMP® preparation program strengthened my exam readiness through realistic practice tests and mentorship. I was able to pass confidently and progress in my project management career.",
    name: "Alex Odhiambo",
  },
  {
    review:
      "I completed my certification journey with Skylartech and gained a much stronger understanding of agile and hybrid project environments, which I now use in my daily work.",
    name: "Helga Ries",
  },
  {
    review:
      "The mentorship and structured training approach helped me move from junior project coordination into a more strategic project role within my organization.",
    name: "Branice M. Mengesa",
  },
  {
    review:
      "The sessions improved my practical project management skills and gave me frameworks I now use to manage timelines, risks, and stakeholder expectations more effectively.",
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
          Skylartech across project management training, project consulting, and PMO
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