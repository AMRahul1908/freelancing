"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
    { label: "Projects Completed", value: "150+", id: "projects" },
    { label: "Happy Clients", value: "80+", id: "clients" },
    { label: "Years Experience", value: "5+", id: "exp" },
    { label: "Coffee Consumed", value: "1.2k", id: "coffee" },
];

export default function Stats() {
    return (
        <div className="py-24 bg-navy-dark/80 relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <motion.div
                                initial={{ y: 20 }}
                                whileInView={{ y: 0 }}
                                className="text-4xl md:text-6xl font-orbitron font-black text-gradient mb-2 group-hover:neon-text transition-all"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-white/40 font-poppins text-xs md:text-sm uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
