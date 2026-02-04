"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const technologies = ["React", "Node.js", "Express", "MongoDB", "REST APIs"];

const responsibilities = [
  "Worked as Frontend & Full-Stack Developer, contributing to enterprise-grade applications",
  "Built responsive, user-friendly UIs using React.js with modern component architecture",
  "Integrated REST APIs for real-time data rendering and seamless backend communication",
  "Developed MERN stack features including authentication, CRUD modules, and backend services",
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 sm:py-28" style={{ background: "var(--bg-primary)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden sm:block" style={{ background: "var(--border-color)" }} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative sm:ml-16"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+6px)] top-8 w-3.5 h-3.5 rounded-full bg-primary-500 hidden sm:block pulse-glow" />

            <div
              className="rounded-2xl p-6 sm:p-8 transition-all duration-150"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FiBriefcase className="text-primary-500" size={20} />
                    <h3 className="text-xl font-bold">Intern — Full-Stack Developer</h3>
                  </div>
                  <p className="text-lg font-medium" style={{ color: "var(--text-secondary)" }}>
                    Lanka Electricity Company (Pvt) Ltd
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-sm" style={{ color: "var(--text-tertiary)" }}>
                  <div className="flex items-center gap-1.5">
                    <FiCalendar size={14} />
                    <span>Feb 2025 — Aug 2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiMapPin size={14} />
                    <span>Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
