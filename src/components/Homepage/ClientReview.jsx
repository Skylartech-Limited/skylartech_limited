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
    <div className="relative py-20 px-4 sm:px-6 lg:px-10 bg-transparent overflow-hidden">
      {/* PREMIUM ANIMATED BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      {/* HEADING */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight break-words">
          Client{" "}
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] break-words">
            Success Stories
          </span>
        </h2>

        <p className="text-white/70 mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto break-words">
          Hear from professionals and organizations that have worked with
          Skylartech across project management training, project consulting, and
          PMO transformation initiatives.
        </p>

        {/* PREMIUM DIVIDER */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span
              className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>
      </div>

      {/* PREMIUM SLIDER */}
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
        className="relative z-10 max-w-7xl mx-auto"
      >
        {slider.map((item, i) => (
          <SwiperSlide key={i} className="h-auto flex">
            <div
              className="
      w-full
      h-[420px] sm:h-[440px] lg:h-[460px]
      flex flex-col
      justify-between
      bg-gradient-to-br from-white/10 via-white/5 to-transparent
      border border-white/20
      rounded-3xl
      p-6 sm:p-7
      text-white
      relative
      overflow-hidden
      backdrop-blur-xl
      transition-all
      duration-500
      hover:bg-gradient-to-br hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/5
      hover:border-amber-400/30
      hover:shadow-2xl hover:shadow-amber-500/25
      hover:scale-[1.02]
      hover:-translate-y-2
      group
    "
            >
              {/* PREMIUM ANIMATED GLOWS */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 blur-2xl rounded-full group-hover:bg-amber-400/30 transition-all duration-500" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/15 blur-2xl rounded-full group-hover:bg-indigo-500/25 transition-all duration-500" />

              {/* PREMIUM SHIMMER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* PREMIUM PATTERN OVERLAY */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* QUOTE ICON WITH PREMIUM STYLING */}
              <div className="relative z-10">
                <img
                  src={Quotations}
                  alt="quotation mark"
                  className="w-10 h-10 opacity-80 mb-5 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                />
              </div>

              {/* REVIEW (CLAMPED FOR CONSISTENCY) */}
              <p className="text-white/90 leading-7 text-sm sm:text-base relative z-10 line-clamp-6 group-hover:text-white transition-colors duration-300 break-words">
                "{item.review}"
              </p>

              {/* PREMIUM FOOTER */}
              <div className="mt-8 relative z-10 text-center">
                {/* PREMIUM STAR RATING */}
                <div className="flex justify-center text-amber-400 text-lg mb-4 gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className="inline-block transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                      style={{ transitionDelay: `${starIndex * 50}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* PREMIUM DIVIDER */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/50" />
                  <div className="w-1 h-1 rounded-full bg-amber-400" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/50" />
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {item.name}
                  </h3>

                  <p className="text-white/60 text-sm mt-2 flex items-center justify-center gap-1.5 group-hover:text-amber-400/80 transition-colors duration-300">
                    <span className="inline-block">✓</span>
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
