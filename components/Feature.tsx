import { motion, useInView } from "framer-motion";
import { Globe, Shield, Target, Zap } from "lucide-react";
import { useRef } from "react";

const FeaturePillarsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const pillars = [
    {
      icon: Shield,
      title: "Unmatched Security",
      description: "Military-grade encryption and secure satellite channels protect your most sensitive communications."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "High-bandwidth solutions delivering speeds up to 100+ Mbps for seamless global operations."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Comprehensive satellite network spanning every continent, ocean, and remote location worldwide."
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Custom-tailored solutions designed specifically for your industry's unique requirements."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">OFBS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine innovation, reliability, and excellence to deliver satellite solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              
              <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-500"
                >
                  <pillar.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePillarsSection;