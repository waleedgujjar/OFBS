"use client";
import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const MarketIntelligenceOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: 'Predictive Market Analytics',
      description: 'Advanced forecasting models that identify emerging trends and market opportunities before your competitors'
    },
    {
      icon: Users,
      title: 'Customer Behavior Analytics',
      description: 'Deep insights into customer patterns, preferences, and decision-making processes across all touchpoints'
    },
    {
      icon: Target,
      title: 'Strategic Competitive Positioning',
      description: 'Real-time competitive intelligence and positioning strategies to maintain market leadership'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-semibold text-blue-700">Market Intelligence</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className={`text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              End-to-End Market
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                Intelligence & Analytics
              </span>
            </h2>

            {/* Description */}
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              Transform raw data into actionable intelligence with our comprehensive analytics platform. 
              We deliver deep market insights, competitive analysis, and predictive modeling that empowers 
              strategic decision-making across your organization. Our advanced algorithms process millions 
              of data points to reveal patterns, opportunities, and risks in real-time.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-xl p-6 border border-blue-100/50 shadow-sm shadow-blue-500/5 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ 
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                >
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2563EB]/0 to-[#1D4ED8]/0 group-hover:from-[#2563EB]/10 group-hover:to-[#1D4ED8]/10 transition-all duration-500 -z-10"></div>
                  
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500"></div>

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Analytics Illustration */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-3xl blur-3xl transform scale-110"></div>

            {/* Main Chart Container */}
            <div className="relative bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/50 rounded-2xl p-8 shadow-xl shadow-blue-500/10">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Market Performance</h4>
                  <p className="text-2xl font-bold text-[#0F172A]">$2.4M</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">+23.5%</span>
                </div>
              </div>

              {/* Abstract Chart Visualization */}
              <div className="relative h-64">
                {/* Grid Lines */}
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-b border-blue-100/50"
                      style={{ top: `${i * 25}%` }}
                    ></div>
                  ))}
                </div>

                {/* Chart Bars */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 px-4">
                  {[65, 45, 80, 55, 90, 70, 85, 60].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-[#2563EB] to-[#1D4ED8] rounded-t-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 animate-chart-rise"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Trend Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 20 180 Q 80 140, 140 120 T 260 80 T 380 100"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Chart Footer */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-blue-100/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#2563EB] rounded-full"></div>
                  <span className="text-xs text-gray-600">Revenue Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#06B6D4] rounded-full"></div>
                  <span className="text-xs text-gray-600">Market Share</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#1D4ED8] rounded-full"></div>
                  <span className="text-xs text-gray-600">Predictions</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-200/30 rounded-full animate-spin-very-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-blue-300/20 rounded-full animate-spin-reverse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes chart-rise {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
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

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-chart-rise {
          animation: chart-rise 0.8s ease-out forwards;
          transform-origin: bottom;
        }

        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
          animation-delay: 0.8s;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MarketIntelligenceOverview;