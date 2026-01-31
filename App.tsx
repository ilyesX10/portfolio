import React, { useState, useEffect } from 'react';
import { Roadmap } from './components/Roadmap.tsx';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills.tsx';
import { CONTACT_INFO, UI_STRINGS, PROFILE_IMAGE, CV_PATH } from './constants.tsx';
import { Language } from './types.ts';
import { Mail, Phone, Download, CheckCircle2, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const t = UI_STRINGS[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lang, isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const navLinks = [
    { name: t.navAbout, id: 'about' },
    { name: t.navCurriculum, id: 'curriculum' },
    { name: t.navProjects, id: 'projects' },
    { name: t.navSkills, id: 'skills' },
    { name: t.navContact, id: 'contact' },
  ];

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 shrink-0">
      {(['en', 'fr', 'ar'] as Language[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-1.5 xl:px-3 rounded-full text-[10px] xl:text-xs font-black transition-all ${
            lang === l ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const currentName = lang === 'ar' ? CONTACT_INFO.nameAr : CONTACT_INFO.name;
  const brandName = lang === 'ar' ? 'د. إلياس' : 'DR. ILYES';

  return (
    <div className={`min-h-screen relative overflow-x-hidden ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>
      <div className="fixed top-1/2 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <nav className={`fixed top-0 left-0 right-0 z-[60] h-20 transition-all duration-300 ${isMenuOpen ? 'bg-transparent' : 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5'}`}>
        <div className="container mx-auto px-4 xl:px-6 h-full flex items-center justify-between">
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-xl md:text-2xl xl:text-3xl font-black bg-gradient-to-r rtl:bg-gradient-to-l from-white to-slate-400 bg-clip-text text-transparent tracking-tighter hover:opacity-80 transition-opacity whitespace-nowrap lg:me-4 xl:me-10"
          >
            {brandName}
          </a>
          
          <div className="hidden lg:flex items-center lg:gap-x-4 xl:gap-x-12 mx-auto">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="lg:text-[13px] xl:text-sm font-bold text-slate-400 hover:text-white transition-colors whitespace-nowrap uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center lg:gap-4 xl:gap-6 shrink-0">
            <LanguageSwitcher />
            <a 
              href={CV_PATH} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-500 lg:px-6 xl:px-8 py-2.5 rounded-full lg:text-[11px] xl:text-xs font-black transition-all shadow-lg shadow-indigo-600/20 active:scale-95 whitespace-nowrap uppercase tracking-widest"
            >
              {t.downloadCV}
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button 
              className={`p-2.5 border rounded-xl transition-all flex items-center justify-center active:scale-90 ${isMenuOpen ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-3xl transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center text-center gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-4xl font-black text-slate-400 hover:text-white transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`pt-8 w-full max-w-xs transition-all duration-700 delay-[400ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href={CV_PATH} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-indigo-600 py-5 rounded-2xl font-black text-lg text-center active:scale-95 shadow-2xl shadow-indigo-600/30"
            >
              <Download size={20} />
              {t.downloadCV}
            </a>
          </div>
        </div>
      </div>

      <section id="about" className="pt-40 pb-20 container mx-auto px-6">
        <div className="flex flex-col items-center gap-14 text-center max-w-5xl mx-auto">
          <div className="w-full">
            <div className="flex items-center justify-center gap-4 mb-8">
               <span className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-black tracking-widest border border-indigo-500/20 uppercase">
                {t.classYear}
              </span>
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black tracking-widest border border-emerald-500/20 uppercase">
                {t.csGraduate}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-black mb-10 leading-[1.1] tracking-tighter">
              {t.iam} <span className="bg-gradient-to-r rtl:bg-gradient-to-l from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{currentName}</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 mb-14 max-w-4xl mx-auto leading-relaxed font-medium opacity-90">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-10 md:px-14 py-5 md:py-6 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black transition-all flex items-center gap-3 active:scale-95 shadow-2xl shadow-indigo-600/30 text-sm md:text-base whitespace-nowrap"
              >
                {t.getInTouch}
              </a>
              <a 
                href={CV_PATH} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 md:px-14 py-5 md:py-6 glass hover:bg-white/10 rounded-2xl font-black transition-all flex items-center gap-3 active:scale-95 text-sm md:text-base whitespace-nowrap"
              >
                <Download size={20} />
                {t.downloadCV}
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px] animate-pulse"></div>
            
            <div className="relative group">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] rounded-[4rem] md:rounded-[5rem] overflow-hidden border-8 border-white/5 bg-slate-900 shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-indigo-500/30 group-hover:scale-[1.02]">
                {!isImageLoaded && (
                  <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
                    <div className="w-20 h-20 border-8 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                  </div>
                )}
                <img 
                  src={PROFILE_IMAGE} 
                  alt={currentName} 
                  onLoad={() => setIsImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Status Block - Ultra Small & Transparent on Mobile */}
              <div className={`absolute -bottom-2 ${lang === 'ar' ? '-left-2 md:-left-6' : '-right-2 md:-right-6'} md:right-8 md:bottom-8 bg-slate-950/30 backdrop-blur-md p-2 md:p-5 rounded-xl md:rounded-[2rem] border border-indigo-500/10 shadow-3xl animate-bounce duration-[4000ms] flex flex-col items-center text-center w-fit`}>
                <div className="flex flex-col items-center gap-1.5 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <div>
                    <div className={`font-black text-indigo-200 uppercase mb-0 ${lang === 'ar' ? 'text-[7px] tracking-normal' : 'text-[7px] md:text-[9px] tracking-[0.2em]'}`}>
                      {t.status}
                    </div>
                    <div className={`font-black text-white whitespace-nowrap ${lang === 'ar' ? 'text-[10px] md:text-sm' : 'text-[10px] md:text-sm'}`}>
                      {t.openToWork}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Block - Gray Background, Black Border, Black Text, Green Icon */}
              <div className={`absolute -top-4 ${lang === 'ar' ? '-right-4 md:-right-12' : '-left-4 md:-left-12'} bg-slate-200 p-2.5 md:p-6 rounded-xl md:rounded-[2rem] border border-black shadow-3xl flex flex-col items-center text-center group-hover:-translate-y-2 transition-transform min-w-[110px] md:min-w-[160px]`}>
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-500/10 rounded-lg md:rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-500" size={18} />
                  </div>
                  <div>
                    <div className="text-[7px] md:text-[10px] font-black text-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-0.5">{t.education}</div>
                    <div className="text-[11px] md:text-base font-black text-black leading-tight">{t.msc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Roadmap lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />

      <section id="contact" className="py-24 container mx-auto px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto rounded-[3rem] md:rounded-[4rem] glass p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 md:gap-20 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-lg sm:text-2xl md:text-5xl font-black mb-8 leading-tight">
                {t.letsConnect}
              </h2>
              <p className="text-slate-400 text-[11px] sm:text-sm md:text-2xl mb-14 leading-relaxed opacity-80">{t.connectDesc}</p>
              
              <div className="space-y-6 md:space-y-8">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-6 md:gap-8 p-6 md:p-8 rounded-3xl glass hover:border-indigo-500/50 transition-all group overflow-hidden">
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Mail className="text-indigo-400 group-hover:text-white" size={24} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-1 md:mb-2">{t.formEmail}</h4>
                    <p className="text-[6.5px] sm:text-[9.5px] md:text-lg font-black break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-6 md:gap-8 p-6 md:p-8 rounded-3xl glass hover:border-indigo-500/50 transition-all group overflow-hidden">
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Phone className="text-indigo-400 group-hover:text-white" size={24} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-1 md:mb-2">{t.phone}</h4>
                    <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black text-white transition-colors">{CONTACT_INFO.phone}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 border border-white/5">
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] md:text-xs font-black text-slate-400 mb-2 md:mb-3 uppercase tracking-[0.2em]">{t.formName}</label>
                  <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5 focus:outline-none focus:border-indigo-500 text-slate-100 text-[8.5px] sm:text-sm md:text-lg placeholder:text-[9px]" placeholder={t.placeholderName} />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-black text-slate-400 mb-2 md:mb-3 uppercase tracking-[0.2em]">{t.formEmail}</label>
                  <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5 focus:outline-none focus:border-indigo-500 text-slate-100 text-[8.5px] sm:text-sm md:text-lg placeholder:text-[9px]" placeholder={t.placeholderEmail} />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-black text-slate-400 mb-2 md:mb-3 uppercase tracking-[0.2em]">{t.formMessage}</label>
                  <textarea rows={4} className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5 focus:outline-none focus:border-indigo-500 text-slate-100 text-[8.5px] sm:text-sm md:text-lg placeholder:text-[9px]" placeholder={t.placeholderMessage}></textarea>
                </div>
                <button className="w-full py-4 md:py-7 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black transition-all active:scale-95 text-[11px] sm:text-sm md:text-xl uppercase tracking-[0.2em] shadow-2xl shadow-indigo-600/30">
                  {t.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
          <p className="text-sm md:text-base text-slate-500 font-bold tracking-wide">
            © 2026 {currentName}. {t.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;