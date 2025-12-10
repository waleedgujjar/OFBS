"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Globe } from "lucide-react";

const AboutPage2: React.FC = () => {
  const { ref, inView: isInView } = useInView({ triggerOnce: true });

  const features = [
    { icon: Rocket, text: "Global satellite coverage with advanced technology." },
    { icon: Globe, text: "Reliable connectivity in remote regions." },
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Pioneering Satellite
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Communication Since 2010
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Founded with a vision to bridge connectivity gaps across the most
            remote regions of the world, OFBS has grown into a global leader in
            satellite communication services. We combine cutting-edge technology
            with deep industry expertise to deliver solutions that keep our
            clients connected, anywhere, anytime.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{feature.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating Blob Behind */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"
          />

          <div className="relative space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <Rocket className="w-20 h-20 text-white/70" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-900 flex items-center justify-center">
                <Globe className="w-20 h-20 text-white/70" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage2;
