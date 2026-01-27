"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, Send } from "lucide-react";
import Section from "./Section";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "Business Website",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.url) {
                window.open(data.url, "_blank");
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Error sending message. Please check your connection.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Section id="contact" className="pb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                    Start Your <span className="text-gradient">Website</span>
                </h2>
                <p className="text-white/60 max-w-xl mx-auto font-poppins">
                    Have a vision? Let's turn it into reality. Fill out the form below.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="relative group">
                                <label className="text-xs font-orbitron text-white/40 uppercase mb-2 block tracking-widest">Name</label>
                                <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus-within:border-primary/50 group-hover:border-white/20 transition-all">
                                    <User className="text-white/20 group-focus-within:text-primary" size={20} />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="bg-transparent border-none outline-none w-full font-poppins text-white placeholder:text-white/20"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="text-xs font-orbitron text-white/40 uppercase mb-2 block tracking-widest">Email</label>
                                <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus-within:border-primary/50 group-hover:border-white/20 transition-all">
                                    <Mail className="text-white/20 group-focus-within:text-primary" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="bg-transparent border-none outline-none w-full font-poppins text-white placeholder:text-white/20"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="text-xs font-orbitron text-white/40 uppercase mb-2 block tracking-widest">Project Type</label>
                                <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus-within:border-primary/50 group-hover:border-white/20 transition-all">
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="bg-transparent border-none outline-none w-full font-poppins text-white appearance-none cursor-pointer [&>option]:bg-navy [&>option]:text-white"
                                    >
                                        <option>Business Website</option>
                                        <option>E-commerce Store</option>
                                        <option>Web Application</option>
                                        <option>UI/UX Design</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <label className="text-xs font-orbitron text-white/40 uppercase mb-2 block tracking-widest">Message</label>
                            <div className="h-full min-h-[200px] flex items-start gap-3 px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus-within:border-primary/50 group-hover:border-white/20 transition-all">
                                <MessageSquare className="text-white/20 group-focus-within:text-primary mt-1" size={20} />
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="bg-transparent border-none outline-none w-full h-full font-poppins text-white placeholder:text-white/20 resize-none"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <button
                                type="submit"
                                className="w-full py-5 rounded-2xl bg-primary text-navy font-orbitron font-black text-xl flex items-center justify-center gap-3 hover:neon-glow transition-all active:scale-95"
                            >
                                Start Your Website <Send size={24} />
                            </button>
                        </div>
                    </form>

                    {/* Decorative Glow */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
                </div>
            </div>
        </Section>
    );
}
