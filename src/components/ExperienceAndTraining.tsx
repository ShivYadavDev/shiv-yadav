import { usePortfolio } from '../context/PortfolioContext';
import { experienceData, computerTrainingData } from '../data';
import { Briefcase, Award, Clock, MapPin, Building, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ExperienceAndTraining() {
  const { darkMode, language, t } = usePortfolio();

  return (
    <section 
      id="experience-training" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            {t('expSubtitle')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {language === 'en' ? 'Experience & Professional Training' : 'अनुभव र व्यावसायिक तालिम'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout: Grid containing Experience and Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Experience (Fresher) */}
          <div 
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
              darkMode 
                ? 'glass-panel-dark border-slate-800/85 shadow-2xl shadow-primary/5' 
                : 'glass-panel-light border-slate-200/60 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-white">
                      {t('expTitle')}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Work Status</span>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  {experienceData.status[language]}
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {experienceData.description[language]}
                </p>

                {/* Simulated Project Milestones Decorator */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck size={16} className="text-primary" />
                    <span>{language === 'en' ? '5+ Completed Projects' : '५+ सम्पन्न परियोजनाहरू'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck size={16} className="text-primary" />
                    <span>{language === 'en' ? 'Continuous Learning' : 'निरन्तर सिकाइ अभ्यास'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-[11px] font-mono text-slate-400 dark:text-slate-500 tracking-wide uppercase">
              * Open for Internships and Software Roles
            </div>
          </div>

          {/* Card 2: Computer Training (DCA Diploma) */}
          <div 
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
              darkMode 
                ? 'glass-panel-dark border-slate-800/85 shadow-2xl shadow-secondary/5 bg-gradient-to-br from-slate-900/40 to-slate-950/40' 
                : 'glass-panel-light border-slate-200/60 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-white">
                      {t('trainingTitle')}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">{t('trainingSubtitle')}</span>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                  <Clock size={12} className="mr-1" />
                  {computerTrainingData.duration[language]}
                </span>
              </div>

              <div className="space-y-4 font-sans text-sm text-slate-600 dark:text-slate-300">
                <h4 className="font-display font-bold text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-snug">
                  {computerTrainingData.title[language]}
                </h4>

                <div className="space-y-2.5 pt-2 pl-1">
                  <p className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 font-medium">
                    <Building size={16} className="text-secondary shrink-0" />
                    <span>{t('instituteLabel')}: {computerTrainingData.institute[language]}</span>
                  </p>
                  <p className="flex items-center space-x-2 pl-6">
                    <MapPin size={16} className="text-slate-400 shrink-0" />
                    <span>{t('locationLabel')}: {computerTrainingData.location[language]}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Cert reference ribbon */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
              <span className="text-xs text-secondary font-semibold font-mono tracking-wider">
                DIPLOMA COMPLETED
              </span>
              <span className="text-[10px] font-mono text-slate-400">Grand Center Certified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
