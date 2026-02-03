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

const PhotoCarousel = ({ baseVelocity = -0.2 }: { baseVelocity?: number }) => {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

    useAnimationFrame((t, delta) => {
        let moveBy = baseVelocity * (delta / 1000) * 8;
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden whitespace-nowrap flex w-full relative py-2 xs:py-4">
            <motion.div className="flex shrink-0 gap-4 xs:gap-6" style={{ x }}>
                {[...photos, ...photos, ...photos, ...photos].map((photo, index) => (
                    <div
                        key={`${photo.id}-${index}`}
                        className="flex-none w-[200px] xs:w-[280px] md:w-[400px] aspect-[4/3] rounded-2xl xs:rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
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
            <div className="w-full max-w-3xl mx-auto px-4 mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                    INSPETOR DE QUALIDADE
                </h2>

                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 xs:p-8 md:p-10 shadow-2xl w-full">
                    <p className="text-base md:text-xl leading-relaxed text-slate-200 font-medium text-center md:text-justify overflow-wrap-break-word">
                        Atuo como Inspetor de Qualidade Júnior, assegurando que processos, produtos e serviços estejam em estrita
                        conformidade com os padrões estabelecidos (ISO 9001). Realizo inspeções detalhadas, identifico não
                        conformidades e proponho melhorias. Minha atuação inclui inspeção de porões de navios, classificação de
                        grãos, e análise de RI no açúcar, bem como o acompanhamento de descarga e carregamento de produtos.
                    </p>
                </div>
            </div>

            <div className="w-full relative py-6 xs:py-10">
                {/* Vignette Effect - Responsive width */}
                <div className="absolute top-0 left-0 bottom-0 w-[10%] xs:w-[20%] md:w-[35%] bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-[10%] xs:w-[20%] md:w-[35%] bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-20 pointer-events-none" />

                {/* Secondary inner vignette for smoother transition */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20 z-10 pointer-events-none" />

                <div className="w-full overflow-hidden">
                    <PhotoCarousel />
                </div>
            </div>
        </div>
    );
};
