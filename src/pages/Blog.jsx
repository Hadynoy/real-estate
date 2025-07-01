import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Luxury Neighborhoods to Invest in 2025",
    excerpt:
      "Discover the most sought-after high-end locations for property investment this year. From Beverly Hills to The Hamptons, see what’s trending.",
    image: "/assets/blog1.avif",
    date: "June 28, 2025",
    category: "Market Trends",
  },
  {
    id: 2,
    title: "Designing a Dream Estate: Architecture Tips from Experts",
    excerpt:
      "We sat down with luxury architects to uncover what makes an estate truly iconic — inside and out.",
    image: "/assets/blog2.avif",
    date: "June 15, 2025",
    category: "Architecture",
  },
  {
    id: 3,
    title: "Why Privacy is the New Luxury in Real Estate",
    excerpt:
      "More than amenities, affluent buyers are now seeking total privacy. Learn why and how developers are responding.",
    image: "/assets/blog3.avif",
    date: "May 30, 2025",
    category: "Luxury Insights",
  },
  {
    id: 4,
    title: "Cityscape’s Exclusive Guide to Waterfront Estates",
    excerpt:
      "Explore the rarest homes along the world's most prestigious coastlines curated by our global team.",
    image: "/assets/blog4.avif",
    date: "May 10, 2025",
    category: "Global Listings",
  },
  {
    id: 5,
    title: "Green Luxury: Sustainable Living in Elite Homes",
    excerpt:
      "Discover how top-tier estates are going eco-friendly without sacrificing opulence.",
    image: "/assets/blog5.avif",
    date: "April 28, 2025",
    category: "Sustainability",
  },
  {
    id: 6,
    title: "Art and Architecture: Inside Homes that Double as Museums",
    excerpt: "Step inside extraordinary estates where design meets collectible art.",
    image: "/assets/blog6.avif",
    date: "April 15, 2025",
    category: "Design",
  },
  {
    id: 7,
    title: "Billionaire Buyers: What the Ultra-Wealthy Look For",
    excerpt:
      "It’s not just location. Learn what matters to the world’s most powerful property buyers.",
    image: "/assets/blog7.avif",
    date: "March 30, 2025",
    category: "Investor Insights",
  },
  {
    id: 8,
    title: "Behind the Gates: Secrets of Private Luxury Compounds",
    excerpt:
      "Privacy, technology, and timeless architecture — explore the design of elite estates.",
    image: "/assets/blog8.avif",
    date: "March 12, 2025",
    category: "Estate Life",
  },
  {
    id: 9,
    title: "Cityscape's Million-Dollar Marketing Strategy",
    excerpt:
      "A deep dive into how we sell some of the most expensive homes in the world.",
    image: "/assets/blog9.avif",
    date: "March 1, 2025",
    category: "Our Process",
  },
  {
    id: 10,
    title: "Meet the Power Agents of Cityscape Realty",
    excerpt:
      "Get to know the advisors behind our most iconic sales and the clients who trust them.",
    image: "/assets/blog10.avif",
    date: "February 14, 2025",
    category: "Agents",
  },
  {
    id: 11,
    title: "Luxury Redefined: What Buyers Expect in 2025",
    excerpt:
      "From biometric security to wellness spas, see what defines modern luxury now.",
    image: "/assets/blog12.avif",
    date: "January 28, 2025",
    category: "Luxury Trends",
  },
  {
    id: 12,
    title: "Navigating International Property Laws",
    excerpt:
      "What global investors need to know before buying elite real estate abroad.",
    image: "/assets/blog11.avif",
    date: "January 10, 2025",
    category: "Legal Guide",
  },
  {
    id: 13,
    title: "The Rise of Smart Mansions",
    excerpt:
      "Explore how cutting-edge tech is transforming the way elite homeowners live.",
    image: "/assets/blog13.avif",
    date: "December 20, 2024",
    category: "Technology",
  },
];

const Blog = () => (
  <section className="bg-[#0a0f1c] text-white py-32 relative overflow-visible min-h-screen">
    <div className="absolute inset-0 bg-[url('/src/assets/luxury-pattern.svg')] opacity-5 mix-blend-overlay -z-10" />
    <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#d4af37]/10 to-transparent -z-10" />
    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#d4af37]/10 to-transparent -z-10" />

    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-[#d4af37]" />
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-[#d4af37]"
            >
              <Sparkles size={20} />
            </motion.div>
            <span className="w-12 h-0.5 bg-[#d4af37]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
            <span className="text-[#d4af37]">CITYSCAPE</span> PERSPECTIVES
          </h2>
          <p className="text-[#d4af37]/70 text-lg font-serif italic">
            "Where luxury meets legacy"
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-[#1a2a44]/20 backdrop-blur-lg rounded-2xl border border-[#d4af37]/20 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#d4af37]/40 transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 text-xs font-serif bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full text-[#d4af37]">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between text-xs text-white/60 font-serif uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#d4af37]" />
                  {post.date}
                </span>
                <span className="text-[#d4af37]/70">5 min read</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-white leading-snug group-hover:text-[#d4af37] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-white/70">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-[#d4af37] mt-4 group-hover:gap-4 transition-all">
                <span className="text-sm font-serif">Read More</span>
                <motion.span
                  animate={{ x: [0, 5] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-10 py-4 border-2 border-[#d4af37] text-lg font-serif text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-[#0a0f1c] transition-colors"
        >
          View All Articles
        </motion.button>
      </div>
    </div>
  </section>
);

export default Blog;
