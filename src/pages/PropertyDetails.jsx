import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import properties from "../data/properties";
import {
  Home,
  Ruler,
  BedDouble,
  Bath,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((item) => item.id === +id);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef();
  const isImageInView = useInView(imageRef, { once: true });

  if (!property) {
    return (
      <div className="text-center text-red-500 py-24">
        Property not found.
      </div>
    );
  }

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-32">
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-[#0a0f1c] hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-serif text-sm">Back to Listings</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -30 }}
          animate={isImageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 relative group"
        >
          <div className="absolute -inset-0.5 bg-[#d4af37]/20 rounded-xl -z-10 group-hover:scale-105 transition-transform duration-500" />
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-[500px] object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              onLoad={() => setIsImageLoaded(true)}
              loading="eager"
            />
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse" />
            )}
          </div>

          <div className="absolute top-4 right-4 w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
            <span className="text-2xl text-[#d4af37]">★</span>
          </div>

          {property.interiorImages?.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.interiorImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={`Interior ${i + 1}`}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isImageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-2 space-y-10"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Home size={18} className="animate-pulse" />
              <span className="text-sm uppercase tracking-widest">
                {property.type || "Luxury Estate"}
              </span>
            </div>

            <h1 className="text-4xl font-serif font-bold text-[#0a0f1c] leading-tight">
              {property.title}
            </h1>

            <p className="text-base text-gray-500 flex items-center gap-2">
              <span className="inline-block w-4 h-0.5 bg-[#d4af37]" />
              {property.location}
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-3xl font-serif font-bold text-[#d4af37]">
              {property.price}
              <span className="text-sm font-normal text-gray-500 ml-2">/ Asking</span>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-[#0a0f1c]">
              <div className="flex items-center gap-2">
                <Ruler size={18} className="text-[#d4af37]" />
                <span>{property.sqft} sqft</span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble size={18} className="text-[#d4af37]" />
                <span>{property.bed} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={18} className="text-[#d4af37]" />
                <span>{property.bath} Baths</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#0a0f1c]/10">
            <h3 className="text-lg font-serif font-medium text-[#0a0f1c] mb-4">Property Details</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="mt-12 border-t border-[#0a0f1c]/10 pt-10">
            <h3 className="text-xl font-serif font-semibold text-[#0a0f1c] mb-6">Meet Your Agent</h3>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={property.agent?.image || "/src/assets/agent-placeholder.jpg"}
                alt={property.agent?.name || "Agent"}
                className="w-24 h-24 object-cover rounded-full border-4 border-[#d4af37]/30"
              />

              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-[#0a0f1c]">
                  {property.agent?.name || "John Doe"}
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} />
                  <span>{property.agent?.email || "john@luxuryestate.com"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} />
                  <span>{property.agent?.phone || "+1 (555) 123-4567"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={14} />
                  <span>{property.agent?.officeLocation || "Beverly Hills, CA"}</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full px-6 py-4 bg-[#d4af37] text-[#0a0f1c] font-serif font-medium rounded-none hover:bg-[#e6c55d] transition-colors flex items-center justify-center gap-2">
            <Phone size={18} />
            Contact Agent
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyDetails;
