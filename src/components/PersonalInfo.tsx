import { usePortfolio } from '../context/PortfolioContext';
import { personalInfoRecords, hobbiesList } from '../data';
import LucideIcon from './LucideIcon';
import { Heart, Compass, Shield, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PersonalInfo() {
  const { darkMode, language, t } = usePortfolio();

  return (
    <section 
      id="personal-profile" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Grid: Profile Records (Left/Top) vs Hobbies (Right/Bottom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Premium Glass Cards for Personal Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                {t('personalSubtitle')}
              </span>
              <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl tracking-tight text-slate-800 dark:text-white">
                {t('personalTitle')}
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode 
                ? 'glass-panel-dark border-slate-800/80 shadow-2xl' 
                : 'glass-panel-light border-slate-200/50 shadow-xl'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {personalInfoRecords.map((rec) => (
                  <div 
                    key={rec.label.en}
                    className={`p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                      darkMode 
                        ? 'border-slate-800/80 bg-slate-950/20 hover:border-slate-700 hover:bg-slate-950/40' 
                        : 'border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 mb-1 text-slate-400 dark:text-slate-500">
                      <LucideIcon name={rec.iconName} size={15} className="text-primary dark:text-accent shrink-0" />
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
                        {rec.label[language]}
                      </span>
                    </div>
                    <p className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 pl-6.5 leading-snug">
                      {rec.value[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Animated Hobbies and Interests */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-8">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                {t('hobbiesSubtitle')}
              </span>
              <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl tracking-tight text-slate-800 dark:text-white">
                {t('hobbiesTitle')}
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {hobbiesList.map((hobby) => (
                <div 
                  key={hobby.id}
                  className={`p-4 rounded-2xl border flex items-center justify-between group transition-all duration-300 hover:scale-[1.01] hover:pl-5 ${
                    darkMode 
                      ? 'glass-panel-dark border-slate-800/80 hover:border-secondary/30 hover:bg-gradient-to-r hover:from-slate-950/60 hover:to-slate-900/40' 
                      : 'glass-panel-light border-slate-200/50 hover:border-secondary/20 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 rounded-xl bg-secondary/10 text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <LucideIcon name={hobby.iconName} size={18} className="animate-pulse" />
                    </div>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                      {hobby.name[language]}
                    </span>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                    <ArrowRight size={16} className="text-secondary animate-bounce-right" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
