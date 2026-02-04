"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUsers, FiHeart } from "react-icons/fi";

const activities = [
  {
    title: "Vice Captain",
    organization: "University of Jaffna Table Tennis Team",
    description: "Leading the university table tennis team, organizing practice sessions, and representing the university in inter-university tournaments.",
    icon: FiUsers,
    color: "#6366f1",
  },
  {
    title: "Tamil Union Member",
    organization: "University of Jaffna",
    description: "Active member of the Tamil Union, contributing to cultural events, community building, and student welfare initiatives.",
    icon: FiHeart,
    color: "#ec4899",
  },
];

export default function Volunteering() {
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
            Volunteering & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        {/* Activities */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
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
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: act.color }} />

                <div
                  className="p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300 ease-out"
                  style={{ background: `${act.color}15`, color: act.color }}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold mb-1">{act.title}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--text-secondary)" }}>
                  {act.organization}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                  {act.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
