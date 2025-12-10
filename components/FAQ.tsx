import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white border border-[#E2E8F0] rounded-xl shadow-sm p-6 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* Question */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-[#0F172A]">
          {question}
        </h3>

        <ChevronDown
          className={`w-6 h-6 text-[#2563EB] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Answer */}
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#475569] mt-4 leading-relaxed"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;
