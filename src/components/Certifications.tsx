"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    title: "Feature Engineering",
    issuer: "Kaggle",
    color: "#20BEFF",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    color: "#20BEFF",
  },
];

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--bg-primary)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        {/* Certs Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
              whileHover={{ y: -4, boxShadow: "var(--card-shadow-hover)", transition: { type: "spring", stiffness: 300, damping: 30 } }}
            >
              {/* Accent */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: cert.color }} />

              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out"
                  style={{ background: `${cert.color}15`, color: cert.color }}
                >
                  <FiAward size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1">{cert.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {cert.issuer}
                  </p>
                </div>
                <FiExternalLink
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out shrink-0 mt-1"
                  style={{ color: "var(--text-tertiary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
