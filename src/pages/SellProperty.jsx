import React, { useState } from 'react';

const SellProperty = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: '',
    sqft: '',
    bed: '',
    bath: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log('Submitted property:', form);
    alert('Your property has been submitted for review!');
  };

  return (
    <div id='sell' className="min-h-screen bg-[#0a0f1c] text-white px-6 pt-32 pb-12">

      <div className="max-w-3xl mx-auto bg-[#1a2a44] p-8 rounded-2xl shadow-2xl border border-[#d4af37]/20">
        <h1 className="text-3xl font-serif font-bold text-[#d4af37] mb-6 text-center">Sell Your Property</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="title"
              placeholder="Property Title"
              value={form.title}
              onChange={handleChange}
              required
              className="bg-[#0a0f1c] border border-[#d4af37]/30 rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
            />
            <input
              name="price"
              placeholder="Price (₦)"
              value={form.price}
              onChange={handleChange}
              required
              className="bg-[#0a0f1c] border border-[#d4af37]/30 rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
            />
            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              required
              className="bg-[#0a0f1c] border border-[#d4af37]/30 rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
            />
            <input
              name="sqft"
              placeholder="Square Feet"
              value={form.sqft}
              onChange={handleChange}
              className="bg-[#0a0f1c] border border-[#d4af37]/30 rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
            />
            <input
              name="bed"
              placeholder="Bedrooms"
              value={form.bed}
              onChange={handleChange}
              className="bg-[#0a0f1c] border border-[#d4af37]/30 rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
            />
            <input
              name="bath"
              placeholder="Bathrooms"
              value={form.bath}
              onChange={handleChange}
              className="bg-[#0a0f1c] border border-[#d4af37]/30 rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <textarea
            name="description"
            placeholder="Property Description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-[#0a0f1c] border border-[#d4af37]/30 rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]"
          />

          <div>
            <label className="block text-sm mb-2 text-[#d4af37] font-semibold">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-white bg-transparent border border-[#d4af37]/30 rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4af37] text-[#0a0f1c] font-semibold py-3 rounded-full hover:bg-[#c9a635] transition"
          >
            Submit Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellProperty;
