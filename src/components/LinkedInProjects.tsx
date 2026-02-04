import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Linkedin } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description: string;
    beforeImg: string;
    afterImg: string;
    webCvLink: string;
    linkedinLink: string;
    improvements: string[];
}

const projects: Project[] = [
    {
        id: 1,
        name: "Brunno Matheus",
        description: "Transformação visual e estratégica focada em autoridade profissional e design moderno.",
        beforeImg: "/linkedinbrunoantes.jpeg",
        afterImg: "/linkedinbrunodepois.png",
        webCvLink: "https://brunno-matheus-382748740928.us-west1.run.app/",
        linkedinLink: "https://www.linkedin.com/in/asbel-nascimento-0a7530221/",
        improvements: [
            "Identidade visual estratégica e profissional.",
            "Headline otimizada para buscadores (SEO).",
            "Banner personalizado com CTA clara.",
            "Destaque de competências e conquistas principais.",
            "Desenvolvimento de Currículo Web exclusivo."
        ]
    },
    {
        id: 2,
        name: "Marcos Neves",
        description: "Reestruturação completa de perfil para transição de carreira e fortalecimento de marca pessoal.",
        beforeImg: "/linkedinmarcosantes.png",
        afterImg: "/linkedinmarcosdepois.png",
        webCvLink: "https://marcos-neves-portfolio-382748740928.us-west1.run.app/",
        linkedinLink: "https://www.linkedin.com/in/asbel-nascimento-0a7530221/",
        improvements: [
            "Design de perfil clean e executivo.",
            "Otimização de palavras-chave para recrutamento.",
            "Criação de portfólio web integrado.",
            "Estratégia de networking visual.",
            "Banner de impacto com foco em resultados."
        ]
    },
    {
        id: 3,
        name: "Alexya Guerra",
        description: "Branding pessoal e otimização de perfil focado em aumentar a visibilidade e impacto profissional.",
        beforeImg: "/linkedinalexyaantes.png",
        afterImg: "/linkedinalexyadepois.png",
        webCvLink: "https://alexyaguerra.github.io/AlexyaGuerra/",
        linkedinLink: "https://www.linkedin.com/in/asbel-nascimento-0a7530221/",
        improvements: [
            "Branding pessoal moderno e impactante.",
            "Headline focada em competências e resultados.",
            "Banner e artes visuais exclusivas.",
            "Otimização de SEO para maior visibilidade.",
            "Criação de portfólio web integrado (GitHub Pages)."
        ]
    }
];

const CaseStudy = ({ project }: { project: Project }) => (
    <div className="mb-12 md:mb-32 last:mb-0 w-full">
        <div className="text-center mb-10 md:mb-16 px-4">
            <h3 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Case: {project.name}
            </h3>
            <p className="text-slate-400 text-sm xs:text-base md:text-lg max-w-2xl mx-auto break-words">
                {project.description}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
            {/* Antes */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group w-full"
            >
                <div className="absolute -top-4 md:-top-6 left-4 md:left-6 z-10">
                    <span className="bg-slate-800 text-slate-400 text-[10px] md:text-sm font-bold px-3 py-1 rounded-full border border-white/10 shadow-xl">
                        ANTES
                    </span>
                </div>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-sm grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl">
                    <img
                        src={project.beforeImg}
                        alt={`${project.name} Antes`}
                        className="w-full h-auto object-cover aspect-video md:aspect-auto"
                    />
                </div>
            </motion.div>

            {/* Depois */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group w-full"
            >
                <div className="absolute -top-4 md:-top-6 left-4 md:left-6 z-10">
                    <span className="bg-sky-500 text-white text-[10px] md:text-sm font-bold px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.5)] flex items-center gap-2">
                        <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full animate-pulse" />
                        DEPOIS
                    </span>
                </div>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden border-2 border-sky-400/30 bg-slate-900/60 backdrop-blur-md shadow-[0_0_40px_rgba(14,165,233,0.15)] group-hover:border-sky-400 group-hover:shadow-[0_0_50px_rgba(14,165,233,0.25)] transition-all duration-700">
                    <img
                        src={project.afterImg}
                        alt={`${project.name} Depois`}
                        className="w-full h-auto object-cover aspect-video md:aspect-auto"
                    />
                </div>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-5 xs:p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-slate-900/60 to-slate-950/40 border border-white/10 backdrop-blur-xl max-w-4xl mx-auto shadow-2xl w-full"
        >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch md:items-center">
                <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Destaques do Projeto</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {project.improvements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-slate-300">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-sky-400 rounded-full shrink-0" />
                                <span className="text-xs xs:text-sm md:text-base leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-3 md:gap-4 shrink-0 w-full md:w-auto">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href={project.webCvLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-colors border border-white/10 shadow-xl group"
                        >
                            Ver Currículo Web
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href={project.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-[0_10px_30px_rgba(14,165,233,0.3)]"
                        >
                            Ver No LinkedIn
                            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const LinkedInProjects = () => {
    return (
        <div className="w-full py-24 flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-24 px-4">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-sky-400/50">
                        Projetos LinkedIn
                    </h2>
                    <div className="h-1.5 w-32 bg-sky-500 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(14,165,233,0.6)]" />
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium">
                        Consultoria estratégica transformando perfis comuns em máquinas de atração de oportunidades e autoridade profissional.
                    </p>
                </div>

                <div className="space-y-20 md:space-y-40">
                    {projects.map((project) => (
                        <CaseStudy key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};
