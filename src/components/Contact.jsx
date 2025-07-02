import React, { useState } from 'react';
import { Phone, Mail, MapPin, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; 


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const templateParams = {
        from_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
  
      emailjs
        .send(
          'service_rc44m5c',       
          'template_rze9rqh',      
          templateParams,
          'aCwgI4IIKUzPOXyEE'      
        )
        .then(() => {
          setSubmitted(true);
          setFormData({ fullName: '', email: '', message: '', phone: '' });
          setErrors({});
          setTimeout(() => setSubmitted(false), 3000);
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
        });
    } else {
      setErrors(formErrors);
    }
  };
  

  return (
    <section id="contact" className="relative w-full bg-white py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#d4af37]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20 px-4"
      >
        <div className="flex justify-center items-center gap-3 text-[#d4af37] text-lg font-serif font-medium uppercase tracking-[0.2em] mb-6">
          <span className="w-8 h-px bg-[#d4af37]"></span>
          <Home size={18} className="text-[#d4af37] animate-pulse" />
          <span>Contact Our Studio</span>
          <Home size={18} className="text-[#d4af37] animate-pulse" />
          <span className="w-8 h-px bg-[#d4af37]"></span>
        </div>
        <h2 className="text-5xl md:text-6xl font-serif text-[#0a0f1c] leading-tight tracking-tight">
          Let's Create<br />
          <span className="text-[#d4af37] font-bold">Something Exceptional</span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    <Phone size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-[#0a0f1c] text-lg font-serif mb-1">Phone</h3>
                    <p className="text-gray-700 text-lg tracking-wide">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    <Mail size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-[#0a0f1c] text-lg font-serif mb-1">Email</h3>
                    <p className="text-gray-700 text-lg tracking-wide">contact@urbannest.com</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    <MapPin size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-[#0a0f1c] text-lg font-serif mb-1">Location</h3>
                    <p className="text-gray-700 text-lg tracking-wide">Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#d4af37] text-center mb-6 text-lg"
              >
                Message sent successfully!
              </motion.p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full bg-transparent border-b border-[#0a0f1c]/20 focus:border-[#d4af37] focus:ring-0 focus:outline-none pb-4 text-[#0a0f1c] text-lg placeholder:text-[#0a0f1c]/40 transition-all duration-300 ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full bg-transparent border-b border-[#0a0f1c]/20 focus:border-[#d4af37] focus:ring-0 focus:outline-none pb-4 text-[#0a0f1c] text-lg placeholder:text-[#0a0f1c]/40 transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-[#0a0f1c]/20 focus:border-[#d4af37] focus:ring-0 focus:outline-none pb-4 text-[#0a0f1c] text-lg placeholder:text-[#0a0f1c]/40 transition-all duration-300"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  className={`w-full bg-transparent border-b border-[#0a0f1c]/20 focus:border-[#d4af37] focus:ring-0 focus:outline-none pb-4 text-[#0a0f1c] text-lg placeholder:text-[#0a0f1c]/40 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  aria-label="Send message"
                  className="group relative overflow-hidden px-10 py-4 bg-transparent border-2 border-[#d4af37] text-[#0a0f1c] rounded-none font-serif text-lg tracking-wide transition-all duration-500"
                >
                  <span className="absolute inset-0 bg-[#d4af37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                    Send Message
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
