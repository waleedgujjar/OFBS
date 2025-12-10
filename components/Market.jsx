"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Droplet, Anchor, Radar } from 'lucide-react';

const MarketsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const markets = [
    {
      icon: Shield,
      title: "Government",
      description: "Secure, encrypted communications designed for defense operations, emergency response, and national-level missions.",
      gradient: "from-blue-600 to-indigo-900",
      particleType: "rings"
    },
    {
      icon: Droplet,
      title: "Oil & Gas",
      description: "Reliable satellite coverage for remote drilling sites, offshore rigs, and extreme operations with zero downtime.",
      gradient: "from-blue-500 to-blue-800",
      particleType: "droplets"
    },
    {
      icon: Anchor,
      title: "Maritime",
      description: "High-speed satellite connectivity for vessels, fleets, and deep-sea operations — anywhere on the ocean.",
      gradient: "from-indigo-600 to-blue-900",
      particleType: "waves"
    },
    {
      icon: Radar,
      title: "Aviation",
      description: "Advanced, high-bandwidth satellite solutions for global aviation and enterprise-critical operations.",
      gradient: "from-blue-600 to-indigo-800",
      particleType: "radar"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.market-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300/10 rounded-full blur-2xl"
        />

        {/* Geometric Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-blue-200/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 border-2 border-indigo-200/20 rounded-full"
        />

        {/* Diagonal Light Streaks */}
        <motion.div
          animate={{ x: [-100, 100], opacity: [0, 0.3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-0 w-1 h-96 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent rotate-45"
        />
        <motion.div
          animate={{ x: [100, -100], opacity: [0, 0.3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 right-0 w-1 h-80 bg-gradient-to-b from-transparent via-indigo-300/50 to-transparent -rotate-45"
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg">
              Markets
            </span>{" "}
            <span className="text-gray-900">We Cover</span>
          </motion.h2>

          {/* Decorative Underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "120px", opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full shadow-lg shadow-blue-500/50"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering global industries with secure, high-performance satellite connectivity.
          </motion.p>
        </motion.div>

        {/* Market Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {markets.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="relative group market-card"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:bg-white/95">
                {/* Floating Orb Inside Card */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${market.gradient} opacity-10 rounded-full blur-xl`}
                />

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${market.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-shadow duration-500`}>
                    <market.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Rotating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-16 h-16 border-2 border-blue-300/30 rounded-full group-hover:border-blue-400/60 transition-colors duration-500"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {market.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {market.description}
                </p>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1), transparent 50%)'
                  }}
                />

                {/* Particle Effects Based on Type */}
                {market.particleType === 'waves' && (
                  <motion.div
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-4 left-4 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full"
                  />
                )}
                
                {market.particleType === 'droplets' && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, 40, 0], opacity: [0, 0.6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                        style={{ left: `${30 + i * 20}%`, top: '20%' }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Looking for industry-specific satellite solutions?
          </h3>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-900 text-white font-semibold rounded-full overflow-hidden group shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <span className="relative z-10">Contact Our Experts</span>
            
            {/* Button Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-xl opacity-50"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketsSection;