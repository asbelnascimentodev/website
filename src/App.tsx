import { createPortal } from "react-dom";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveSkills } from "@/components/InteractiveSkills";

const App = () => {
    const skillsRoot = document.getElementById("skills-root");
    const aboutRoot = document.getElementById("about-root");
    const marqueeRoot = document.getElementById("marquee-root");

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full min-h-[50vh] pb-12">
                <h1 className="text-3xl md:text-4xl text-white font-medium mb-4 opacity-80">
                    Olá, eu sou
                </h1>
                <GradualSpacing
                    text="ASBEL NASCIMENTO"
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-center max-w-5xl text-white tracking-tighter drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-wrap gap-6 mt-10 justify-center items-center"
                >
                    <Button asChild variant="outline" className="min-w-[200px] h-12 text-base font-bold bg-transparent border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all rounded-full">
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
            </div>

            {aboutRoot && createPortal(
                <div className="w-full flex flex-col items-center max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-white mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                        Sobre Mim
                    </h2>
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl max-h-[450px] overflow-y-auto custom-scrollbar">
                        <div className="text-lg md:text-xl leading-relaxed text-slate-200 font-medium whitespace-pre-line">
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
                <div className="flex flex-col gap-0 py-8 overflow-hidden">
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

            {skillsRoot && createPortal(
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold text-white mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                        Minhas Habilidades
                    </h2>
                    <InteractiveSkills />
                </div>,
                skillsRoot
            )}
        </>
    );
};

export default App;
