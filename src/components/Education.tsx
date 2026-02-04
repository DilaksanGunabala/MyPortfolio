"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--bg-secondary)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)" }} />

            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center"
            >
              <FiBookOpen className="text-primary-500" size={28} />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              BSc. Eng. (Hons.) in Computer Engineering
            </h3>
            <p className="text-lg font-medium mb-4" style={{ color: "var(--text-secondary)" }}>
              University of Jaffna
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm" style={{ color: "var(--text-tertiary)" }}>
              <div className="flex items-center gap-1.5">
                <FiCalendar size={14} />
                <span>2021 — Present</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiMapPin size={14} />
                <span>Jaffna, Sri Lanka</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Data Science", "Machine Learning", "Software Engineering", "Computer Networks"].map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
