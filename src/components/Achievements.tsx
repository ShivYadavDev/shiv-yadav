import { usePortfolio } from '../context/PortfolioContext';
import { achievementsList } from '../data';
import { Award, Zap, Trophy, Users, Heart, Star, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Achievements() {
  const { darkMode, language, t } = usePortfolio();

  // Map category to styles and icons
  const getCategoryDetails = (cat: 'academic' | 'leadership' | 'community' | 'future') => {
    switch (cat) {
      case 'academic':
        return {
          icon: Award,
          colorClass: 'text-primary bg-primary/10 border-primary/20',
          indicator: 'bg-primary',
          label: t('achAcademic')
        };
      case 'leadership':
        return {
          icon: Trophy,
          colorClass: 'text-secondary bg-secondary/10 border-secondary/20',
          indicator: 'bg-secondary',
          label: t('achLeadership')
        };
      case 'community':
        return {
          icon: Users,
          colorClass: 'text-accent bg-accent/10 border-accent/20',
          indicator: 'bg-accent',
          label: t('achCommunity')
        };
      case 'future':
        return {
          icon: Compass,
          colorClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
          indicator: 'bg-amber-500',
          label: t('achFuture')
        };
    }
  };

  return (
    <section 
      id="achievements" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            {t('achSubtitle')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t('achTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievementsList.map((ach) => {
            const details = getCategoryDetails(ach.category);
            const Icon = details.icon;

            return (
              <div 
                key={ach.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-primary/20 ${
                  darkMode 
                    ? 'glass-panel-dark border-slate-800/80 hover:bg-slate-950/20 shadow-xl' 
                    : 'glass-panel-light border-slate-200/50 hover:bg-slate-50/50 shadow-md shadow-slate-100'
                }`}
              >
                <div>
                  {/* Category Pill with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${details.colorClass}`}>
                      <Icon size={12} className="animate-pulse" />
                      <span>{details.label}</span>
                    </span>

                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Verified
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-800 dark:text-white leading-snug">
                    {ach.title[language]}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium">
                    {ach.description[language]}
                  </p>
                </div>

                {/* Decorative border bottom connector */}
                <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <div className="flex items-center space-x-1">
                    <span className={`h-1.5 w-1.5 rounded-full ${details.indicator}`} />
                    <span>{ach.category.toUpperCase()}</span>
                  </div>
                  <span>SHIV YADAV</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
