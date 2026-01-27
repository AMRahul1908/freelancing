"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const techStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
    "MongoDB", "Firebase", "Framer Motion", "GSAP", "Three.js",
    "GraphQL", "PostgreSQL", "Docker", "Vercel"
];

export default function TechStack() {
    return (
        <div className="py-20 border-y border-white/5 bg-navy-dark/50 overflow-hidden" id="skills">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h3 className="text-xl font-orbitron font-bold text-white/40 uppercase tracking-[0.3em]">
                    Powered By Modern Tech
                </h3>
            </div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap gap-12 items-center"
                >
                    {[...techStack, ...techStack].map((tech, i) => (
                        <span
                            key={i}
                            className="text-4xl md:text-6xl font-orbitron font-black text-transparent stroke-text opacity-20 hover:opacity-100 hover:text-primary transition-all cursor-default"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
