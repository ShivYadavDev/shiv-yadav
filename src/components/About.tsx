import { usePortfolio } from '../context/PortfolioContext';
import { personalInfo } from '../data';
import { Target, Award, User, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const { darkMode, language, t } = usePortfolio();

  return (
    <section 
      id="about" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-secondary/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary dark:text-accent bg-primary/10 px-3 py-1 rounded-full">
            {t('aboutIntro')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t('aboutTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Biography Block (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
              darkMode 
                ? 'glass-panel-dark border-slate-800/80 shadow-2xl shadow-primary/5' 
                : 'glass-panel-light border-slate-100 shadow-xl shadow-slate-100'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10 text-primary dark:text-accent">
                  <User size={24} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl">
                  {language === 'en' ? 'Shiv Yadav biography' : 'शिव यादव जीवनी'}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {personalInfo.aboutMe[language]}
              </p>

              {/* Decorative Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80">
                <div className="text-center sm:text-left">
                  <span className="block font-display font-black text-2xl sm:text-3xl text-primary dark:text-accent">
                    BIT
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {language === 'en' ? 'Undergrad Major' : 'मुख्य विषय'}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="block font-display font-black text-2xl sm:text-3xl text-secondary dark:text-secondary">
                    3rd Yr
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {language === 'en' ? 'Current Enrollment' : 'चालू शैक्षिक वर्ष'}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="block font-display font-black text-2xl sm:text-3xl text-accent">
                    4+
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {language === 'en' ? 'Languages' : 'अवगत भाषाहरू'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Objective (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className={`h-full relative p-6 sm:p-8 rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
              darkMode 
                ? 'glass-panel-dark border-slate-800/80 shadow-2xl shadow-secondary/5 bg-gradient-to-br from-slate-900/80 to-slate-950/80' 
                : 'glass-panel-light border-slate-100 shadow-xl shadow-slate-100 bg-gradient-to-br from-white to-slate-50'
            }`}>
              {/* Abs decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                    <Target size={28} className="animate-pulse" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-white">
                    {t('careerObjectiveTitle')}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="text-slate-600 dark:text-slate-300 italic font-medium leading-relaxed text-base sm:text-lg font-display">
                    &ldquo;{personalInfo.careerObjective[language]}&rdquo;
                  </div>
                  
                  {/* Additional bullets showing professional values */}
                  <ul className="space-y-3 pt-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="p-1 rounded bg-emerald-500/10 text-emerald-500 mt-0.5">✓</span>
                      <span>{language === 'en' ? 'Commitment to software craftsmanship' : 'सफ्टवेयर निर्माणमा पूर्ण प्रतिबद्धता'}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="p-1 rounded bg-emerald-500/10 text-emerald-500 mt-0.5">✓</span>
                      <span>{language === 'en' ? 'Eager to absorb and apply new technology patterns' : 'नयाँ प्रविधि द्रुत गतिमा सिक्ने तत्परता'}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="p-1 rounded bg-emerald-500/10 text-emerald-500 mt-0.5">✓</span>
                      <span>{language === 'en' ? 'Focused on problem solving and collaboration' : 'समस्या समाधान र समूहगत सहकार्यमा केन्द्रित'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Small branding footer inside card */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-accent" />
                  <span className="font-mono text-xs text-slate-400">Shiv Yadav &bull; Portfolio</span>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
