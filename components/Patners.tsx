"use client";
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Award } from 'lucide-react';

const PartnersCarousel = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const partners = [
    { id: 1, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/1.png', name: 'Partner 1' },
    { id: 2, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/2.png', name: 'Partner 2' },
    { id: 3, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/3.png', name: 'Partner 3' },
    { id: 4, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/4.png', name: 'Partner 4' },
    { id: 5, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/5-1.png', name: 'Partner 5' },
    { id: 6, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/6-1.png', name: 'Partner 6' },
    { id: 7, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/7-1.png', name: 'Partner 7' },
    { id: 8, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/8.png', name: 'Partner 8' },
    { id: 9, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/9.png', name: 'Partner 9' },
    { id: 10, url: 'https://ofbs-oft.com/wp-content/uploads/2024/08/10.png', name: 'Partner 10' },
    { id: 11, url: 'https://ofbs-oft.com/wp-content/uploads/2025/01/images-300x158.jpeg', name: 'Partner 11' },
    { id: 12, url: 'https://ofbs-oft.com/wp-content/uploads/2025/01/inetvu_logo_small-300x89.jpg', name: 'Partner 12' },
    { id: 13, url: 'https://ofbs-oft.com/wp-content/uploads/2025/01/Z74.SI_BIG.D-1-300x164.png', name: 'Partner 13' },
    { id: 14, url: 'https://ofbs-oft.com/wp-content/uploads/2025/01/5e8c7885dd1816363b2f85be_hero_fat_white_250-300x300.png', name: 'Partner 14' },
    { id: 15, url: 'https://ofbs-oft.com/wp-content/uploads/2025/01/edfec16ea94f4db7d143a2f7a536504f-300x212.png', name: 'Partner 15' },
    { id: 16, url: 'https://ofbs-oft.com/wp-content/uploads/2025/01/pngegg-1-300x176.png', name: 'Partner 16' }
  ];

  const duplicatedPartners = [...partners, ...partners];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden"
    >
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Floating Blue/Cyan Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-700 to-blue-500 rounded-full blur-3xl"
        />

        {/* Floating Tiny Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.7, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}

        {/* Subtle Blue Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-20" />
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed"
          >
            Collaborating with world-class organizations to deliver secure and innovative communication solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"
          />
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: '150+', label: 'Countries Served' },
            { number: '16+', label: 'Global Partners' },
            { number: '99.9%', label: 'Uptime SLA' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border-2 border-blue-200 p-6 text-center shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/30 hover:border-blue-400 transition-all duration-300"
            >
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-900">{stat.number}</p>
              <p className="text-sm text-blue-700">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* PARTNERS CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative"
        >
          {/* Side gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />

          <div className="overflow-hidden py-8">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -1920] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div key={`${partner.id}-${index}`} whileHover={{ scale: 1.1, y: -5 }} className="flex-shrink-0 group">
                  <div className="relative w-48 h-32 bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-6 flex items-center justify-center overflow-hidden group-hover:border-blue-300 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-500">
                    <img src={partner.url} alt={partner.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/60 rounded-2xl transition-all duration-500" />
                  </div>

                  {/* Outer glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <p className="text-sm text-blue-700 text-center mt-8 italic">Hover over logos to see enhanced effects</p>
        </motion.div>

        {/* TRUST BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl shadow-lg">
            <Award className="w-6 h-6 text-cyan-600" />
            <p className="text-blue-800 font-semibold">
              Certified partnerships with leading technology providers worldwide
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.4, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent origin-center"
      />
    </section>
  );
};

export default PartnersCarousel;
