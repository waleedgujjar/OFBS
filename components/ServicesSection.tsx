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
      title: 'L-Band Services',
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
    }
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