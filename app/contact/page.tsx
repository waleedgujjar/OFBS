"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  Building2, User, MessageSquare, Briefcase, 
  Facebook, Twitter, Linkedin, Instagram, Globe, Headphones
} from 'lucide-react';
import OFBSNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';

 const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          service: 'general'
        });
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+966 123 456 789",
      secondary: "Mon-SUN, 9AM-6PM AST",
      link: "tel:+966123456789"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@ofbs-sa.com",
      secondary: "24/7 Response",
      link: "mailto:info@ofbs-sa.com"
    },
    {
      icon: MapPin,
      title: "Office",
      primary: "Oasis Fusion Business Services",
      secondary: "Riyadh, Saudi Arabia",
      link: "https://maps.google.com"
    },
    {
      icon: Headphones,
      title: "Support",
      primary: "24/7 Technical Support",
      secondary: "Emergency Hotline Available",
      link: "#support"
    }
  ];

  const offices = [
    {
      city: "Riyadh, KSA",
      address: "Office 302, Oasis Fusion Business Services",
      state: " Riyadh, KSA",
      phone: "+966 123 456 789",
      email: "info@ofbs-sa.com"
    },
    {
      city: "Sarjha, Abu Dubai",
      address: "Sharjah Media City (Shams Free Zone) Al Messaned - Al Mtsannid Suburb",
      state: "Sarjha, Abu Dubai",
      phone: "+971 502729769",
      email: "info@ofbs-sa.com"
    },
    {
      city: "Islamabad, Pakistan",
      address: "Khayab-e-Sirsyed Rawalpindi",
      state: "Islamabad, Pakistan",
      phone: "+92 34 35075699",
      email: "info@ofbs-sa.com"
    }
  ];

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'fiber', label: 'Fiber Internet' },
    { value: 'enterprise', label: 'Enterprise Networking' },
    { value: 'datacenter', label: 'Data Center Services' },
    { value: 'cloud', label: 'Cloud Solutions' },
    { value: 'security', label: 'Cybersecurity' },
    { value: 'support', label: 'Technical Support' }
  ];

  const socialLinks = [
    { icon: Facebook, link: "#", name: "Facebook" },
    { icon: Twitter, link: "#", name: "Twitter" },
    { icon: Linkedin, link: "#", name: "LinkedIn" },
    { icon: Instagram, link: "#", name: "Instagram" }
  ];

  return (
    <div className="w-full bg-white">
        <OFBSNavbar/>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#2563EB] via-[#1E3A8A] to-[#2563EB] py-24 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#06B6D4] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get in Touch
            </h1>
            <p 
              className="text-[#E0F2FE] text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our team of experts is ready to help you transform your business infrastructure. Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="relative -mt-16 mb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group block"
              >
                <div className="relative bg-white rounded-2xl p-8 border-2 border-[#E2E8F0] shadow-lg hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/40 transition-all duration-500 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-sm font-semibold text-[#475569] mb-2 uppercase tracking-wide"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {info.title}
                      </h3>
                      <p 
                        className="text-lg font-semibold text-[#0F172A] mb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {info.primary}
                      </p>
                      <p 
                        className="text-sm text-[#475569]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {info.secondary}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="relative py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="absolute top-40 left-20 w-80 h-80 bg-[rgba(37,99,235,0.08)] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[rgba(6,182,212,0.06)] rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white rounded-3xl border-2 border-[#E2E8F0] p-10 shadow-xl">
                <h2 
                  className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Send us a Message
                </h2>
                <p 
                  className="text-[#475569] text-lg mb-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 
                      className="text-2xl font-bold text-[#0F172A] mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Thank You!
                    </h3>
                    <p 
                      className="text-[#475569]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Your message has been sent successfully. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          className="block text-sm font-semibold text-[#0F172A] mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label 
                          className="block text-sm font-semibold text-[#0F172A] mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          className="block text-sm font-semibold text-[#0F172A] mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label 
                          className="block text-sm font-semibold text-[#0F172A] mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service & Subject */}
                    <div>
                      <label 
                        className="block text-sm font-semibold text-[#0F172A] mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Service Interest *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A] appearance-none bg-white"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {services.map(service => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-semibold text-[#0F172A] mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label 
                        className="block text-sm font-semibold text-[#0F172A] mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Message *
                      </label>
                     <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  rows={6}   
  className="w-full px-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A] resize-none"
  style={{ fontFamily: "'Inter', sans-serif" }}
  placeholder="Tell us more about your requirements..."
/>

                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-5 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        isSubmitting 
                          ? 'bg-[#475569] cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)]'
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Side: Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl border-2 border-[#E2E8F0] overflow-hidden shadow-xl h-[400px]">
                <div className="w-full h-full bg-gradient-to-br from-[#E2E8F0] to-[#F8FAFC] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#2563EB]" />
                    <p 
                      className="text-[#475569] text-lg"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Interactive Map Would Load Here
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-[#E0F2FE]">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-[#E0F2FE]">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#E0F2FE]">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-[#06B6D4] rounded-full animate-pulse" />
                      <span className="text-[#E0F2FE]">24/7 Emergency Support Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl border-2 border-[#E2E8F0] p-8 shadow-xl">
                <h3 
                  className="text-2xl font-bold text-[#0F172A] mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-all duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Global Offices
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Visit us at any of our locations worldwide or connect with our regional teams.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white border-2 border-[#E2E8F0] rounded-2xl p-8 h-full hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/40 transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 
                    className="text-2xl font-bold text-[#0F172A] mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-[#475569]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span>{office.address}<br />{office.state}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-[#2563EB] transition-colors">
                        {office.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#2563EB] transition-colors">
                        {office.email}
                      </a>
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
  }
  export default ContactUsPage;