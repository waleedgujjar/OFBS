"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants =  {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.65)' }}
        >
          <source
            src="https://ofbs-oft.com//wp-content/uploads/2024/07/a.mp4"
            type="video/mp4"
          />
        </video>

        {/* OFBS Brand Gradient Overlays - Multiple layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-cyan-900/30" />
        
        {/* Animated gradient orbs - OFBS colors */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-full shadow-lg shadow-cyan-500/10"
          >
            <Zap className="w-4 h-4 text-cyan-300" />
            <span className="text-xs sm:text-sm font-medium text-white/90">
              Intelligent Business Automation
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Main Heading - OFBS Style */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="block">More Efficiency</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              More Insights, More Growth
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Powering your operations with secure, scalable, and intelligent
            digital transformation solutions tailored for modern enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button - OFBS Brand Colors */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/70 transition-all duration-300 overflow-hidden"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-white/10 backdrop-blur-md text-cyan-300 font-semibold rounded-xl border-2 border-blue-500/50 hover:bg-white/20 hover:border-cyan-400/70 hover:text-white transition-all duration-300 shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Learn More</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators - OFBS Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Lightning Fast Performance</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>Scalable Growth</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-xs font-medium uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-cyan-400/70 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid overlay for tech feel */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;