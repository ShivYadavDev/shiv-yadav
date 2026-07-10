import { usePortfolio } from '../context/PortfolioContext';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const { darkMode, language, t } = usePortfolio();

  const handleDownloadCV = () => {
    // Re-use mock resume downloader
    const resumeContent = `
# RESUME: SHIV YADAV
Bachelor of Information Technology (BIT) Student
Email: shivydv575@gmail.com | Phone: +977-9743626647
Location: Pipara-06, Ratauli, Dhanusha, Nepal
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shiv_Yadav_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer 
      id="portfolio-footer"
      className={`py-12 relative overflow-hidden border-t transition-colors duration-300 ${
        darkMode 
          ? 'bg-slate-950 text-white border-slate-900' 
          : 'bg-slate-50 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-slate-900">
          
          {/* Logo brand block */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary text-white font-bold text-sm shadow-md">
                <span>SY</span>
              </div>
              <span className="font-display font-black text-lg tracking-tight text-slate-800 dark:text-white">
                SHIV <span className="text-primary dark:text-accent">YADAV</span>
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm">
              {t('footerTagline')}
            </p>

            <div className="flex items-center space-x-2 text-xs text-slate-400 dark:text-slate-500 font-medium">
              <MapPin size={14} className="text-primary dark:text-accent" />
              <span>{t('footerLocation')}</span>
            </div>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-slate-700 dark:text-slate-300 uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
              <a href="#home" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">{t('navHome')}</a>
              <a href="#about" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">{t('navAbout')}</a>
              <a href="#education" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">{t('navEducation')}</a>
              <a href="#skills" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">{t('navSkills')}</a>
              <a href="#projects" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">{t('navProjects')}</a>
              <a href="#certificates" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">{t('navCertificates')}</a>
            </div>
          </div>

          {/* Quick Contacts block */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end md:text-right">
            <h4 className="font-display font-bold text-sm text-slate-700 dark:text-slate-300 uppercase tracking-widest">
              Contact / Resume
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              <p>{personalInfo.phone}</p>
              <p className="break-all">{personalInfo.email}</p>
            </div>

            <button
              id="footer-cv-btn"
              onClick={handleDownloadCV}
              className="inline-flex items-center space-x-1.5 mt-2 px-3.5 py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white dark:text-accent dark:hover:text-slate-950 text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              <FileText size={14} />
              <span>{t('downloadCv')}</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500 text-center sm:text-left font-medium leading-relaxed max-w-md">
            &copy; {new Date().getFullYear()} Shiv Yadav. {t('footerCopyright')}
          </p>

          {/* Back to top button */}
          <a
            id="footer-back-to-top"
            href="#home"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 transition-colors shadow-sm"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
