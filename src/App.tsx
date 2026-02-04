import { useEffect } from "react";
import { createPortal } from "react-dom";
import Lenis from "lenis";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { motion } from "framer-motion";
import { Linkedin, Instagram, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveSkills } from "@/components/InteractiveSkills";
import { CertificatesGrid } from "@/components/CertificatesGrid";
import { DesignCarousel } from "@/components/DesignCarousel";
import { QualityInspector } from "@/components/QualityInspector";
import { LinkedInProjects } from "@/components/LinkedInProjects";

const App = () => {
    const skillsRoot = document.getElementById("skills-root");
    const aboutRoot = document.getElementById("about-root");
    const marqueeRoot = document.getElementById("marquee-root");
    const certificadosRoot = document.getElementById("certificados-root");
    const designsRoot = document.getElementById("designs-root");
    const qualityRoot = document.getElementById("quality-inspector-root");
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

        // Handle internal links in index.html and public/java.js
        // We can let Lenis handle them by listening to clicks or just using lenis.scrollTo
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (anchor && anchor.hash && anchor.origin === window.location.origin) {
                const targetId = anchor.hash;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Add animation effect from java.js
                    if (targetElement.classList.contains('secao')) {
                        document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('animar-secao'));
                        targetElement.classList.add('animar-secao');
                        setTimeout(() => {
                            targetElement.classList.remove('animar-secao');
                        }, 1000);
                    }

                    lenis.scrollTo(targetElement as HTMLElement, {
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center w-full min-h-[60vh] md:min-h-[80vh] px-4 py-16 md:py-24 mx-auto overflow-hidden">
                <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl text-white font-medium mb-4 opacity-80 text-center">
                    Olá, eu sou
                </h1>
                <div className="w-full flex justify-center py-4">
                    <GradualSpacing
                        text="ASBEL NASCIMENTO"
                        className="text-[8vw] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col xs:flex-row gap-4 xs:gap-6 mt-10 justify-center items-center w-full"
                >
                    <Button asChild variant="outline" className="w-full xs:w-auto min-w-[200px] h-12 text-sm xs:text-base font-bold bg-transparent border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-full px-8">
                        <a href="#sobre">
                            Saiba Mais Sobre Mim
                        </a>
                    </Button>

                    <div className="flex gap-4 items-center">
                        <Button asChild variant="outline" size="icon" className="w-12 h-12 bg-transparent border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-full">
                            <a href="https://www.linkedin.com/in/asbeldev/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="w-12 h-12 bg-transparent border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-full">
                            <a href="https://www.instagram.com/eubebel.ofc/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="flex flex-col xs:flex-row gap-4 mt-6 justify-center items-center w-full"
                >
                    <Button asChild variant="outline" className="w-full xs:w-auto h-10 text-xs font-bold bg-sky-400/10 border-sky-400/20 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-xl px-6">
                        <a href="/Curriculo/RESUME ASBEL NASCIMENTO.pdf" target="_blank">
                            EN Resume
                        </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full xs:w-auto h-10 text-xs font-bold bg-sky-400/10 border-sky-400/20 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-xl px-6">
                        <a href="https://pdflink.to/resumeasbel/" target="_blank">
                            PT Currículo
                        </a>
                    </Button>
                </motion.div>
            </div>

            {/* Content Sections - Using createPortal to map to index.html roots but ensuring fluid width */}
            {aboutRoot && createPortal(
                <div className="w-full max-w-[1200px] mx-auto px-4 py-8 md:py-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                        Sobre Mim
                    </h2>
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl max-h-[500px] overflow-y-auto custom-scrollbar w-full">
                        <div className="text-base md:text-xl leading-relaxed text-slate-200 font-medium whitespace-pre-line text-justify break-words">
                            Meu nome é Asbel Nascimento, Atualmente gerencio uma rede social do instagram de BOLOS ("didi_bolosofc"), com alguns videos e posts feito por mim. Também sou um Estudante de Desenvolvimento Web Júnior com grande interesse por tecnologia, design e inovação. Atualmente, possuo conhecimentos básicos em HTML, CSS, JavaScript, UX Design, python e Redes de Computadores e Lógica de Programação — áreas que venho aprimorando constantemente por meio de cursos e prática diária.
                            {"\n\n"}
                            Tenho um inglês intermediário, o que me permite me comunicar bem e manter conversas com estrangeiros sobre diversos assuntos, especialmente voltados à tecnologia.
                            {"\n\n"}
                            Além da área técnica, também sou apaixonado por música! Toco instrumentos de percussão como pandeiro, tan tan, reco-reco e até arrisco um pouco no cavaquinho 🎶. A música me ensinou ritmo, foco e disciplina — qualidades que aplico também nos meus projetos e estudos.
                            {"\n\n"}
                            Atualmente, busco uma oportunidade em uma empresa onde eu possa evoluir profissionalmente, aplicar meu conhecimento técnico, e principalmente aprender na prática com uma equipe experiente, aprimorando minhas habilidades dia após dia.
                            {"\n\n"}
                            Tenho interesse especial na área de Redes e Segurança da Informação, e meu grande objetivo é seguir carreira como Especialista em Segurança da Informação, aprofundando meus estudos e conquistando certificações reconhecidas.
                            {"\n\n"}
                            Sou curioso, dedicado e gosto de aprender com desafios — acredito que cada projeto é uma nova chance de crescimento pessoal e profissional. 🚀
                        </div>
                    </div>
                </div>,
                aboutRoot
            )}

            {marqueeRoot && createPortal(
                <div className="w-full flex flex-col gap-0 py-8 overflow-hidden">
                    <MarqueeAnimation
                        direction="left"
                        baseVelocity={-2}
                        className="text-sky-400/20 py-2 border-y border-sky-400/5 bg-sky-950/20"
                    >
                        ASBEL NASCIMENTO
                    </MarqueeAnimation>
                    <MarqueeAnimation
                        direction="right"
                        baseVelocity={-2}
                        className="text-white/10 py-2 border-b border-white/5 bg-white/5"
                    >
                        AI & IT STUDENT
                    </MarqueeAnimation>
                </div>,
                marqueeRoot
            )}

            {qualityRoot && createPortal(
                <div className="w-full">
                    <QualityInspector />
                </div>,
                qualityRoot
            )}

            {linkedinRoot && createPortal(
                <div className="w-full px-4">
                    <LinkedInProjects />
                </div>,
                linkedinRoot
            )}

            {designsRoot && createPortal(
                <div className="w-full px-4 py-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                        Meus Trabalhos de Design
                    </h2>
                    <p className="text-slate-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                        Uma seleção de projetos visuais focados em identidade, social media e design esportivo.
                    </p>
                    <DesignCarousel />

                    <div className="mt-12 md:mt-16 text-center px-4">
                        <Button asChild variant="outline" className="w-full xs:w-auto min-w-[240px] h-12 text-sm xs:text-base font-bold bg-transparent border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-full group px-8">
                            <a href="https://www.instagram.com/asbeldsgn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                                Ver Portfólio no Instagram
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>,
                designsRoot
            )}

            {certificadosRoot && createPortal(
                <div className="w-full px-4 py-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                        Meus Certificados
                    </h2>
                    <CertificatesGrid />
                </div>,
                certificadosRoot
            )}

            {skillsRoot && createPortal(
                <div className="w-full px-4 py-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                        Minhas Habilidades
                    </h2>
                    <InteractiveSkills />
                </div>,
                skillsRoot
            )}
        </div>
    );
};

export default App;
