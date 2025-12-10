"use client";
import React from 'react';
import { motion,  Variants } from 'framer-motion';
import { Award, Zap, Headphones, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Industry-Leading Expertise',
      description: 'Years of proven experience delivering high-quality business solutions across diverse industries.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'We implement modern, scalable systems tailored to your business growth.',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Headphones,
      title: 'Client-Focused Support',
      description: '24/7 dedicated support ensuring reliability and client satisfaction.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable Infrastructure',
      description: 'Our systems are built with performance, security, and long-term scalability in mind.',
      gradient: 'from-blue-700 to-cyan-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Decorative Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-600">Why Choose Us</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-slate-900">Why </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Oasis Fusion
            </span>
            <br />
            <span className="text-slate-900">Stands Apart</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine industry expertise with cutting-edge technology to deliver exceptional business solutions that drive growth and innovation.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-slate-100 hover:border-transparent overflow-hidden"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[2px]">
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/0 via-blue-100/50 to-blue-100/0 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats/Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support Available' },
            { number: '10+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;