import React, { useRef } from 'react';
import { motion} from 'framer-motion';
import { 
  Network, Server, Cloud, Shield,  ArrowRight,
  Award, Clock, Users, TrendingUp, 
  Radio, HardDrive, CheckCircle, FileSearch, Rocket, Settings, BarChart
} from 'lucide-react';

const CompleteSections = () => {


  // Why Choose Us Data
  const whyChooseUsData = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Award-winning service quality recognized by leading technology organizations and industry bodies."
    },
    {
      icon: Clock,
      title: "99.99% Uptime",
      description: "Enterprise-grade reliability with redundant infrastructure ensuring continuous business operations."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with decades of combined experience in network infrastructure and solutions."
    },
    {
      icon: TrendingUp,
      title: "Proven Growth",
      description: "Track record of scaling businesses with robust, future-proof technology infrastructure solutions."
    }
  ];

  // Tech Stack Data
  const techStackData = [
    { name: "Cisco", icon: Network },
    { name: "Juniper", icon: Radio },
    { name: "VMware", icon: Cloud },
    { name: "Dell EMC", icon: Server },
    { name: "NetApp", icon: HardDrive },
    { name: "Palo Alto", icon: Shield }
  ];

  // Process Data
  const processData = [
    {
      icon: FileSearch,
      title: "Discovery",
      description: "Comprehensive analysis of your current infrastructure and business requirements."
    },
    {
      icon: Settings,
      title: "Planning",
      description: "Custom solution design tailored to your specific needs and growth objectives."
    },
    {
      icon: Rocket,
      title: "Implementation",
      description: "Seamless deployment with minimal disruption to your ongoing operations."
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Rigorous quality assurance and performance validation before go-live."
    },
    {
      icon: BarChart,
      title: "Optimization",
      description: "Continuous monitoring and fine-tuning for peak performance and efficiency."
    }
  ];


  return (
    <>
      {/* WHY CHOOSE US SECTION */}
      <section className="relative w-full bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] py-24 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#06B6D4] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 max-w-3xl mx-auto text-[#E0F2FE] text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Industry-leading expertise backed by cutting-edge technology and unwavering commitment to excellence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative bg-white/10 border border-white/20 rounded-2xl p-8 h-full backdrop-blur-md hover:bg-white/15 hover:border-[#06B6D4]/40 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(6,182,212,0.2)]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#06B6D4]/30 to-[#2563EB]/30 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-[#06B6D4]" />
                  </div>
                  <h3 
                    className="text-2xl font-semibold mb-3 text-white"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-[#E0F2FE] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.description}
                  </p>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#06B6D4] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Technology Stack
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Powered by industry-leading platforms and cutting-edge infrastructure solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStackData.map((tech, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <div className="rounded-2xl p-8 border-2 border-[#E2E8F0] bg-gradient-to-br from-white to-[#F8FAFC] text-center hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] hover:border-[#2563EB]/30 transition-all duration-500">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-all duration-300">
                    <tech.icon className="w-7 h-7 text-white" />
                  </div>
                  <div 
                    className="text-base font-semibold text-[#0F172A]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-20 overflow-hidden">
        <div className="absolute top-40 left-20 w-80 h-80 bg-[rgba(37,99,235,0.08)] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[rgba(6,182,212,0.06)] rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Process
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A proven methodology ensuring seamless implementation and sustained success for your business.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processData.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-white border-2 border-[#E2E8F0] rounded-2xl p-8 h-full hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/40 transition-all duration-500">
                  <div className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {i + 1}
                  </div>

                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 rounded-2xl flex items-center justify-center mb-6 border-2 border-[#2563EB]/20">
                    <step.icon className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <h4 
                    className="text-xl font-semibold mb-3 text-[#0F172A]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step.title}
                  </h4>
                  <p 
                    className="text-[#475569] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-full bg-gradient-to-br from-[#2563EB] via-[#1E3A8A] to-[#2563EB] py-24 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-20 w-96 h-96 bg-[#06B6D4] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ready to Transform Your Infrastructure?
            </h3>
            <p 
              className="text-[#E0F2FE] text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Connect with our expert team to discuss your unique requirements and discover how our solutions can drive your business forward.
            </p>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2563EB] rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CompleteSections;