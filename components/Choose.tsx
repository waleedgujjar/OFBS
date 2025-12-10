"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Award, ThumbsUp, Layers, TrendingUp, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
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

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Expertise',
      subtitle: '25+ Years of Excellence',
      description: 'Industry-recognized leaders with a proven track record of delivering exceptional results and innovative solutions.'
    },
    {
      icon: ThumbsUp,
      title: '98% Client Satisfaction',
      subtitle: 'Trusted by Thousands',
      description: 'Consistently exceeding expectations with personalized service and unwavering commitment to client success.'
    },
    {
      icon: Layers,
      title: 'Multi-Layer Intelligence',
      subtitle: 'Comprehensive Analytics',
      description: 'Advanced data processing across multiple dimensions providing deep insights and actionable recommendations.'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      subtitle: 'Measurable Results',
      description: 'Documented track record of delivering tangible business value with average 3x return on investment.'
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Support',
      subtitle: 'Always Available',
      description: 'Round-the-clock expert assistance ensuring your operations run smoothly without interruption.'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Top Accent Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          id="why-header" 
          data-animate 
          className={`text-center mb-20 ${isVisible['why-header'] ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-900/10 rounded-full border border-blue-100 mb-6">
            <span className="text-blue-600 font-semibold text-sm">Trust & Excellence</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Why Choose Us
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Partner with a team that combines decades of expertise with cutting-edge technology to drive your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              id={`feature-${idx}`}
              data-animate
              className={`group ${isVisible[`feature-${idx}`] ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <div className="relative bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Top Subtle Gradient */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>

                {/* Icon Container */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    {/* Icon Circle */}
                    <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                      <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-blue-600">
                    {feature.subtitle}
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div 
          id="stats-bar" 
          data-animate 
          className={`mt-20 ${isVisible['stats-bar'] ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">25+</p>
                <p className="text-sm text-slate-600 font-medium">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-sm text-slate-600 font-medium">Satisfaction Rate</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">3x</p>
                <p className="text-sm text-slate-600 font-medium">Average ROI</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-slate-600 font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        h2, h3 {
          font-family: 'Poppins', sans-serif;
        }

        p, span {
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

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;