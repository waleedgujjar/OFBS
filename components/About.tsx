"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Globe,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.20, delayChildren: 0.18 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],   // <-- FIX
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // ✅ FIXED
    },
  },
};


const stats = [
  { number: "500+", label: "Enterprise Clients", Icon: Users },
  { number: "98%", label: "Client Satisfaction", Icon: Award },
  { number: "50+", label: "Countries Served", Icon: Globe },
  { number: "24/7", label: "Support Available", Icon: Shield },
];

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description:
      "Empowering businesses with intelligent automation and high-performance digital solutions.",
  },
  {
    icon: Eye,
    title: "Visionary Approach",
    description: "Building innovative systems that anticipate future business needs.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Helping organizations scale with secure, reliable, and future-proof technology.",
  },
];

const whyChooseUs = [
  "Enterprise-grade security and compliance",
  "Scalable cloud-ready architecture",
  "24/7 Support with real-time monitoring",
  "AI-powered automation systems",
  "Exceptional performance across 50+ industries",
  "Smooth integration with existing infrastructure",
];

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Orbs & Particles */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.06 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-8 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(30,58,138,0.06))" }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0.04 }}
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute -left-8 -bottom-8 w-[360px] h-[360px] rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(37,99,235,0.05))" }}
      />

      {/* small floating particle group */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -18 - (i % 6), 0],
            opacity: [0, 0.7, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]"
          style={{
            left: `${6 + i * 11}%`,
            top: `${10 + (i * 7) % 60}%`,
            opacity: 0.4,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 rounded-full border border-blue-100">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide">About OFBS</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            <span className="block">Transforming Businesses</span>
            <span className="block mt-2 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] bg-clip-text text-transparent">
              Through Innovation
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-600">
            Oasis Fusion Business Services (OFBS) delivers powerful automation and digital transformation systems built for the modern enterprise.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 mx-auto w-24 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }} />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ scale: 1.04, y: -6 }} className="relative group bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <s.Icon className="mx-auto w-8 h-8 text-[#06B6D4] mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] bg-clip-text text-transparent">
                {s.number}
              </div>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#2563EB]/6 to-[#06B6D4]/6 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main grid: Image + content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          {/* Left: premium floating image */}
          <motion.figure
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full h-full rounded-3xl overflow-hidden border border-blue-100 shadow-xl"
            aria-hidden={false}
          >
            {/* Image container (next/image) */}
            <div className="relative w-full h-[420px] sm:h-[480px] lg:h-full">
              <Image
                src="/about.jpg"
                alt="About Oasis Fusion Business Services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>

            {/* glowing orb */}
            <motion.div
              aria-hidden
              animate={{ y: [0, -12, 0], opacity: [0.14, 0.22, 0.14] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-3xl"
              style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(6,182,212,0.06))" }}
            />

            {/* soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000000] to-[#00000022] mix-blend-overlay pointer-events-none" />
          </motion.figure>

          {/* Right: Who we are + values */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Who We Are</h3>
                  <p className="mt-1 text-slate-600 max-w-xl">
                    OFBS is a trusted digital transformation provider empowering enterprises with automation, cloud, and AI solutions that drive growth and operational excellence.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white shadow-md hover:shadow-lg transition-transform duration-200">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Values list */}
            <motion.div variants={fadeUp} className="space-y-4">
              {values.map((val, idx) => (
                <motion.div key={idx} variants={cardVariants} whileHover={{ y: -6 }} className="relative group bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center shadow-sm">
                      <val.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{val.title}</h4>
                      <p className="text-slate-600 mt-1">{val.description}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#2563EB]/6 to-[#06B6D4]/6 -z-10" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us section */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why Choose <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">OFBS</span>?</h3>
            <p className="text-slate-600 mb-6">We deliver excellence through innovation, reliability, and an unwavering commitment to your success.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseUs.map((point, i) => (
                <motion.div key={i} whileHover={{ x: 8 }} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 hover:bg-blue-50 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#06B6D4]" />
                  <span className="text-slate-700">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <motion.button whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white font-semibold shadow-2xl">
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fonts */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap");
        * { font-family: "Inter", sans-serif; }
        h1,h2,h3,h4 { font-family: "Poppins", sans-serif; }
      `}</style>
    </section>
  );
}
