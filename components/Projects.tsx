
import React from 'react';
import { PROJECTS, UI_STRINGS } from '../constants.tsx';
import { Language } from '../types.ts';
import { ExternalLink, Github, Download } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const isRTL = lang === 'ar';

  return (
    <section id="projects" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 px-4 md:px-12 max-w-4xl mx-auto">
          <div className="py-8"> 
            <h2 className={`text-4xl md:text-5xl ${isRTL ? 'lg:text-6xl' : 'lg:text-7xl'} font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-4 pb-4 ${isRTL ? 'leading-[1.8] tracking-normal' : 'leading-tight tracking-tighter'}`}>
              {t.featuredProjects}
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium opacity-80 leading-relaxed -mt-4">
            {t.projectDesc}
          </p>
        </div>

        {/* Centered Project Bloc using Flex with justify-center */}
        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col rounded-[2.5rem] glass border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden w-full md:w-[calc(45%)] lg:w-[calc(30%)] min-w-[320px] max-w-md"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title[lang]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} px-4 py-1.5 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-widest text-indigo-300`}>
                  {project.category[lang]}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description[lang]}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-[10px] font-black uppercase tracking-wider text-indigo-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs uppercase tracking-widest border border-white/5 transition-all"
                    >
                      <Github size={16} />
                      {t.viewCode}
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/20"
                    >
                      {project.id === 'electron-desktop-suite' ? <Download size={16} /> : <ExternalLink size={16} />}
                      {project.id === 'electron-desktop-suite' ? t.downloadApp : t.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
