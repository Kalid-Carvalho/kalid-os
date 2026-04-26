import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Server, Network, Video, 
  Activity, Clock, WifiOff, AlertTriangle, VideoOff, 
  MapPin, Menu, X, Cpu, CircleCheck
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/90 backdrop-blur-md border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Cpu className="text-[#2563EB] w-8 h-8" />
                    <span className="font-bold text-xl tracking-tight text-white">NexCore</span>
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#problemas" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Problemas</a>
                    <a href="#servicos" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Serviços</a>
                    <a href="#sobre" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sobre</a>
                    <a href="#contato" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        Diagnóstico Gratuito
                    </a>
                </div>
                {/* Mobile Toggle */}
                <button className="md:hidden text-gray-400" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-[#0D1117] border-b border-[#30363D] p-6 flex flex-col gap-4">
                    <a href="#problemas" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white font-medium">Problemas</a>
                    <a href="#servicos" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white font-medium">Serviços</a>
                    <a href="#sobre" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white font-medium">Sobre</a>
                    <a href="#contato" onClick={() => setIsOpen(false)} className="bg-[#2563EB] text-center text-white px-5 py-3 rounded-lg font-medium mt-2">
                        Diagnóstico Gratuito
                    </a>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
            {/* Background blur highlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto flex justify-center items-center relative z-10 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161B22] border border-[#30363D] text-sm text-gray-300 mb-8 font-medium">
                        <MapPin className="w-4 h-4 text-[#2563EB]" />
                        <span>Infraestrutura de TI corporativa — Manaus e Amazonas</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                        Infraestrutura de TI que <span className="text-[#2563EB]">não para</span> no meio do expediente.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
                        A NexCore projeta, instala e mantém a base tecnológica de empresas que não podem depender de improvisos: cabeamento estruturado, firewall, CFTV e links dedicados com padrão técnico real.
                    </p>
                    <a href="#contato" className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        Solicitar diagnóstico de infraestrutura
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto mt-20 md:mt-24 rounded-2xl overflow-hidden border border-[#30363D] relative shadow-2xl shadow-[#2563EB]/5">
                 <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop" alt="Data center infraestrutura" className="w-full h-[400px] md:h-[600px] object-cover opacity-70" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80" />
            </div>
        </section>
    );
};

const Problems = () => {
    return (
        <section id="problemas" className="py-24 px-6 bg-[#0A0D12]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Infraestrutura ruim custa mais caro do que parece</h2>
                    <div className="w-20 h-1 bg-[#2563EB] rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#161B22] p-8 rounded-2xl border border-[#30363D] hover:border-[#2563EB]/50 transition-colors">
                        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                            <WifiOff className="text-red-400 w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Queda de internet no meio do fechamento</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Empresa sem link redundante perde horas de operação. Um contrato adiado pode custar mais do que um ano de infraestrutura.
                        </p>
                    </div>
                    
                    <div className="bg-[#161B22] p-8 rounded-2xl border border-[#30363D] hover:border-[#2563EB]/50 transition-colors">
                        <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                            <AlertTriangle className="text-amber-400 w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Cabeamento improvisado que vira passivo</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Extensões, cabos soltos e rack bagunçado parecem pequenos até a primeira pane. Retrabalho custa três vezes mais que fazer certo da primeira vez.
                        </p>
                    </div>
                    
                    <div className="bg-[#161B22] p-8 rounded-2xl border border-[#30363D] hover:border-[#2563EB]/50 transition-colors">
                        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                            <VideoOff className="text-red-400 w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">CFTV que não funciona quando precisa</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Câmeras sem armazenamento adequado ou fora de ângulo não servem como prova e não protegem ninguém.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const servicesList = [
    {
        icon: <Network className="w-6 h-6 text-[#2563EB]" />,
        title: "Cabeamento Estruturado",
        desc: "Projeto e instalação de rede lógica com certificação por ponto. Padrão CAT6/CAT6A para ambientes corporativos de qualquer porte."
    },
    {
        icon: <Server className="w-6 h-6 text-[#2563EB]" />,
        title: "Rack e Datacenter",
        desc: "Montagem, organização e documentação de rack. Ambientes de missão crítica com patch panel, gestão de cabos e identificação de ativos."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
        title: "Firewall Corporativo",
        desc: "Implementação e gestão de firewall Fortinet e Cisco. Controle de acesso, VPN, segmentação de rede e relatórios mensais."
    },
    {
        icon: <Video className="w-6 h-6 text-[#2563EB]" />,
        title: "CFTV IP",
        desc: "Projeto, instalação e configuração de câmeras IP com armazenamento em NVR local ou nuvem. Acesso remoto via aplicativo."
    },
    {
        icon: <Activity className="w-6 h-6 text-[#2563EB]" />,
        title: "Links Dedicados e Redundância",
        desc: "Configuração de múltiplos links com failover automático. Sua operação continua mesmo quando um provedor falha."
    },
    {
        icon: <Clock className="w-6 h-6 text-[#2563EB]" />,
        title: "Manutenção e Suporte",
        desc: "Contratos de manutenção preventiva e corretiva. Atendimento presencial em Manaus com SLA de 4 horas."
    }
];

const Services = () => {
    return (
        <section id="servicos" className="py-24 px-6 bg-[#0D1117] border-y border-[#30363D]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que entregamos</h2>
                        <div className="w-20 h-1 bg-[#2563EB] rounded-full"></div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesList.map((srv, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-[#2563EB]/40 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-[#0D1117] border border-[#30363D] flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/40 transition-colors">
                                {srv.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{srv.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-medium">{srv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Stats = () => {
    return (
        <section className="py-20 px-6 bg-[#2563EB] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">9 anos entregando infraestrutura no Amazonas</h2>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="border-l border-white/20 pl-6 py-2">
                            <div className="text-5xl font-bold mb-2">200+</div>
                            <div className="text-blue-100 font-medium text-lg leading-snug">projetos entregues</div>
                        </div>
                        <div className="border-l border-white/20 pl-6 py-2">
                            <div className="text-5xl font-bold mb-2">4h</div>
                            <div className="text-blue-100 font-medium text-lg leading-snug">tempo médio de resposta</div>
                        </div>
                        <div className="border-l border-white/20 pl-6 py-2">
                            <div className="text-5xl font-bold mb-2">98%</div>
                            <div className="text-blue-100 font-medium text-lg leading-snug">de clientes em contrato recorrente</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="sobre" className="py-24 px-6 bg-[#0D1117]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-[#2563EB]/20 blur-3xl rounded-full" />
                    <img 
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop" 
                      alt="Profissional de rede" 
                      className="rounded-2xl border border-[#30363D] relative z-10 w-full object-cover h-[500px]"
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quem somos</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        A NexCore foi fundada em 2015 por engenheiros de redes com experiência em projetos de grande porte no setor industrial e público. 
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Nosso diferencial é simples: entregamos infraestrutura documentada, testada e certificada — não improvisada. Atendemos empresas de 20 a 800 funcionários em Manaus e no interior do Amazonas.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-white font-medium text-lg">
                            <CircleCheck className="text-[#2563EB] w-6 h-6" /> Infraestrutura documentada
                        </div>
                        <div className="flex items-center gap-4 text-white font-medium text-lg">
                            <CircleCheck className="text-[#2563EB] w-6 h-6" /> Equipamentos testados
                        </div>
                        <div className="flex items-center gap-4 text-white font-medium text-lg">
                            <CircleCheck className="text-[#2563EB] w-6 h-6" /> Redes certificadas
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section id="contato" className="py-24 px-6 bg-[#0A0D12] border-t border-[#30363D]">
            <div className="max-w-6xl mx-auto bg-[#161B22] rounded-3xl border border-[#30363D] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/50">
                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#30363D] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2563EB]/10 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Sua infraestrutura está pronta pra sustentar o crescimento?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Fazemos um diagnóstico técnico gratuito em 30 minutos. Sem compromisso. Você sai com um mapa claro do que está em risco e o que precisa ser feito.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-300 font-medium">
                            <Clock className="w-5 h-5 text-[#2563EB]" />
                            <span>Sessão de 30 minutos via chamada ou presencial.</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 p-10 lg:p-16 bg-[#0D1117] flex flex-col justify-center">
                    <form className="flex flex-col gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Nome completo</label>
                            <input type="text" className="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors" placeholder="João Silva" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Empresa</label>
                            <input type="text" className="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors" placeholder="Sua Empresa LTDA" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                                <input type="tel" className="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors" placeholder="(92) 99999-9999" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors" placeholder="joao@empresa.com.br" />
                            </div>
                        </div>
                        <button type="button" className="mt-4 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-lg">
                            Agendar diagnóstico gratuito
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-[#0D1117] py-12 px-6 border-t border-[#30363D]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2 mb-2">
                        <Cpu className="text-[#2563EB] w-6 h-6" />
                        <span className="font-bold text-xl tracking-tight text-white">NexCore</span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Infraestrutura que sustenta operação.</p>
                </div>
                
                <div className="flex gap-6 text-sm font-medium text-gray-400">
                    <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
                    <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
                    <a href="#contato" className="hover:text-white transition-colors">Contato</a>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <MapPin className="w-4 h-4" />
                    <span>Manaus, AM — Brasil</span>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F3F4F6] font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Stats />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
