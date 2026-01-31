
import React from 'react';
import { SKILLS, UI_STRINGS } from '../constants.tsx';
import { Language } from '../types.ts';
import { 
  FileText, 
  Table, 
  Presentation, 
  PenTool, 
  Palette,
  Image
} from 'lucide-react';

interface SkillsProps {
  lang: Language;
}

const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  const brandMap: Record<string, { slug: string, color: string }> = {
    'Figma': { slug: 'figma', color: '#F24E1E' },
    'Python': { slug: 'python', color: '#3776AB' },
    'HTML5': { slug: 'html5', color: '#E34F26' },
    'JavaScript': { slug: 'javascript', color: '#F7DF1E' },
    'Tailwind': { slug: 'tailwindcss', color: '#06B6D4' },
    'Git': { slug: 'git', color: '#F05032' },
  };

  const lucideMap: Record<string, { icon: React.ReactNode, color: string }> = {
    'Word': { icon: <FileText size={40} />, color: '#2B579A' },
    'Excel': { icon: <Table size={40} />, color: '#217346' },
    'PowerPoint': { icon: <Presentation size={40} />, color: '#B7472A' },
    'Illustrator': { icon: <PenTool size={40} />, color: '#FF9A00' },
    'CSS3': { icon: <Palette size={40} />, color: '#1572B6' },
    'Photoshop': { icon: <Image size={40} />, color: '#31A8FF' },
  };

  const isLucide = lucideMap[name];
  const config = isLucide || brandMap[name] || { slug: 'codeigniter', color: '#6366F1' };

  return (
    <div className="flex flex-col items-center gap-5 px-10 group">
      <div 
        className="w-28 h-28 rounded-[2rem] flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-3 shadow-xl relative overflow-hidden"
        style={{ backgroundColor: `${config.color}15` }}
      >
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          {isLucide ? (
            <div style={{ color: config.color }}>{isLucide.icon}</div>
          ) : (
            <img src={`https://cdn.simpleicons.org/${(config as any).slug}`} alt={name} className="w-12 h-12" />
          )}
        </div>
      </div>
      <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const doubledSkills = [...SKILLS, ...SKILLS, ...SKILLS];
  const t = UI_STRINGS[lang];

  const renderHeading = (text: string) => {
    const parts = text.split(' ');
    if (parts.length <= 1) {
      return <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{text}</span>;
    }
    const last = parts[parts.length - 1];
    const first = parts.slice(0, -1).join(' ');
    return (
      <>
        {first} <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{last}</span>
      </>
    );
  };

  return (
    <section id="skills" className="py-32 bg-slate-950 overflow-hidden relative border-y border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
          {renderHeading(t.technicalArsenal)}
        </h2>
        <p className="text-slate-400 uppercase tracking-[0.4em] text-xs font-bold opacity-70">
          {t.hybridStack}
        </p>
      </div>

      <div className="relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20"></div>

        <div className="flex animate-marquee py-12 items-center">
          {doubledSkills.map((skill, index) => (
            <SkillIcon key={`${skill.name}-${index}`} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
