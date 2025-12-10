import { motion, useInView } from "framer-motion";
import { Award, Globe, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { useRef } from "react";

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { number: "500+", label: "Global Clients", icon: Users },
    { number: "150+", label: "Countries Covered", icon: Globe },
    { number: "99.9%", label: "Uptime SLA", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50K+", label: "Active Connections", icon: Zap }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-blue-600 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl"
        />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, delay: index * 0.5, repeat: Infinity }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-10 h-10 text-blue-200" strokeWidth={1.5} />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="text-5xl font-bold text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  
                  <p className="text-blue-100 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AchievementsSection;