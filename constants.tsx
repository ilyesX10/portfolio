
import { EducationItem, SkillItem, Language, ProjectItem } from './types.ts';

// Asset paths - using direct image link for Google Drive to ensure visibility
export const PROFILE_IMAGE = "https://lh3.googleusercontent.com/d/1vRCJLWBIHtvx9Bc8F5AEkt8XltzsS0bw"; 
export const CV_PATH = "https://drive.google.com/file/d/1ATl9ObOXj3aryk1AqOVz4hi81oPaCsD3/view";

export const EDUCATION_ROADMAP: EducationItem[] = [
  {
    id: 'bac-2018',
    year: '2018',
    title: {
      en: 'Baccalaureate',
      fr: 'Baccalauréat',
      ar: 'شهادة البكالوريا'
    },
    institution: {
      en: 'National Education Ministry',
      fr: 'Ministère de l\'Éducation Nationale',
      ar: 'وزارة التربية الوطنية'
    },
    description: {
      en: 'Series: Experimental Sciences. Obtained with "Bien" mention. This certificate allowed entry into the Computer Science stream.',
      fr: 'Série : Sciences Expérimentales. Obtenu avec mention "Bien". Ce certificat a permis l\'accès à la filière Informatique.',
      ar: 'شعبة العلوم التجريبية. متحصل عليها بتقدير "قريب من الجيد". سمحت لي هذه الشهادة بالالتحاق بفرع الإعلام الآلي.'
    },
    certificateLink: 'https://drive.google.com/file/d/16ueyYCHmCgUAHz6q_SFvEtxKduRoMbU0/view'
  },
  {
    id: 'licence-2021',
    year: '2021',
    title: {
      en: 'Licence in Computer Science',
      fr: 'Licence en Informatique',
      ar: 'شهادة الليسانس في الإعلام الآلي'
    },
    institution: {
      en: 'University of Abou Bekr Belkaid Tlemcen',
      fr: 'Université d\'Abou Bekr Belkaid Tlemcen',
      ar: 'جامعة أبي بكر بلقايد تلمسان'
    },
    description: {
      en: 'Specialty: Computer Systems. Focused on architecture, operating systems, and core software engineering.',
      fr: 'Specialité : Systèmes Informatiques. Axé sur l\'architecture, les systèmes d\'exploitation et le génie logiciel.',
      ar: 'تخصص: أنظمة المعلوماتية. التركيز على الهندسة، أنظمة التشغيل، والمبادئ الأساسية لهندسة البرمجيات.'
    },
    certificateLink: 'https://drive.google.com/file/d/1jPQeFqsS5mYl0eRgL6AH5BeAuB1JxXQZ/view'
  },
  {
    id: 'master-2024',
    year: '2024',
    title: {
      en: 'Master in Computer Science',
      fr: 'Master en Informatique',
      ar: 'شهادة الماستر في الإعلام الآلي'
    },
    institution: {
      en: 'University of Abou Bekr Belkaid Tlemcen',
      fr: 'Université d\'Abou Bekr Belkaid Tlemcen',
      ar: 'جامعة أبي بكر بلقايد تلمسان'
    },
    description: {
      en: 'Specialty: Intelligent Models and Decision. Advanced studies in AI, Machine Learning, and complex algorithms.',
      fr: 'Spécialité : Modèles Intelligents et Décision. Études avancées en IA, Apprentissage Automatique et algorithmes complexes.',
      ar: 'تخصص: النماذج الذكية والقرار. دراسات متقدمة في الذكاء الاصطناعي، تعلم الآلة، وخوارزميات اتخاذ القرار المعقدة.'
    },
    certificateLink: 'https://drive.google.com/file/d/1zHXJqw9mL8Aw81zR0pEoN7LTMoy5_NBA/view'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'Word', category: 'Software' },
  { name: 'Excel', category: 'Software' },
  { name: 'PowerPoint', category: 'Software' },
  { name: 'Photoshop', category: 'Design' },
  { name: 'Illustrator', category: 'Design' },
  { name: 'Figma', category: 'Design' },
  { name: 'Python', category: 'Software' },
  { name: 'HTML5', category: 'Software' },
  { name: 'CSS3', category: 'Software' },
  { name: 'JavaScript', category: 'Software' },
  { name: 'Tailwind', category: 'Software' },
  { name: 'Git', category: 'Software' }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'linguistique-dz',
    title: {
      en: 'Linguistique DZ',
      fr: 'Linguistique DZ',
      ar: 'Linguistique DZ'
    },
    description: {
      en: 'A comprehensive management platform and landing page for a private language school in Algeria, specialized in teaching French, English, and Spanish.',
      fr: 'Une plateforme de gestion et vitrine pour une école de langues privée spécialisée dans l\'enseignement du français, de l\'anglais et de l\'espagnol.',
      ar: 'منصة تسيير وواجهة رقمية لمدرسة لغات خاصة متخصصة في تدريس اللغات الفرنسية، الإنجليزية، والإسبانية.'
    },
    category: {
      en: 'School Management',
      fr: 'Gestion d\'École',
      ar: 'تسيير المؤسسات'
    },
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'Tailwind', 'Netlify'],
    links: { live: 'https://linguistique-dz.vercel.app/' }
  },
  {
    id: 'electron-desktop-suite',
    title: {
      en: 'Store Debt Manager',
      fr: 'Gestionnaire de Dettes',
      ar: 'مسير ديون المحلات'
    },
    description: {
      en: 'A robust desktop application designed for Algerian store owners to track and manage customer debts (credits) efficiently with offline support.',
      fr: 'Une application de bureau robuste conçue pour les commerçants algériens afin de gérer les dettes (crédits) des clients avec un support hors-ligne.',
      ar: 'تطبيق مكتبي قوي مصمم لأصحاب المحلات في الجزائر لتتبع وإدارة ديون الزبائن (الكريدي) بكفاءة مع دعم العمل بدون إنترنت.'
    },
    category: {
      en: 'Desktop Software',
      fr: 'Logiciel de Bureau',
      ar: 'برمجيات سطح المكتب'
    },
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    techStack: ['Electron', 'React', 'Node.js'],
    links: { live: 'https://drive.usercontent.google.com/download?id=1LbX2tU5i7Vulw_hg47mV01VY78NoHbhq&export=download&authuser=0' }
  }
];

