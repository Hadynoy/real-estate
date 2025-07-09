import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const PropertyList = () => {
  const properties = [
    { image: "/assets/18.avif", count: 13, location: "New York", hot: true },
    { image: "/assets/19.avif", count: 8, location: "Los Angeles" },
    { image: "/assets/20.avif", count: 21, location: "Chicago", hot: true },
    { image: "/assets/21.avif", count: 5, location: "Miami" },
    { image: "/assets/22.avif", count: 17, location: "Dallas" },
    { image: "/assets/23.avif", count: 9, location: "San Diego", hot: true },
    { image: "/assets/24.avif", count: 11, location: "Atlanta" },
  ];

  const topProperties = [...properties.slice(0, 3), ...properties.slice(0, 3)];
  const bottomProperties = [...properties.slice(3, 7), ...properties.slice(3, 7)];

  const renderCard = (item, i) => (
    <div
      className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 mx-2 group transition-transform duration-500 group-hover:scale-[1.03]"
      key={i}
    >
      {/* Hot badge */}
      {item.hot && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg z-10 pulse-glow shine-text">
          🔥 Hot Property
        </div>
      )}

      <img
        src={item.image}
        alt={`Property ${i + 1}`}
        className="w-full h-64 object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
        loading="lazy"
      />

      {/* Enhanced frosted glass hover overlay */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          bg-white/20 backdrop-blur-[6px] shadow-inner shadow-white/10
          text-white
          px-4 py-6
          rounded-t-lg
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
          flex flex-col items-center gap-2
          pointer-events-none
        "
      >
        <div className="text-lg font-semibold group-hover:text-[#0a0f1c] transition-colors duration-300">
          {item.count} Properties
        </div>
        <div className="text-sm text-green-300 group-hover:text-[#0a0f1c] transition-colors duration-300">
          {item.location}
        </div>
        <button className="mt-2 flex items-center gap-2 bg-transparent border border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a2a44] px-4 py-1 rounded-full text-sm font-semibold transition-colors pointer-events-auto">
          <span className="group-hover:tracking-wider transition-all duration-300">
            View Details
          </span>{" "}
          <span className="text-green-300 group-hover:text-[#1a2a44] transition-colors duration-300">
            ↑
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative bg-[#0a0f1c]  py-16 overflow-hidden">
      {/* 💡 Glowing Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top-left glow */}
        <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] bg-green-300 rounded-full blur-[160px] opacity-20" />

        {/* Bottom-right glow */}
        <div className="absolute bottom-[-100px] right-[-150px] w-[600px] h-[600px] bg-amber-300 rounded-full blur-[200px] opacity-10" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-white to-amber-50 opacity-30" />
      </div>

      {/* Top Swiper sliding LEFT */}
      <div className="-mx-4 md:-mx-12 mb-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={0}
          loop
          speed={1200}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
        >
          {topProperties.map((item, i) => (
            <SwiperSlide key={`top-${i}`}>{renderCard(item, i)}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Swiper sliding RIGHT */}
      <div className="-mx-4 md:-mx-12">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={0}
          loop
          speed={1200}
          autoplay={{
            delay: 2000,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          className="swiper-rtl"
        >
          {bottomProperties.map((item, i) => (
            <SwiperSlide key={`bottom-${i}`}>{renderCard(item, i)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PropertyList;
