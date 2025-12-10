"use client";
import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, LineChart, DollarSign, MapPin, BarChart3, FileSearch } from 'lucide-react';

const ServiceOfferings = () => {
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
  const services = [
    {
      icon: TrendingUp,
      title: 'Market Data Aggregation',
      items: [
        'Real-time data collection from multiple sources and markets',
        'Comprehensive market intelligence and trend analysis',
        'Automated data normalization and quality assurance',
        'Custom dashboards with actionable insights and KPIs'
      ]
    },
    {
      icon: LineChart,
      title: 'Demand Forecasting',
      items: [
        'AI-powered predictive analytics for accurate demand planning',
        'Seasonal trend analysis with historical data modeling',
        'Risk assessment and scenario-based forecasting',
        'Integration with inventory and supply chain systems'
      ]
    },
    {
      icon: DollarSign,
      title: 'Pricing & Revenue Models',
      items: [
        'Dynamic pricing strategies based on market conditions',
        'Revenue optimization through advanced analytics',
        'Competitive pricing analysis and benchmarking',
        'Custom pricing models tailored to your business goals'
      ]
    },
    {
      icon: MapPin,
      title: 'Regional Penetration Strategy',
      items: [
        'Market entry analysis for target regions and demographics',
        'Localization strategies for products and services',
        'Partnership identification and channel development',
        'Regulatory compliance and market-specific adaptations'
      ]
    },
    {
      icon: BarChart3,
      title: 'Competitor Benchmarking',
      items: [
        'Comprehensive competitive landscape analysis',
        'Performance metrics comparison and gap analysis',
        'Market positioning and differentiation strategies',
        'Continuous monitoring of competitor activities and trends'
      ]
    },
    {
      icon: FileSearch,
      title: 'Custom Research & Consultation',
      items: [
        'Tailored research projects aligned with business objectives',
        'Expert consultation on market strategy and operations',
        'In-depth industry reports and white papers',
        'Ongoing advisory support and strategic guidance'
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          id="offerings-header" 
          data-animate 
          className={`text-center mb-20 ${isVisible['offerings-header'] ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-900/10 rounded-full border border-blue-100 mb-6">
            <span className="text-blue-600 font-semibold text-sm">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Service Offerings
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to drive growth, optimize operations, and deliver measurable business results.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              id={`service-${idx}`}
              data-animate
              className={`group ${isVisible[`service-${idx}`] ? 'animate-slide-left' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="bg-white rounded-2xl p-8 border border-blue-100/50 shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Icon Circle */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Bullet List */}
                    <ul className="space-y-3">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 group/item">
                          {/* Custom Bullet */}
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-900 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                          
                          {/* Text */}
                          <span className="text-slate-600 leading-relaxed text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          id="offerings-cta" 
          data-animate 
          className={`text-center mt-16 ${isVisible['offerings-cta'] ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-700/40 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Explore All Services
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        h2, h3 {
          font-family: 'Poppins', sans-serif;
        }

        p, span, li {
          font-family: 'Inter', sans-serif;
        }

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

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServiceOfferings;