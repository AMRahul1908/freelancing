"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Section from "./Section";

const items = [
    {
        title: "Clean & Modern Design",
        description: "Interfaces that don't just look good but feel intuitive and premium."
    },
    {
        title: "Mobile Responsive",
        description: "Every pixel is optimized for mobile, tablet, and desktop experiences."
    },
    {
        title: "Fast Loading Websites",
        description: "Focused on core web vitals and extreme performance optimizations."
    },
    {
        title: "Secure & Scalable",
        description: "Safe codebase built to handle high traffic and future growth."
    }
];

export default function WhyChooseMe() {
    return (
        <Section id="why-me">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 leading-tight">
                        Why Work With <br />
                        <span className="text-gradient">DEV.SPACE?</span>
                    </h2>
                    <div className="space-y-6">
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="mt-1">
                                    <CheckCircle2 className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-poppins text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/50 font-poppins text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative glass-card rounded-[2rem] p-8 border border-white/10 aspect-square flex flex-col justify-center items-center text-center">
                        <div className="text-7xl font-orbitron font-black text-primary mb-2">99.9%</div>
                        <div className="text-xl font-poppins text-white/70 uppercase tracking-widest">Client Satisfaction</div>
                        <div className="mt-12 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "99.9%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-primary to-secondary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
