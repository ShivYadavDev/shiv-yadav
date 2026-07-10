import { usePortfolio } from '../context/PortfolioContext';
import { educationList } from '../data';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function Timeline() {
  const { darkMode, language, t } = usePortfolio();

  return (
    <section 
      id="education" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Visual background lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary dark:text-accent bg-primary/10 px-3 py-1 rounded-full">
            {t('eduSubtitle')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t('eduTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Engine */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Connecting Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          {/* Timeline Items Grid */}
          <div className="space-y-12 relative">
            {educationList.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer spacing spacer to center timeline perfectly */}
                  <div className="hidden md:block w-1/2" />

                  {/* Central Node Dot with Glow */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <GraduationCap size={14} className="text-accent" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent blur-sm opacity-50 animate-ping -z-10" />
                    </div>
                  </div>

                  {/* Content Glass Card Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? 'md:pl-12' : 'md:pr-12'
                  }`}>
                    <div 
                      className={`p-6 rounded-3xl border hover:scale-[1.01] transition-all duration-300 relative ${
                        darkMode 
                          ? 'glass-panel-dark border-slate-800/80 hover:border-primary/30 shadow-xl' 
                          : 'glass-panel-light border-slate-200/80 hover:border-primary/20 shadow-lg shadow-slate-100'
                      }`}
                    >
                      {/* Top ribbon indicating currently active or complete */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          item.id === 'edu-bit' 
                            ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                            : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                        }`}>
                          <Calendar size={12} />
                          <span>{item.year[language]}</span>
                        </span>

                        {item.gpa && (
                          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-black bg-primary/10 text-primary dark:text-accent border border-primary/20">
                            <Award size={12} />
                            <span>{item.gpa[language]}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-white leading-snug">
                        {item.degree[language]}
                      </h3>

                      <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <p className="flex items-center space-x-1.5 text-slate-700 dark:text-slate-300">
                          <BookOpen size={14} className="text-primary dark:text-accent shrink-0" />
                          <span>{item.school[language]}</span>
                        </p>
                        
                        <p className="flex items-center space-x-1.5 pl-5">
                          <MapPin size={14} className="shrink-0" />
                          <span>{item.location[language]}</span>
                        </p>

                        <p className="pl-5 pt-1 text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {t('boardLabel')}: {item.board[language]}
                        </p>
                      </div>

                      {/* Small visual decoration inside BIT item */}
                      {item.id === 'edu-bit' && (
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center space-x-1.5 text-xs text-amber-500 font-medium">
                            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                            <span>{language === 'en' ? 'Currently Running (3rd Year)' : 'तेस्रो वर्षमा अध्ययनरत'}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">P.U. Affiliated</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
