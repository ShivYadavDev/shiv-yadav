import { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { darkMode, setDarkMode, t } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for visual changes and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('navHome'), href: '#home' },
    { label: t('navAbout'), href: '#about' },
    { label: t('navEducation'), href: '#education' },
    { label: t('navSkills'), href: '#skills' },
    { label: t('navProjects'), href: '#projects' },
    { label: t('navCertificates'), href: '#certificates' },
    { label: t('navContact'), href: '#contact' }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-gray-200 dark:bg-slate-800">
        <div 
          className="h-full bg-gradient-to-right from-primary via-secondary to-accent transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        id="navbar-header"
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? darkMode 
              ? 'glass-nav-dark py-3 shadow-lg' 
              : 'glass-nav-light py-3 shadow-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                <span>SY</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary to-secondary blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
              </div>
              <span className="hidden sm:inline font-display font-bold tracking-tight text-xl text-slate-800 dark:text-white">
                SHIV <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">YADAV</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Toolbar: Theme Toggle, Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Theme Toggle */}
              <button
                id="theme-toggle-btn"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all duration-200"
                aria-label="Toggle Theme"
              >
                {darkMode ? (
                  <Sun size={18} className="text-amber-400 hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon size={18} className="text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* Hamburger Menu (Mobile) */}
              <button
                id="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 md:hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all duration-200"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[60px] z-40 md:hidden p-4 mx-4 rounded-2xl shadow-xl border ${
              darkMode 
                ? 'glass-panel-dark border-slate-800/80 text-white' 
                : 'glass-panel-light border-slate-200/80 text-slate-900'
            }`}
          >
            <div className="flex flex-col space-y-2 py-3">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/10 hover:text-primary dark:hover:text-accent transition-all duration-150"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
