import { 
  EducationItem, 
  SkillItem, 
  StrengthItem, 
  ExperienceItem, 
  ComputerTraining, 
  PersonalInfoRecord, 
  ProjectItem, 
  CertificateItem, 
  AchievementItem, 
  LanguageItem 
} from './types';

export const personalInfo = {
  name: "SHIV YADAV",
  title: {
    en: "Bachelor of Information Technology (BIT) Student",
    np: "सूचना प्रविधिमा स्नातक (BIT) विद्यार्थी"
  },
  tagline: {
    en: "Learning Today, Building Tomorrow.",
    np: "आजको सिकाइ, भोलिको निर्माण।"
  },
  email: "shivydv575@gmail.com",
  phone: "+977-9743626647",
  location: "Pipara-06, Ratauli, Dhanusha, Madhesh Province, Nepal",
  aboutMe: {
    en: "I am Shiv Yadav, currently pursuing a Bachelor of Information Technology (BIT) at Janakpur Community College, affiliated with Purbanchal University. I am passionate about web development, software engineering, and modern technologies. I enjoy solving real-world problems, learning new programming languages, and building responsive web applications. My goal is to become a professional Full Stack Software Developer and contribute to innovative digital solutions.",
    np: "म शिव यादव, हाल पूर्वाञ्चल विश्वविद्यालय सम्बन्धन प्राप्त जनकपुर सामुदायिक कलेजमा सूचना प्रविधिमा स्नातक (BIT) अध्ययन गरिरहेको छु। म वेब विकास, सफ्टवेयर इन्जिनियरिङ र आधुनिक प्रविधिहरूप्रति उत्साहित छु। म वास्तविक-विश्वका समस्याहरू समाधान गर्न, नयाँ प्रोग्रामिङ भाषाहरू सिक्न र उत्तरदायी (responsive) वेब अनुप्रयोगहरू निर्माण गर्न रुचाउँछु। मेरो लक्ष्य एक व्यावसायिक फुल स्ट्याक सफ्टवेयर डेभलपर बन्ने र नवीन डिजिटल समाधानहरूमा योगदान पुर्‍याउने हो।"
  },
  careerObjective: {
    en: "To succeed in an environment of growth and excellence while utilizing my knowledge, technical skills, and creativity to contribute effectively to organizational success and continuously improve myself as a software professional.",
    np: "विकास र उत्कृष्टताको वातावरणमा सफल हुँदै आफ्नो ज्ञान, प्राविधिक सीप र सिर्जनशीलताको प्रयोग गरी संस्थागत सफलतामा प्रभावकारी योगदान पुर्‍याउनु र सफ्टवेयर क्षेत्रमा निरन्तर रूपमा आफ्नो सीप परिमार्जन र सुधार गर्नु मेरो मुख्य उद्देश्य हो।"
  }
};

export const educationList: EducationItem[] = [
  {
    id: "edu-bit",
    degree: {
      en: "Bachelor of Information Technology (BIT)",
      np: "सूचना प्रविधिमा स्नातक (BIT)"
    },
    school: {
      en: "Janakpur Community College (JCC)",
      np: "जनकपुर सामुदायिक कलेज (JCC)"
    },
    location: {
      en: "Janakpurdham, Dhanusha",
      np: "जनकपुरधाम, धनुषा"
    },
    board: {
      en: "Purbanchal University",
      np: "पूर्वाञ्चल विश्वविद्यालय"
    },
    year: {
      en: "Currently Running (3rd Year)",
      np: "हाल अध्ययनरत (तेस्रो वर्ष)"
    }
  },
  {
    id: "edu-neb",
    degree: {
      en: "+2 Management",
      np: "+२ व्यवस्थापन (Management)"
    },
    school: {
      en: "Public Youth Secondary School",
      np: "पब्लिक युथ माध्यमिक विद्यालय"
    },
    location: {
      en: "Janakpurdham-04, Dhanusha",
      np: "जनकपुरधाम-०४, धनुषा"
    },
    board: {
      en: "NEB",
      np: "राष्ट्रिय परीक्षा बोर्ड (NEB)"
    },
    year: {
      en: "Passed Year: 2080 B.S.",
      np: "उत्तीर्ण वर्ष: २०८० वि.सं."
    },
    gpa: {
      en: "GPA: 2.85",
      np: "जीपीए (GPA): २.८५"
    }
  },
  {
    id: "edu-see",
    degree: {
      en: "Secondary Education Examination (SEE)",
      np: "माध्यमिक शिक्षा परीक्षा (SEE)"
    },
    school: {
      en: "Shree Ram Education Foundation Secondary School",
      np: "श्री राम एजुकेशन फाउन्डेशन माध्यमिक विद्यालय"
    },
    location: {
      en: "Pipara-06, Ratauli",
      np: "पिपरा-०६, रटौली"
    },
    board: {
      en: "Government Board of Nepal",
      np: "नेपाल सरकार परीक्षा बोर्ड"
    },
    year: {
      en: "Passed Year: 2077 B.S.",
      np: "उत्तीर्ण वर्ष: २०७७ वि.सं."
    },
    gpa: {
      en: "GPA: 3.75",
      np: "जीपीए (GPA): ३.७५"
    }
  }
];

