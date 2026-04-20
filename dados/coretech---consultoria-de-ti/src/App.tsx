/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Settings,
  Database,
  ShieldCheck,
  Cpu,
  Cloud,
  Code2,
  BarChart3,
  Smartphone,
  Users,
  MessageSquare,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Play,
  Globe,
  Briefcase,
  Zap,
  PenTool,
  Layers,
  Package as Box
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./lib/utils";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#services" },
    { name: "Setores", href: "#industries" },
    { name: "Blog", href: "#blog" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-100" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-brand"></div>
          <span className="text-xl font-black tracking-tighter text-zinc-950 uppercase">coretech</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-zinc-500 hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-zinc-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand transition-all">
            Contato
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-600 text-white w-full py-3 rounded-xl font-semibold mt-2">
                Solicite uma Consultoria
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="hidden md:block md:col-span-1 pt-12">
          <p className="vertical-rail">ESTRATÉGIA & TECNOLOGIA</p>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="md:col-span-11"
        >
          <div className="inline-flex items-center gap-2 text-brand text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            <Sparkles className="w-4 h-4" /> Transformação Digital
          </div>
          <h1 className="bold-title mb-10">
            Código que <span className="text-brand">impulsiona</span><br /> o amanhã.
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">
            <p className="max-w-lg text-lg text-zinc-600 leading-relaxed font-medium">
              Sua infraestrutura de TI merece precisão. Desenvolvemos ecossistemas escaláveis, seguros e otimizados para empresas que buscam liderança no mercado digital.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20">
                  Falar com Especialista
                </button>
                <button className="bg-transparent text-zinc-950 border border-zinc-200 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-zinc-50 transition-all">
                  Portfolio
                </button>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Inovação sem limites. resultados reais.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = ["Flash", "Sitemark", "Nextmove", "SnapShot", "Product", "Luminous", "Snowflake", "Blossom"];
  return (
    <section className="py-12 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all font-mono text-xs tracking-[0.4em] uppercase text-zinc-400">
          {partners.map(p => (
            <div key={p} className="flex items-center gap-2">
               <Zap className="w-4 h-4 text-brand" /> {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MainServices = () => {
  const services = [
    {
      title: "TI Gerenciada",
      num: "01",
      desc: "Monitoramento 24/7 e suporte proativo para manter sua empresa rodando sem interrupções.",
      icon: Settings,
    },
    {
      title: "IA & Dados",
      num: "02",
      desc: "Transformamos dados brutos em inteligência estratégica com modelos avançados de IA.",
      icon: Database,
    },
    {
      title: "Nuvem",
      num: "03",
      desc: "Migração e otimização para AWS, Azure e Google Cloud com foco em escalabilidade.",
      icon: Cloud,
    },
    {
      title: "Cybersegurança",
      num: "04",
      desc: "Proteção total contra ameaças digitais com auditorias e monitoramento de segurança.",
      icon: ShieldCheck,
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-xl">
          <span className="text-brand font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">O que fazemos</span>
          <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">
            Soluções com Precisão <span className="text-brand">Técnica</span>
          </h2>
        </div>
        <p className="max-w-xs text-zinc-400 text-sm font-medium">Potencializando o crescimento empresarial com expertise especializada e tecnologia de ponta.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-px bg-zinc-100 border-y border-zinc-100">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.05)" }}
            className="bg-white p-10 transition-all group"
          >
            <span className="text-brand font-mono text-xl mb-8 block font-bold">{s.num}</span>
            <h3 className="text-sm font-black uppercase tracking-widest text-zinc-950 mb-4">{s.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-xs uppercase tracking-wider">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Capabilities = () => {
  const items = [
    { title: "Backup & Recovery", icon: Database },
    { title: "IA & Machine Learning", icon: Cpu },
    { title: "Cibersegurança", icon: ShieldCheck },
    { title: "Cloud & DevOps", icon: Cloud },
    { title: "Product Design", icon: PenTool },
    { title: "Consultoria de TI", icon: Users },
    { title: "Engenharia de Plataforma", icon: Layers },
    { title: "Blockchain", icon: Box },
    { title: "Soluções Web/App", icon: Code2 },
    { title: "Gestão de Produto", icon: BarChart3 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-600 font-bold text-sm tracking-widest uppercase mb-4 block">Nossas Capacidades</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Impulsione seu negócio com a tecnologia necessária para o <span className="text-brand-600 underline underline-offset-8">sucesso</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Oferecemos um conjunto completo de serviços para cobrir todas as necessidades tecnológicas da sua empresa, desde a fundação até a escala global.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-brand-600 w-5 h-5 flex-shrink-0" />
                 <span className="text-slate-700 font-medium">Equipe Especialista</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-brand-600 w-5 h-5 flex-shrink-0" />
                 <span className="text-slate-700 font-medium">Inovação Contínua</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-brand-600 w-5 h-5 flex-shrink-0" />
                 <span className="text-slate-700 font-medium">Escalabilidade</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-brand-600 w-5 h-5 flex-shrink-0" />
                 <span className="text-slate-700 font-medium">Suporte Global</span>
               </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-all cursor-default group">
                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-900">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Projetos Concluídos", value: "54", suffix: "K+" },
    { label: "Clientes Satisfeitos", value: "99", suffix: "%" },
    { label: "Anos de Experiência", value: "20", suffix: "+" },
    { label: "Especialistas Tech", value: "88", suffix: "+" },
  ];

  return (
    <section className="py-24 bg-brand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-white">
              <div className="text-6xl font-black mb-2 tracking-tighter uppercase leading-none">
                {s.value}<span className="opacity-50">{s.suffix}</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70 border-l border-white/20 pl-4">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50 border-y border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <span className="text-brand font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Sobre Nós</span>
          <h2 className="text-5xl font-black tracking-tighter text-zinc-950 uppercase mb-8 leading-none">
            Infraestrutura de TI para uma <br/><span className="text-brand">Nova Era</span>
          </h2>
          <p className="text-lg text-zinc-500 mb-10 leading-relaxed font-medium">
            Nossa missão é simplificar a complexidade tecnológica para que você possa focar no que realmente importa: seu negócio. Proporcionamos estabilidade em um mundo em constante evolução.
          </p>
          <div className="space-y-6 mb-12">
             <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center text-brand shrink-0 group-hover:border-brand transition-colors">
                   <Zap className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-black text-zinc-950 uppercase text-xs tracking-widest mb-1">Velocidade e Eficiência</h4>
                   <p className="text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">Implementações rápidas com rigor técnico absoluto.</p>
                </div>
             </div>
             <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center text-brand shrink-0 group-hover:border-brand transition-colors">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-black text-zinc-950 uppercase text-xs tracking-widest mb-1">Segurança em Primeiro Lugar</h4>
                   <p className="text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">Abordagem zero-trust integrada ao núcleo operacional.</p>
                </div>
             </div>
          </div>
          <button className="bg-zinc-950 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand transition-all">
            Conheça nossa História
          </button>
        </div>

        <div className="flex justify-center">
           <div className="relative w-full aspect-square border-l border-zinc-100 pl-12 flex items-center justify-center">
             <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-brand opacity-30" />
             <div className="bold-title text-[200px] opacity-5 pointer-events-none select-none">BCK</div>
             <div className="relative z-10 w-full h-full bg-white p-8 shadow-2xl border border-zinc-100 rounded-none overflow-hidden">
                <img src="https://picsum.photos/seed/tech-team/800/800" className="w-full h-full object-cover grayscale opacity-50" referrerPolicy="no-referrer" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const IndustryExpertise = () => {
  const industries = [
    { name: "Logística", img: "https://picsum.photos/seed/logistic/400/600" },
    { name: "Finanças", img: "https://picsum.photos/seed/finance/400/600" },
    { name: "Manufatura", img: "https://picsum.photos/seed/factory/400/600" },
    { name: "Varejo", img: "https://picsum.photos/seed/retail/400/600" },
  ];

  return (
    <section id="industries" className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-xl">
          <span className="text-brand font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Nossa Expertise</span>
          <h2 className="text-6xl font-black tracking-tighter uppercase leading-none text-zinc-950">Soluções por <span className="text-brand">Setor</span></h2>
        </div>
        <button className="text-brand font-bold text-[10px] tracking-widest uppercase pb-2 border-b border-brand hover:gap-4 transition-all">
          Ver todos os setores
        </button>
      </div>

      <div className="px-6"> 
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border-y border-zinc-100">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              className="relative group h-[500px] overflow-hidden bg-white"
            >
              <img 
                src={ind.img} 
                alt={ind.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-zinc-100 bg-white/50 backdrop-blur-sm group-hover:bg-brand transition-colors">
                 <h3 className="text-sm font-black uppercase tracking-widest text-zinc-950 group-hover:text-white">{ind.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
       name: "Michael Santos",
       role: "CEO na TechFlow Solutions",
       text: "A Coretech revolucionou nossa infraestrutura de dados. Nunca nos sentimos tão seguros quanto agora com o novo sistema de proteção 24/7.",
       rating: 5,
       img: "https://picsum.photos/seed/user1/100/100"
    },
    {
       name: "Alex Ferreira",
       role: "CTO na Global Retail Hub",
       text: "A migração para nuvem foi impecável. Eles entenderam nossas dores e entregaram uma solução que escalou nosso faturamento em 40%.",
       rating: 5,
       img: "https://picsum.photos/seed/user2/100/100"
    },
    {
       name: "Emily Souza",
       role: "COO na SmartLogix",
       text: "A melhor consultoria de TI que já contratamos. Expertise técnica aliada a um atendimento humano excepcional.",
       rating: 5,
       img: "https://picsum.photos/seed/user3/100/100"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 mb-20">
         <span className="text-brand font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Depoimentos</span>
         <h2 className="text-5xl font-black tracking-tighter text-zinc-950 uppercase leading-none">Confiança <br/><span className="text-brand">Consolidada</span></h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-12 transition-all">
             <div className="flex gap-1 mb-8 opacity-50">
                {[...Array(t.rating)].map((_, idx) => (
                  <Sparkles key={idx} className="w-4 h-4 text-brand fill-brand" />
                ))}
             </div>
             <p className="text-zinc-600 mb-10 uppercase tracking-widest text-[11px] leading-relaxed font-bold italic">"{t.text}"</p>
             <div className="flex items-center gap-4 pt-8 border-t border-zinc-50">
                <img src={t.img} alt={t.name} className="w-10 h-10 grayscale border border-zinc-100" referrerPolicy="no-referrer" />
                <div>
                   <h4 className="font-black text-zinc-950 uppercase text-[10px] tracking-widest">{t.name}</h4>
                   <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Quais serviços de TI vocês oferecem?", a: "Oferecemos TI gerenciada, cibersegurança, consultoria em nuvem, desenvolvimento de software e soluções de IA." },
    { q: "Como vocês garantem a segurança dos dados?", a: "Utilizamos protocolos de criptografia de ponta, firewalls avançados e monitoramento SOC 24 horas por dia." },
    { q: "Vocês atendem pequenas empresas?", a: "Sim, temos planos específicos para PMEs que buscam escalabilidade e profissionalização do seu ambiente tecnológico." },
    { q: "Qual o tempo médio de resposta do suporte?", a: "Para casos críticos, nosso tempo de resposta é de até 15 minutos via nosso portal de atendimento prioritário." },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-1 border-r border-zinc-100 pr-12 hidden lg:block">
           <p className="vertical-rail">SUPORTE & LOGÍSTICA</p>
        </div>
        
        <div className="lg:col-span-4 mb-12 lg:mb-0">
          <div className="bg-brand p-12 text-white shadow-xl">
             <MessageSquare className="w-10 h-10 mb-8 opacity-50" />
             <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">Dúvidas<br/>Frequentes</h2>
             <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-10 leading-relaxed">Não encontrou o que procurava? Entre em contato direto com nossa equipe.</p>
             <button className="bg-white text-brand px-6 py-4 text-xs font-black uppercase tracking-widest w-full hover:bg-zinc-100 transition-colors">
               Ver todas FAQs
             </button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-100 bg-zinc-50 transition-colors">
               <button 
                 onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                 className="flex w-full items-center justify-between p-8 text-left font-black uppercase tracking-widest text-[10px] text-zinc-950"
               >
                 {faq.q}
                 <ChevronRight className={cn("w-4 h-4 transition-transform text-brand", openIdx === i && "rotate-90")} />
               </button>
               <AnimatePresence>
                 {openIdx === i && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                   >
                     <p className="px-8 pb-8 text-zinc-500 uppercase tracking-widest text-[10px] leading-relaxed border-t border-zinc-100 pt-6">
                       {faq.a}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    {
      title: "IA no Gerenciamento de Projetos: Benefícios e Futuro",
      cat: "Serviços de TI",
      date: "19 Abr, 2026",
      img: "https://picsum.photos/seed/blog1/800/500"
    },
    {
      title: "Otimizando sua Infraestrutura em Nuvem para Alta Performance",
      cat: "Cloud Computing",
      date: "15 Abr, 2026",
      img: "https://picsum.photos/seed/blog2/800/500"
    },
    {
      title: "Tendências de Cibersegurança que você não pode ignorar hoje",
      cat: "Segurança",
      date: "10 Abr, 2026",
      img: "https://picsum.photos/seed/blog3/800/500"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-zinc-50 border-y border-zinc-100">
       <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <span className="text-brand font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Blog & Insights</span>
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-none text-zinc-950">Visão <span className="text-brand">Técnica</span></h2>
          </div>
          <p className="max-w-xs text-zinc-400 text-[10px] uppercase font-bold tracking-widest leading-relaxed">Explorando as fronteiras da tecnologia e inovação com nossa equipe de especialistas.</p>
       </div>

       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
         {posts.map((p, i) => (
           <div key={i} className="bg-white group hover:bg-zinc-50 transition-all flex flex-col">
              <div className="relative h-64 overflow-hidden border-b border-zinc-100">
                 <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" referrerPolicy="no-referrer" />
                 <div className="absolute top-6 right-6 bg-brand text-white text-[9px] uppercase font-black tracking-widest px-4 py-2">
                    {p.cat}
                 </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                 <p className="text-[9px] text-brand font-black uppercase tracking-[0.3em] mb-4">{p.date}</p>
                 <h3 className="text-sm font-black text-zinc-950 mb-8 uppercase tracking-widest leading-relaxed group-hover:text-brand transition-colors">
                    {p.title}
                 </h3>
                 <div className="mt-auto flex items-center gap-4 font-black text-[9px] uppercase tracking-widest text-zinc-400 group-hover:text-brand transition-all">
                    LER ARTIGO <div className="h-px w-8 bg-zinc-100 group-hover:bg-brand transition-all" />
                 </div>
              </div>
           </div>
         ))}
       </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-brand font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Contato</span>
          <h2 className="text-6xl font-black tracking-tighter text-zinc-950 uppercase mb-8 leading-none">Você nos encontra <span className="text-brand">aqui.</span></h2>
          <p className="text-lg text-zinc-500 mb-12 uppercase tracking-widest text-xs font-bold leading-relaxed">Estamos prontos para ouvir seus desafios e propor soluções que vão elevar o patamar do seu negócio.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="border-l-2 border-zinc-100 pl-6 group hover:border-brand transition-colors">
                <h4 className="font-black text-zinc-950 uppercase text-xs tracking-widest mb-4">Nosso Escritório</h4>
                <p className="text-xs text-zinc-400 uppercase tracking-[0.2em] leading-relaxed">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
             </div>
             <div className="border-l-2 border-zinc-100 pl-6 group hover:border-brand transition-colors">
                <h4 className="font-black text-zinc-950 uppercase text-xs tracking-widest mb-4">Comercial</h4>
                <p className="text-xs text-zinc-400 uppercase tracking-[0.2em] leading-relaxed">(11) 4002-8922<br/>contato@coretech.com.br</p>
             </div>
          </div>
        </div>

        <div className="bg-zinc-50 p-12 border border-zinc-100">
           <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-950 mb-8 pb-4 border-b border-zinc-100">Mensagem Direta</h3>
           <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-1 gap-6">
                 <input type="text" className="bg-white text-zinc-950 px-6 py-4 border border-zinc-100 focus:border-brand transition-all outline-none text-xs uppercase tracking-widest placeholder:text-zinc-400" placeholder="Nome Completo" />
                 <input type="email" className="bg-white text-zinc-950 px-6 py-4 border border-zinc-100 focus:border-brand transition-all outline-none text-xs uppercase tracking-widest placeholder:text-zinc-400" placeholder="E-mail Corporativo" />
              </div>
              <textarea rows={4} className="w-full bg-white text-zinc-950 px-6 py-4 border border-zinc-100 focus:border-brand transition-all outline-none text-xs uppercase tracking-widest placeholder:text-zinc-400" placeholder="Seu Desafio Técnico..."></textarea>
              <button className="w-full bg-zinc-950 text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand transition-all">
                ENVIAR REQUISIÇÃO
              </button>
           </form>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="flex flex-col items-center">
            <h2 className="bold-title text-center mb-12">Precisa de <br/><span className="text-brand">Suporte?</span></h2>
            <p className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-400 mb-16 text-center max-w-xl leading-loose">
              Não perca tempo com sistemas lentos e falhas constantes. Deixe a tecnologia conosco e foque no seu crescimento real e sustentável.
            </p>
            <div className="flex flex-wrap justify-center gap-px bg-zinc-100 border border-zinc-100">
                <button className="bg-brand text-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-brand/90 transition-all flex items-center gap-4">
                  SOLICITAR ORÇAMENTO <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-zinc-950 text-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-brand transition-all flex items-center gap-4 border-l border-zinc-100">
                  <Phone className="w-4 h-4 text-brand" /> (11) 4002-8922
                </button>
            </div>
         </div>
      </div>
    </section>
  );
};

// --- Gemini Advisor Section (AI Feature) ---
const AIAssistant = () => {
    return (
        <section className="py-24 bg-zinc-50 relative overflow-hidden text-zinc-950 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-24">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 text-brand text-[9px] font-black uppercase tracking-[0.4em] mb-8 border-b border-brand pb-2">
                             Inteligência Artificial Integrada
                        </div>
                        <h2 className="text-6xl font-black tracking-tighter uppercase mb-8 leading-none">AI <br/><span className="text-brand">Advisor.</span></h2>
                        <p className="text-sm uppercase tracking-widest font-black text-zinc-400 mb-12 leading-loose">
                            A Coretech utiliza o poder do <span className="text-brand">Gemini 3</span> para fornecer diagnósticos preliminares e recomendações tecnológicas em tempo real para o seu negócio.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
                            <div className="bg-white p-8 group">
                                <Zap className="text-brand mb-6 h-6 w-6 group-hover:scale-110 transition-transform" />
                                <h4 className="font-black uppercase text-[10px] tracking-widest mb-3">Analise de Gap</h4>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Arquitetura de dados otimizada em segundos.</p>
                            </div>
                            <div className="bg-white p-8 group">
                                <Globe className="text-brand mb-6 h-6 w-6 group-hover:scale-110 transition-transform" />
                                <h4 className="font-black uppercase text-[10px] tracking-widest mb-3">Escala Global</h4>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Consultoria multilíngue com tradução contextual.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 w-full flex justify-end">
                        <div className="bg-white border border-zinc-200 p-px shadow-2xl group w-full max-w-md">
                            <div className="bg-zinc-50 p-8 border border-zinc-100 h-[500px] flex flex-col">
                                 <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-brand text-white font-black flex items-center justify-center text-sm">G</div>
                                        <div>
                                            <h4 className="font-black uppercase text-[10px] tracking-widest text-zinc-950">Gemini Advisor</h4>
                                            <p className="text-[9px] text-brand uppercase tracking-widest font-black flex items-center gap-2">
                                                <div className="w-1 h-1 bg-brand animate-ping" /> Online
                                            </p>
                                        </div>
                                    </div>
                                    <Menu className="w-4 h-4 text-zinc-300" />
                                 </div>
                                 
                                 <div className="flex-grow space-y-6 overflow-y-auto mb-8 pr-2 scrollbar-hide text-[10px] uppercase font-black tracking-widest text-zinc-950">
                                     <div className="ml-0 mr-8 bg-zinc-100 p-5 border-l-2 border-brand">
                                        <p className="text-zinc-400 mb-2 italic">Gemini 3 respondeu:</p>
                                        <p className="leading-relaxed">Olá! Como a IA Generativa pode otimizar seu faturamento operacional hoje?</p>
                                     </div>
                                     <div className="mr-0 ml-8 bg-brand/5 p-5 border-r-2 border-brand text-right">
                                        <p className="leading-relaxed">Solicitar plano de redução de custos Cloud.</p>
                                     </div>
                                 </div>
                                 
                                 <div className="flex gap-px bg-zinc-200 border border-zinc-200">
                                    <input 
                                        className="flex-grow bg-white text-zinc-950 text-[9px] uppercase font-black tracking-widest px-6 py-5 outline-none focus:bg-zinc-50 transition-all border-none"
                                        placeholder="Digite seu desafio..."
                                    />
                                    <button className="px-6 bg-brand text-white hover:bg-zinc-950 transition-all">
                                       <ArrowRight className="w-4 h-4" />
                                    </button>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
  return (
    <footer className="bg-white px-12 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-100 border-t border-zinc-100 overflow-hidden">
        <div className="bg-white pt-12 pr-12 pb-16">
          <span className="text-brand font-mono text-sm mb-4 block font-bold">01. CLOUD</span>
          <h3 className="text-sm font-black uppercase tracking-widest text-zinc-950 mb-4">Migração Híbrida</h3>
          <p className="text-xs text-zinc-400 uppercase tracking-widest leading-loose">Infraestrutura em nuvem resiliente e econômica para escala global.</p>
        </div>
        <div className="bg-white pt-12 pr-12 pb-16">
          <span className="text-brand font-mono text-sm mb-4 block font-bold">02. CYBER</span>
          <h3 className="text-sm font-black uppercase tracking-widest text-zinc-950 mb-4">Segurança Ativa</h3>
          <p className="text-xs text-zinc-400 uppercase tracking-widest leading-loose">Proteção de dados contra ameaças avançadas e monitoramento real.</p>
        </div>
        <div className="bg-white pt-12 pr-12 pb-16">
          <span className="text-brand font-mono text-sm mb-4 block font-bold">03. DEV</span>
          <h3 className="text-sm font-black uppercase tracking-widest text-zinc-950 mb-4">Software Sob Medida</h3>
          <p className="text-xs text-zinc-400 uppercase tracking-widest leading-loose">Aplicações robustas focadas na experiência do usuário e performance.</p>
        </div>
        <div className="bg-white pt-12 pr-12 pb-16">
          <span className="text-brand font-mono text-sm mb-4 block font-bold">04. DATA</span>
          <h3 className="text-sm font-black uppercase tracking-widest text-zinc-950 mb-4">Inteligência</h3>
          <p className="text-xs text-zinc-400 uppercase tracking-widest leading-loose">Decisões baseadas em dados com IA preditiva e análise profunda.</p>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-zinc-100 pt-12">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-brand"></div>
          <span className="text-xl font-black tracking-tighter text-zinc-950 uppercase">coretech</span>
        </div>
        
        <div className="flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
          <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand transition-colors">Instagram</a>
        </div>

        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
           © 2026 Coretech. PROJETANDO O AMANHÃ.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased text-zinc-950 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <MainServices />
        <Capabilities />
        <Stats />
        <AboutSection />
        <AIAssistant />
        <IndustryExpertise />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
