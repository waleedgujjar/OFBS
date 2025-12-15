"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Satellite,
  Cpu,
  PhoneCall,
  PlugZap,
  MapPin,
  Truck
} from "lucide-react";

const LKeyMarketSegments = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const segments = [
  {
    icon: Satellite,
    title: "Inmarsat Services",
    description:
      "OFBS excels in managed services across iDirect, Newtec, and Comtech/UHP platforms, guaranteeing dependable communication solutions."
  },
  {
    icon: Cpu,
    title: "Cobham",
    description:
      "OFBS provides scalable Point-to-Point (P2P) dedicated links using advanced industrial and HTS equipment."
  },
  {
    icon: PhoneCall,
    title: "Iridium Phones & PTTs",
    description:
      "OFBS utilizes modern TDMA, FDMA, and CDMA technologies in our advanced Point-to-Multipoint solutions."
  },
  {
    icon: PlugZap,
    title: "Repeaters & Docking Stations",
    description:
      "OFBS provides scalable Virtual Network Operator (VNO) solutions, enabling ISPs and IT service providers to establish and manage their own VSAT networks using our hubs and teleport infrastructure."
  },
  {
    icon: MapPin,
    title: "GPS Satellite Tracking System (Hybrid)",
    description:
      "Secure out-of-band communication ensuring network resilience, remote access, and uninterrupted monitoring during primary link failures."
  },
  {
    icon: Truck,
    title: "Fleet Management System",
    description:
      "Custom-built VSAT solutions designed specifically for banking institutions, ensuring secure, reliable, and compliant financial connectivity."
  }
];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          id="segments-header"
          data-animate
          className={`text-center mb-16 ${
            isVisible["segments-header"] ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-900/10 rounded-full border border-blue-100 mb-6">
            <span className="text-blue-600 font-semibold text-sm">
              Market Solutions
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Key Market Segments
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Specialized enterprise satellite communication solutions designed
            to deliver reliability, security, and performance at scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, idx) => (
            <div
              key={idx}
              id={`segment-${idx}`}
              data-animate
              className={`group relative ${
                isVisible[`segment-${idx}`]
                  ? "animate-fade-up"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-t-2xl" />

                {/* Icon */}
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <segment.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {segment.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {segment.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default LKeyMarketSegments;