export const skillsList: SkillItem[] = [
  // Frontend
  { name: "HTML5", percentage: 50, category: "frontend" },
  { name: "CSS3", percentage: 45, category: "frontend" },
  { name: "JavaScript", percentage: 40, category: "frontend" },
  { name: "Responsive Web Design", percentage: 92, category: "frontend" },
  // Backend & Tools
  { name: "PHP", percentage: 35, category: "backend" },
  { name: "MySQL", percentage: 40, category: "backend" },
  { name: "Git", percentage: 40, category: "other" },
  { name: "GitHub", percentage: 40, category: "other" },
  { name: "Microsoft Office", percentage: 80, category: "other" },
  { name: "Computer Applications", percentage: 88, category: "other" },
  // Soft Skills
  { name: "Problem Solving", percentage: 55, category: "other" },
  { name: "Communication", percentage: 80, category: "other" },
  { name: "Teamwork", percentage: 92, category: "other" },
  { name: "Leadership", percentage: 80, category: "other" },
  { name: "Time Management", percentage: 88, category: "other" }
];

export const strengthsList: StrengthItem[] = [
  { id: "str-comm", title: { en: "Good Communication", np: "राम्रो सञ्चार सीप" }, iconName: "MessageSquare" },
  { id: "str-lead", title: { en: "Leadership Skills", np: "नेतृत्व क्षमता" }, iconName: "ShieldAlert" },
  { id: "str-learn", title: { en: "Quick Learner", np: "छिटो सिक्न सक्ने" }, iconName: "Zap" },
  { id: "str-creative", title: { en: "Creative Thinker", np: "सिर्जनशील विचार" }, iconName: "Lightbulb" },
  { id: "str-reliable", title: { en: "Reliable", np: "विश्वासिलो" }, iconName: "Award" },
  { id: "str-responsible", title: { en: "Responsible", np: "जिम्मेवार" }, iconName: "CheckCircle" },
  { id: "str-hardwork", title: { en: "Hard Working", np: "मेहनती" }, iconName: "Target" },
  { id: "str-team", title: { en: "Team Player", np: "समूहमा काम गर्न सक्ने" }, iconName: "Users" },
  { id: "str-positive", title: { en: "Positive Attitude", np: "सकारात्मक दृष्टिकोण" }, iconName: "Smile" },
  { id: "str-adaptable", title: { en: "Adaptable to New Tech", np: "नयाँ प्रविधिमा अनुकूलन हुन सक्ने" }, iconName: "TrendingUp" },
  { id: "str-pressure", title: { en: "Ability to Work Under Pressure", np: "दबाबमा काम गर्न सक्ने क्षमता" }, iconName: "Clock" },
  { id: "str-decision", title: { en: "Decision Making", np: "निर्णय लिने क्षमता" }, iconName: "Scale" }
];

export const experienceData: ExperienceItem = {
  status: {
    en: "Fresher",
    np: "प्रवेशक (Fresher)"
  },
  description: {
    en: "Currently building academic and personal projects to strengthen practical experience in Full Stack Web Development and software engineering.",
    np: "फुल स्ट्याक वेब विकास र सफ्टवेयर इन्जिनियरिङमा व्यावहारिक अनुभव बलियो बनाउन हाल विभिन्न शैक्षिक र व्यक्तिगत परियोजनाहरू निर्माण गर्दैछु।"
  }
};

