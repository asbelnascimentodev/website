import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

interface DesignItem {
    id: number;
    title: string;
    category: string;
    src: string;
    href: string;
}

const designs: DesignItem[] = [
    { id: 1, title: "Design de fisiculturismo", category: "DESIGN | PHOTOSHOP", src: "/projetos photoshop/Bodybuilder.png", href: "/projetos photoshop/Bodybuilder.png" },
    { id: 2, title: "CARROSSEL POST INSTAGRAM", category: "IMAGEM CARROSSEL | PHOTOSHOP", src: "/projetos photoshop/carrossel patricia 2.jpg", href: "/projetos photoshop/carrossel patricia 2.jpg" },
    { id: 3, title: "Criação de Logo e Identidade", category: "Design Gráfico | Photoshop", src: "/projetos photoshop/cartao visita enrolados Jú.jpg", href: "/projetos photoshop/cartao visita enrolados Jú.jpg" },
    { id: 4, title: "Criação de POST-INSTAGRAM", category: "Design Gráfico | Photoshop", src: "/projetos photoshop/arte pepper.jpg", href: "/projetos photoshop/arte pepper.jpg" },
    { id: 5, title: "Flyer Esportivo", category: "DESIGN | PHOTOSHOP", src: "/projetos photoshop/harry kane  sport design.jpg", href: "/projetos photoshop/harry kane  sport design.jpg" },
    { id: 6, title: "Flyer Esportivo", category: "DESIGN | PHOTOSHOP", src: "/projetos photoshop/corinthians post.jpg", href: "/projetos photoshop/corinthians post.jpg" }
];

const DesignCard = ({ item }: { item: DesignItem }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="relative flex-none w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] aspect-[4/5] bg-slate-900/40 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
            onClick={() => window.open(item.href, '_blank')}
        >
            <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold text-sm xs:text-base md:text-lg leading-tight group-hover:text-sky-400 transition-colors duration-300">
                        {item.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 mt-1" />
                </div>
                <p className="text-slate-400 text-[9px] xs:text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                    {item.category}
                </p>
            </div>

            {/* Glass border effect on hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-sky-400/0 group-hover:border-sky-400/30 transition-all duration-500 pointer-events-none" />
        </motion.div>
    );
};

export const DesignCarousel = () => {
    return (
        <div className="w-full relative overflow-hidden py-4">
            <div
                className="flex w-fit"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <motion.div
                    animate={{
                        x: [0, "-50%"],
                    }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex gap-4 md:gap-6 px-4 md:px-0"
                >
                    {/* Duplicate the array to create a seamless loop */}
                    {[...designs, ...designs].map((item, idx) => (
                        <div key={`${item.id}-${idx}`} className="flex-none">
                            <DesignCard item={item} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
