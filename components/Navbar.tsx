"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const OFBSNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const solutions = [
    { name: "Satellite Services", desc: "Real-time tracking & optimization", href: "/services/satellite-services" },
    { name: "L-Band Satellite Services", desc: "Streamline operations end-to-end", href: "/services/l-band" },
    { name: "GIS", desc: "Connected ecosystem solutions", href: "/services/gis" },
    { name: "ICT Services", desc: "Seamless ERP & CRM sync", href: "/services/ict-services" },
    { name: "Integration Services", desc: "Seamless ERP & CRM sync", href: "/services/integration-services" },
     { name: "Radio Communication Solutions", desc: "Seamless ERP & CRM sync", href: "/services/radio-communication-solutions" }
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "About", href: "/about" },
    { name: "Coverage", href: "/coverage" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-white/70 backdrop-blur-2xl shadow-lg shadow-blue-600/10"
            : "bg-white/95 backdrop-blur-md"
        }`}
        style={{
          animation: "slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">


<Link href="/" className="flex-shrink-0 group cursor-pointer">
  <div className="flex items-center space-x-3">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative w-30 h-30 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition duration-500 overflow-hidden">
        <Image 
          src="/logo.png" 
          alt="OFBS Logo" 
          width={220}
          height={90}
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
</Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group">
                  {link.dropdown ? (
                    <div
                      onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                      onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563EB] transition duration-300 flex items-center gap-1 group"
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />

                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] group-hover:w-full transition-all duration-500"></span>
                      </Link>

                      {/* DROPDOWN */}
                      {isDesktopDropdownOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-2xl shadow-blue-700/10 border border-blue-100 overflow-hidden"
                          style={{
                            animation:
                              "fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        >
                          <div className="p-2">
                            {solutions.map((sol, i) => (
                              <Link
                                key={i}
                                href={sol.href}
                                className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition duration-300 group/item"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] mt-2 group-hover/item:scale-150 transition"></div>

                                  <div>
                                    <h4 className="font-semibold text-slate-800 group-hover/item:text-[#2563EB] transition">
                                      {sol.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                      {sol.desc}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563EB] transition duration-300 group"
                    >
                      {link.name}

                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] group-hover:w-full transition-all duration-500"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563EB] transition">
                Login
              </button>

              <button className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-full shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-700/50 transition-all duration-500 group overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#2563EB] transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>

          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[80vh] overflow-y-auto"
            style={{
              animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        className="w-full text-left px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 rounded-xl transition flex items-center justify-between"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isMobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isMobileDropdownOpen && (
                        <div className="pl-4 space-y-1">
                          {solutions.map((sol, i) => (
                            <Link
                              key={i}
                              href={sol.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-sm text-slate-600 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg transition"
                            >
                              {sol.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 rounded-xl transition"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3 border-t border-slate-200">
                <button className="w-full px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition">
                  Login
                </button>

                <button className="w-full px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-xl shadow-lg shadow-blue-600/40">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap");

        * {
          font-family: "Inter", sans-serif;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "Poppins", sans-serif;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default OFBSNavbar;