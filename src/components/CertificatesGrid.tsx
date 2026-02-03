import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
    id: number;
    title: string;
    institution: string;
    href: string;
    icon?: string;
}

const certificates: Certificate[] = [
    { id: 1, title: "Amazon bedrock getting started", institution: "AMAZON", href: "certificados/certificado1.pdf" },
    { id: 2, title: "Foundations of Prompt Engineer", institution: "AMAZON", href: "certificados/certificado2.pdf" },
    { id: 3, title: "Comunicação SERVERxCLIENT", institution: "DIO", href: "certificados/certificado3.pdf" },
    { id: 4, title: "Java: primeira aplicação", institution: "ALURA", href: "certificados/certificado4.pdf" },
    { id: 5, title: "VERSIONAMENTO GIT E GITHUB", institution: "DIO", href: "certificados/certificado5.pdf" },
    { id: 6, title: "English Fundamentals", institution: "Inglish test SANTANDER", href: "certificados/INGLÊS .pdf" },
    { id: 7, title: "Getting Started with AWS for Games", institution: "AWS for Games", href: "certificados/certificado6.pdf" },
    { id: 8, title: "COMEÇANDO EM PROGRAMAÇÃO", institution: "ALURA", href: "certificados/certificado7.pdf" },
    { id: 9, title: "UX DESIGN UNIVERSO", institution: "ALURA", href: "certificados/certificado8.pdf" },
    { id: 10, title: "DATA ANALYSIS SHEETS", institution: "ALURA", href: "certificados/certificado9.pdf" },
    { id: 11, title: "Introdução Front-End", institution: "DIO", href: "certificados/certificado12.pdf" }
];

const CertificateCard = ({ certificate, index }: { certificate: Certificate; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/60 hover:border-sky-400/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col h-full cursor-pointer"
            onClick={() => window.open(certificate.href, '_blank')}
        >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-4 h-4 text-sky-400" />
            </div>

            <div className="mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-sky-400/20">
                    <Award className="w-5 h-5 text-sky-400" />
                </div>
            </div>

            <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-sky-400 transition-colors duration-300 relative inline-block">
                {certificate.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </h3>

            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mt-auto">
                {certificate.institution}
            </p>

            {/* Subtle Glow effect on hover */}
            <div className="absolute inset-0 bg-sky-400/0 rounded-2xl group-hover:bg-sky-400/5 transition-colors duration-500 -z-10 pointer-events-none"></div>
        </motion.div>
    );
};

export const CertificatesGrid = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {certificates.map((cert, index) => (
                    <CertificateCard key={cert.id} certificate={cert} index={index} />
                ))}
            </div>
        </div>
    );
};
