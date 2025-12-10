"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence,  Variants } from "framer-motion";
import { Satellite, Globe, Radio, ChevronDown } from "lucide-react";


const SatelliteCoverageSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const satelliteData = {
    "HellasSat 3": {
      position: "39° E",
      angle: "0 - 90°",
      band: "Ku Band",
      regions: ["Middle East", "Europe", "Africa"],
      maps: {
        "Middle East":
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/sat3-me-scaled.jpg",
        Europe:
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/sat3-euro-scaled.jpg",
        Africa:
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/sat3-africa-scaled.jpg",
      },
    },
    "HellasSat 4": {
      position: "39° E",
      angle: "0 - 90°",
      band: "Ku Band",
      regions: ["Middle East", "Europe", "Africa"],
      maps: {
        "Middle East":
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/sat4-me-scaled.jpg",
        Europe:
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/sat4-euro-scaled.jpg",
        Africa:
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/sat3-africa-scaled.jpg",
      },
    },
    "Intelsat/Thor 1002": {
      position: "1° W",
      angle: "0 - 90°",
      band: "Ku Band",
      regions: ["Middle East"],
      maps: {
        "Middle East":
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/thor-me-scaled.jpg",
      },
    },
    Arabsat: {
      position: "30.5° E",
      angle: "0 - 90°",
      band: "Ku Band",
      regions: ["Middle East", "Asia"],
      maps: {
        "Middle East":
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/arabsat-me-scaled.jpg",
        Asia:
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/arabsat-asia-scaled.jpg",
      },
    },
    "ABS-2 (MENA)": {
      position: "75° E",
      angle: "0 - 90°",
      band: "Ku Band",
      regions: ["Middle East"],
      maps: {
        "Middle East":
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/abs-mena-scaled.jpg",
      },
    },
    "Singtel ST-2": {
      position: "88° E",
      angle: "0 - 90°",
      band: "Ku Band",
      regions: ["Middle East", "Asia"],
      maps: {
        "Middle East":
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/arabsat-me-scaled.jpg",
        Asia:
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/singtel-scaled.jpg",
      },
    },
    "ArabSat (Badar Sat)": {
      position: "26° E",
      angle: "0 - 90°",
      band: "Ku Band",
      regions: ["Asia"],
      maps: {
        Asia:
          "https://oasisfusionservices.com/wp-content/uploads/2025/03/arabsat-asia-scaled.jpg",
      },
    },
  };

  const [selectedRegion, setSelectedRegion] = useState("Middle East");
  const [isSatelliteOpen, setIsSatelliteOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);



 const currentSatellite = satelliteData[selectedSatellite];
 const [selectedSatellite, setSelectedSatellite] = useState("HellasSat 3");

  const handleSatelliteChange = (satellite) => {
    setSelectedSatellite(satellite);
    setSelectedRegion(satelliteData[satellite].regions[0]);
    setIsSatelliteOpen(false);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setIsRegionOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // brand colors
  const primaryFrom = "#2563EB";
  const primaryTo = "#1E3A8A";
  const softBg = "rgba(37,99,235,0.06)"; // subtle blue tint

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      // gradient background: white -> soft blue -> white
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(243,248,255,1) 30%, rgba(255,255,255,1) 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs (blue theme) */}
        <motion.div
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${primaryFrom}33, ${primaryTo}22)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle at 70% 70%, ${primaryTo}33, ${primaryFrom}11)`,
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: primaryFrom,
            }}
            animate={{
              y: [0, -28 - Math.random() * 12, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern (very subtle blue) */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.18) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37,99,235,0.18) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="relative inline-block mb-6">
            <div
              className="absolute inset-0 blur-3xl opacity-20"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${primaryFrom}22, transparent 40%)`,
              }}
            />

            <h2
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight"
              style={{ lineHeight: 1.02 }}
            >
              Satellite{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${primaryFrom}, ${primaryTo})`,
                }}
              >
                Coverage
              </span>
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed"
          >
            Explore our comprehensive satellite coverage across multiple regions worldwide
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="mt-8 w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, transparent, ${primaryFrom}66, transparent)`,
            }}
          />
        </motion.div>

        {/* Top Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <div
            className="rounded-2xl border-2 shadow-lg p-6"
            style={{
              background: `linear-gradient(90deg, ${primaryFrom}12, rgba(255,255,255,0.85))`,
              borderColor: `${primaryFrom}55`,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Satellite Name */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-slate-800 font-semibold">
                  Satellite Name
                </p>
                <p className="text-lg font-semibold text-black flex items-center space-x-2">
                  <Satellite className="w-5 h-5 text-black" />
                  <span>{selectedSatellite}</span>
                </p>
              </div>

              {/* Position */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-slate-800 font-semibold">
                  Position
                </p>
                <p className="text-lg font-semibold text-black flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-black" />
                  <span>{currentSatellite.position}</span>
                </p>
              </div>

              {/* Coverage Angle */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-slate-800 font-semibold">
                  Coverage Angle
                </p>
                <p className="text-lg font-semibold text-black">{currentSatellite.angle}</p>
              </div>

              {/* Frequency Band */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-slate-800 font-semibold">
                  Frequency Band
                </p>
                <p className="text-lg font-semibold text-black flex items-center space-x-2">
                  <Radio className="w-5 h-5 text-black" />
                  <span>{currentSatellite.band}</span>
                </p>
              </div>

              {/* Selected Region */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-slate-800 font-semibold">
                  Selected Region
                </p>
                <p className="text-lg font-semibold text-black">{selectedRegion}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content: Sidebar + Map */}
        <div className="grid lg:grid-cols-10 gap-8">
          {/* Left Sidebar - 30% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div
              className="bg-white/90 backdrop-blur-xl rounded-2xl border-2 shadow-xl p-6 space-y-6 sticky top-24"
              style={{ borderColor: `${primaryFrom}33` }}
            >
              {/* Sidebar Title */}
              <div className="pb-4 border-b-2" style={{ borderColor: `${primaryFrom}22` }}>
                <h3 className="text-2xl font-bold text-black">Satellite Coverage</h3>
                <p className="text-sm text-slate-700 mt-1">Select satellite and region</p>
              </div>

              {/* Satellite Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">Satellite Name</label>
                <div className="relative">
                  <button
                    onClick={() => setIsSatelliteOpen(!isSatelliteOpen)}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-left flex items-center justify-between hover:border-slate-400 focus:border-slate-400 focus:ring-2 transition-all duration-300"
                    style={{ boxShadow: "0 1px 0 rgba(30,58,138,0.03)" }}
                  >
                    <span className="text-black font-medium">{selectedSatellite}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                        isSatelliteOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isSatelliteOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white border-2 rounded-lg shadow-xl overflow-hidden"
                        style={{ borderColor: `${primaryFrom}33` }}
                      >
                        {Object.keys(satelliteData).map((satellite) => (
                          <button
                            key={satellite}
                            onClick={() => handleSatelliteChange(satellite)}
                            className="w-full px-4 py-3 text-left transition-colors duration-200 border-b border-slate-200 last:border-b-0"
                            style={{
                              backgroundColor: selectedSatellite === satellite ? softBg : "white",
                            }}
                          >
                            <span
                              className={`${
                                selectedSatellite === satellite ? "text-black font-semibold" : "text-slate-800"
                              }`}
                            >
                              {satellite}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Region Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">Region</label>
                <div className="relative">
                  <button
                    onClick={() => setIsRegionOpen(!isRegionOpen)}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-left flex items-center justify-between hover:border-slate-400 focus:border-slate-400 focus:ring-2 transition-all duration-300"
                  >
                    <span className="text-black font-medium">{selectedRegion}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                        isRegionOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isRegionOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white border-2 rounded-lg shadow-xl overflow-hidden"
                        style={{ borderColor: `${primaryFrom}33` }}
                      >
                        {currentSatellite.regions.map((region) => (
                          <button
                            key={region}
                            onClick={() => handleRegionChange(region)}
                            className="w-full px-4 py-3 text-left transition-colors duration-200 border-b border-slate-200 last:border-b-0"
                            style={{
                              backgroundColor: selectedRegion === region ? softBg : "white",
                            }}
                          >
                            <span className={`${selectedRegion === region ? "text-black font-semibold" : "text-slate-800"}`}>
                              {region}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Info Badge */}
              <div className="pt-4 border-t-2" style={{ borderColor: `${primaryFrom}22` }}>
                <div className="rounded-xl p-4 border" style={{ background: `${primaryFrom}08`, borderColor: `${primaryFrom}22` }}>
                  <p className="text-xs text-slate-900 font-medium">
                    💡 Select a satellite and region to view the corresponding coverage map
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Map Display - 70% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl border-2 shadow-xl p-4 overflow-hidden" style={{ borderColor: `${primaryFrom}22` }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedSatellite}-${selectedRegion}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-xl overflow-hidden aspect-video bg-gray-100"
                >
                  {/* Actual Satellite Coverage Map Image */}
                  <img
                    src={currentMap}
                    alt={`${selectedSatellite} - ${selectedRegion} Coverage Map`}
                    className="w-full h-full object-contain"
                  />

                  {/* Decorative border glow */}
                  <div
                    className="absolute inset-0 border-2 rounded-xl pointer-events-none"
                    style={{ borderImage: `linear-gradient(90deg, ${primaryFrom}, ${primaryTo}) 1`, opacity: 0.28 }}
                  />

                  {/* Image overlay info */}
                  <div
                    className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 border shadow-lg"
                    style={{ borderColor: `${primaryFrom}22` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-black">{selectedSatellite}</p>
                        <p className="text-xs text-slate-700">{selectedRegion} Coverage Map</p>
                      </div>
                      <div className="flex items-center space-x-2 text-black">
                        <Satellite className="w-5 h-5" />
                        <span className="text-xs font-semibold">{currentSatellite.position}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-center"
        style={{
          background: `linear-gradient(to right, transparent, ${primaryFrom}55, transparent)`,
        }}
      />

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

export default SatelliteCoverageSection;
