import { createPortal } from "react-dom";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveSkills } from "@/components/InteractiveSkills";
import { CertificatesGrid } from "@/components/CertificatesGrid";
import { DesignCarousel } from "@/components/DesignCarousel";
import { QualityInspector } from "@/components/QualityInspector";
import { LinkedInProjects } from "@/components/LinkedInProjects";

const App = () => {
    return (
        <div className="w-full overflow-x-hidden">
            {/* HERO SECTION - Optimized for all screens */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="z-10 w-full max-w-5xl flex flex-col items-center"
                >
                    <GradualSpacing
                        text="ASBEL NASCIMENTO"
                        className="hero-title text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center text-white"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-6 text-center"
                    >
                        <p className="text-base xs:text-lg md:text-2xl text-sky-400 font-bold tracking-[0.2em] uppercase">
                            Full Stack Developer & Quality Analyst
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-col xs:flex-row gap-4 xs:gap-6 mt-10 justify-center items-center w-full"
                    >
                        <Button asChild variant="outline" className="w-full xs:w-auto min-w-[200px] h-12 text-sm xs:text-base font-bold bg-transparent border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-full px-8">
                            <a href="#sobre">Saiba Mais Sobre Mim</a>
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
                </motion.div>
            </section>

            {/* SOBRE MIM */}
            {createPortal(
                <div className="container secao" id="sobre">
                    <h2 className="text-center">SOBRE MIM</h2>
                    <div className="sobre-card">
                        <p className="text-base md:text-xl text-slate-200 indent-8">
                            Meu nome é Asbel Nascimento, Gerencio uma rede social no instagram de BOLOS ("didi_bolosofc"), com vídeos e posts feitos por mim. Sou estudante de Desenvolvimento Web Júnior com grande interesse por tecnologia, design e inovação. Atualmente possuo conhecimentos básicos em HTML, CSS, JavaScript, UX Design, Python, Redes de Computadores e Lógica de Programação.
                        </p>
                        <p className="text-base md:text-xl text-slate-200 mt-4 indent-8">
                            Tenho inglês intermediário, o que me permite me comunicar bem sobre diversos assuntos, especialmente tecnologia. Além da área técnica, sou apaixonado por música! Toco instrumentos de percussão e acredito que a música me trouxe o foco e disciplina que aplico nos meus estudos.
                        </p>
                    </div>
                </div>,
                document.getElementById('about-root')!
            )}

            {/* HABILIDADES */}
            {createPortal(
                <div className="container secao" id="skills">
                    <h2 className="text-center">HABILIDADES</h2>
                    <InteractiveSkills />
                </div>,
                document.getElementById('skills-root')!
            )}

            {/* CERTIFICAÇÕES */}
            {createPortal(
                <div className="container secao" id="certificados">
                    <h2 className="text-center">CERTIFICAÇÕES</h2>
                    <CertificatesGrid />
                </div>,
                document.getElementById('certificados-root')!
            )}

            {/* PORTFÓLIO DESIGN */}
            {createPortal(
                <div className="container secao" id="projetos">
                    <h2 className="text-center">PORTFÓLIO DESIGN</h2>
                    <DesignCarousel />
                </div>,
                document.getElementById('designs-root')!
            )}

            {/* PROJETOS LINKEDIN */}
            {createPortal(
                <div className="container secao" id="linkedin">
                    <h2 className="text-center">PROJETOS LINKEDIN</h2>
                    <LinkedInProjects />
                </div>,
                document.getElementById('linkedin-root')!
            )}

            {/* INSPETOR DE QUALIDADE */}
            {createPortal(
                <div className="container secao" id="quality">
                    <QualityInspector />
                </div>,
                document.getElementById('quality-inspector-root')!
            )}
        </div>
    );
};

export default App;
