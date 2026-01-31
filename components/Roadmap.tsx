
import React from 'react';
import { EDUCATION_ROADMAP, UI_STRINGS } from '../constants.tsx';
import { Language, EducationItem } from '../types.ts';
import { GraduationCap, ZoomIn } from 'lucide-react';

interface RoadmapProps {
  lang: Language;
}

export const Roadmap: React.FC<RoadmapProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const isRTL = lang === 'ar';

  return (
    <section id="curriculum" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32 md:mb-40 px-4 md:px-12 max-w-5xl mx-auto">
          <div className="py-12">
            <h2 className={`text-4xl md:text-5xl ${isRTL ? 'lg:text-6xl' : 'lg:text-7xl'} font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-4 pb-4 ${isRTL ? 'leading-[1.8] tracking-normal' : 'leading-tight tracking-tighter'}`}>
              {t.academicJourney}
            </h2>
          </div>
          <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-2xl font-medium opacity-80 leading-relaxed -mt-4">
            {t.roadmapDesc}
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600/0 via-indigo-500/40 to-indigo-600/0 ${isRTL ? 'right-6 md:right-1/2 md:translate-x-1/2' : 'left-6 md:left-1/2 md:-translate-x-1/2'}`}></div>

          {EDUCATION_ROADMAP.map((item, index) => {
            const cardOnLeft = index % 2 === 0;
            
            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-center mb-32 md:mb-40 last:mb-0 group">
                <div className={`absolute w-12 h-12 rounded-2xl bg-slate-950 border-2 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)] z-30 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${isRTL ? 'right-6 md:right-1/2 translate-x-1/2' : 'left-6 md:left-1/2 -translate-x-1/2'}`}>
                  <GraduationCap size={20} className="text-indigo-400" />
                  <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 animate-ping opacity-20"></div>
                </div>

                <div className={`hidden md:flex w-full items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 flex items-center ${cardOnLeft ? 'justify-end pr-8 lg:pr-20' : 'justify-end pr-8 lg:pr-20'}`}>
                    {cardOnLeft ? (
                      <RoadmapCard item={item} lang={lang} t={t} />
                    ) : (
                      <YearDisplay year={item.year} align={isRTL ? "right" : "right"} />
                    )}
                  </div>

                  <div className={`w-1/2 flex items-center ${cardOnLeft ? 'justify-start pl-8 lg:pl-20' : 'justify-start pl-8 lg:pl-20'}`}>
                    {!cardOnLeft ? (
                      <RoadmapCard item={item} lang={lang} t={t} />
                    ) : (
                      <YearDisplay year={item.year} align={isRTL ? "left" : "left"} />
                    )}
                  </div>
                </div>

                <div className={`md:hidden w-full ${isRTL ? 'pr-20' : 'pl-20'}`}>
                  <div className="flex flex-col gap-4 mb-4">
                     <span className="text-5xl font-black text-indigo-500/20 tracking-tighter">{item.year}</span>
                     <RoadmapCard item={item} lang={lang} t={t} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const RoadmapCard = ({ item, lang, t }: { item: EducationItem, lang: Language, t: any }) => {
  const isRTL = lang === 'ar';
  return (
    <div className="w-full max-w-sm">
      <div className="p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] glass border border-white/5 hover:border-indigo-500/40 transition-all duration-500 group-hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden">
        <div className={`hidden md:block absolute top-1/2 w-8 lg:w-10 h-[1px] bg-indigo-500/20 -translate-y-1/2 ${isRTL ? '-right-8 lg:-right-10' : '-left-8 lg:-left-10'}`}></div>
        <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6 w-full">
          <div className="px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-black tracking-widest border border-indigo-500/20">{item.year}</div>
        </div>
        <h3 className="text-xl lg:text-2xl font-black text-white mb-2 leading-tight tracking-tight w-full">
          {item.title[lang]}
        </h3>
        <p className="text-indigo-300/80 text-sm font-black uppercase tracking-[0.2em] mb-4 w-full">
          {item.institution[lang]}
        </p>
        <p className="text-slate-300 leading-relaxed text-base font-medium mb-6 lg:mb-8 italic w-full">
          {item.description[lang]}
        </p>
        {item.certificateLink && (
          <a 
            href={item.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 bg-white/5 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-xl lg:rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-3 uppercase tracking-widest border border-white/5 active:scale-95 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ZoomIn size={24} />
            {t.viewCertificate}
          </a>
        )}
      </div>
    </div>
  );
};

const YearDisplay = ({ year, align }: { year: string, align: "left" | "right" }) => {
  return (
    <div className={`w-full ${align === "left" ? "text-left" : "text-right"}`}>
      <span className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[13rem] font-black text-white/[0.03] select-none group-hover:text-indigo-500/[0.08] transition-all duration-700 leading-none whitespace-nowrap">
        {year}
      </span>
    </div>
  );
};
