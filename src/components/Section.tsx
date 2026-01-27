"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn("section-padding relative overflow-hidden", className)}
        >
            {children}
        </motion.section>
    );
}
