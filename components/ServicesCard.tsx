import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Wifi, Network, Server, Cloud, Shield, Headphones, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Fiber Internet",
      description: "Ultra-fast fiber optic connectivity delivering blazing speeds up to 1Gbps for seamless streaming, gaming, and business operations.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      icon: Wifi,
      link: "#fiber"
    },
    {
      id: 2,
      title: "Enterprise Networking",
      description: "Scalable network infrastructure solutions designed for businesses requiring reliable, high-performance connectivity and security.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80",
      icon: Network,
      link: "#enterprise"
    },
    {
      id: 3,
      title: "Data Center Services",
      description: "Robust colocation and managed hosting services with 99.99% uptime SLA, redundant power, and 24/7 monitoring.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      icon: Server,
      link: "#datacenter"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Flexible cloud infrastructure and hybrid solutions that scale with your business needs while maintaining optimal performance.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      icon: Cloud,
      link: "#cloud"
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Advanced threat protection, firewall management, and security monitoring to safeguard your digital assets and data.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      icon: Shield,
      link: "#security"
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock technical support from certified professionals ensuring minimal downtime and rapid issue resolution.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      icon: Headphones,
      link: "#support"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants : Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-white via-[#F8FAFC] to-white py-24 overflow-hidden">
      {/* Background Orb Gradients */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[rgba(37,99,235,0.12)] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-[rgba(6,182,212,0.08)] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[rgba(30,58,138,0.06)] rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Complete Service Portfolio
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#475569] text-lg sm:text-xl mt-4 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Comprehensive solutions designed to power your business connectivity and technology infrastructure with enterprise-grade reliability.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              className="group relative"
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              {/* Card Container */}
              <article className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-500 h-full">
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* OFBS Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 via-[#2563EB]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Icon Badge */}
                  <div className="absolute top-5 right-5">
                    <motion.div 
                      className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30 shadow-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-7 h-7 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>

                  {/* Top Accent Bar - OFBS Gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-7">
                  <h3 
                    className="text-2xl font-semibold mb-3 text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300" 
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="text-[#475569] text-base leading-relaxed mb-5" 
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.description}
                  </p>
                  
                  {/* CTA Link */}
                  <a 
                    href={service.link} 
                    className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:text-[#1E3A8A] transition-colors duration-300 group/link"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>View Details</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>

              {/* Outer Glow Effect - OFBS Brand */}
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br from-[rgba(37,99,235,0.18)] via-[rgba(6,182,212,0.12)] to-[rgba(30,58,138,0.08)]" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-[#334155] text-lg mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Need a custom solution for your business?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;