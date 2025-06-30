import React from 'react';
import img3 from '/src/assets/3.jpg';
import img4 from '/src/assets/4.jpg';
import img5 from '/src/assets/5.jpg';
import img6 from '/src/assets/6.jpg';
import img7 from '/src/assets/7.jpg';
import img8 from '/src/assets/8.jpg';

const projects = [
  { id: 1, image: img3, title: 'Modern Villa', price: '₦120M' },
  { id: 2, image: img4, title: 'Lakeview Apartment', price: '₦85M' },
  { id: 3, image: img5, title: 'Penthouse', price: '₦200M' },
  { id: 4, image: img6, title: 'Suburban Duplex', price: '₦65M' },
  { id: 5, image: img7, title: 'Eco Home', price: '₦95M' },
  { id: 6, image: img8, title: 'Estate Home', price: '₦150M' },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full bg-white py-20 px-6 md:px-20 lg:px-32"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">
          Our{' '}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Projects
          </span>
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          A selection of completed homes crafted with elegance and precision.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ id, image, title, price }) => (
          <div
            key={id}
            className="relative group overflow-hidden rounded-lg shadow-md bg-white"
            role="figure"
            aria-label={`Project: ${title}`}
          >
            {/* Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Floating Tag Info Box */}
            <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-md shadow backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
              <p className="text-xs text-gray-600">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
