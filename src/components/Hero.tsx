"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Animated Grid */}
            <div className="absolute inset-0 z-0 bg-grid opacity-20" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-navy/50 to-background" />

            {/* Animated Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-0"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] z-0"
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                >
                    <Sparkles className="text-primary" size={16} />
                    <span className="text-sm font-poppins text-white/80 tracking-wide uppercase">
                        Available for New Projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold leading-tight mb-6"
                >
                    I Build <span className="text-gradient">Fast, Modern</span> <br />
                    & Scalable Websites
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 font-poppins"
                >
                    Freelance Web Developer creating high-performance websites for businesses, startups, and individuals.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-navy font-bold text-lg flex items-center gap-2 hover:neon-glow transition-all">
                        🚀 Hire Me
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all">
                        💼 View My Work
                    </button>
                </motion.div>

                {/* Floating Code Visuals */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 glass-card p-6 rounded-2xl rotate-[-6deg] border-primary/20"
                >
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <code className="text-primary text-sm font-mono block text-left">
                        const developer = {"{"} <br />
                        &nbsp;&nbsp;role: "Freelancer", <br />
                        &nbsp;&nbsp;focus: "Web development", <br />
                        &nbsp;&nbsp;speed: "🚀" <br />
                        {"}"};
                    </code>
                </motion.div>
            </div>
        </section>
    );
}
