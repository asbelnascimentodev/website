import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { wrap } from '@motionone/utils';

// --- Types ---
interface QualityPhoto {
    id: number;
    src: string;
    alt: string;
}

// --- Constants ---
const PHOTOS: QualityPhoto[] = [
    { id: 1, src: "/Inspetor de qualidade/acompanhamento.jpeg", alt: "Acompanhamento" },
    { id: 2, src: "/Inspetor de qualidade/dentro do porao2.jpeg", alt: "Dentro do porão 2" },
    { id: 3, src: "/Inspetor de qualidade/proa.jpeg", alt: "Proa" },
    { id: 4, src: "/Inspetor de qualidade/dentro do porão.jpeg", alt: "Dentro do porão" },
    { id: 5, src: "/Inspetor de qualidade/talho navio de milho.jpeg", alt: "Talho navio de milho" },
    { id: 6, src: "/Inspetor de qualidade/vante.jpeg", alt: "Vante" },
    { id: 7, src: "/Inspetor de qualidade/operação1.jpeg", alt: "Operação 1" },
    { id: 8, src: "/Inspetor de qualidade/u7.jpeg", alt: "U7" }
];

// --- Sub-components ---

/**
 * Individual photo card for the carousel
 */
const PhotoCard = ({ photo }: { photo: QualityPhoto }) => (
    <div className="flex-none w-[240px] xs:w-[280px] sm:w-[320px] h-[160px] xs:h-[180px] sm:h-[220px] overflow-hidden rounded-xl border border-white/5 shadow-lg">
        <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
        />
    </div>
);

/**
 * Infinite horizontal scrolling carousel
 */
const PhotoCarousel = ({ baseVelocity = -1.2 }: { baseVelocity?: number }) => {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

    useAnimationFrame((_, delta) => {
        let moveBy = baseVelocity * (delta / 1000) * 8;
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="relative w-full overflow-hidden py-4">
            {/* Vignette Overlays for Premium Look */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            <motion.div className="flex shrink-0 gap-4" style={{ x }}>
                {/* Quadruple the list to ensure seamless looping at any speed/width */}
                {[...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS].map((photo, index) => (
                    <PhotoCard key={`${photo.id}-${index}`} photo={photo} />
                ))}
            </motion.div>
        </div>
    );
};

// --- Main Component ---

export const QualityInspector = () => {
    const textRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full overflow-x-hidden selection:bg-sky-500/30">
            {/* Inner responsive container */}
            <div className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-24 space-y-12 md:space-y-20">

                {/* Header & Description Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center space-y-8 md:space-y-12"
                >
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-sky-400">
                        INSPETOR DE QUALIDADE
                    </h2>

                    {/* Content Glass-Card */}
                    <div className="group relative w-full">
                        {/* Subtle background glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />

                        <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20">
                            <p className="text-base sm:text-lg md:text-2xl leading-relaxed md:leading-loose text-slate-200 font-medium text-justify hyphens-auto break-words">
                                Atuo como Inspetor de Qualidade Júnior, assegurando que processos, produtos e serviços estejam em estrita conformidade com os padrões estabelecidos (ISO 9001). Realizo inspeções detalhadas, identifico não conformidades e proponho melhorias. Minha atuação inclui inspeção de porões de navios, classificação de grãos e análise de RI no açúcar, bem como o acompanhamento de descarga e carregamento de produtos.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Showcase (Carousel) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1.2 }}
                    className="w-full"
                >
                    <PhotoCarousel />
                </motion.div>

            </div>
        </div>
    );
};
