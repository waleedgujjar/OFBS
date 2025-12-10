"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import OFBSNavbar from "@/components/Navbar";
import CompleteSections from "@/components/WhyUsCard";
import Footer from "@/components/Footer";
import OurServices from "@/components/ServicesSection";

export default function ServicesHero() {
  const containerRef = useRef(null);

  // Smooth parallax scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0", "1 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#F1F5F9] via-white to-[#F1F5F9]"
    >
      {/* Navbar */}
      <OFBSNavbar />

      {/* -------------------------------
          HERO BACKGROUND ORBS
      -------------------------------- */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* ORB 1 - BLUE TOP LEFT */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 -left-48 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.05) 50%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />

        {/* ORB 2 - CYAN TOP RIGHT */}
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-20 -right-32 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.03) 50%, transparent 100%)",
            filter: "blur(50px)",
          }}
        />

        {/* ORB 3 - NAVY BOTTOM CENTER */}
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, -80, 0], scale: [1, 1.15, 1] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(30,58,138,0.06) 0%, rgba(30,58,138,0.02) 50%, transparent 100%)",
            filter: "blur(70px)",
          }}
        />

        {/* ORB 4 – BLUE LEFT SIDE */}
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 -left-24 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.08) 50%, transparent 100%)",
            filter: "blur(55px)",
          }}
        />

        {/* ORB 5 – CYAN RIGHT */}
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 right-32 w-48 h-48 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(6,182,212,0.02) 50%, transparent 100%)",
            filter: "blur(45px)",
          }}
        />

        {/* FLOATING PARTICLES */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 rounded-full bg-[#2563EB]"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
              opacity: 0.4,
            }}
          />
        ))}
      </motion.div>

      {/* ============================
          HERO CONTENT
      ============================ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-24"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E2E8F0] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] animate-pulse" />
            <span className="text-sm font-medium text-[#334155]">
              Next-Generation Platform
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0F172A] mb-6 leading-tight tracking-tight"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] bg-clip-text text-transparent">
            Services
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-[#475569] mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Empower your business with cutting-edge solutions designed for the
          modern enterprise. Scale faster, innovate smarter, and deliver
          exceptional results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Button 1 */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white font-semibold rounded-xl shadow-lg shadow-[#2563EB]/25 hover:shadow-xl hover:shadow-[#2563EB]/35 transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Button 2 */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 bg-white text-[#2563EB] font-semibold rounded-xl border-2 border-[#E2E8F0] hover:border-[#2563EB] shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              Watch Demo
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ---------------------------- */}
      {/* SERVICES SECTION */}
      {/* ---------------------------- */}
      <section className="relative z-20">
        <OurServices />
      </section>
      <section className="relative z-20">
        <CompleteSections />
      </section>
      <Footer/>
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
    
  );
}
