import React, { useState, useEffect } from 'react';
import { 
  Snowflake, 
  Wrench, 
  Zap, 
  PhoneCall, 
  MessageCircle, 
  ArrowLeft,
  ChevronRight,
  Bot
} from 'lucide-react';
import { SectionType } from './types';
import { 
  APP_NAME, 
  APP_TAGLINE, 
  WELCOME_TEXT, 
  CONSERVATION_TIPS, 
  COMMON_PROBLEMS, 
  ENERGY_TIPS, 
  WHEN_TO_CALL_TECH,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE
} from './constants';
import { Button } from './components/Button';
import { FloatingCTA } from './components/FloatingCTA';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>(SectionType.HOME);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  const renderHeader = () => (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-slate-50 py-6'}`}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex flex-col cursor-pointer select-none group" 
          onClick={() => setCurrentSection(SectionType.HOME)}
          role="banner"
          aria-label="ALTEC Assistência Técnica"
        >
           <div className="flex items-end leading-none drop-shadow-sm relative">
              <span className="text-[2.5rem] font-black text-[#1e3a8a] tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>A</span>
              
              {/* Fridge Icon forming the 'L' */}
              <div className="relative mx-[1px] mb-[2px] flex flex-col w-[20px] h-[36px]">
                  <span className="sr-only">L</span>
                  {/* Top Freezer */}
                  <div className="h-[35%] w-full bg-[#1e3a8a] rounded-sm rounded-br-[1px] rounded-bl-[1px] relative border-b-[2px] border-transparent">
                      {/* Handle */}
                      <div className="absolute left-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[10px] bg-blue-300/30 rounded-full"></div>
                  </div>
                  {/* Spacer */}
                  <div className="h-[2px] w-full bg-transparent"></div>
                  {/* Bottom Fridge */}
                  <div className="flex-1 w-full bg-[#1e3a8a] rounded-sm rounded-tr-[1px] rounded-tl-[1px] relative flex items-end">
                      {/* Handle */}
                      <div className="absolute left-[3px] top-[6px] w-[2px] h-[14px] bg-blue-300/30 rounded-full"></div>
                      
                      {/* The 'L' leg extension illusion - subtle if needed, but standard fridge logo is usually just the rect */}
                      {/* Adding a small extension to the right at the bottom to hint at 'L' shape if strictly requested */}
                      <div className="absolute -right-[4px] bottom-0 w-[6px] h-[8px] bg-[#1e3a8a] rounded-r-sm hidden"></div>
                  </div>
              </div>

              <span className="text-[2.5rem] font-black text-[#1e3a8a] tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>TEC</span>
           </div>
           <span className="text-[10px] font-bold text-[#1e3a8a] tracking-[0.2em] mt-1 text-center pl-1">
              ASSISTÊNCIA TÉCNICA
           </span>
        </div>
        
        {currentSection !== SectionType.HOME && (
          <button 
            onClick={() => setCurrentSection(SectionType.HOME)}
            className="text-slate-500 hover:text-blue-600 transition-colors p-2"
          >
            <ArrowLeft size={24} />
          </button>
        )}
      </div>
    </header>
  );

  const renderHome = () => (
    <div className="animate-fade-in max-w-4xl mx-auto px-6 pb-24">
      <div className="text-center mb-10 mt-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Cuide da Sua Geladeira</h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">{WELCOME_TEXT}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button onClick={() => setCurrentSection(SectionType.TIPS)} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all text-left flex items-start gap-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
            <Snowflake size={28} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">Dicas de Conservação</h3>
            <p className="text-slate-500 text-sm mt-1">Aumente a vida útil do aparelho</p>
          </div>
          <ChevronRight className="ml-auto text-slate-300 group-hover:text-blue-500" />
        </button>

        <button onClick={() => setCurrentSection(SectionType.PROBLEMS)} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all text-left flex items-start gap-4">
          <div className="bg-amber-100 text-amber-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
            <Wrench size={28} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">Problemas Comuns</h3>
            <p className="text-slate-500 text-sm mt-1">Identifique defeitos básicos</p>
          </div>
          <ChevronRight className="ml-auto text-slate-300 group-hover:text-amber-500" />
        </button>

        <button onClick={() => setCurrentSection(SectionType.ENERGY)} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all text-left flex items-start gap-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
            <Zap size={28} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">Economia de Energia</h3>
            <p className="text-slate-500 text-sm mt-1">Reduza sua conta de luz</p>
          </div>
          <ChevronRight className="ml-auto text-slate-300 group-hover:text-green-500" />
        </button>

        <button onClick={() => setCurrentSection(SectionType.CONTACT)} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all text-left flex items-start gap-4">
          <div className="bg-red-100 text-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
            <PhoneCall size={28} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">Chamar Técnico</h3>
            <p className="text-slate-500 text-sm mt-1">Quando solicitar visita</p>
          </div>
          <ChevronRight className="ml-auto text-slate-300 group-hover:text-red-500" />
        </button>
      </div>

      <div className="mt-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 opacity-10">
          <Bot size={200} />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Tira-Dúvidas Inteligente</h3>
          <p className="text-indigo-100 mb-6 max-w-md">Converse com nossa IA especialista para diagnósticos rápidos e dicas personalizadas.</p>
          <Button 
            onClick={() => setCurrentSection(SectionType.CHAT)}
            className="bg-white !text-indigo-700 hover:bg-indigo-50 border-none"
            icon={Bot}
          >
            Iniciar Conversa
          </Button>
        </div>
      </div>
    </div>
  );

  const renderSectionView = (title: string, subtitle: string, colorClass: string, content: React.ReactNode) => (
    <div className="animate-fade-in max-w-4xl mx-auto px-6 pb-24">
      <div className={`mb-8 border-l-4 ${colorClass} pl-4`}>
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-500 mt-1">{subtitle}</p>
      </div>
      {content}
      <div className="mt-12 text-center">
         <Button onClick={handleWhatsApp} variant="primary" icon={MessageCircle}>
            Agendar Visita Agora
         </Button>
      </div>
    </div>
  );

  const renderTips = () => renderSectionView(
    "Dicas de Conservação", 
    "Aumente a vida útil da sua geladeira",
    "border-blue-500",
    <div className="grid md:grid-cols-2 gap-6">
      {CONSERVATION_TIPS.map((tip, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            {tip.icon && <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><tip.icon size={24} /></div>}
            <div>
              <h4 className="font-bold text-slate-800 text-lg mb-2">{tip.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{tip.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProblems = () => renderSectionView(
    "Problemas Comuns",
    "Diagnóstico rápido de defeitos",
    "border-amber-500",
    <div className="space-y-4">
      {COMMON_PROBLEMS.map((problem, idx) => (
        <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-amber-400 flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-full shrink-0">
            <problem.icon size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">{problem.title}</h4>
            <p className="text-slate-600 text-sm mt-1">{problem.causes}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEnergy = () => renderSectionView(
    "Economia de Energia",
    "Reduza custos e proteja o ambiente",
    "border-green-500",
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {ENERGY_TIPS.map((tip, idx) => (
        <div key={idx} className="bg-green-50/50 p-6 rounded-2xl border border-green-100 flex flex-col items-center text-center">
          {tip.icon && <div className="mb-3 text-green-600"><tip.icon size={32} /></div>}
          <h4 className="font-bold text-green-900 mb-2">{tip.title}</h4>
          <p className="text-green-800 text-xs">{tip.description}</p>
        </div>
      ))}
    </div>
  );

  const renderContact = () => renderSectionView(
    "Quando Chamar o Técnico",
    "Não tente consertar sozinho estes problemas",
    "border-red-500",
    <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
      <h3 className="font-bold text-red-800 text-xl mb-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
        Checklist de Segurança
      </h3>
      <ul className="space-y-4">
        {WHEN_TO_CALL_TECH.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-red-900 bg-white/60 p-3 rounded-xl">
            <div className="min-w-[20px] h-5 rounded-full border-2 border-red-400 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
            </div>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t border-red-200 text-center">
        <p className="text-red-800 font-semibold mb-2">“Não tente consertar sozinho. Um técnico evita prejuízo maior.”</p>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="h-[calc(100vh-140px)] max-w-4xl mx-auto px-4 md:px-6 pb-6 animate-fade-in">
       <AIChat onClose={() => setCurrentSection(SectionType.HOME)} />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {renderHeader()}
      
      <main className="pt-6">
        {currentSection === SectionType.HOME && renderHome()}
        {currentSection === SectionType.TIPS && renderTips()}
        {currentSection === SectionType.PROBLEMS && renderProblems()}
        {currentSection === SectionType.ENERGY && renderEnergy()}
        {currentSection === SectionType.CONTACT && renderContact()}
        {currentSection === SectionType.CHAT && renderChat()}
      </main>

      {currentSection !== SectionType.CHAT && <FloatingCTA />}

      <footer className="bg-slate-900 text-slate-400 py-8 text-center mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} {APP_NAME}</p>
        <p className="text-xs mt-2">{APP_TAGLINE}</p>
      </footer>
    </div>
  );
};

export default App;