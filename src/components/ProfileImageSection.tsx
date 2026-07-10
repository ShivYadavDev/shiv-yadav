import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Sparkles, GraduationCap, Building2, User } from 'lucide-react';

interface FloatingIconProps {
  name: string;
  color: string;
  bgColor: string;
  delay: number;
  xOffset: string;
  yOffset: string;
  iconSvg: React.ReactNode;
}

export default function ProfileImageSection() {
  const [imgSrc, setImgSrc] = useState<string>('/shiv_porfile.png');
  const [hasError, setHasError] = useState<boolean>(false);
  const [retryWithJpg, setRetryWithJpg] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<'internship' | 'opportunities'>('internship');

  // Alternate status badge text periodically for dynamic feel
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusText(prev => prev === 'internship' ? 'opportunities' : 'internship');
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = () => {
    if (!retryWithJpg) {
      setRetryWithJpg(true);
      setImgSrc('/profile.jpg');
    } else {
      setHasError(true);
    }
  };

  // Allow live upload in the preview to replace profile picture dynamically
  const handleLiveUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgSrc(url);
      setHasError(false);
    }
  };

  // Tech Icons SVG paths
  const techIcons: FloatingIconProps[] = [
    {
      name: 'HTML5',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10 border-orange-500/20',
      delay: 0,
      xOffset: '-left-4',
      yOffset: 'top-4',
      iconSvg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.03 8H6.82l.266 3h11.18l-.551 6.208L12 18.674l-5.715-1.466-.375-4.208h3l.188 2.104L12 15.83l2.902-.746.313-3.516H6.18l-.531-6h13.14l-.259 2.333z"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      delay: 0.8,
      xOffset: '-left-8',
      yOffset: 'top-1/2 -translate-y-1/2',
      iconSvg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.03 8l-.256-3H5.1l.53 6h11.18l-.551 6.208L12 18.674l-5.715-1.466-.375-4.208h3l.188 2.104L12 15.83l2.902-.746.313-3.516H8.977l-.266-3h8.339z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10 border-yellow-500/20',
      delay: 1.5,
      xOffset: '-left-2',
      yOffset: 'bottom-4',
      iconSvg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.017-.762-1.841-2.826-2.616-.927-.344-1.861-.623-1.861-1.153 0-.466.393-.741.951-.741.549 0 .88.187 1.202.553.137.154.22.284.428.284.324 0 .524-.22.524-.515 0-.58-.604-.982-1.555-.982-1.35 0-2.22.751-2.22 1.741 0 1.082.88 1.526 2.11 1.977.843.311 1.482.516 1.482 1.102 0 .504-.462.828-1.125.828-.708 0-1.194-.285-1.513-.742-.175-.25-.324-.344-.512-.344-.293 0-.482.22-.482.539 0 .307.162.55.342.75 1.057 1.218 2.762 1.13 3.659.333.393-.348.623-.885.502-1.706zm-11.453-4.14h-.13c-.152-.405-.482-.67-.938-.67-.549 0-.911.393-.911 1.341v1.892c0 .942.362 1.346.911 1.346.431 0 .762-.25.926-.641h.136c-.056.885-.013 1.393.109 1.83.07.25.228.352.443.352.3 0 .482-.204.482-.516V11.232c0-.306-.182-.515-.482-.515-.224 0-.373.111-.443.351-.12.428-.163.922-.109 1.834z"/>
        </svg>
      )
    },
    {
      name: 'React',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10 border-cyan-400/20',
      delay: 2.2,
      xOffset: 'right-12',
      yOffset: '-top-6',
      iconSvg: (
        <svg className="w-5 h-5 fill-current animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24">
          <path d="M24 10.5c0-.42-.14-.82-.41-1.15.27-.33.41-.73.41-1.15 0-.91-.65-1.74-1.63-2.11-1.13-.43-2.61-.43-3.96-.02C17.06 2.45 15.02.5 12.7.5c-.83 0-1.61.26-2.22.75-.61-.49-1.39-.75-2.22-.75-2.32 0-4.36 1.95-5.71 5.57-1.35-.41-2.83-.41-3.96.02C.59 6.46 0 7.29 0 8.2c0 .42.14.82.41 1.15C.14 9.68 0 10.08 0 10.5c0 .91.65 1.74 1.63 2.11 1.13.43 2.61.43 3.96.02C6.94 16.25 8.98 18.2 11.3 18.2c.83 0 1.61-.26 2.22-.75.61.49 1.39.75 2.22.75 2.32 0 4.36-1.95 5.71-5.57 1.35.41 2.83.41 3.96-.02.98-.37 1.63-1.2 1.63-2.11zm-12.7 6.2c-1.35 0-2.58-.68-3.41-1.83a8.9 8.9 0 0 1-1.54-5.37 8.9 8.9 0 0 1 1.54-5.37c.83-1.15 2.06-1.83 3.41-1.83s2.58.68 3.41 1.83a8.9 8.9 0 0 1 1.54 5.37 8.9 8.9 0 0 1-1.54 5.37c-.83 1.15-2.06 1.83-3.41 1.83z"/>
        </svg>
      )
    },
    {
      name: 'PHP',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10 border-indigo-400/20',
      delay: 0.5,
      xOffset: '-right-4',
      yOffset: 'top-6',
      iconSvg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.1 14.4h-1.2l-.3 1.5h-1.4l.3-1.5H13l-.3 1.5h-1.4l.3-1.5H8.7l-.3 1.5H7l.3-1.5H6v-1.2h1.5l.3-1.5H6.3v-1.2h1.8l.3-1.5h1.4l-.3 1.5h1.5l.3-1.5h1.4l-.3 1.5h1.5l.3-1.5h1.4l-.3 1.5h1.1v1.2h-1.3l-.3 1.5h1.2v1.2zm-4.2-1.5l.3-1.5h-1.5l-.3 1.5h1.5z"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10 border-sky-500/20',
      delay: 1.2,
      xOffset: '-right-8',
      yOffset: 'top-1/2 -translate-y-1/2',
      iconSvg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.8 15.6v-7.2l3.6 3.6-3.6 3.6z"/>
        </svg>
      )
    },
    {
      name: 'Git',
      color: 'text-orange-600',
      bgColor: 'bg-orange-600/10 border-orange-600/20',
      delay: 1.9,
      xOffset: '-right-2',
      yOffset: 'bottom-4',
      iconSvg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.546 10.93L13.07.45a1.44 1.44 0 0 0-2.036 0L8.14 3.344l2.84 2.84a1.446 1.446 0 0 1 1.764 1.76l2.88 2.88a1.452 1.452 0 1 1-.58 2.37l-2.88-2.88a1.446 1.446 0 0 1-1.748-.093l-2.454 2.454a1.455 1.455 0 1 1-.84-.4l2.44-2.44a1.442 1.442 0 0 1 .094-1.76l-2.84-2.84L.454 13.065a1.44 1.44 0 0 0 0 2.036l10.476 10.476a1.44 1.44 0 0 0 2.036 0l10.58-10.58a1.444 1.444 0 0 0 0-2.036z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      color: 'text-slate-400',
      bgColor: 'bg-slate-400/10 border-slate-400/20',
      delay: 2.5,
      xOffset: 'left-12',
      yOffset: '-bottom-6',
      iconSvg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center justify-center select-none"
    >
      {/* 1. Interactive Soft Radial Ambient Glow */}
      <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 blur-[90px] -z-10 animate-pulse pointer-events-none" />

      {/* 2. Floating technology icons container */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {techIcons.map((tech) => (
          <motion.div
            key={tech.name}
            className={`absolute ${tech.xOffset} ${tech.yOffset} p-2.5 rounded-2xl border ${tech.bgColor} ${tech.color} shadow-lg backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 pointer-events-auto cursor-help`}
            title={tech.name}
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tech.delay
            }}
          >
            {tech.iconSvg}
          </motion.div>
        ))}
      </div>

      {/* 3. Outer orbiting rings */}
      <div className="absolute w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-primary/20 animate-[spin_60s_linear_infinite] -z-10" />
      <div className="absolute w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border border-double border-secondary/10 animate-[spin_40s_linear_infinite_reverse] -z-10" />

      {/* 4. Glassmorphic Outer Profile Image Frame Wrapper */}
      <div className="relative group p-1.5 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent shadow-2xl transition-all duration-500 hover:shadow-primary/30 hover:scale-[1.03]">
        
        {/* Glowing aura ring animation around profile photo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500 -z-10" />

        {/* Central Masking Circle for Portrait Photo */}
        <div className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] rounded-full overflow-hidden bg-slate-900 dark:bg-slate-950 flex items-center justify-center">
          
          {!hasError ? (
            <img 
              id="portfolio-hero-profile-image"
              src={imgSrc} 
              alt="Shiv Yadav Portrait Photo" 
              onError={handleImageError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            /* Premium Fallback Design */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent p-0.5 flex items-center justify-center shadow-lg shadow-primary/25 mb-3">
                <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center font-display font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  SY
                </div>
              </div>

              <span className="font-display font-black text-sm uppercase tracking-widest text-white">
                Shiv Yadav
              </span>
              
              <label 
                htmlFor="live-profile-uploader" 
                className="mt-3 cursor-pointer px-4 py-1.5 rounded-full text-[11px] font-mono font-bold bg-primary/20 hover:bg-primary border border-primary/30 hover:border-transparent text-primary hover:text-white transition-all duration-150 inline-flex items-center space-x-1.5 shadow-sm active:scale-95"
              >
                <span>Upload Profile Photo</span>
              </label>
              <input 
                id="live-profile-uploader"
                type="file" 
                accept="image/*"
                onChange={handleLiveUpload}
                className="hidden"
              />
            </div>
          )}

          {/* 5. Custom Overlay hover shade */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* 6. Dynamic Internship / Career Status Badge (floating on bottom-right overlay edge) */}
        <div className="absolute -bottom-1 -right-1 z-30 flex items-center bg-slate-950/90 dark:bg-slate-900/95 border border-slate-800 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl">
          <span className="flex h-2.5 w-2.5 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest whitespace-nowrap animate-pulse">
            {statusText === 'internship' ? 'Available for Internship' : 'Open to Opportunities'}
          </span>
        </div>
      </div>

      {/* 7. Professional Details card stacked right under the photo */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="flex items-center justify-center space-x-1">
          <h2 className="font-display font-black text-2xl tracking-tight text-slate-800 dark:text-white">
            Shiv Yadav
          </h2>
          <Sparkles size={16} className="text-accent animate-pulse" />
        </div>
        
        <p className="mt-1 font-sans font-semibold text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center space-x-1.5">
          <GraduationCap size={15} className="text-primary" />
          <span>Bachelor of Information Technology (BIT) Student</span>
        </p>

        <div className="mt-1 text-xs text-slate-400 dark:text-slate-500 font-medium space-y-1">
          <div className="flex items-center justify-center space-x-1">
            <Building2 size={13} className="text-secondary" />
            <span>Janakpur Community College</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span className="font-mono text-[9px] uppercase tracking-wider bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-1.5 py-0.5 rounded text-slate-400">PU</span>
            <span>Purbanchal University</span>
          </div>
          <div className="flex items-center justify-center space-x-1 pt-1 font-mono text-[10px] uppercase text-primary tracking-widest">
            <MapPin size={12} className="text-accent shrink-0" />
            <span>Dhanusha, Nepal</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
