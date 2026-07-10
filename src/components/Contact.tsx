import { useState, FormEvent } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const { darkMode, language, t } = usePortfolio();

  // Form Fields State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Status Handlers
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // simulated EmailJS transmission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulate network delay to resemble active EmailJS action
    setTimeout(() => {
      setStatus('success');
      // Clear fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      // Auto return to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            {t('contactSubtitle')}
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t('contactTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Block: Contact Details & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-white">
                {t('contactInfo')}
              </h3>

              {/* Direct Info list */}
              <div className="space-y-4 font-sans text-sm sm:text-base font-medium">
                {/* Email Item */}
                <a 
                  id="contact-email-link"
                  href={`mailto:${personalInfo.email}`}
                  className={`p-4 rounded-2xl border flex items-center space-x-4 transition-all duration-200 hover:scale-[1.01] ${
                    darkMode 
                      ? 'border-slate-800 bg-slate-950/20 hover:border-slate-700 text-slate-300 hover:text-white' 
                      : 'border-slate-100 bg-slate-50/50 hover:border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-400">EMAIL</span>
                    <span className="break-all">{personalInfo.email}</span>
                  </div>
                </a>

                {/* Phone Item */}
                <a 
                  id="contact-phone-link"
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className={`p-4 rounded-2xl border flex items-center space-x-4 transition-all duration-200 hover:scale-[1.01] ${
                    darkMode 
                      ? 'border-slate-800 bg-slate-950/20 hover:border-slate-700 text-slate-300 hover:text-white' 
                      : 'border-slate-100 bg-slate-50/50 hover:border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-400">PHONE</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                </a>

                {/* Location Item */}
                <div 
                  className={`p-4 rounded-2xl border flex items-center space-x-4 ${
                    darkMode 
                      ? 'border-slate-800 bg-slate-950/20 text-slate-300' 
                      : 'border-slate-100 bg-slate-50/50 text-slate-600'
                  }`}
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-400">LOCATION</span>
                    <span className="text-xs sm:text-sm">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Direct Social Shortcuts */}
              <div className="flex items-center space-x-3 pt-2">
                <a 
                  id="contact-social-github"
                  href="https://github.com/shivydv575" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-accent border border-slate-200 dark:border-slate-800 hover:scale-105 transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  id="contact-social-linkedin"
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-accent border border-slate-200 dark:border-slate-800 hover:scale-105 transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Google Map centered around Janakpur Community College */}
            <div className={`rounded-3xl overflow-hidden border p-1 shadow-md ${
              darkMode ? 'glass-panel-dark border-slate-800/80' : 'glass-panel-light border-slate-200'
            }`}>
              <div className="flex items-center space-x-2 px-3 py-2 text-xs font-semibold text-slate-400 border-b border-slate-200 dark:border-slate-800/80">
                <Info size={14} className="text-accent" />
                <span>{t('findMe')}</span>
              </div>
              <iframe
                id="janakpur-map-iframe"
                title="Shiv Yadav location Janakpur Nepal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4852932640275!2d85.9223363!3d26.727091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec13e61895a0a3%3A0x6bda199c0d3d5267!2sJanakpur%20Community%20College!5e0!3m2!1sen!2snp!4v1719280000000!5m2!1sen!2snp"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Right Block: Professional EmailJS Simulated Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode 
                ? 'glass-panel-dark border-slate-800/80 shadow-2xl' 
                : 'glass-panel-light border-slate-200/50 shadow-xl shadow-slate-100'
            }`}>
              <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5">
                
                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div 
                      id="contact-alert-success"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs sm:text-sm font-semibold flex items-center space-x-2.5"
                    >
                      <CheckCircle size={18} className="shrink-0" />
                      <span>{t('sendSuccess')}</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div 
                      id="contact-alert-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs sm:text-sm font-semibold flex items-center space-x-2.5"
                    >
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{t('sendError')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-name" className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold block">
                      {t('contactName')} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === 'sending'}
                      className={`w-full px-4.5 py-3 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 ${
                        darkMode 
                          ? 'glass-input-dark border-slate-800 focus:border-primary' 
                          : 'glass-input-light border-slate-200 focus:border-primary bg-white'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-email" className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold block">
                      {t('contactEmail')} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'sending'}
                      className={`w-full px-4.5 py-3 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 ${
                        darkMode 
                          ? 'glass-input-dark border-slate-800 focus:border-primary' 
                          : 'glass-input-light border-slate-200 focus:border-primary bg-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-subject" className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold block">
                    {t('contactSubject')}
                  </label>
                  <input
                    id="contact-form-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={status === 'sending'}
                    className={`w-full px-4.5 py-3 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 ${
                      darkMode 
                        ? 'glass-input-dark border-slate-800 focus:border-primary' 
                        : 'glass-input-light border-slate-200 focus:border-primary bg-white'
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-message" className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold block">
                    {t('contactMessage')} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'sending'}
                    className={`w-full px-4.5 py-3 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 resize-none ${
                      darkMode 
                        ? 'glass-input-dark border-slate-800 focus:border-primary' 
                        : 'glass-input-light border-slate-200 focus:border-primary bg-white'
                    }`}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20 hover:shadow-secondary/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 disabled:shadow-none transition-all duration-150 cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>{t('sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t('sendBtn')}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
