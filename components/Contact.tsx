"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.9, 0.3, 1] } },
  };

  const particles = Array.from({ length: 14 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log("contact submit", Object.fromEntries(data.entries()));
    (e.target as HTMLFormElement).reset();
    alert("Message sent (mock). We will contact you shortly.");
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, rgba(239,246,255,1) 30%, #ffffff 100%)",
      }}
    >
      {/* Background visual elements (orbs, grid, particles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left orb */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.18, 0.12], rotate: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-36 -top-24 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.14), rgba(30,58,175,0.06))",
          }}
        />

        {/* Bottom-right orb */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.14, 0.08], rotate: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute -right-36 -bottom-20 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle at 70% 70%, rgba(30,58,175,0.14), rgba(14,165,233,0.06))",
          }}
        />

        {/* soft grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-normal"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.18) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              y: [-6, -28 - (i % 6), -6],
              opacity: [0, 0.7, 0],
              x: [(i % 2) ? -6 : 6, (i % 3) ? 4 : -4, 0],
            }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
            className="absolute rounded-full"
            style={{
              width: 3,
              height: 3,
              left: `${6 + (i * 7)}%`,
              top: `${10 + (i * 5)}%`,
              background: "linear-gradient(90deg,#2563EB,#1E3A8A)",
              opacity: 0,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={item}
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Get in{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg,#2563EB,#1E3A8A)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 8px 30px rgba(37,99,235,0.06)",
              }}
            >
              Touch
            </span>{" "}
            With Us
          </motion.h2>

          <motion.p variants={item} className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Let’s connect to discuss solutions, partnerships, or service inquiries.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 mx-auto w-28 h-1 rounded-full"
            style={{ background: "linear-gradient(to right, transparent, #2563EB66, transparent)" }}
          />
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact info card (glass) */}
          <motion.div
            variants={item}
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <div
              className="rounded-2xl p-6 backdrop-blur-md bg-white/60 border border-blue-200/40 shadow-lg"
              style={{ boxShadow: "0 10px 30px rgba(37,99,235,0.06)" }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Information</h3>
              <p className="text-sm text-slate-600 mb-6">
                Reach our team for business enquiries, partnerships, or technical support. We typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#2563EB,#1E3A8A)",
                      boxShadow: "0 6px 18px rgba(37,99,235,0.12)",
                    }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Head Office</p>
                    <p className="text-sm text-slate-600">Riyadh, KSA</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#2563EB,#1E3A8A)",
                      boxShadow: "0 6px 18px rgba(37,99,235,0.12)",
                    }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Phone</p>
                    <p className="text-sm text-slate-600">+966 11 492 4037</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#2563EB,#1E3A8A)",
                      boxShadow: "0 6px 18px rgba(37,99,235,0.12)",
                    }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Email</p>
                    <p className="text-sm text-slate-600">info@ofbs-oft.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#2563EB,#1E3A8A)",
                      boxShadow: "0 6px 18px rgba(37,99,235,0.12)",
                    }}>
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Availability</p>
                    <p className="text-sm text-slate-600">24/7 Support · Mon - Sun</p>
                  </div>
                </motion.div>
              </div>

              {/* small map thumbnail */}
              <div className="mt-6 rounded-xl overflow-hidden border border-blue-100 shadow-md">
                <img
                  src="/ofbs-location.png"
                  alt="Office location map"
                  className="w-full h-36 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={item}
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <div className="rounded-2xl bg-white border border-blue-100 p-6 lg:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                {/* name + email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm text-slate-700 mb-2">Full name</span>
                    <input
                      name="name"
                      required
                      className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm text-slate-700 mb-2">Email address</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                {/* phone + company row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm text-slate-700 mb-2">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                      placeholder="+971 5x xxx xxxx"
                    />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm text-slate-700 mb-2">Company</span>
                    <input
                      name="company"
                      className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                      placeholder="Oasis Fusion"
                    />
                  </label>
                </div>

                {/* message */}
                <label className="flex flex-col">
                  <span className="text-sm text-slate-700 mb-2">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition resize-none"
                    placeholder="How can we help you?"
                  />
                </label>

                {/* submit */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 18px 40px rgba(37,99,235,0.12)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </form>
            </div>

            {/* CTA Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-6"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-md">
                <Clock className="w-5 h-5 text-blue-700" />
                <p className="text-sm text-blue-800 font-medium">Need urgent assistance? Our team is available 24/7.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }
        h1,h2,h3,h4 { font-family: 'Poppins', sans-serif; }

        /* small responsive tweaks */
        @media (max-width: 1024px) {
          .-right-36 { right: -36px; }
        }
      `}</style>
    </section>
  );
}
