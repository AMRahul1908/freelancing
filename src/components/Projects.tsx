"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";

const projects = [
    {
        title: "NexGen Agency",
        description: "Modern landing page for a creative AI agency with GSAP animations.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Three.js", "Tailwind"],
    },
    {
        title: "E-Shop Pro",
        description: "Full-stack e-commerce platform with Stripe integration and dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Firebase", "Stripe"],
    },
    {
        title: "CloudSync Dashboard",
        description: "Powerful admin portal for managing cloud infrastructure and logs.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
        tags: ["TypeScript", "Recharts", "Prisma"],
    },
    {
        title: "Portfolio Lite",
        description: "A fast, SEO-optimized portfolio template for creative professionals.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
        tags: ["Vite", "Framer Motion", "Tailwind"],
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-navy-dark/30">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-white/60 max-w-xl font-poppins">
                        A small selection of my recent work in web development and design.
                    </p>
                </div>
                <button className="px-8 py-3 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all">
                    View All Work
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 glass-card"
                    >
                        {/* Project Image */}
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-orbitron px-2 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-poppins text-white group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-white/50 text-sm mb-6 font-poppins line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 text-white font-bold text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                    <Github size={18} /> Code
                                </button>
                                <button className="flex items-center gap-2 text-navy font-bold text-sm bg-primary px-4 py-2 rounded-lg hover:neon-glow transition-all">
                                    <ExternalLink size={18} /> Live Demo
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
