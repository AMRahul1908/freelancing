"use client";

import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Cpu, BarChart3, ChevronRight } from "lucide-react";
import Section from "./Section";

const services = [
    {
        title: "Business Websites",
        description: "Professional websites for companies and services that convert visitors into customers.",
        icon: <Monitor size={32} />,
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/30",
    },
    {
        title: "E-commerce Websites",
        description: "Online stores with payment integration, inventory management, and seamless checkout.",
        icon: <ShoppingCart size={32} />,
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-purple-500/30",
    },
    {
        title: "Web Applications",
        description: "Complex dashboards, portals, and booking systems built for speed and reliability.",
        icon: <Cpu size={32} />,
        color: "from-emerald-500/20 to-teal-500/20",
        borderColor: "border-emerald-500/30",
    },
    {
        title: "Website Optimization",
        description: "Speed improvement, SEO basics, and high responsiveness for all device types.",
        icon: <BarChart3 size={32} />,
        color: "from-orange-500/20 to-red-500/20",
        borderColor: "border-orange-500/30",
    },
];

export default function Services() {
    return (
        <Section id="services">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                    Scalable <span className="text-gradient">Solutions</span>
                </h2>
                <p className="text-white/60 max-w-xl mx-auto font-poppins">
                    Leveraging modern technologies to build high-performance digital products.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className={`glass-card p-8 rounded-3xl border ${service.borderColor} group hover:neon-glow transition-all`}
                    >
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform`}>
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 font-poppins text-white">
                            {service.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-6 font-poppins">
                            {service.description}
                        </p>
                        <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                            Learn More <ChevronRight size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
