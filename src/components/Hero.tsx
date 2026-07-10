import { useState, useEffect } from 'react';
import { usePortfolio, translations } from '../context/PortfolioContext';
import { personalInfo } from '../data';
import { Download, ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code } from 'lucide-react';
import { motion } from 'motion/react';
import ProfileImageSection from './ProfileImageSection';

export default function Hero() {
  const { darkMode, t } = usePortfolio();
  
  // Custom Typing Effect
  const phrases = [
    "Bachelor of Information Technology Student",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Future Software Engineer",
    "Quick Learner",
    "Problem Solver"
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);
  const [subStringIdx, setSubStringIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    
    // Determine speed
    let speed = isDeleting ? 40 : 100;
    
    // Pause at full phrase
    if (!isDeleting && subStringIdx === currentPhrase.length) {
      speed = 1500; // Keep full phrase visible for 1.5s
    } else if (isDeleting && subStringIdx === 0) {
      speed = 300; // Pause before typing next phrase
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, subStringIdx + 1));
        setSubStringIdx(prev => prev + 1);
        
        if (subStringIdx === currentPhrase.length) {
          setIsDeleting(true);
        }
      } else {
        setTypedText(currentPhrase.substring(0, subStringIdx - 1));
        setSubStringIdx(prev => prev - 1);
        
        if (subStringIdx === 0) {
          setIsDeleting(false);
          setPhraseIdx(prev => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [subStringIdx, isDeleting, phraseIdx]);

  // Handle mock CV Download
  const handleDownloadCV = () => {
    // Generate a beautiful text-based Markdown Resume content
    const resumeContent = `
# RESUME: SHIV YADAV
Bachelor of Information Technology (BIT) Student
Email: shivydv575@gmail.com | Phone: +977-9743626647
Location: Pipara-06, Ratauli, Dhanusha, Nepal

## CAREER OBJECTIVE
To succeed in an environment of growth and excellence while utilizing my knowledge, technical skills, and creativity to contribute effectively to organizational success and continuously improve myself as a software professional.

## EDUCATION
- Bachelor of Information Technology (BIT)
  Janakpur Community College | Purbanchal University
  Status: Currently Running (3rd Year)
- +2 Management (NEB)
  Public Youth Secondary School, Janakpurdham | GPA: 2.85
- Secondary Education Examination (SEE)
  Shree Ram Education Foundation Secondary School | GPA: 3.75

## TECHNICAL SKILLS
HTML5, CSS3, JavaScript, PHP, MySQL, Git, GitHub, Responsive Web Design, Computer Applications.

## KEY STRENGTHS
Quick Learner, Creative Thinker, Reliable, Responsible, Hard Working, Team Player, Positive Attitude, Adaptable to New Technologies.

## CERTIFICATIONS
- Diploma in Computer Application (DCA) - 3 Months
  Grand Computer & Language Center, Janakpur Dham
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
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden ${
        darkMode 
          ? 'bg-slate-950 text-white bg-grid-pattern' 
          : 'bg-slate-50 text-slate-900 bg-grid-pattern-light'
      }`}
    >
      {/* Dynamic Futuristic Glowing Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/10 blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-accent/15 blur-[100px] pointer-events-none" />

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 animate-float-slow`}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + i * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating Social Sidebar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col space-y-4 z-30">
        <div className={`p-2 rounded-2xl flex flex-col space-y-4 shadow-lg border ${
          darkMode ? 'glass-panel-dark border-slate-800' : 'glass-panel-light border-slate-200'
        }`}>
          <a href="https://github.com/shivydv575" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl hover:bg-primary/10 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-all duration-200" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl hover:bg-primary/10 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-all duration-200" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-xl hover:bg-primary/10 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-all duration-200" title="Email">
            <Mail size={20} />
          </a>
          <a href="tel:+9779743626647" className="p-2.5 rounded-xl hover:bg-primary/10 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-all duration-200" title="Call Shiv">
            <Phone size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Details (Left) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary dark:text-accent border border-primary/20 dark:border-accent/20">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>{personalInfo.tagline[usePortfolio().language]}</span>
              </span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-800 dark:text-white leading-tight">
                {usePortfolio().language === 'en' ? 'Hi, I am' : 'नमस्ते, म हुँ'} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent relative">
                  {personalInfo.name}
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 transition-transform duration-300" />
                </span>
              </h1>
            </div>

            {/* Dynamic Typing Title */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <p className="font-mono text-base sm:text-lg md:text-xl text-primary dark:text-accent font-medium">
                &gt; <span className="mr-1">{typedText}</span>
                <span className="animate-pulse font-bold text-secondary dark:text-accent">|</span>
              </p>
            </div>

            {/* Short Bio Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
              {usePortfolio().language === 'en' 
                ? "A passionate BIT student from Madhesh Province, Nepal, specializing in creating high-performance, futuristic web layouts and applications."
                : "मधेस प्रदेश, नेपालका एक उत्साही BIT विद्यार्थी, जसले उच्च प्रदर्शन र अत्याधुनिक प्रविधिमा आधारित वेब अनुप्रयोगहरू निर्माणमा विशेषज्ञता राख्दछ।"}
            </p>

            {/* Location Pill */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              <MapPin size={16} className="text-primary dark:text-accent" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="hero-download-cv-btn"
                onClick={handleDownloadCV}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:shadow-secondary/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <Download size={18} />
                <span>{t('downloadCv')}</span>
              </button>

              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="px-6 py-3.5 rounded-2xl font-semibold border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-200"
              >
                {t('viewProjects')}
              </a>

              <a
                id="hero-hire-me-btn"
                href="#contact"
                className="px-6 py-3.5 rounded-2xl font-semibold bg-primary/10 hover:bg-primary/20 text-primary dark:text-accent hover:text-primary dark:hover:text-accent transition-all duration-200"
              >
                {t('hireMe')}
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="px-5 py-3.5 rounded-2xl font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-sm transition-all duration-200"
              >
                {t('contactMe')}
              </a>
            </div>
          </div>

          {/* Premium Profile Image Section (Right) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ProfileImageSection />
            
            
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a href="#about" className="flex flex-col items-center group" aria-label="Scroll to About Me">
            <span className="font-mono text-xs text-slate-400 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200 uppercase tracking-widest mb-2">
              Scroll Down
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-400 group-hover:border-primary dark:group-hover:border-accent p-1 flex justify-center transition-colors duration-200">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-primary dark:group-hover:bg-accent transition-colors duration-200"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
