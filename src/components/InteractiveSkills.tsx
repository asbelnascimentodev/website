import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Globe, Shield, ChevronsDown, Cpu, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        title: "CODE_TECHNOLOGIES",
        icon: <Code className="w-5 h-5" />,
        skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "Python", "C#", "Lógica de Programação"],
    },
    {
        title: "CREATIVE_CORE",
        icon: <Palette className="w-5 h-5" />,
        skills: ["Photoshop", "UX/UI Design", "Figma", "Edição de Vídeos", "Interfaces Intuitivas"],
    },
    {
        title: "INFRA_STREAM",
        icon: <Shield className="w-5 h-5" />,
        skills: ["Redes de Computadores", "Protocolos (HTTP, WebSockets)", "AWS (Básico)", "Segurança da Informação", "Hardware & Manutenção"],
    },
    {
        title: "NEURAL_NET_SOFT",
        icon: <Globe className="w-5 h-5" />,
        skills: ["Inglês Intermediário", "Comunicação Eficiente", "Prompt Engineering", "Resolução de Problemas"],
    },
];

export function InteractiveSkills() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "group relative w-full flex items-center justify-between p-4 xs:p-5 md:p-8 transition-all duration-500",
                    "bg-black/40 backdrop-blur-xl border border-cyber-blue/20 overflow-hidden",
                    "hover:border-cyber-blue/80 hover:shadow-neon-blue"
                )}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-3 xs:gap-4 relative z-10">
                    <div className="p-2.5 xs:p-3 bg-cyber-blue/20 text-cyber-blue group-hover:scale-110 transition-transform duration-300">
                        <Cpu className="w-5 h-5 md:w-8 md:h-8 animate-pulse" />
                    </div>
                    <div className="text-left font-orbitron">
                        <h3 className="text-sm xs:text-base md:text-2xl font-bold text-white tracking-[0.2em] uppercase">ACCESS_TECH_TREE</h3>
                        <p className="text-cyber-blue/60 text-[10px] xs:text-xs md:text-sm tracking-widest italic">Decrypting skill sets...</p>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="relative z-10 p-1.5 xs:p-2 border border-cyber-blue text-cyber-blue group-hover:bg-cyber-blue group-hover:text-black transition-all"
                >
                    <ChevronsDown className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden mt-4 xs:mt-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 pb-8">
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx + 0.2 }}
                                    className="p-4 sm:p-5 hud-border bg-black/60 border border-white/5 hover:border-cyber-blue/30 transition-all group/card"
                                >
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="p-1.5 sm:p-2 bg-white/5 text-cyber-blue group-hover/card:bg-cyber-blue group-hover/card:text-black transition-all">{category.icon}</div>
                                        <h4 className="font-orbitron font-bold text-xs sm:text-sm md:text-base text-white tracking-wider uppercase italic">{category.title}</h4>
                                    </div>
                                    <ul className="space-y-1 xs:space-y-2">
                                        {category.skills.map((skill) => (
                                            <li key={skill} className="flex items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs md:text-sm font-exo">
                                                <div className="w-1.5 sm:w-2 h-0.5 bg-cyber-blue shrink-0 group-hover/card:animate-ping" />
                                                <span className="group-hover/card:text-white transition-colors">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
