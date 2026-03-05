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
    { id: 1, title: "Amazon bedrock getting started", institution: "AMAZON", href: "/certificados/certificado1.pdf" },
    { id: 2, title: "Foundations of Prompt Engineer", institution: "AMAZON", href: "/certificados/certificado2.pdf" },
    { id: 3, title: "Comunicação SERVERxCLIENT", institution: "DIO", href: "/certificados/certificado3.pdf" },
    { id: 4, title: "Java: primeira aplicação", institution: "ALURA", href: "/certificados/certificado4.pdf" },
    { id: 5, title: "VERSIONAMENTO GIT E GITHUB", institution: "DIO", href: "/certificados/certificado5.pdf" },
    { id: 6, title: "English Fundamentals", institution: "Inglish test SANTANDER", href: "/certificados/INGLÊS .pdf" },
    { id: 7, title: "Getting Started with AWS for Games", institution: "AWS for Games", href: "/certificados/certificado6.pdf" },
    { id: 8, title: "COMEÇANDO EM PROGRAMAÇÃO", institution: "ALURA", href: "/certificados/certificado7.pdf" },
    { id: 9, title: "UX DESIGN UNIVERSO", institution: "ALURA", href: "/certificados/certificado8.pdf" },
    { id: 10, title: "DATA ANALYSIS SHEETS", institution: "ALURA", href: "/certificados/certificado9.pdf" },
    { id: 11, title: "Introdução Front-End", institution: "DIO", href: "/certificados/certificado12.pdf" }
];

const CertificateCard = ({ certificate, index }: { certificate: Certificate; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative bg-black/40 backdrop-blur-sm border border-cyber-green/20 p-4 xs:p-5 md:p-6 transition-all duration-300 hover:bg-cyber-green/5 hover:border-cyber-green/60 hover:shadow-[0_0_20px_rgba(5,255,161,0.2)] flex flex-col h-full cursor-pointer hud-border"
            onClick={() => window.open(certificate.href, '_blank')}
        >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-4 h-4 text-cyber-green" />
            </div>

            <div className="mb-3 xs:mb-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 bg-cyber-green/10 flex items-center justify-center mb-3 xs:mb-4 transition-colors duration-300 group-hover:bg-cyber-green/20">
                    <Award className="w-4 h-4 xs:w-5 xs:h-5 text-cyber-green" />
                </div>
            </div>

            <h3 className="text-white font-orbitron font-bold text-sm xs:text-base md:text-lg leading-tight mb-2 group-hover:text-cyber-green transition-colors duration-300 relative inline-block uppercase italic tracking-tight">
                {certificate.title}
            </h3>

            <p className="text-slate-500 font-orbitron text-[10px] xs:text-xs md:text-sm font-medium uppercase tracking-[0.2em] mt-auto">
                ISSUER: {certificate.institution}
            </p>

            <div className="absolute top-0 right-0 p-1 text-[6px] font-orbitron text-cyber-green/20">VALID_AUTH_ID_0x{certificate.id}</div>
        </motion.div>
    );
};

export const CertificatesGrid = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6">
                {certificates.map((cert, index) => (
                    <CertificateCard key={cert.id} certificate={cert} index={index} />
                ))}
            </div>
        </div>
    );
};