export const CONTACT_INFO = {
  name: 'Drouiche Ilyes',
  nameAr: 'درويش إلياس',
  age: 25,
  phone: '0676474260',
  email: 'ilyesdrouiche00@gmail.com',
  university: 'Abou Bekr Belkaid Tlemcen University'
};

export const UI_STRINGS: Record<Language, any> = {
  en: {
    navAbout: 'About',
    navCurriculum: 'Curriculum',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    downloadCV: 'Download CV',
    classYear: 'CLASS OF 2024',
    csGraduate: 'CS GRADUATE',
    iam: 'I am',
    heroDesc: '25-year-old computer science graduate specialized in Intelligent Models and Decision-making. Passionate about building software that solves complex problems.',
    getInTouch: 'Get In Touch',
    status: 'Status',
    openToWork: 'Open to Work',
    education: 'Education',
    msc: 'MSc. in CS',
    academicJourney: 'Academic Journey',
    roadmapDesc: 'Interactive roadmap of my academic achievements. Click "View Certificate" to see my official diplomas.',
    viewCertificate: 'View Certificate',
    technicalArsenal: 'Tech Stack',
    expertise: 'EXPERTISE',
    hybridStack: 'Hybrid Tech Stack & Design Tools',
    featuredProjects: 'Featured Projects',
    projectDesc: 'A selection of my recent technical work and academic research implementations.',
    viewCode: 'View Code',
    liveDemo: 'Live Demo',
    downloadApp: 'Download App',
    letsConnect: 'Let\'s Connect',
    connectDesc: 'Whether you have a project in mind or just want to say hi, my inbox is always open.',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    placeholderName: 'Mohamed Brahimi',
    placeholderEmail: 'mohamed.brahimi@gmail.com',
    placeholderMessage: 'Type your message here...',
    rights: 'All rights reserved.'
  },
  fr: {
    navAbout: 'À propos',
    navCurriculum: 'Parcours',
    navProjects: 'Projets',
    navSkills: 'Compétences',
    navContact: 'Contact',
    downloadCV: 'Télécharger CV',
    classYear: 'PROMOTION 2024',
    csGraduate: 'DIPLÔMÉ EN INFORMATIQUE',
    iam: 'Je suis',
    heroDesc: 'Diplômé en informatique de 25 ans spécialisé dans les Modèles Intelligents et la Décision. Passionné par le développement de logiciels résolvant des problèmes complexes.',
    getInTouch: 'Me Contacter',
    status: 'Statut',
    openToWork: 'Disponible',
    education: 'Éducation',
    msc: 'Master en Informatique',
    academicJourney: 'Parcours Académique',
    roadmapDesc: 'Feuille de route interactive de mes réussites académiques. Cliquez sur "Voir Certificat" pour voir mes diplômes officiels.',
    viewCertificate: 'Voir Certificat',
    technicalArsenal: 'Stack Technique',
    expertise: 'EXPERTISE',
    hybridStack: 'Stack Technique Hybride & Outils Design',
    featuredProjects: 'Projets Récents',
    projectDesc: 'Une sélection de mes récents travaux techniques et implémentations de recherche académique.',
    viewCode: 'Voir Code',
    liveDemo: 'Démo Live',
    downloadApp: 'Télécharger l\'App',
    letsConnect: 'Restons Connectés',
    connectDesc: 'Que vous ayez un projet en tête ou que vous vouliez simplement dire bonjour, ma boîte de réception est ouverte.',
    formName: 'Nom',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Envoyer Message',
    placeholderName: 'Nom complet',
    placeholderEmail: 'email@exemple.com',
    placeholderMessage: 'Écrivez votre message ici...',
    rights: 'Tous droits réservés.'
  },
  ar: {
    navAbout: 'من أنا',
    navCurriculum: 'المسار الدراسي',
    navProjects: 'المشاريع',
    navSkills: 'المهارات',
    navContact: 'اتصل بي',
    downloadCV: 'تحميل السيرة الذاتية',
    classYear: 'دفعة 2024',
    csGraduate: 'خريج إعلام آلي',
    iam: 'أنا',
    heroDesc: 'خريج في الإعلام الآلي، متخصص في النماذج الذكية وأنظمة اتخاذ القرار. أسعى لتطوير حلول برمجية مبتكرة لمواجهة التحديات التقنية المعقدة البالغ من العمر 25 عامًا.',
    getInTouch: 'تواصل معي',
    status: 'الحالة',
    openToWork: 'متاح للعمل',
    education: 'التعليم',
    msc: 'ماستر في الإعلام الآلي',
    academicJourney: 'المسار الأكاديمي',
    roadmapDesc: 'استعراض تفاعلي لمساري الدراسي. يمكنكم النقر على "عرض الشهادة" للاطلاع على الوثائق الرسمية.',
    viewCertificate: 'عرض الشهادة',
    technicalArsenal: 'الترسانة التقنية',
    expertise: 'الخبرات والمهارات',
    hybridStack: 'تقنيات التطوير وأدوات التصميم الإبداعي',
    featuredProjects: 'أبرز المشاريع',
    projectDesc: 'نخبة من أعمالي التقنية الأخيرة وتطبيقات البحوث الأكاديمية المتطورة.',
    viewCode: 'عرض الكود',
    liveDemo: 'عرض مباشر',
    downloadApp: 'تحميل التطبيق',
    letsConnect: 'لنتعاون معاً',
    connectDesc: 'سواء كان لديك مشروع طموح أو ترغب في مناقشة تعاون مهني، يسعدني دائماً تواصلك.',
    formName: 'الاسم الكامل',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'الرسالة',
    formSubmit: 'إرسال الطلب',
    placeholderName: 'الاسم بالكامل',
    placeholderEmail: 'email@example.com',
    placeholderMessage: 'اكتب رسالتك هنا...',
    rights: 'جميع الحقوق محفوظة.'
  }
};