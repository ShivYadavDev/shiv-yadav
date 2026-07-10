import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { skillsList, strengthsList, languagesProficiency } from '../data';
import LucideIcon from './LucideIcon';
import { Check, Cpu, Award, Globe, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function Skills() {
  const { darkMode, language, t } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'other'>('all');

  // Filter skills based on chosen category
  const filteredSkills = activeCategory === 'all' 
    ? skillsList 
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section 
      id="skills" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary dark:text-accent bg-primary/10 px-3 py-1 rounded-full">
            {t('skillsSubtitle')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t('skillsTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* SECTION 1: Technical Skill Progress Bars */}
        <div className="mb-20">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {(['all', 'frontend', 'backend', 'other'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                    : darkMode
                      ? 'border-slate-800 bg-slate-950/40 text-slate-400 hover:text-white hover:border-slate-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat === 'all' ? (language === 'en' ? 'All Skills' : 'सबै सीपहरू') : 
                 cat === 'frontend' ? (language === 'en' ? 'Frontend' : 'फ्रन्टएन्ड') :
                 cat === 'backend' ? (language === 'en' ? 'Backend & DB' : 'ब्याकएन्ड र डाटाबेस') :
                 (language === 'en' ? 'Tools & General' : 'उपकरण र सामान्य')}
              </button>
            ))}
          </div>

          {/* Progress Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                  darkMode 
                    ? 'glass-panel-dark border-slate-800/80 hover:border-primary/20' 
                    : 'glass-panel-light border-slate-200/50 hover:border-primary/10 shadow-sm shadow-slate-100'
                }`}
              >
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs font-black text-primary dark:text-accent">
                    {skill.percentage}%
                  </span>
                </div>
                {/* Outer Progress bar track */}
                <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Key Strengths Grid */}
        <div className="mb-20 pt-10 border-t border-slate-200 dark:border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              {t('strengthsSubtitle')}
            </span>
            <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-slate-800 dark:text-white">
              {t('strengthsTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {strengthsList.map((strength) => (
              <div 
                key={strength.id}
                className={`p-5 rounded-2xl border flex items-center space-x-3.5 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${
                  darkMode 
                    ? 'glass-panel-dark border-slate-800/80 hover:border-secondary/30' 
                    : 'glass-panel-light border-slate-200/50 hover:border-secondary/20 shadow-sm'
                }`}
              >
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary flex-shrink-0">
                  <LucideIcon name={strength.iconName} size={20} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-tight">
                    {strength.title[language]}
                  </h4>
                  <span className="text-[10px] font-mono uppercase text-slate-400 mt-1 block">Verified Strength</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Language Proficiency Circular progress */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
              {t('languagesSubtitle')}
            </span>
            <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-slate-800 dark:text-white">
              {t('languagesTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {languagesProficiency.map((lang) => {
              // Calculate SVG circular stroke lengths
              const radius = 40;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (lang.percentage / 100) * circumference;

              return (
                <div 
                  key={lang.name.en}
                  className={`p-6 rounded-3xl border flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] ${
                    darkMode 
                      ? 'glass-panel-dark border-slate-800/80 hover:border-accent/30' 
                      : 'glass-panel-light border-slate-200/50 hover:border-accent/20 shadow-sm'
                  }`}
                >
                  {/* Radial circle container */}
                  <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Gray track background */}
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-slate-200 dark:stroke-slate-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Animated Colored indicator bar */}
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-accent"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                      />
                    </svg>
                    {/* Centered label */}
                    <span className="absolute font-mono text-sm font-black text-slate-800 dark:text-white">
                      {lang.percentage}%
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                    {lang.name[language]}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                    {lang.percentage === 100 ? (language === 'en' ? 'Native / Mother Tongue' : 'मातृभाषा') : (language === 'en' ? 'Professional' : 'व्यावसायिक')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
