"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { Satellite, Globe, Radio, ChevronDown } from "lucide-react";

interface SatelliteMap {
  [region: string]: string;
}

interface SatelliteInfo {
  position: string;
  angle: string;
  band: string;
  regions: string[];
  maps: SatelliteMap;
}

interface SatelliteDataType {
  [key: string]: SatelliteInfo;
}

const SatelliteCoverageSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const satelliteData: SatelliteDataType = {
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

  const [selectedSatellite, setSelectedSatellite] = useState<string>("HellasSat 3");
  const [selectedRegion, setSelectedRegion] = useState<string>("Middle East");
  const [isSatelliteOpen, setIsSatelliteOpen] = useState<boolean>(false);
  const [isRegionOpen, setIsRegionOpen] = useState<boolean>(false);

  const currentSatellite = satelliteData[selectedSatellite];
  const currentMap = currentSatellite.maps[selectedRegion];

  const handleSatelliteChange = (satellite: string) => {
    setSelectedSatellite(satellite);
    setSelectedRegion(satelliteData[satellite].regions[0]);
    setIsSatelliteOpen(false);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setIsRegionOpen(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
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

  // OFBS brand colors
  const primaryFrom = "#2563EB";
  const primaryTo = "#1E3A8A";
  const accentCyan = "#06B6D4";
  const softBg = "rgba(37,99,235,0.06)";

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(241,245,249,1) 30%, rgba(255,255,255,1) 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(37,99,235,0.12), rgba(30,58,138,0.06))`,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle at 70% 70%, rgba(6,182,212,0.08), rgba(37,99,235,0.05))`,
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
              background: accentCyan,
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

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`,
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
                background: `radial-gradient(circle at 50% 50%, rgba(37,99,235,0.2), transparent 40%)`,
              }}
            />

            <h2
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ lineHeight: 1.02, color: "#0F172A" }}
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
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "#475569" }}
          >
            Explore our comprehensive satellite coverage across multiple regions worldwide
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="mt-8 w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, transparent, ${primaryFrom}, transparent)`,
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
              background: `linear-gradient(90deg, rgba(37,99,235,0.06), rgba(255,255,255,0.95))`,
              borderColor: "#E2E8F0",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Satellite Name */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#334155" }}>
                  Satellite Name
                </p>
                <p className="text-lg font-semibold flex items-center space-x-2" style={{ color: "#0F172A" }}>
                  <Satellite className="w-5 h-5" style={{ color: "#2563EB" }} />
                  <span>{selectedSatellite}</span>
                </p>
              </div>

              {/* Position */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#334155" }}>
                  Position
                </p>
                <p className="text-lg font-semibold flex items-center space-x-2" style={{ color: "#0F172A" }}>
                  <Globe className="w-5 h-5" style={{ color: "#2563EB" }} />
                  <span>{currentSatellite.position}</span>
                </p>
              </div>

              {/* Coverage Angle */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#334155" }}>
                  Coverage Angle
                </p>
                <p className="text-lg font-semibold" style={{ color: "#0F172A" }}>
                  {currentSatellite.angle}
                </p>
              </div>

              {/* Frequency Band */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#334155" }}>
                  Frequency Band
                </p>
                <p className="text-lg font-semibold flex items-center space-x-2" style={{ color: "#0F172A" }}>
                  <Radio className="w-5 h-5" style={{ color: "#2563EB" }} />
                  <span>{currentSatellite.band}</span>
                </p>
              </div>

              {/* Selected Region */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#334155" }}>
                  Selected Region
                </p>
                <p className="text-lg font-semibold" style={{ color: "#0F172A" }}>
                  {selectedRegion}
                </p>
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
              style={{ borderColor: "#E2E8F0" }}
            >
              {/* Sidebar Title */}
              <div className="pb-4 border-b-2" style={{ borderColor: "#F1F5F9" }}>
                <h3 className="text-2xl font-bold" style={{ color: "#0F172A" }}>
                  Satellite Coverage
                </h3>
                <p className="text-sm mt-1" style={{ color: "#475569" }}>
                  Select satellite and region
                </p>
              </div>

              {/* Satellite Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{ color: "#0F172A" }}>
                  Satellite Name
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsSatelliteOpen(!isSatelliteOpen)}
                    className="w-full px-4 py-3 bg-white border-2 rounded-lg text-left flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <span className="font-medium" style={{ color: "#0F172A" }}>
                      {selectedSatellite}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isSatelliteOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "#475569" }}
                    />
                  </button>

                  <AnimatePresence>
                    {isSatelliteOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white border-2 rounded-lg shadow-xl overflow-hidden"
                        style={{ borderColor: "#E2E8F0" }}
                      >
                        {Object.keys(satelliteData).map((satellite) => (
                          <button
                            key={satellite}
                            onClick={() => handleSatelliteChange(satellite)}
                            className="w-full px-4 py-3 text-left transition-colors duration-200 border-b last:border-b-0"
                            style={{
                              backgroundColor: selectedSatellite === satellite ? softBg : "white",
                              borderColor: "#F1F5F9",
                            }}
                          >
                            <span
                              className={
                                selectedSatellite === satellite ? "font-semibold" : ""
                              }
                              style={{
                                color: selectedSatellite === satellite ? "#0F172A" : "#475569",
                              }}
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
                <label className="block text-sm font-semibold" style={{ color: "#0F172A" }}>
                  Region
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsRegionOpen(!isRegionOpen)}
                    className="w-full px-4 py-3 bg-white border-2 rounded-lg text-left flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <span className="font-medium" style={{ color: "#0F172A" }}>
                      {selectedRegion}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isRegionOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "#475569" }}
                    />
                  </button>

                  <AnimatePresence>
                    {isRegionOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white border-2 rounded-lg shadow-xl overflow-hidden"
                        style={{ borderColor: "#E2E8F0" }}
                      >
                        {currentSatellite.regions.map((region) => (
                          <button
                            key={region}
                            onClick={() => handleRegionChange(region)}
                            className="w-full px-4 py-3 text-left transition-colors duration-200 border-b last:border-b-0"
                            style={{
                              backgroundColor: selectedRegion === region ? softBg : "white",
                              borderColor: "#F1F5F9",
                            }}
                          >
                            <span
                              className={selectedRegion === region ? "font-semibold" : ""}
                              style={{
                                color: selectedRegion === region ? "#0F172A" : "#475569",
                              }}
                            >
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
              <div className="pt-4 border-t-2" style={{ borderColor: "#F1F5F9" }}>
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    background: "rgba(37,99,235,0.05)",
                    borderColor: "#E2E8F0",
                  }}
                >
                  <p className="text-xs font-medium" style={{ color: "#334155" }}>
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
            <div
              className="bg-white rounded-2xl border-2 shadow-xl p-4 overflow-hidden"
              style={{ borderColor: "#E2E8F0" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedSatellite}-${selectedRegion}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-xl overflow-hidden aspect-video"
                  style={{ backgroundColor: "#F1F5F9" }}
                >
                  {/* Actual Satellite Coverage Map Image */}
                  <img
                    src={currentMap}
                    alt={`${selectedSatellite} - ${selectedRegion} Coverage Map`}
                    className="w-full h-full object-contain"
                  />

                  {/* Image overlay info */}
                  <div
                    className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 border shadow-lg"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#0F172A" }}>
                          {selectedSatellite}
                        </p>
                        <p className="text-xs" style={{ color: "#475569" }}>
                          {selectedRegion} Coverage Map
                        </p>
                      </div>
                      <div className="flex items-center space-x-2" style={{ color: "#2563EB" }}>
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
          background: `linear-gradient(to right, transparent, rgba(37,99,235,0.3), transparent)`,
        }}
      />
    </section>
  );
};

export default SatelliteCoverageSection;