"use client";

import { Rocket } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-navy-dark text-center">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Rocket className="text-navy" size={18} />
                    </div>
                    <span className="font-orbitron font-bold text-gradient text-xl">DEV.SPACE</span>
                </div>
                <p className="text-white/30 font-poppins text-sm mb-6">
                    © {new Date().getFullYear()} DEV.SPACE - Premium Freelance Web Development.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="#" className="text-white/40 hover:text-primary transition-colors font-poppins text-sm uppercase tracking-widest">Twitter</a>
                    <a href="#" className="text-white/40 hover:text-primary transition-colors font-poppins text-sm uppercase tracking-widest">LinkedIn</a>
                    <a href="#" className="text-white/40 hover:text-primary transition-colors font-poppins text-sm uppercase tracking-widest">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
