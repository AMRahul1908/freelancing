"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Skills", href: "/skills" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled || pathname !== "/" ? "bg-navy/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow">
                            <Rocket className="text-navy" size={24} />
                        </div>
                        <span className="font-orbitron text-xl font-bold text-gradient">DEV.SPACE</span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "font-poppins text-sm transition-colors",
                                    pathname === link.href ? "text-primary" : "text-white/70 hover:text-primary"
                                )}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <Link href="/contact">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-navy font-bold hover:neon-glow transition-all"
                        >
                            Hire Me
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-poppins transition-colors",
                                        pathname === link.href ? "text-primary" : "text-white/70 hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-navy font-bold">
                                    Hire Me
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

