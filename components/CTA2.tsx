"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const PremiumCTABlock: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Generate floating particles once
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3,
      size: 3 + Math.random() * 3,
    }));

    setParticles(newParticles);

    // Delay visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="relative max-w-6xl w-full">
        {/* Enhanced Glow Aura */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-3xl blur-2xl opacity-25"></div>

        {/* Main CTA Container */}
        <div
          className={`relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Floating Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white opacity-40"
              style={{
                left: `${particle.left}%`,
                bottom: "-20px",
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              }}
            />
          ))}

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-20"></div>

          {/* Content */}
          <div className="relative px-6 py-16 md:px-12 lg:px-20 md:py-24 text-center">
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready to Transform Your Business?
            </h2>

            <p
              className={`text-base md:text-xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Connect with our ICT specialists today and unlock innovative solutions designed for
              your success.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Primary Button */}
              <button className="group relative px-10 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]">
                <span
                  className="relative z-10 flex items-center justify-center gap-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Get Started
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {/* Secondary Button */}
              <button
                className="group px-10 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/70 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white min-w-[200px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 text-white/90 transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* ...Trust Icons content stays the same */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-500px) translateX(30px) scale(1.2);
            opacity: 0.4;
          }
          85% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-1000px) translateX(-30px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumCTABlock;
