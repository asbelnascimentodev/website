import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { wrap } from '@motionone/utils';

interface QualityPhoto {
    id: number;
    src: string;
    alt: string;
}

const photos: QualityPhoto[] = [
    { id: 1, src: "/Inspetor de qualidade/acompanhamento.jpeg", alt: "Acompanhamento" },
    { id: 2, src: "/Inspetor de qualidade/dentro do porao2.jpeg", alt: "Dentro do porão 2" },
    { id: 3, src: "/Inspetor de qualidade/proa.jpeg", alt: "Proa" },
    { id: 4, src: "/Inspetor de qualidade/dentro do porão.jpeg", alt: "Dentro do porão" },
    { id: 5, src: "/Inspetor de qualidade/talho navio de milho.jpeg", alt: "Talho navio de milho" },
    { id: 6, src: "/Inspetor de qualidade/vante.jpeg", alt: "Vante" },
    { id: 7, src: "/Inspetor de qualidade/operação1.jpeg", alt: "Operação 1" },
    { id: 8, src: "/Inspetor de qualidade/u7.jpeg", alt: "U7" }
];

const PhotoCarousel = ({ baseVelocity = -1.2 }: { baseVelocity?: number }) => {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

    useAnimationFrame((t, delta) => {
        let moveBy = baseVelocity * (delta / 1000) * 8;
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="carousel-container relative w-full max-w-[800px] mx-auto overflow-hidden rounded-3xl">
            {/* Vinheta/Vignette Overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)'
                }}
            />

            <motion.div className="flex shrink-0 gap-2" style={{ x }}>
                {[...photos, ...photos, ...photos, ...photos].map((photo, index) => (
                    <div
                        key={`${photo.id}-${index}`}
                        className="flex-none w-[240px] xs:w-[300px] h-[160px] xs:h-[200px] overflow-hidden rounded-xl"
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const QualityInspector = () => {
    return (
        <div className="w-full py-8 md:py-16 flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-xl mx-auto px-4 mb-8 md:mb-16">
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-extrabold text-white mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                    INSPETOR DE QUALIDADE
                </h2>

                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-5 xs:p-8 md:p-10 shadow-2xl w-full max-h-[250px] overflow-y-auto custom-scrollbar">
                    <p className="text-sm xs:text-base md:text-lg leading-relaxed text-slate-200 font-medium text-justify overflow-wrap-break-word">
                        Atuo como Inspetor de Qualidade Júnior, assegurando que processos, produtos e serviços estejam em estrita
                        conformidade com os padrões estabelecidos (ISO 9001). Realizo inspeções detalhadas, identifico não
                        conformidades e proponho melhorias. Minha atuação inclui inspeção de porões de navios, classificação de
                        grãos, e análise de RI no açúcar, bem como o acompanhamento de descarga e carregamento de produtos.
                    </p>
                </div>
            </div>

            <div className="w-full relative px-4">
                <PhotoCarousel />
            </div>
        </div>
    );
};
