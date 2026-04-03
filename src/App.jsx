import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Cpu, Filter, Users, Globe, ArrowRight, Star, Quote } from 'lucide-react';

const Logo = () => (
    <div className="flex items-center gap-4">
        <img 
            src="/logos/relie.png" 
            alt="Relié Labs" 
            className="w-12 h-12 object-contain rounded-xl bg-white/5 p-1"
        />
        <span className="text-2xl font-black tracking-tighter text-white">RELIÉ <span className="text-[#85C441]">LABS</span></span>
    </div>
);

const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/5">
        <Logo />
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#liah" className="hover:text-white transition-colors">Liah</a>
            <a href="#veritly" className="hover:text-white transition-colors">Veritly</a>
            <a href="#racso" className="hover:text-white transition-colors">Racso</a>
        </div>
        <button className="btn-primary text-xs !py-3 !px-6">Contacto</button>
    </nav>
);

const Hero = () => (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-[#050505] to-black pt-32">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C80B9] to-[#85C441] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                    src="/logos/relie.png" 
                    alt="Relié Labs" 
                    className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10 mx-auto pointer-events-none"
                />
            </div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl px-4"
        >
            <span className="text-[#85C441] font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Laboratorio de Innovación HR Tech</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent leading-[0.9]">
                Reinventando el <br/>
                <span className="text-gradient">Ciclo del Talento</span> con <span className="text-white">IA</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
                Conectamos potencial con oportunidad a través de un ecosistema inteligente que entiende, evalúa y potencia carreras.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="btn-primary flex items-center gap-2 group">
                    Explorar Ecosistema <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 px-6 py-4 glass rounded-full text-slate-300 font-bold border-white/10">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                        </div>)}
                    </div>
                    <span>+5k Usuarios Activos</span>
                </div>
            </div>
        </motion.div>
    </section>
);

const ProductCard = ({ id, title, subtitle, desc, features, color, logo, tag, link }) => (
    <motion.div 
        id={id}
        whileHover={{ y: -10 }}
        className="glass p-10 rounded-[35px] border-white/5 relative overflow-hidden group h-full flex flex-col"
    >
        <div className={`absolute top-0 right-0 w-40 h-40 blur-[80px] opacity-10 -mr-20 -mt-20 transition-colors pointer-events-none`} style={{ backgroundColor: color }} />
        
        <div className="mb-8 relative z-10">
            <div className="h-24 mb-8 flex items-center">
                <img src={logo} alt={title} className="h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            {tag && <span className="bg-[#85C441] text-black text-[10px] px-3 py-1 rounded-full font-black tracking-widest uppercase mb-4 inline-block">{tag}</span>}
            <h3 className="text-3xl font-black mb-1">{title}</h3>
            <span className="text-slate-500 font-bold text-sm tracking-widest uppercase block mb-6">{subtitle}</span>
            <p className="text-slate-400 font-medium text-base mb-8">{desc}</p>
        </div>

        <div className="mt-auto relative z-10">
            <div className="grid grid-cols-1 gap-4 mb-10">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                        {f}
                    </div>
                ))}
            </div>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all" 
                style={{ color }}
            >
                Explorar Solución <ArrowRight size={16} />
            </a>
        </div>
    </motion.div>
);

const Triptych = () => (
    <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6">El Tríptico de <span className="text-gradient">Innovación</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto font-medium">Tres pilares diseñados para optimizar cada etapa del ecosistema de talento.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ProductCard 
                    id="liah"
                    title="LIAH"
                    subtitle="Proprietary Engine"
                    color="#85C441"
                    logo="/logos/liah.png"
                    link="https://getliah.com"
                    desc="La potencia de la automatización masiva. Diseñado para retail y consumo masivo."
                    features={["Análisis CUL/DNI Automático", "Automatización End-to-End", "Eficiencia de Volumen"]}
                />
                <ProductCard 
                    id="veritly"
                    title="VERITLY"
                    subtitle="Analytical Filter"
                    color="#2C80B9"
                    logo="/logos/veritly.png"
                    link="https://veritlyapp.com"
                    desc="Precisión analítica en selección. El match perfecto basado en data real y objetiva."
                    features={["Dashboard de Reclutamiento", "Algoritmos de Match", "Comparación Predictiva"]}
                />
                <ProductCard 
                    id="racso"
                    title="RACSO"
                    subtitle="Career Guide"
                    color="#FFFFFF"
                    logo="/logos/racso.png?v=2"
                    link="https://racso.app"
                    tag="BETA"
                    desc="Tu coach personal de carrera. El puente humano potenciado por inteligencia artificial."
                    features={["Coach IA 24/7", "Entrenamiento de Entrevistas", "Optimización de CV"]}
                />
            </div>
        </div>
    </section>
);

const TechSection = () => (
    <section className="bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2C80B9] blur-[150px] opacity-10 -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
                <span className="text-slate-500 font-bold tracking-[0.3em] uppercase mb-4 block">Proprietary AI</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">La Inteligencia tras <br/> <span className="text-gradient">la Intuición</span></h2>
                <div className="space-y-8">
                    <div className="flex gap-6">
                        <div className="w-12 h-12 glass rounded-xl flex-shrink-0 flex items-center justify-center">
                            <Star className="text-[#85C441]" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Análisis Documental IA</h4>
                            <p className="text-slate-400">Lectura precisa de documentos oficiales para reducir el fraude y agilizar procesos.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 glass rounded-xl flex-shrink-0 flex items-center justify-center">
                            <Globe className="text-[#2C80B9]" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Análisis Conductual Predictivo</h4>
                            <p className="text-slate-400">Entendemos no solo el QUÉ, sino el CÓMO una persona se integra en un equipo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glass p-8 rounded-[40px] border-white/10 aspect-square flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C80B9] to-[#85C441] opacity-5 rounded-[40px]" />
                <div className="text-center">
                    <div className="text-[120px] font-black tracking-tighter text-white/10 select-none">DATA</div>
                    <div className="text-2xl font-bold text-[#85C441] mt-[-60px]">Nativa & Segura</div>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-black border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
                <Logo />
                <p className="text-slate-500 mt-4 max-w-xs font-medium">Reinventando el futuro del trabajo desde Lima para el mundo.</p>
            </div>
            <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
        </div>
        <div className="text-center mt-20 text-slate-700 text-xs font-bold tracking-widest uppercase">
            © 2026 Relié Labs S.A.C. Todos los derechos reservados.
        </div>
    </footer>
);

function App() {
  return (
    <div className="bg-black text-white selection:bg-[#85C441] selection:text-black">
      <Navbar />
      <Hero />
      <Triptych />
      <TechSection />
      
      <section className="text-center py-32 bg-gradient-to-t from-[#0A0A0A] to-black">
        <h2 className="text-4xl md:text-7xl font-black mb-12">¿Listo para el <span className="text-gradient">siguiente nivel</span>?</h2>
        <button className="btn-primary !px-12 !py-6 text-xl">Potenciar mi Talento</button>
      </section>

      <Footer />
    </div>
  );
}

export default App;