export const computerTrainingData: ComputerTraining = {
  title: {
    en: "Diploma in Computer Application",
    np: "कम्प्युटर एप्लिकेसनमा डिप्लोमा (DCA)"
  },
  duration: {
    en: "3 Months",
    np: "३ महिना"
  },
  institute: {
    en: "Grand Computer & Language Center",
    np: "ग्रान्ड कम्प्युटर एण्ड ल्याङ्ग्वेज सेन्टर"
  },
  location: {
    en: "Janakpur Dham",
    np: "जनकपुरधाम"
  }
};

export const personalInfoRecords: PersonalInfoRecord[] = [
  { label: { en: "Father's Name", np: "बुबाको नाम" }, value: { en: "Mr. Ram Drash Yadav", np: "श्री राम द्राश यादव" }, iconName: "User" },
  { label: { en: "Mother's Name", np: "आमाको नाम" }, value: { en: "Mrs. Bina Devi Yadav", np: "श्रीमती बिना देवी यादव" }, iconName: "User" },
  { label: { en: "Religion", np: "धर्म" }, value: { en: "Hindu", np: "हिन्दू" }, iconName: "Heart" },
  { label: { en: "Nationality", np: "राष्ट्रियता" }, value: { en: "Nepali", np: "नेपाली" }, iconName: "Flag" },
  { label: { en: "Gender", np: "लिङ्ग" }, value: { en: "Male", np: "पुरुष" }, iconName: "User" },
  { label: { en: "Marital Status", np: "वैवाहिक स्थिति" }, value: { en: "Unmarried", np: "अविवाहित" }, iconName: "Heart" },
  { label: { en: "Height", np: "उचाइ" }, value: { en: "5'2\"", np: "५ फिट २ इन्च" }, iconName: "TrendingUp" },
  { label: { en: "Date of Birth", np: "जन्ममिति" }, value: { en: "B.S. 2060/06/15 (A.D. 02 Oct 2003)", np: "वि.सं. २०६०/०६/१५ (A.D. ०२ अक्टोबर २००३)" }, iconName: "Calendar" },
  { label: { en: "Address", np: "ठेगाना" }, value: { en: "Pipara-06, Ratauli, Dhanusha, Nepal", np: "पिपरा-०६, रटौली, धनुषा, नेपाल" }, iconName: "MapPin" },
  { label: { en: "Citizenship Number", np: "नागरिकता नम्बर" }, value: { en: "18-01-79-05563", np: "१८-०१-७९-०५५६३" }, iconName: "CreditCard" }
];

export const hobbiesList = [
  { id: "hob-travel", name: { en: "Travelling", np: "यात्रा गर्ने" }, iconName: "Compass" },
  { id: "hob-books", name: { en: "Reading Books", np: "पुस्तकहरू पढ्ने" }, iconName: "BookOpen" },
  { id: "hob-tech", name: { en: "Learning New Technologies", np: "नयाँ प्रविधिहरू सिक्ने" }, iconName: "Cpu" },
  { id: "hob-solve", name: { en: "Problem Solving", np: "समस्या समाधान गर्ने" }, iconName: "Code" },
  { id: "hob-explore", name: { en: "Exploring New Places", np: "नयाँ ठाउँहरू घुम्ने" }, iconName: "Map" }
];

export const languagesProficiency: LanguageItem[] = [
  { name: { en: "English", np: "अंग्रेजी" }, percentage: 85 },
  { name: { en: "Nepali", np: "नेपाली" }, percentage: 95 },
  { name: { en: "Maithili", np: "मैथिली" }, percentage: 100 },
  { name: { en: "Hindi", np: "हिन्दी" }, percentage: 90 }
];

