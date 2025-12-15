"use client";
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  Satellite, 
  Radio, 
  Map, 
  Network, 
  Layers,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 2,
      icon: Satellite,
      title: 'Satellite Services',
      description: 'Advanced satellite communication services providing global connectivity, broadcasting, and data transmission for enterprises worldwide.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/SatHubs-OFS-Final-Image-1.webp',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/satellite-services'
    },
    {
      id: 3,
      icon: Radio,
      title: 'L-Band Satellite Services',
      description: 'Specialized L-Band satellite services for maritime, aviation, and remote communication with reliable global coverage and security.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/OFS-Final-Image-3.webp',
      color: 'from-[#2563EB] to-[#06B6D4]',
      hoverColor: 'group-hover:border-[#06B6D4]',
      link: '/services/l-band'
    },
    {
      id: 4,
      icon: Map,
      title: 'GIS',
      description: 'Geographic Information Systems solutions for spatial data analysis, mapping, and location-based services with cutting-edge technology.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/GIS1.png',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/gis'
    },
    {
      id: 5,
      icon: Network,
      title: 'ICT Services & Solutions',
      description: 'Complete information and communication technology services including network infrastructure, cloud solutions, and enterprise IT management.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/OFS-Final-Image.jpg',
      color: 'from-[#2563EB] to-[#06B6D4]',
      hoverColor: 'group-hover:border-[#06B6D4]',
      link: '/services/ict-services'
    },
    {
      id: 6,
      icon: Layers,
      title: 'Integration Solutions & Services',
      description: 'Seamless system integration services connecting diverse technologies and platforms for unified, efficient business operations.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/OFS-Final-Image.png',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/integration-services'
    },
     {
      id: 8,
      icon: Radio,
      title: 'Radio Communication Solutions',
      description: 'Advanced satellite communication services providing global connectivity, broadcasting, and data transmission for enterprises worldwide.',
      image: 'data:image/jpeg;base64,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',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/radio-communication-solutions'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-[#F1F5F9] to-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Orbs - OFBS Colors */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(37,99,235,0.12)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(6,182,212,0.08)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(30,58,138,0.06)' }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#06B6D4'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-2 rounded-lg"
          style={{ borderColor: 'rgba(37,99,235,0.08)' }}
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-40 h-40 border-2 rounded-full"
          style={{ borderColor: 'rgba(6,182,212,0.06)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="relative inline-block mb-6">
            <div 
              className="absolute inset-0 blur-3xl opacity-20" 
              style={{ 
                background: 'linear-gradient(to right, rgba(37,99,235,0.3), rgba(6,182,212,0.3), rgba(37,99,235,0.3))'
              }}
            />
            
            <h2
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                letterSpacing: '0.02em',
                color: '#0F172A'
              }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#475569'
            }}
          >
            Comprehensive satellite and IT communication solutions tailored to your business needs
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#2563EB] to-transparent rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Container */}
              <div 
                className={`relative h-full bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 ${service.hoverColor}`}
                style={{ 
                  borderColor: '#E2E8F0',
                  boxShadow: '0 4px 6px -1px rgba(37,99,235,0.05), 0 2px 4px -1px rgba(37,99,235,0.03)'
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay - OFBS Gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-4 right-4"
                  >
                    <div 
                      className="w-12 h-12 backdrop-blur-md rounded-xl flex items-center justify-center border"
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderColor: 'rgba(255,255,255,0.3)'
                      }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3
                    className="text-2xl font-bold transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Poppins', sans-serif",
                      color: '#0F172A'
                    }}
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#06B6D4] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed line-clamp-3"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#475569'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Button */}
                  <motion.a
                    href={service.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center space-x-2 font-semibold group/btn transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#2563EB'
                    }}
                  >
                    <span className="group-hover/btn:bg-gradient-to-r group-hover/btn:from-[#2563EB] group-hover/btn:to-[#06B6D4] group-hover/btn:bg-clip-text group-hover/btn:text-transparent">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.a>
                </div>

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Decorative Corner */}
                <div 
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-xl transition-colors duration-500"
                  style={{ 
                    borderColor: '#E2E8F0'
                  }}
                />
              </div>

              {/* External Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-center"
        style={{ 
          background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), transparent)'
        }}
      />
    </section>
  );
};

export default ServicesSection;