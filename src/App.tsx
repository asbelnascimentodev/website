import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Lenis from "lenis";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, ChevronRight, Menu, X, Rocket, Terminal, Cpu, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveSkills } from "@/components/InteractiveSkills";
import { CertificatesGrid } from "@/components/CertificatesGrid";
import { DesignCarousel } from "@/components/DesignCarousel";
import { LinkedInProjects } from "@/components/LinkedInProjects";
import { ParticleBackground } from "@/components/ParticleBackground";
import { QRCodeModule } from "@/components/QRCodeModule";
import { CalculatorModule } from "@/components/CalculatorModule";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const skillsRoot = document.getElementById("skills-root");
    const aboutRoot = document.getElementById("about-root");
    const marqueeRoot = document.getElementById("marquee-root");
    const certificadosRoot = document.getElementById("certificados-root");
    const designsRoot = document.getElementById("designs-root");
    const linkedinRoot = document.getElementById("linkedin-root");

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (anchor && anchor.hash && anchor.origin === window.location.origin) {
                const targetId = anchor.hash;
                const targetElement = document.querySelector(targetId === '#home' ? '#root' : targetId);

                if (targetElement) {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    lenis.scrollTo(targetElement as HTMLElement, {
                        duration: 1.5,
                        offset: -100,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    const navLinks = [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#sobre" },
        { name: "Skills", href: "#skills" },
        { name: "Certificações", href: "#certificados" },
        { name: "Sistemas", href: "#sistemas" },
        { name: "Design", href: "#projetos" },
        { name: "LinkedIn", href: "#linkedin" },
    ];

    return (
        <div className="w-full min-h-screen bg-cyber-dark text-slate-200 font-inter selection:bg-cyber-blue selection:text-black">
            <ParticleBackground />
            
            {/* HUD Overlay - Elements positioned in corners */}
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                {/* HUD Corners - Adjusted size for mobile */}
                <div className="hud-corner hud-corner-tl !w-6 !h-6 sm:!w-15 sm:!h-15 border-cyber-blue" />
                <div className="hud-corner hud-corner-tr !w-6 !h-6 sm:!w-15 sm:!h-15 border-cyber-blue" />
                <div className="hud-corner hud-corner-bl !w-6 !h-6 sm:!w-15 sm:!h-15 border-cyber-blue" />
                <div className="hud-corner hud-corner-br !w-6 !h-6 sm:!w-15 sm:!h-15 border-cyber-blue" />
                
                {/* Decorative Side Elements - Hidden on small mobile */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20 hidden md:flex">
                    <div className="w-1 h-32 bg-cyber-blue/30" />
                    <div className="text-[10px] font-orbitron -rotate-90 origin-left text-cyber-blue">SYS_READY</div>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20 hidden md:flex">
                    <div className="text-[10px] font-orbitron rotate-90 origin-right text-cyber-blue">DATA_LINK</div>
                    <div className="w-1 h-32 bg-cyber-blue/30" />
                </div>
            </div>
            {/* Navigation */}
            <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
                <div className="container mx-auto px-6">
                    <nav className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-neon-blue' : ''}`}>
                        <a href="#home" className="text-2xl font-orbitron tracking-tighter text-white group">
                            ASBEL<span className="text-cyber-blue group-hover:animate-pulse">_</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href}
                                    className="text-xs font-orbitron text-slate-400 hover:text-cyber-blue transition-colors tracking-widest uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button asChild className="bg-cyber-blue text-black font-orbitron text-xs hover:bg-white transition-all shadow-neon-blue rounded-none px-6">
                                <a href="https://pdflink.to/b929d593/" target="_blank" rel="noopener noreferrer">RESUME</a>
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button 
                            className="lg:hidden p-2 text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            className="fixed inset-0 bg-cyber-dark z-[101] flex flex-col items-center justify-center gap-8 lg:hidden"
                        >
                            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                                <X size={32} />
                            </button>
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href}
                                    className="text-2xl font-orbitron text-white hover:text-cyber-blue"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Hero Section */}
            <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue text-[10px] font-orbitron mb-6 animate-pulse">
                        <Terminal size={14} />
                        SYSTEMS STATUS: OPTIMAL
                    </div>
                    
                    <h1 className="text-[3px] xs:text-[6px] sm:text-xs md:text-xl text-cyber-blue font-orbitron tracking-[0.05em] sm:tracking-[1em] mb-4 opacity-70">
                        WELCOME_PROTOCOL
                    </h1>
                    
                    <div className="mb-8">
                        <GradualSpacing
                            text="ASBEL NASCIMENTO"
                            className="text-[4px] xs:text-xs sm:text-4xl md:text-8xl lg:text-9xl font-orbitron font-black text-white leading-none tracking-tighter"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                    >
                        <Button asChild className="h-14 px-10 bg-transparent border-2 border-cyber-blue text-cyber-blue font-orbitron hover:bg-cyber-blue hover:text-black transition-all shadow-neon-blue group">
                            <a href="#sobre">
                                INITIALIZE MISSION
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        
                        <div className="flex gap-4">
                            <Button asChild variant="outline" size="icon" className="w-12 h-12 rounded-none border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all shadow-neon-purple shadow-none hover:shadow-neon-purple">
                                <a href="https://www.linkedin.com/in/asbeldev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="icon" className="w-12 h-12 rounded-none border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-white transition-all shadow-none hover:shadow-neon-pink">
                                <a href="https://www.instagram.com/eubebel.ofc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-orbitron text-slate-500 tracking-widest uppercase">Scroll to Pilot</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-blue to-transparent" />
                </motion.div>
            </section>

            {/* Content Sections */}
            <div className="relative z-10 space-y-32 pb-32">
                <section id="sobre" className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="relative p-6 sm:p-8 md:p-16 glass-panel hud-border shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 text-[10px] font-orbitron text-cyber-blue/40 hidden xs:block">
                            UID: 0x48656c6c6f
                        </div>
                        <div className="flex flex-col gap-6 md:gap-10">
                            <div className="space-y-4">
                                <h2 className="text-xl sm:text-2xl md:text-4xl font-orbitron font-bold text-white tracking-tight">MISSION_DATA</h2>
                                <div className="h-1 w-20 bg-cyber-blue shadow-neon-blue" />
                            </div>
                            <div className="space-y-6 text-sm sm:text-lg md:text-xl text-slate-300 leading-relaxed font-exo">
                                <p>
                                    Meu nome é Asbel Nascimento. Atualmente gerencio uma rede social do Instagram de bolos ("didi_bolosofc"), criando conteúdos estratégicos. Sou um entusiasta de Desenvolvimento Web Júnior, apaixonado por tecnologia e inovação estética.
                                </p>
                                <p>
                                    Domínio de fundamentos em <span className="text-cyber-blue font-bold">HTML, CSS, JavaScript e UX Design</span>, com expansão constante para Python e C#. Minha visão é unir técnica sólida com interfaces que proporcionem experiências memoráveis.
                                </p>
                                <p>
                                    Além do código, a música é minha frequência secundária. Tocar percussão me ensinou o ritmo e a disciplina que aplico hoje em cada linha de comando. Busco integrar equipes experientes onde eu possa acelerar minha evolução e entregar valor real por meio da tecnologia.
                                </p>
                            </div>
                            <div className="inline-block px-4 py-2 bg-cyber-blue/10 border-l-4 border-cyber-blue mt-4 w-fit">
                                <span className="text-xs font-orbitron text-cyber-blue uppercase tracking-widest">Protocol: Evolution_In_Progress</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="marquee-root" className="my-20">
                    <div className="w-full flex flex-col gap-0 py-8 overflow-hidden bg-black/40 border-y border-white/5">
                        <MarqueeAnimation
                            direction="left"
                            baseVelocity={-2}
                            className="text-cyber-blue/30 font-orbitron text-6xl tracking-tighter py-4"
                        >
                            ASBEL NASCIMENTO // FRONTEND DEVELOPER // UX DESIGNER //
                        </MarqueeAnimation>
                        <MarqueeAnimation
                            direction="right"
                            baseVelocity={-2}
                            className="text-cyber-purple/20 font-orbitron text-6xl tracking-tighter py-4"
                        >
                            CREATIVITY // TECHNOLOGY // INNOVATION // FUTURE //
                        </MarqueeAnimation>
                    </div>
                </div>

                {/* Skills */}
                <section id="skills" className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4 text-glow-blue">TECH_STACK</h2>
                        <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                    </div>
                    <InteractiveSkills />
                </section>

                {/* LinkedIn */}
                <div id="linkedin" className="scroll-mt-24">
                    <LinkedInProjects />
                </div>

                {/* Systems Section */}
                <section id="sistemas" className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <Terminal className="text-cyber-green" />
                            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white text-glow-green uppercase">Systems_Access</h2>
                        </div>
                        <p className="text-slate-400 font-exo text-lg max-w-2xl mx-auto">
                            Utilitários de suporte e ferramentas integradas ao ecossistema de desenvolvimento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-orbitron text-cyber-blue opacity-50 tracking-[0.3em]">MÓDULO_01 //</span>
                                <span className="text-xs font-orbitron text-white uppercase tracking-wider">GERADOR DE QR CODE</span>
                            </div>
                            <QRCodeModule />
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-orbitron text-cyber-purple opacity-50 tracking-[0.3em]">MÓDULO_02 //</span>
                                <span className="text-xs font-orbitron text-white uppercase tracking-wider">CALCULADORA TERMINAL</span>
                            </div>
                            <CalculatorModule />
                        </div>
                    </div>
                </section>

                {/* Designs */}
                <section id="projetos" className="container mx-auto px-6 overflow-hidden">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <Layout className="text-cyber-pink" />
                            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white text-glow-pink uppercase">Design_Core</h2>
                        </div>
                        <p className="text-slate-400 font-exo text-lg max-w-2xl mx-auto">
                            Explorações de identidade visual, social media e interfaces focadas em performance estética.
                        </p>
                    </div>
                    
                    <div className="hud-border p-4 bg-black/40">
                        <DesignCarousel />
                    </div>

                    <div className="mt-16 text-center">
                        <Button asChild className="h-14 px-8 bg-transparent border-2 border-cyber-pink text-cyber-pink font-orbitron hover:bg-cyber-pink hover:text-white transition-all shadow-none hover:shadow-neon-pink group">
                            <a href="https://www.instagram.com/asbeldsgn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                ACCESS_EXTERNAL_REPOSITORY
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Certificados */}
                <section id="certificados" className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <Cpu className="text-cyber-green" />
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-orbitron font-black text-white uppercase text-glow-green">Validation_Logs</h2>
                        </div>
                    </div>
                    <CertificatesGrid />
                </section>
            </div>

            {/* Footer */}
            <footer className="relative z-10 bg-black/80 border-t border-white/10 py-16 px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-orbitron text-white mb-4">ASBEL<span className="text-cyber-blue">_</span></div>
                        <p className="text-slate-500 font-exo max-w-xs">
                            Building the future interface by interface.
                        </p>
                    </div>
                    
                    <div className="flex gap-4">
                        {['LinkedIn', 'Instagram', 'Github'].map((social) => (
                            <a key={social} href="#" className="text-xs font-orbitron text-slate-400 hover:text-cyber-blue transition-colors tracking-widest uppercase px-4 py-2 border border-white/5 bg-white/5">
                                {social}
                            </a>
                        ))}
                    </div>
                    
                    <div className="text-[10px] font-orbitron text-slate-600 tracking-widest text-center md:text-right">
                        © 2025 ASBEL NASCIMENTO // ALL_RIGHTS_RESERVED // VER_2.0
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
