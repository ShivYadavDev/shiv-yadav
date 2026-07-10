import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { projectsList } from '../data';
import { Github, ExternalLink, Search, Sparkles, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const { darkMode, language, t } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'academic' | 'featured' | 'personal' | 'coming'>('all');

  // Filter and search computation
  const filteredProjects = projectsList.filter((project) => {
    // Filter by tab
    if (activeFilter === 'academic' && !project.badge.en.toLowerCase().includes('academic')) return false;
    if (activeFilter === 'featured' && !project.badge.en.toLowerCase().includes('featured')) return false;
    if (activeFilter === 'personal' && !project.badge.en.toLowerCase().includes('personal') && !project.badge.en.toLowerCase().includes('database')) return false;
    if (activeFilter === 'coming' && !project.badge.en.toLowerCase().includes('coming')) return false;

    // Filter by search query
    const matchTitle = project.title[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchDesc = project.description[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchTech = project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchTitle || matchDesc || matchTech;
  });

  return (
    <section 
      id="projects" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Visual background rings */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            {t('projectsSubtitle')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t('projectsTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Toolbar: Search and Filter Tabs */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
            <input
              id="projects-search-input"
              type="text"
              placeholder={t('searchProjPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-2.5 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 ${
                darkMode 
                  ? 'glass-input-dark border-slate-800 focus:border-primary' 
                  : 'glass-input-light border-slate-200 focus:border-primary bg-white'
              }`}
            />
          </div>

          {/* Filters Grid */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {(['all', 'academic', 'featured', 'personal', 'coming'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 border cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                    : darkMode
                      ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {filter === 'all' ? t('allProjects') : 
                 filter === 'academic' ? (language === 'en' ? 'Academic' : 'शैक्षिक') :
                 filter === 'featured' ? (language === 'en' ? 'Featured' : 'विशेष') :
                 filter === 'personal' ? (language === 'en' ? 'Personal' : 'व्यक्तिगत') :
                 (language === 'en' ? 'Coming Soon' : 'चाँडै आउँदैछ')}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isComingSoon = project.badge.en.toLowerCase().includes('coming');

            return (
              <div 
                key={project.id}
                className={`flex flex-col h-full rounded-3xl border overflow-hidden hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-300 ${
                  darkMode 
                    ? 'glass-panel-dark border-slate-800/80 hover:border-primary/20 shadow-2xl' 
                    : 'glass-panel-light border-slate-200/50 hover:border-primary/10 shadow-lg shadow-slate-100'
                }`}
              >
                {/* Simulated Product Canvas Header (Instead of broken img) */}
                <div 
                  className="relative h-48 w-full flex items-center justify-center overflow-hidden p-6"
                  style={{ background: project.imagePlaceholder }}
                >
                  {/* Backdrop Matrix mesh overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  
                  {/* Abstract Vector Decorator */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-white/90 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg animate-float">
                      <Code2 size={28} className="text-white" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest mt-3.5 bg-black/20 px-2 py-0.5 rounded-full">
                      Project Shell
                    </span>
                  </div>

                  {/* Top-Right Category Badge with pulse glow */}
                  <span className="absolute top-4 right-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-sm border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span>{project.badge[language]}</span>
                  </span>
                </div>

                {/* Card details body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-white leading-snug">
                      {project.title[language]}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed font-sans">
                      {project.description[language]}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800/60 space-y-4">
                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-3 text-xs font-bold pt-1">
                      <a
                        id={`proj-${project.id}-github`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl border transition-all duration-200 ${
                          darkMode 
                            ? 'border-slate-800 hover:border-slate-700 bg-slate-950/40 hover:bg-slate-950 text-slate-300' 
                            : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <Github size={14} />
                        <span>{t('viewGithub')}</span>
                      </a>

                      {!isComingSoon && project.liveUrl && (
                        <a
                          id={`proj-${project.id}-live`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-sm shadow-primary/25 transition-all duration-200"
                        >
                          <ExternalLink size={14} />
                          <span>{t('liveDemo')}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Fallback empty view */}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12">
              <Sparkles className="mx-auto text-slate-400 dark:text-slate-600 mb-3 animate-bounce" size={40} />
              <p className="font-mono text-sm text-slate-400">
                {language === 'en' ? 'No matching projects found.' : 'कुनै मिल्दो परियोजनाहरू फेला परेनन्।'}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
