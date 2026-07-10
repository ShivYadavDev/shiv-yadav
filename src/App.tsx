import { useState, useEffect } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import ExperienceAndTraining from './components/ExperienceAndTraining';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Sparkles, Terminal, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function PortfolioContent() {
  const { darkMode } = usePortfolio();
  
  // Custom Cursor state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Loading Screen state
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [bootMessage, setBootMessage] = useState('Initializing system...');

  useEffect(() => {
    // Check if device is mobile to disable custom cursor
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Mouse positional tracker
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Detect clickable hover states for cursor size adjustment
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea');
      setCursorHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // System Bootloader Simulation
  useEffect(() => {
    const bootPhrases = [
      'Loading core packages...',
      'Mapping technical skills...',
      'Retrieving certificates...',
      'Bootstrapping glassmorphism design...',
      'Shiv Yadav Portfolio is online!'
    ];

    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 8) + 4;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
      setLoadPercent(currentPercent);

      // Change boot messages along with percentage milestones
      const phraseIdx = Math.min(
        Math.floor((currentPercent / 100) * bootPhrases.length),
        bootPhrases.length - 1
      );
      setBootMessage(bootPhrases[phraseIdx]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 1. Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            id="boot-loading-screen"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white"
          >
            <div className="text-center max-w-sm w-full px-6 space-y-6">
              
              {/* Spinning futuristic emblem */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center bg-gradient-to-tr from-primary to-accent p-0.5 rounded-2xl shadow-xl shadow-primary/25 animate-float">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Terminal size={28} className="text-accent animate-pulse" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-accent blur-md opacity-40 animate-ping -z-10" />
              </div>

              {/* Progress counter */}
              <div className="space-y-2">
                <h2 className="font-display font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  SYSTEM BOOT
                </h2>
                <p className="font-mono text-xs text-slate-500 tracking-wider">
                  {bootMessage}
                </p>
              </div>

              {/* Outer load bar track */}
              <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden relative">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
                  style={{ width: `${loadPercent}%` }}
                />
              </div>

              <span className="font-mono text-sm font-bold text-slate-400 block mt-2">
                {loadPercent}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Custom lag-cursor dot (Only on desktop and when loaded) */}
      {!isMobile && !loading && (
        <div className="hidden lg:block">
          {/* Central precise pointer dot */}
          <div 
            id="cursor-pointer-dot"
            className="fixed w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
          />
          {/* Lagging outer glowing aura circle */}
          <div 
            id="cursor-pointer-ring"
            className={`fixed rounded-full border border-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
              cursorHovered 
                ? 'w-14 h-14 bg-primary/10 border-accent/80 rotate-45' 
                : 'w-8 h-8 bg-transparent border-primary/40'
            }`}
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
          />
        </div>
      )}

      {/* 3. Mouse positional ambient glow back-layer (Only on desktop) */}
      {!isMobile && (
        <div 
          id="mouse-radial-glow"
          className="fixed pointer-events-none w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 mix-blend-screen z-[1] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
          style={{ 
            left: `${mousePos.x}px`, 
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(6, 182, 212, 0) 70%)'
          }}
        />
      )}

      {/* 4. Portfolio Main Shell Layout */}
      <div className={`min-h-screen relative flex flex-col justify-between ${
        !isMobile ? 'custom-cursor-active' : ''
      } ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}>
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Timeline />
          <Skills />
          <ExperienceAndTraining />
          <PersonalInfo />
          <Projects />
          <Certificates />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
