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
            className="relative flex-none w-[260px] xs:w-[280px] sm:w-[320px] md:w-[350px] aspect-[4/5] bg-slate-900/40 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
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
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative w-full group overflow-hidden">
            {/* Navigation Arrows - Desktop Only for senior feel */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:md:opacity-100 transition-all duration-300 hover:bg-sky-500 hover:border-sky-400 hover:scale-110 hidden md:flex"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:md:opacity-100 transition-all duration-300 hover:bg-sky-500 hover:border-sky-400 hover:scale-110 hidden md:flex"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                className="galeria-designs snap-x snap-mandatory px-4 md:px-0"
            >
                {designs.map((design) => (
                    <motion.div
                        key={design.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="design-item snap-center flex-none group/card relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                src={design.src}
                                alt={design.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2">Design</span>
                                <h3 className="text-white text-xl font-bold">{design.title}</h3>
                                <p className="text-slate-300 text-sm mt-1">{design.category}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Indicator */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
                <div className="w-8 h-1 bg-sky-500 rounded-full opacity-50" />
                <div className="w-2 h-1 bg-white/20 rounded-full" />
                <div className="w-2 h-1 bg-white/20 rounded-full" />
            </div>
        </div>
    );
};
