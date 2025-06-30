import React from "react";
import aboutImg from "/src/assets/2.png";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Completed", value: "12+" },
  { label: "Million Sq Ft Delivered", value: "20+" },
  { label: "Ongoing Projects", value: "25+" },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-20 px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          About <span className="font-light underline underline-offset-4">Our Brand</span>
        </h2>
        <p className="text-gray-500 text-base max-w-md mx-auto">
          Passionate About Properties, Dedicated to Your Vision
        </p>
      </div>

      {/* Image + Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto gap-12 md:gap-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={aboutImg}
            alt="About us"
            className="w-full sm:w-1/2 max-w-lg object-cover"
          />
        </div>

        {/* Right: Stats and Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-black max-w-md">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-sm font-medium text-gray-600">{label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold">RealEstatePro</span>, we turn
            foundations into futures. From luxury developments to commercial
            spaces, every project is built with care, innovation, and an eye
            for legacy. We don't just build — we shape environments where
            dreams grow.
          </p>

          {/* Button */}
          <button className="px-6 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition font-medium w-fit">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
