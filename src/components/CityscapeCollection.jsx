import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BedDouble,
  Bath,
  Ruler,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const properties = [
  {
    id: 1,
    image: "/assets/13.avif",
    name: "Palm Residences",
    price: "$1,250,000",
    address: "Adeola Odeku Street - Victoria Island",
    sqft: "2,350",
    bed: 4,
    bath: 3,
  },
  {
    id: 2,
    image: "/assets/14.avif",
    name: "Skyline Estate",
    price: "$950,000",
    address: "Mobolaji Bank Anthony Way - Maryland",
    sqft: "1,980",
    bed: 3,
    bath: 2,
  },
  {
    id: 3,
    image: "/assets/15.avif",
    name: "Metropolitan Villa",
    price: "$1,750,000",
    address: "Pedro Road - Bariga",
    sqft: "2,800",
    bed: 5,
    bath: 4,
  },
  {
    id: 4,
    image: "/assets/16.avif",
    name: "Coastal Haven",
    price: "$1,100,000",
    address: "Kudirat Abiola Way - Oregun",
    sqft: "2,100",
    bed: 3,
    bath: 2,
  },
  {
    id: 5,
    image: "/assets/17.avif",
    name: "Urban Oasis",
    price: "$880,000",
    address: "Ogudu Road, Ojota",
    sqft: "1,700",
    bed: 2,
    bath: 2,
  },
];

const CityscapeCollection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navigationPrevEl, setNavigationPrevEl] = useState(null);
  const [navigationNextEl, setNavigationNextEl] = useState(null);

  // This ensures swiper attaches the buttons once refs are set
  const onSwiperInit = useCallback(
    (swiper) => {
      if (navigationPrevEl && navigationNextEl) {
        swiper.params.navigation.prevEl = navigationPrevEl;
        swiper.params.navigation.nextEl = navigationNextEl;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    },
    [navigationPrevEl, navigationNextEl]
  );

  return (
    <section className="relative bg-[#0a0f1c] text-white py-32 overflow-hidden">
      <style>{`
        .custom-bullet {
          background-color: #d4af37 !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 9999px;
          opacity: 0.5;
          transition: all 0.3s ease;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active.custom-bullet {
          width: 14px !important;
          height: 14px !important;
          opacity: 1;
        }
      `}</style>

      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[200px] opacity-10" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-4 mb-16 px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
          <span className="w-8 h-px bg-[#d4af37]" />
          <Home size={20} className="text-[#d4af37] animate-pulse" />
          <span className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-serif font-medium whitespace-nowrap">
            Cityscape Collection
          </span>
          <Home size={20} className="text-[#d4af37] animate-pulse" />
          <span className="w-8 h-px bg-[#d4af37]" />
        </div>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      </div>

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop
          speed={1200}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ prevEl: navigationPrevEl, nextEl: navigationNextEl }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet"></span>`,
          }}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={onSwiperInit}
          className="px-4"
        >
          {properties.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#1a2a44]/30 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-[#d4af37]/20 group transition-all duration-500 hover:shadow-xl hover:border-[#d4af37]/40">
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-[#d4af37] text-[#0a0f1c] text-xs font-serif font-semibold px-4 py-1.5 rounded-full shadow-md z-10">
                    {item.price}
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-1.5">{item.name}</h3>
                  <p className="text-sm text-white/70 mb-4 font-serif">{item.address}</p>
                  <div className="flex items-center justify-between text-sm text-white/80 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Ruler size={16} className="text-[#d4af37]" /> {item.sqft} sqft
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={16} className="text-[#d4af37]" /> {item.bed} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath size={16} className="text-[#d4af37]" /> {item.bath} Baths
                    </span>
                  </div>
                  <Link
                    to={`/property/${item.id}`}
                    className="inline-block text-sm font-serif font-medium text-white bg-transparent border-2 border-[#d4af37] px-6 py-2.5 rounded-full hover:bg-[#d4af37] hover:text-[#0a0f1c] transition-colors text-center w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrows */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <button
            ref={setNavigationPrevEl}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1a2a44]/50 hover:bg-[#1a2a44] transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} className="text-white group-hover:text-[#d4af37]" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <button
            ref={setNavigationNextEl}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1a2a44]/50 hover:bg-[#1a2a44] transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight size={20} className="text-white group-hover:text-[#d4af37]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CityscapeCollection;
