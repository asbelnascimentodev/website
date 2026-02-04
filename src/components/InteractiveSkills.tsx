import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Globe, Shield, ChevronsDown, Cpu, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        title: "Tecnologias & Código (Nível Básico)",
        icon: <Code className="w-5 h-5" />,
        skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "Python", "C#", "Lógica de Programação"],
    },
    {
        title: "Design & Criatividade",
        icon: <Palette className="w-5 h-5" />,
        skills: ["Photoshop", "UX/UI Design", "Figma", "Edição de Vídeos", "Interfaces Intuitivas"],
    },
    {
        title: "Infraestrutura & Redes (Nível Básico)",
        icon: <Shield className="w-5 h-5" />,
        skills: ["Redes de Computadores", "Protocolos (HTTP, WebSockets)", "AWS (Básico)", "Segurança da Informação", "Hardware & Manutenção"],
    },
    {
        title: "Soft Skills & Idiomas",
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
                    "group relative w-full flex items-center justify-between p-4 xs:p-5 md:p-6 rounded-2xl transition-all duration-500",
                    "bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden",
                    "hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                )}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-3 xs:gap-4 relative z-10">
                    <div className="p-2.5 xs:p-3 bg-sky-500/20 rounded-xl text-sky-400 group-hover:scale-110 transition-transform duration-300">
                        <Cpu className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-sm xs:text-base md:text-xl font-bold text-white tracking-tight">Explorar Minhas Habilidades</h3>
                        <p className="text-slate-400 text-[10px] xs:text-xs md:text-sm">Clique para ver meu stack tecnológico</p>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="relative z-10 p-1.5 xs:p-2 bg-white/5 rounded-full text-slate-400 group-hover:text-sky-400 transition-colors"
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
                                    className="p-4 xs:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-3 xs:mb-4">
                                        <div className="text-sky-400 shrink-0">{category.icon}</div>
                                        <h4 className="font-bold text-sm xs:text-base text-slate-100 italic">{category.title}</h4>
                                    </div>
                                    <ul className="space-y-1.5 xs:space-y-2">
                                        {category.skills.map((skill) => (
                                            <li key={skill} className="flex items-center gap-2 text-slate-400 text-[11px] xs:text-xs md:text-sm">
                                                <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full bg-sky-500/50 shrink-0" />
                                                <span className="">{skill}</span>
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
