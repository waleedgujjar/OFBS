"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Globe, Award, Shield } from "lucide-react";



const values= [
  { title: "Innovation", description: "Driving new ideas and solutions.", icon: Globe },
  { title: "Reliability", description: "Consistently delivering on promises.", icon: Shield },
  { title: "Global Connectivity", description: "Connecting clients worldwide.", icon: Globe },
  { title: "Excellence", description: "Exceeding expectations in every project.", icon: Award },
  { title: "Customer-first", description: "Prioritizing client success.", icon: CheckCircle },
];

const IntroStorySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    { icon: CheckCircle, text: "15+ years of satellite communication expertise" },
    { icon: CheckCircle, text: "Trusted by Fortune 500 companies worldwide" },
    { icon: CheckCircle, text: "99.9% uptime guarantee with 24/7 support" },
    { icon: CheckCircle, text: "Custom solutions for every industry vertical" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background Blob */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Core{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at OFBS.
          </p>
        </motion.div>

        {/* Timeline Bar */}
        <div className="relative mb-16">
          <div className="flex justify-between items-center max-w-4xl mx-auto relative">
            {/* Glowing Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 -translate-y-1/2 shadow-lg shadow-blue-500/50"
            />

            {/* Timeline Markers */}
            {values.map((value, index) => (
              <motion.button
                key={value.title}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className="relative z-10 group"
              >
                <motion.div
                  animate={activeIndex === index ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/50"
                      : "bg-white border-4 border-blue-200 group-hover:border-blue-400"
                  }`}
                >
                  {React.createElement(value.icon, {
                    className: `w-7 h-7 transition-colors duration-300 ${
                      activeIndex === index ? "text-white" : "text-blue-600"
                    }`,
                  })}
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Value Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl"
            />

            <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-blue-100 text-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                {React.createElement(values[activeIndex].icon, {
                  className: "w-10 h-10 text-white",
                })}
              </motion.div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {values[activeIndex].title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {values[activeIndex].description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroStorySection;
