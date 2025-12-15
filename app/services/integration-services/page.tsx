"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, MessageSquare, Globe2 } from "lucide-react";
import MarketIntelligenceOverview from "@/components/MarketIntelligenceOverview";
import MarketSegmentsGrid from "@/components/KeySegment";
import ServiceOfferings from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/Choose";
import PremiumCTABlock from "@/components/CTA2";
import Footer from "@/components/Footer";
import OFBSNavbar from "@/components/Navbar";
import Intergation from "@/components/intergation";

const ICTHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* GRID BACKGROUND */}
    <OFBSNavbar />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1e3a8a 1px, transparent 1px),
              linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* GRADIENT ORBS */}
      <div
        className="absolute top-20 left-[10%] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl animate-float-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${
            mousePosition.y * 0.5
          }px)`,
        }}
      ></div>

      <div
        className="absolute bottom-20 right-[15%] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-3xl animate-float-slower"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${
            -mousePosition.y * 0.3
          }px)`,
        }}
      ></div>

      <div
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-blue-700/10 rounded-full blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.2}px), calc(-50% + ${
            mousePosition.y * 0.2
          }px))`,
        }}
      ></div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* DECORATIVE RINGS */}
      <div
        className="absolute top-[15%] right-[20%] w-28 h-28 border border-blue-200/30 rounded-full animate-spin-very-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${
            mousePosition.y * 0.4
          }px)`,
        }}
      ></div>

      <div
        className="absolute bottom-[25%] left-[15%] w-20 h-20 border border-blue-300/20 rounded-full animate-spin-reverse-slow"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${
            -mousePosition.y * 0.3
          }px)`,
        }}
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* BADGE */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-blue-50 to-blue-100/60 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg shadow-blue-500/5 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
            Next-Generation Market Intelligence
          </span>
        </div>

        {/* TITLE */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
            Integration Services Solutions
          </span>
          <br />
          <span className="text-slate-900">That Transform</span>
          <br />
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Industries
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Data-driven insights and strategic intelligence for the satellite
          communications industry.
        </p>

        {/* CTA BUTTONS */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-20 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Primary CTA */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-3 overflow-hidden">
            <span className="relative z-10">Get a Quote</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary CTA */}
          <button className="group px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-lg shadow-blue-500/10">
            <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Talk to Expert</span>
          </button>
        </div>

        {/* FLOATING GLOBE */}
        <div
          className={`relative inline-block transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl scale-150 animate-pulse-slow"></div>

          <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping-slow"></div>

          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-full border border-blue-200/50 shadow-2xl shadow-blue-500/20 animate-float">
            <Globe2 className="w-12 h-12 text-blue-600 animate-spin-very-slow" />
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 40px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes particle {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(1);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(60px, -120px) scale(0);
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          75%,
          100% {
            opacity: 0;
            transform: scale(1.4);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 25s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 20s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* OVERVIEW SECTION */}
      <section className="relative z-20 w-full">
        <MarketIntelligenceOverview />
      </section>
      <section className="relative z-20 w-full">
        <Intergation/>
      </section>
      <section className="relative z-20 w-full">
        <WhyChooseUs />
      </section>
      <section className="relative z-20 w-full">
        <PremiumCTABlock />
      </section>
      <Footer />
    </div>
  );
};

export default ICTHeroSection;
