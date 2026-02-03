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
            className="relative flex-none w-[280px] md:w-[320px] aspect-[4/5] bg-slate-900/40 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
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
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold text-lg leading-tight group-hover:text-sky-400 transition-colors duration-300">
                        {item.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 mt-1" />
                </div>
                <p className="text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                    {item.category}
                </p>
            </div>

            {/* Glass border effect on hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-sky-400/0 group-hover:border-sky-400/30 transition-all duration-500 pointer-events-none" />
        </motion.div>
    );
};

export const DesignCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full relative group/carousel">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => scroll('left')}
                    className="p-3 rounded-full bg-slate-900/80 border border-white/10 text-white hover:bg-sky-400 hover:text-slate-900 transition-all shadow-xl backdrop-blur-md"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => scroll('right')}
                    className="p-3 rounded-full bg-slate-900/80 border border-white/10 text-white hover:bg-sky-400 hover:text-slate-900 transition-all shadow-xl backdrop-blur-md"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex gap-6 overflow-x-auto pb-8 pt-4 no-scrollbar snap-x snap-mandatory px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {designs.map((item) => (
                    <div key={item.id} className="snap-center">
                        <DesignCard item={item} />
                    </div>
                ))}
            </div>

            {/* Gradient Fades for desktop */}
            <div className="hidden md:block absolute top-0 left-0 bottom-8 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
            <div className="hidden md:block absolute top-0 right-0 bottom-8 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
        </div>
    );
};
