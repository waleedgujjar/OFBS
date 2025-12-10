"use client";
import { motion, useInView } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { useRef } from "react";

const MissionVisionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-24 bg-slate-50 overflow-hidden">
      <motion.div
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl"
            />
            
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To deliver world-class satellite communication solutions that empower organizations to operate seamlessly across the globe, ensuring connectivity in even the most challenging environments.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Reliability", "Excellence"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -inset-4 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-3xl blur-2xl"
            />
            
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-indigo-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be the global leader in satellite communications, connecting every corner of the world with secure, reliable, and innovative solutions that drive progress and prosperity.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Global Impact", "Future-Ready", "Customer-First"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default MissionVisionSection;