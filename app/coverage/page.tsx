"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Globe, Satellite, ShieldCheck, Network, Zap, Radio, MapPin, ArrowRight } from 'lucide-react';
import SatelliteCoverageSection from '@/components/Coverage';
import Footer from '@/components/Footer';
import OFBSNavbar from '@/components/Navbar';

const GlobalCoveragePage = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F1F5F9] overflow-hidden">
        <OFBSNavbar />
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#1E3A8A] to-[#0F172A]">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-[rgba(37,99,235,0.12)] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[rgba(6,182,212,0.08)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[rgba(30,58,138,0.06)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Satellite Rings */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-cyan-400/20 rounded-full animate-spin-slower"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="opacity-0 translate-y-8 animate-fade-up">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Satellite className="w-5 h-5 text-[#06B6D4] animate-float" />
                <span className="text-white/90 text-sm font-medium">Global Satellite Network</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Worldwide Coverage
              </span>
              <br />
              <span className="text-white">
                Beyond Boundaries
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Enterprise-grade satellite communication delivering seamless connectivity across every corner of the globe, powered by cutting-edge aerospace technology.
            </p>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* EXTENDED INFO SECTION */}
      <section className="relative py-32 px-6 bg-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgba(37,99,235,0.03)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgba(6,182,212,0.03)] rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div id="info-text" data-animate className={`space-y-8 ${isVisible['info-text'] ? 'animate-fade-right' : 'opacity-0'}`}>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 rounded-full border border-[#E2E8F0]">
                <span className="text-[#2563EB] font-semibold text-sm">Enterprise Connectivity</span>
              </div>
              
              <h2 className="text-5xl font-bold text-[#0F172A] leading-tight">
                Unparalleled Global Reach with Mission-Critical Reliability
              </h2>
              
              <p className="text-lg text-[#475569] leading-relaxed">
                Our advanced satellite network spans the entire planet, providing uninterrupted communication services to maritime vessels, remote operations, and enterprise clients in the most challenging environments. With strategic orbital positioning and redundant systems, we ensure 99.9% uptime across all coverage zones.
              </p>
              
              <p className="text-lg text-[#475569] leading-relaxed">
                From the Arctic Circle to Antarctic waters, our constellation delivers consistent, high-bandwidth connectivity that keeps your operations running smoothly. Whether you're navigating open oceans, managing offshore installations, or coordinating international logistics, our satellite infrastructure provides the backbone for your critical communications.
              </p>

              {/* Feature Bullets */}
              <div className="space-y-4 pt-4">
                {[
                  { icon: Globe, text: 'Complete global coverage including polar regions' },
                  { icon: Satellite, text: 'Multi-satellite redundancy for maximum uptime' },
                  { icon: ShieldCheck, text: 'Military-grade encryption and security protocols' },
                  { icon: Network, text: 'Seamless handover between satellite beams' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg shadow-[#2563EB]/20 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[#475569] text-lg pt-2 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div id="info-image" data-animate className={`relative ${isVisible['info-image'] ? 'animate-fade-left' : 'opacity-0'}`}>
              <div className="relative group">
                {/* Ambient Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2563EB]/20 to-[#06B6D4]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-[#2563EB]/5 to-[#06B6D4]/5 rounded-2xl p-2 border border-[#E2E8F0] shadow-2xl shadow-[#2563EB]/10 animate-float">
                  <div className="bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80" 
                      alt="Satellite in orbit"
                      className="w-full h-auto opacity-90"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#2563EB]/20 rounded-full animate-spin-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[#06B6D4]/20 rounded-full animate-spin-slower"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SatelliteCoverageSection />
      {/* FEATURES SECTION */}
      <section className="relative py-32 px-6 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">
          <div id="features-header" data-animate className={`text-center mb-20 ${isVisible['features-header'] ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold text-[#0F172A] mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-[#475569] max-w-2xl mx-auto">
              Enterprise-grade features designed for mission-critical operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Ultra-Low Latency',
                description: 'Sub-500ms round-trip times ensuring real-time communication for critical operations'
              },
              {
                icon: Radio,
                title: 'High Bandwidth',
                description: 'Up to 150 Mbps throughput supporting data-intensive applications and streaming'
              },
              {
                icon: ShieldCheck,
                title: 'Secure by Design',
                description: 'End-to-end encryption with multi-layer security protocols and compliance certifications'
              },
              {
                icon: MapPin,
                title: 'Precision Tracking',
                description: 'GPS-level positioning accuracy with continuous asset monitoring and geofencing'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                id={`feature-${idx}`}
                data-animate
                className={`group relative ${isVisible[`feature-${idx}`] ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Card Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB]/20 to-[#06B6D4]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-lg hover:shadow-2xl hover:shadow-[#2563EB]/10 transition-all duration-300 hover:scale-105 h-full">
                  {/* Gradient Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-t-2xl"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#2563EB]/30 group-hover:rotate-6 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                  <p className="text-[#475569] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#1E3A8A] to-[#0F172A]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[rgba(6,182,212,0.15)] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[rgba(37,99,235,0.15)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
         <div
  id="cta-content"
  data-animate
  className={isVisible["cta-content"] ? "animate-fade-up" : "opacity-0"}
>
  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
    Ready to Connect
    <br />
    <span className="text-blue-100">Anywhere on Earth?</span>
  </h2>

  <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
    Join thousands of enterprises trusting our satellite network for their most critical communications. Get started today with a consultation from our aerospace experts.
  </p>

  <button className="group px-10 py-5 bg-white text-[#2563EB] rounded-xl font-bold text-lg shadow-xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
    Schedule Consultation
    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
  </button>
</div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
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

        @keyframes fade-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        .animate-fade-right {
          animation: fade-right 0.8s ease-out forwards;
        }

        .animate-fade-left {
          animation: fade-left 0.8s ease-out forwards;
        }

        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GlobalCoveragePage;