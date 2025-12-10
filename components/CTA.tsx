"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
const [sectionRef, inView] = useInView({
  triggerOnce: true,
  rootMargin: "-120px",
});

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
            }}
          />
        ))}

        {/* Decorative Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 border-4 border-white/10 rounded-full"
        />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20"
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block">Global Connectivity?</span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of organizations worldwide that trust OFBS for their
            mission-critical satellite communications.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-white text-blue-700 font-bold rounded-full overflow-hidden shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Talk to Our Team
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>

            {/* Glow Effect */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-white/50 blur-2xl"
            />
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-blue-200 text-sm"
          >
            Get a response within 24 hours • Free consultation • No commitment required
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
