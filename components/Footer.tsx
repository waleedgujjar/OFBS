"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/40 to-white pt-24 pb-12 overflow-hidden">
      {/* BACKGROUND ANIMATED ORBS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-full blur-[140px] opacity-20 -top-40 -left-40"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[160px] opacity-10 bottom-0 right-0"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* SECTION DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-16 origin-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* COLUMN 1 — BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
           <Link href="/" className="flex-shrink-0 group cursor-pointer">
             <div className="flex items-center space-x-3">
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
           
                 <div className="relative w-16 h-16 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition duration-500 overflow-hidden">
                   <Image 
                     src="/logo.png" 
                     alt="OFBS Logo" 
                     width={120}
                     height={70}
                     className="object-contain"
                     priority
                   />
                 </div>
               </div>
             </div>
           </Link>
           
            <p className="text-slate-600 mt-4 leading-relaxed">
              Providing secure, high-performance satellite & IT solutions for
              global enterprises, governments, and critical industries.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-6">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-11 h-11 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center hover:shadow-blue-500/30 hover:border-blue-300 transition-all cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-blue-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2 — QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-slate-600">
              {[
                "Home",
                "About Us",
                "Services",
                "Markets",
                "Solutions",
                "Contact",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3 — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-600">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-600 w-5 h-5 mt-1" />
                <p>Office 302, Oasis Fusion Business Services, Riyadh, KSA</p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600 w-5 h-5" />
                <p>+966 123 456 789</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 w-5 h-5" />
                <p>info@ofbs-sa.com</p>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 4 — NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-600 mb-4">
              Subscribe to receive updates about our global services and
              innovations.
            </p>

            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400/30 focus:border-blue-500 outline-none transition-all"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] shadow-md hover:shadow-blue-500/40 text-white"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 pt-6 border-t border-slate-200/30 text-center text-slate-600"
        >
          © {new Date().getFullYear()} Oasis Fusion Business Services (OFBS).
          All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