export const projectsList: ProjectItem[] = [
  {
    id: "proj-sms",
    title: { en: "Student Management System", np: "विद्यार्थी व्यवस्थापन प्रणाली" },
    description: {
      en: "A comprehensive digital administrative platform designed for colleges to manage student records, attendances, grades, and enrollments smoothly.",
      np: "कलेज र शैक्षिक संस्थाहरूका लागि विद्यार्थीहरूको रेकर्ड, उपस्थिति, ग्रेड, र भर्ना प्रक्रिया सहज रूपमा व्यवस्थापन गर्न डिजाइन गरिएको एक डिजिटल प्रणाली।"
    },
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/shivydv575/student-management-system",
    liveUrl: "https://github.com/shivydv575",
    badge: { en: "Academic Project", np: "शैक्षिक परियोजना" },
    imagePlaceholder: "linear-gradient(135deg, #1e3a8a, #3b82f6)"
  },
  {
    id: "proj-portfolio",
    title: { en: "Portfolio Website", np: "व्यक्तिगत पोर्टफोलियो वेबसाइट" },
    description: {
      en: "This current premium, futuristic personal portfolio displaying full information, vertical timelines, skills, certifications, and high visual aesthetics.",
      np: "यो वर्तमान प्रिमियम, भविष्यवादी व्यक्तिगत पोर्टफोलियो वेबसाइट जसमा विस्तृत जानकारी, शैक्षिक समयरेखा, सीपहरू, र प्रमाणपत्रहरू प्रदर्शन गरिएको छ।"
    },
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/shivydv575/premium-portfolio",
    liveUrl: "https://shivydv575.github.io",
    badge: { en: "Featured", np: "विशेष परियोजना" },
    imagePlaceholder: "linear-gradient(135deg, #4c1d95, #7c3aed)"
  },
  {
    id: "proj-fwa",
    title: { en: "Full Stack Web Application", np: "फुल स्ट्याक वेब अनुप्रयोग" },
    description: {
      en: "A robust scalable web application showcasing clean separation of frontend layouts and backend relational database management with complete session support.",
      np: "पूर्ण सेसन सपोर्ट र रिलायबल डाटाबेस व्यवस्थापन सहित फ्रन्टएन्ड र ब्याकएन्डको स्पष्ट पृथकीकरण प्रदर्शन गर्ने एक मजबुत वेब अनुप्रयोग।"
    },
    techStack: ["JavaScript", "React", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shivydv575/fullstack-app",
    liveUrl: "https://github.com/shivydv575",
    badge: { en: "Personal Project", np: "व्यक्तिगत परियोजना" },
    imagePlaceholder: "linear-gradient(135deg, #0f766e, #0d9488)"
  },
  {
    id: "proj-ecommerce",
    title: { en: "E-Commerce System", np: "ई-कमर्स अनलाइन प्रणाली" },
    description: {
      en: "An interactive online marketplace prototype featuring product listings, detailed descriptions, custom shopping cart logic, and simple checkout simulations.",
      np: "सामग्रीहरूको सूची, विस्तृत विवरणहरू, सपिङ कार्ट तर्क, र चेकआउट सिमुलेसनहरू समावेश भएको एक ई-कमर्स अनलाइन बजार प्रोटोटाइप।"
    },
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/shivydv575/ecommerce-system",
    liveUrl: "https://github.com/shivydv575",
    badge: { en: "Database Project", np: "डाटाबेस परियोजना" },
    imagePlaceholder: "linear-gradient(135deg, #831843, #db2777)"
  },
  {
    id: "proj-future",
    title: { en: "Future Mobile Application", np: "भविष्यको मोबाइल अनुप्रयोग" },
    description: {
      en: "A planned cross-platform mobile application concept aimed at bridging resource access gaps for local IT students and tech communities in Madhesh Province.",
      np: "मधेस प्रदेशका स्थानीय सूचना प्रविधि विद्यार्थी र प्राविधिक समुदायहरूका लागि स्रोत पहुँचको दूरी कम गर्ने लक्ष्य राखिएको एक मोबाइल अनुप्रयोग योजना।"
    },
    techStack: ["React Native", "TypeScript", "Tailwind CSS", "API Integration"],
    githubUrl: "https://github.com/shivydv575",
    badge: { en: "Coming Soon", np: "चाँडै आउँदैछ" },
    imagePlaceholder: "linear-gradient(135deg, #111827, #374151)"
  }
];

export const certificatesList: CertificateItem[] = [
  {
    id: "cert-dca",
    title: { en: "Diploma in Computer Application", np: "कम्प्युटर एप्लिकेसनमा डिप्लोमा (DCA)" },
    organization: { en: "Grand Computer & Language Center", np: "ग्रान्ड कम्प्युटर एण्ड ल्याङ्ग्वेज सेन्टर" },
    issueDate: { en: "2081 B.S.", np: "२०८१ वि.सं." },
    skills: ["Microsoft Word", "Excel", "PowerPoint", "Computer Basics", "Database Concepts"],
    category: { en: "Diploma", np: "डिप्लोमा" },
    viewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "cert-wd",
    title: { en: "Web Development Training Certificate", np: "वेब विकास तालिम प्रमाणपत्र" },
    organization: { en: "Janakpur Community College - Tech Club", np: "जनकपुर सामुदायिक कलेज - टेक क्लब" },
    issueDate: { en: "2082 B.S.", np: "२०८२ वि.सं." },
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Responsive Design"],
    category: { en: "Web Development", np: "वेब विकास" },
    viewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "cert-git",
    title: { en: "Git & GitHub Version Control Mastery", np: "गिट र गिटहब संस्करण नियन्त्रण" },
    organization: { en: "Janakpur Community College - IT Department", np: "जनकपुर सामुदायिक कलेज - आईटी विभाग" },
    issueDate: { en: "2082 B.S.", np: "२०८२ वि.सं." },
    skills: ["Git", "GitHub", "Branching", "Collaborative Workflows"],
    category: { en: "Software Engineering", np: "सफ्टवेयर इन्जिनियरिङ" },
    viewUrl: "#",
    downloadUrl: "#"
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: "ach-1",
    title: { en: "Outstanding SEE Merit", np: "उत्कृष्ट SEE योग्यता" },
    category: "academic",
    description: {
      en: "Scored 3.75 GPA in SEE at Shree Ram Education Foundation Secondary School.",
      np: "श्री राम एजुकेशन फाउन्डेशन माध्यमिक विद्यालयबाट माध्यमिक शिक्षा परीक्षा (SEE) मा ३.७५ जीपीए (GPA) प्राप्त।"
    }
  },
  {
    id: "ach-2",
    title: { en: "Grand DCA Honors", np: "ग्रान्ड DCA सम्मान" },
    category: "academic",
    description: {
      en: "Graduated top of the class with Excellence Award in Diploma in Computer Application (DCA) at Grand Computer Center.",
      np: "ग्रान्ड कम्प्युटर सेन्टरमा कम्प्युटर एप्लिकेसनमा डिप्लोमा (DCA) उत्कृष्ट श्रेणीमा प्रथम स्थान प्राप्त।"
    }
  },
  {
    id: "ach-3",
    title: { en: "IT Student Leadership", np: "सूचना प्रविधि विद्यार्थी नेतृत्व" },
    category: "leadership",
    description: {
      en: "Active representative and workshop host for tech clubs and seminars at Janakpur Community College.",
      np: "जनकपुर सामुदायिक कलेजमा प्राविधिक क्लब र सेमिनारहरूका लागि सक्रिय प्रतिनिधि र कार्यशाला संयोजक।"
    }
  },
  {
    id: "ach-4",
    title: { en: "Academic Tech Projects Contribution", np: "शैक्षिक प्रविधि परियोजना योगदान" },
    category: "community",
    description: {
      en: "Developed multiple open-source academic management tools shared with junior cohorts for peer learning.",
      np: "सहपाठी र जुनियर समूहको सिकाइमा मद्दत पुर्‍याउन विभिन्न शैक्षिक व्यवस्थापन प्रविधि निर्माण र योगदान।"
    }
  },
  {
    id: "ach-5",
    title: { en: "Purbanchal University Hackathon Participant", np: "पूर्वाञ्चल विश्वविद्यालय ह्याकाथन" },
    category: "community",
    description: {
      en: "Represented Janakpur Community College in regional innovation hackathons, pitching web-based local solutions.",
      np: "जनकपुर सामुदायिक कलेजको प्रतिनिधित्व गर्दै क्षेत्रीय नवीनता ह्याकाथनमा सहभागिता र स्थानीय समस्याको डिजिटल समाधान प्रस्तुत।"
    }
  },
  {
    id: "ach-6",
    title: { en: "Future Certifications Goal", np: "भविष्यको प्रमाणपत्र लक्ष्यहरू" },
    category: "future",
    description: {
      en: "Preparing for industry-standard professional certifications including AWS Cloud Practitioner and Full Stack Certifications.",
      np: "AWS क्लाउड प्राक्टिसनर र व्यावसायिक फुल स्ट्याक इन्जिनियरिङ जस्ता अन्तर्राष्ट्रिय प्रमाणपत्रहरूको तयारी योजना।"
    }
  }
];

export const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navEducation: "Education",
    navSkills: "Skills",
    navProjects: "Projects",
    navCertificates: "Certificates",
    navContact: "Contact",
    
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    hireMe: "Hire Me",
    contactMe: "Contact Me",
    
    aboutTitle: "About Me",
    aboutIntro: "Who is Shiv Yadav?",
    careerObjectiveTitle: "Career Objective",
    
    eduTitle: "Educational Timeline",
    eduSubtitle: "Academic Background",
    gpaLabel: "GPA",
    passedYearLabel: "Passed Year",
    boardLabel: "Board",
    universityLabel: "University",
    statusLabel: "Status",
    
    skillsTitle: "Technical Skills",
    skillsSubtitle: "My Tech Toolkit",
    strengthsTitle: "Key Strengths",
    strengthsSubtitle: "What I Bring to the Table",
    languagesTitle: "Language Proficiency",
    languagesSubtitle: "Multilingual Capability",
    
    expTitle: "Professional Experience",
    expSubtitle: "Journey so far",
    trainingTitle: "Computer Training",
    trainingSubtitle: "Certifications",
    durationLabel: "Duration",
    instituteLabel: "Institute",
    locationLabel: "Location",
    
    personalTitle: "Personal Profile",
    personalSubtitle: "About My Background",
    hobbiesTitle: "Hobbies & Interests",
    hobbiesSubtitle: "What I enjoy doing",
    
    projectsTitle: "Showcase Projects",
    projectsSubtitle: "Academic & Personal Creations",
    searchProjPlaceholder: "Search projects by technology or title...",
    allProjects: "All Projects",
    viewGithub: "View Code",
    liveDemo: "Live Demo",
    
    certTitle: "Professional Certifications",
    certSubtitle: "Validating My Competence",
    searchCertPlaceholder: "Search certificates...",
    allCategories: "All Categories",
    viewCert: "View Certificate",
    downloadCert: "Download PDF",
    certStats: "Certifications Statistics",
    totalCert: "Total Certifications",
    completedCat: "Completed Categories",
    issueDateLabel: "Issued Date",
    skillsLearned: "Skills Validated",
    
    achTitle: "Key Accomplishments",
    achSubtitle: "Achievements & Contributions",
    achAcademic: "Academic",
    achLeadership: "Leadership & Activities",
    achCommunity: "Community & Hackathons",
    achFuture: "Future Milestones",
    
    contactTitle: "Get In Touch",
    contactSubtitle: "Let's connect and discuss opportunities",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactSubject: "Subject",
    contactMessage: "Your Message",
    sending: "Sending Message...",
    sendSuccess: "Thank you! Your message was simulated & sent successfully.",
    sendError: "Error sending message. Please try again.",
    sendBtn: "Send Message",
    contactInfo: "Contact Information",
    findMe: "Find Me on Google Maps",
    
    footerTagline: "Bachelor of Information Technology Student",
    footerCopyright: "All rights reserved. Designed & Developed with ❤️ by Shiv Yadav.",
    footerLocation: "Pipara-06, Ratauli, Dhanusha, Nepal"
  },
  np: {
    navHome: "गृहपृष्ठ",
    navAbout: "बारेमा",
    navEducation: "शिक्षा",
    navSkills: "सीपहरू",
    navProjects: "परियोजनाहरू",
    navCertificates: "प्रमाणपत्रहरू",
    navContact: "सम्पर्क",
    
    viewProjects: "परियोजनाहरू हेर्नुहोस्",
    downloadCv: "बायोडाटा (CV)",
    hireMe: "काम दिनुहोस्",
    contactMe: "सम्पर्क गर्नुहोस",
    
    aboutTitle: "मेरो बारेमा",
    aboutIntro: "शिव यादव को हुन्?",
    careerObjectiveTitle: "करियरको उद्देश्य",
    
    eduTitle: "शैक्षिक समयरेखा",
    eduSubtitle: "शैक्षिक पृष्ठभूमि र योग्यता",
    gpaLabel: "जीपीए (GPA)",
    passedYearLabel: "उत्तीर्ण वर्ष",
    boardLabel: "बोर्ड",
    universityLabel: "विश्वविद्यालय",
    statusLabel: "स्थिति",
    
    skillsTitle: "प्राविधिक सीपहरू",
    skillsSubtitle: "मेरो प्रविधि ज्ञान",
    strengthsTitle: "प्रमुख सबल पक्षहरू",
    strengthsSubtitle: "मेरा व्यक्तिगत विशेषताहरू",
    languagesTitle: "भाषा दक्षता",
    languagesSubtitle: "बहुभाषिक क्षमता",
    
    expTitle: "व्यावसायिक अनुभव",
    expSubtitle: "हालसम्मको यात्रा",
    trainingTitle: "कम्प्युटर तालिम",
    trainingSubtitle: "तालिम प्रमाणपत्रहरू",
    durationLabel: "अवधि",
    instituteLabel: "संस्था",
    locationLabel: "स्थान",
    
    personalTitle: "व्यक्तिगत विवरण",
    personalSubtitle: "पृष्ठभूमि र जानकारी",
    hobbiesTitle: "रुचि र शौकहरू",
    hobbiesSubtitle: "मलाई मनपर्ने कार्यहरू",
    
    projectsTitle: "परियोजना प्रदर्शनी",
    projectsSubtitle: "शैक्षिक र व्यक्तिगत सिर्जनाहरू",
    searchProjPlaceholder: "प्रविधि वा शीर्षक द्वारा खोज्नुहोस्...",
    allProjects: "सबै परियोजनाहरू",
    viewGithub: "कोड हेर्नुहोस्",
    liveDemo: "डेमो हेर्नुहोस्",
    
    certTitle: "व्यावसायिक प्रमाणपत्रहरू",
    certSubtitle: "मेरो सीपको प्रमाणीकरण",
    searchCertPlaceholder: "प्रमाणपत्र खोज्नुहोस्...",
    allCategories: "सबै विधाहरू",
    viewCert: "प्रमाणपत्र हेर्नुहोस्",
    downloadCert: "पीडीएफ डाउनलोड",
    certStats: "प्रमाणपत्र तथ्याङ्क",
    totalCert: "जम्मा प्रमाणपत्र",
    completedCat: "तालिमका विधाहरू",
    issueDateLabel: "जारी मिति",
    skillsLearned: "प्रमाणित सीपहरू",
    
    achTitle: "मुख्य उपलब्धिहरू",
    achSubtitle: "पुरस्कार र सहभागिताहरू",
    achAcademic: "शैक्षिक",
    achLeadership: "नेतृत्व र गतिविधिहरू",
    achCommunity: "समुदाय र ह्याकाथन",
    achFuture: "भविष्यका लक्ष्यहरू",
    
    contactTitle: "सम्पर्क गर्नुहोस्",
    contactSubtitle: "अवसरहरू र सहकार्यको लागि जोडिनुहोस्",
    contactName: "तपाईंको नाम",
    contactEmail: "तपाईंको इमेल",
    contactSubject: "विषय",
    contactMessage: "तपाईंको सन्देश",
    sending: "सन्देश पठाउँदै...",
    sendSuccess: "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।",
    sendError: "सन्देश पठाउन त्रुटि भयो। फेरि प्रयास गर्नुहोस्।",
    sendBtn: "सन्देश पठाउनुहोस्",
    contactInfo: "सम्पर्क विवरण",
    findMe: "गुगल म्यापमा मलाई खोज्नुहोस्",
    
    footerTagline: "सूचना प्रविधिमा स्नातक विद्यार्थी",
    footerCopyright: "सर्वाधिकार सुरक्षित। शिव यादवद्वारा ❤️ का साथ डिजाइन र विकसित।",
    footerLocation: "पिपरा-०६, रटौली, धनुषा, नेपाल"
  }
};
