import React from 'react';
import { Star, Home, StarHalf } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    name: 'James Carter',
    role: 'Home Buyer',
    company: 'Tech Executive',
    quote:
      'Absolutely the best experience I\'ve had with a real estate team. They guided me from start to finish and made the process stress-free!',
    image: '/assets/33.avif',
    rating: 4,
  },
  {
    name: 'Sarah Johnson',
    role: 'Investor',
    company: 'Real Estate Portfolio Manager',
    quote:
      'Professional, knowledgeable, and genuinely cared about helping me find the right investment. Highly recommend them.',
    image: '/assets/34.avif',
    rating: 4.5,
  },
  {
    name: 'Linda Martinez',
    role: 'First-Time Buyer',
    company: 'Interior Designer',
    quote:
      'They truly care about their clients. They made the experience of buying my first home incredibly smooth and enjoyable.',
    image: '/assets/35.avif',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Seller',
    company: 'Entrepreneur',
    quote:
      'Quick, efficient, and transparent. I sold my property at a great price and felt supported every step of the way.',
    image: '/assets/36.avif',
    rating: 4.5,
  },
];

const CustomerTestimonial = () => {
  return (
    <section className="relative bg-[#0a0f1c] text-white py-32 -mt-18 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4af37\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-6 text-center md:text-left w-full">
              <span className="w-8 h-px bg-[#d4af37]"></span>
              <Home size={18} className="text-[#d4af37] animate-pulse hidden md:inline-block" />
              <span className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-medium whitespace-nowrap text-center">
                Customer Testimonial
              </span>
              <Home size={18} className="text-[#d4af37] animate-pulse hidden md:inline-block" />
              <span className="w-8 h-px bg-[#d4af37]"></span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 tracking-tight">
              Hear From Happy <br />
              <span className="text-[#d4af37]">Homeowners</span>
            </h2>
            <p className="text-gray-400 max-w-xl mb-16 text-lg leading-relaxed">
              Real words from real people — stories of trust, service, and the joy of finding the perfect home, shared by those who experienced it firsthand.
            </p>
            <div className="flex flex-col items-start gap-4 mb-8">
              <div className="flex -space-x-3">
                <img src="/assets/img1.png" alt="avatar1" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <img src="/assets/img2.png" alt="avatar2" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <img src="/assets/img3.png" alt="avatar3" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <div className="w-12 h-12 rounded-full bg-[#d4af37] text-[#0a0f1c] flex items-center justify-center text-sm font-semibold border-2 border-white shadow-md">
                  +10k
                </div>
              </div>
              <div className="flex items-end">
                <span className="text-4xl font-bold text-white">25k+</span>
                <span className="text-gray-400 ml-2 text-lg">client reviews</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4">
              <Swiper
                modules={[Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 20,
                  stretch: 0,
                  depth: 120,
                  modifier: 1,
                  slideShadows: false,
                }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={false}
                loop={true}
                speed={1200}
                spaceBetween={40}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 1.2,
                  },
                }}
              >
                {testimonials.map((testimonial, index) => {
                  const fullStars = Math.floor(testimonial.rating);
                  const hasHalfStar = testimonial.rating % 1 !== 0;

                  return (
                    <SwiperSlide key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 text-left border border-transparent hover:border-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-500 ease-in-out"
                      >
                        <div className="flex gap-1.5 mb-6">
                          {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            if (starValue <= fullStars) {
                              return (
                                <Star
                                  key={`full-${i}`}
                                  size={20}
                                  fill="currentColor"
                                  stroke="none"
                                  className="text-[#d4af37]"
                                />
                              );
                            } else if (starValue === Math.ceil(testimonial.rating) && hasHalfStar) {
                              return (
                                <StarHalf
                                  key="half"
                                  size={20}
                                  fill="currentColor"
                                  stroke="none"
                                  className="text-[#d4af37]"
                                />
                              );
                            } else {
                              return (
                                <Star
                                  key={`empty-${i}`}
                                  size={20}
                                  fill="none"
                                  stroke="currentColor"
                                  className="text-gray-500"
                                />
                              );
                            }
                          })}
                        </div>

                        <p className="text-base leading-relaxed text-white/80 mb-8 font-medium">
                          "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-5">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37] shadow-md"
                          />
                          <div>
                            <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{testimonial.company}</p>
                          </div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#d4af37]/10 rounded-tl-full"></div>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="flex justify-center mt-8 gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 shadow-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 shadow-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
