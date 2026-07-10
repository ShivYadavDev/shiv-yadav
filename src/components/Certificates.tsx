import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { certificatesList } from '../data';
import { Award, Calendar, Search, Download, Eye, X, BookOpen, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Certificates() {
  const { darkMode, language, t } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'diploma' | 'web' | 'software'>('all');
  const [activeCertificateId, setActiveCertificateId] = useState<string | null>(null);

  // Categories computed list
  const categories = [
    { id: 'all', label: t('allCategories') },
    { id: 'diploma', label: language === 'en' ? 'Diploma' : 'डिप्लोमा' },
    { id: 'web', label: language === 'en' ? 'Web Dev' : 'वेब विकास' },
    { id: 'software', label: language === 'en' ? 'Software Eng' : 'सफ्टवेयर ई.' }
  ];

  // Filtering logic
  const filteredCertificates = certificatesList.filter((cert) => {
    // Filter by Category
    if (selectedCategory === 'diploma' && cert.category.en.toLowerCase() !== 'diploma') return false;
    if (selectedCategory === 'web' && cert.category.en.toLowerCase() !== 'web development') return false;
    if (selectedCategory === 'software' && cert.category.en.toLowerCase() !== 'software engineering') return false;

    // Filter by Search Query
    const matchTitle = cert.title[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchOrg = cert.organization[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchSkills = cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchTitle || matchOrg || matchSkills;
  });

  // Calculate stats
  const totalCerts = certificatesList.length;
  const uniqueCategories = new Set(certificatesList.map(c => c.category.en)).size;

  const activeCertificate = certificatesList.find(c => c.id === activeCertificateId);

  // Trigger mock PDF certificate download
  const triggerDownload = (title: string) => {
    const mockContent = `
=========================================
      OFFICIAL DIGITAL CREDENTIAL
=========================================
Certificate: ${title}
Awarded To: SHIV YADAV
Issued By: Janakpur Community College / Grand Center
Status: VERIFIED & ACTIVE
Verification ID: SY-CRED-${Math.floor(100000 + Math.random() * 900000)}
=========================================
Congratulations on validating your technical proficiency!
    `;
    const blob = new Blob([mockContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}_Certificate.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="certificates" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            {t('certSubtitle')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t('certTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* SECTION 1: Credentials Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
          {/* Total Certificates Stat Card */}
          <div className={`p-6 rounded-3xl border flex items-center space-x-4 shadow-md ${
            darkMode 
              ? 'glass-panel-dark border-slate-800' 
              : 'glass-panel-light border-slate-200 bg-white'
          }`}>
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Award size={24} className="animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-400 block tracking-wider font-semibold">
                {t('totalCert')}
              </span>
              <span className="font-display font-black text-2xl sm:text-3xl text-primary">
                {totalCerts}
              </span>
            </div>
          </div>

          {/* Completed Categories Stat Card */}
          <div className={`p-6 rounded-3xl border flex items-center space-x-4 shadow-md ${
            darkMode 
              ? 'glass-panel-dark border-slate-800' 
              : 'glass-panel-light border-slate-200 bg-white'
          }`}>
            <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
              <BookOpen size={24} className="animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-400 block tracking-wider font-semibold">
                {t('completedCat')}
              </span>
              <span className="font-display font-black text-2xl sm:text-3xl text-secondary">
                {uniqueCategories}
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 2: Toolbar (Search & Filter) */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
            <input
              id="certificates-search-input"
              type="text"
              placeholder={t('searchCertPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-2.5 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 ${
                darkMode 
                  ? 'glass-input-dark border-slate-800 focus:border-primary' 
                  : 'glass-input-light border-slate-200 focus:border-primary bg-white'
              }`}
            />
          </div>

          {/* Tabs Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                    : darkMode
                      ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 3: Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCertificates.map((cert) => (
            <div 
              key={cert.id}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 ${
                darkMode 
                  ? 'glass-panel-dark border-slate-800/80 hover:bg-slate-950/20 shadow-xl' 
                  : 'glass-panel-light border-slate-200/50 hover:bg-slate-50/50 shadow-md shadow-slate-100'
              }`}
            >
              <div>
                {/* Certificate badge visual element */}
                <div className="flex items-center space-x-1.5 mb-4 text-primary dark:text-accent">
                  <Award size={18} className="animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-slate-500">
                    {cert.category[language]}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-800 dark:text-white leading-snug">
                  {cert.title[language]}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold">
                  {cert.organization[language]}
                </p>

                <div className="flex items-center space-x-1 mt-3.5 text-[11px] text-slate-400 dark:text-slate-500 font-medium font-mono">
                  <Calendar size={12} />
                  <span>{t('issueDateLabel')}: {cert.issueDate[language]}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-150 dark:border-slate-800/60">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span 
                      key={skill}
                      className="font-mono text-[9px] px-2 py-0.5 rounded bg-primary/5 text-primary dark:text-accent font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center space-x-2 mt-6 pt-4 border-t border-slate-150 dark:border-slate-800/50 text-xs font-semibold">
                <button
                  id={`cert-view-${cert.id}`}
                  onClick={() => setActiveCertificateId(cert.id)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/20 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-primary/5 transition-all duration-200"
                >
                  <Eye size={12} />
                  <span>{t('viewCert')}</span>
                </button>

                <button
                  id={`cert-dl-${cert.id}`}
                  onClick={() => triggerDownload(cert.title[language])}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white dark:text-accent dark:hover:text-slate-950 transition-all duration-200"
                >
                  <Download size={12} />
                  <span>{t('downloadCert')}</span>
                </button>
              </div>
            </div>
          ))}

          {/* No Results */}
          {filteredCertificates.length === 0 && (
            <div className="col-span-full text-center py-10">
              <Award className="mx-auto text-slate-400 dark:text-slate-600 mb-2 animate-bounce" size={32} />
              <p className="font-mono text-xs text-slate-400">
                {language === 'en' ? 'No certificates found for this query.' : 'यस विधामा कुनै प्रमाणपत्र फेला परेन।'}
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Fullscreen Digital Copy Viewer Modal */}
      <AnimatePresence>
        {activeCertificateId && activeCertificate && (
          <motion.div 
            id="certificate-preview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className={`relative max-w-2xl w-full p-6 sm:p-8 rounded-3xl border shadow-2xl text-slate-950 ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 text-white' 
                  : 'bg-white border-slate-100 text-slate-900'
              }`}
            >
              {/* Close Button */}
              <button 
                id="close-cert-modal"
                onClick={() => setActiveCertificateId(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Verified Badge decoration */}
              <div className="flex items-center space-x-1.5 mb-6 text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1.5 rounded-full w-fit">
                <ShieldCheck size={16} />
                <span>Verified Digital Copy</span>
              </div>

              {/* Certificate Inner Form Box (Aesthetic layout resembling physical cert) */}
              <div className={`p-6 rounded-2xl border-2 border-dashed relative text-center flex flex-col justify-center items-center ${
                darkMode 
                  ? 'border-slate-800/80 bg-slate-950/40 text-white' 
                  : 'border-slate-200 bg-slate-50 text-slate-900'
              }`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary dark:text-accent">
                  <Award size={24} />
                </div>

                <span className="font-mono text-xs uppercase text-slate-400 dark:text-slate-500 tracking-widest font-black">
                  CERTIFICATE OF COMPLETION
                </span>

                <h4 className="font-display font-black text-lg sm:text-2xl mt-4 max-w-md text-slate-800 dark:text-slate-100 leading-snug">
                  {activeCertificate.title[language]}
                </h4>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {language === 'en' ? 'This certifies that' : 'यो प्रमाणित गरिन्छ कि'}
                </p>
                <p className="font-display font-black text-xl text-primary dark:text-accent mt-1 tracking-tight">
                  SHIV YADAV
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm font-medium">
                  {language === 'en' 
                    ? `has successfully fulfilled all requirements of the program authorized by ${activeCertificate.organization[language]}.`
                    : `ले ${activeCertificate.organization[language]} द्वारा सञ्चालित पाठ्यक्रम सफलतापूर्वक पूरा गर्नुभएको छ।`}
                </p>

                {/* Details list */}
                <div className="w-full grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-left text-xs font-medium text-slate-400 dark:text-slate-500">
                  <div>
                    <span className="block uppercase font-mono text-[9px] tracking-wider mb-1">Date of Issue</span>
                    <span className="font-sans font-bold text-slate-700 dark:text-slate-300">{activeCertificate.issueDate[language]}</span>
                  </div>
                  <div>
                    <span className="block uppercase font-mono text-[9px] tracking-wider mb-1">Credential status</span>
                    <span className="font-sans font-bold text-emerald-500 uppercase tracking-widest">VERIFIED ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Skills breakdown */}
              <div className="mt-6">
                <h5 className="font-display font-bold text-xs sm:text-sm uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-3">
                  {t('skillsLearned')}
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {activeCertificate.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="font-mono text-xs px-3 py-1 rounded-xl bg-primary/10 text-primary dark:text-accent font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="flex items-center justify-end space-x-3 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  id={`cert-modal-dl-${activeCertificate.id}`}
                  onClick={() => triggerDownload(activeCertificate.title[language])}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                >
                  <Download size={14} />
                  <span>{t('downloadCert')}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
