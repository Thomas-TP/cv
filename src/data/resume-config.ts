import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Thomas Prud\'homme',
    photoBackEmoji: '👨💻',
    title: {
      fr: 'Apprenti CFC Informaticien',
      en: 'IT Apprentice (CFC)',
    },
    subtitle: {
      fr: 'Recherche alternance dès Juillet 2026 (Arc lémanique)',
      en: 'Looking for apprenticeship starting July 2026 (Lake Geneva area)',
    },
    location: 'Gland, Vaud, Suisse',
  },

  seo: {
    title: 'Thomas Prud\'homme — IT Apprentice',
    description: 'CV interactif de Thomas Prud\'homme, apprenti informaticien (Exploitation et Infrastructure) en Suisse.',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: {
      fr: 'FR',
      en: 'EN',
    },
  },

  theme: {
    preset: 'ocean',
  },

  contact: [
    { type: 'email', label: 'T+CV@prudhomme.li' },
    { type: 'phone', label: '076 376 45 51' },
    { type: 'linkedin', label: 'Thomas Prud\'homme', href: 'https://www.linkedin.com/in/thomas-tp' },
    { type: 'location', label: 'Gland, Vaud' },
    { type: 'website', label: 'Profil Credly', href: 'https://www.credly.com/users/thomas-prudhomme' },
    { type: 'website', label: 'Certificat GRI (PDF)', href: 'https://drive.google.com/file/d/1Hsa2Tj_3KnwXE_PeoVTB7LFF6ITYrgRj/view' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Maternel', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2', en: 'B2' } },
        { name: { fr: 'Allemand', en: 'German' }, level: { fr: 'Scolaire', en: 'Basic' } },
      ],
    },
    {
      title: { fr: 'Systèmes & Admin', en: 'Systems & Admin' },
      type: 'badges',
      items: [
        { name: 'Linux' },
        { name: 'Debian/APT' },
        { name: 'SSH' },
      ],
    },
    {
      title: { fr: 'Développement Web', en: 'Web Development' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Node.js' },
      ],
    },
    {
      title: { fr: 'Cloud & Infrastructure', en: 'Cloud & Infrastructure' },
      type: 'badges',
      items: [
        { name: 'AWS' },
        { name: 'Azure' },
        { name: 'Google Cloud' },
      ],
    },
    {
      title: { fr: 'IoT & Domotique', en: 'IoT & Home Automation' },
      type: 'badges',
      items: [
        { name: 'Home Assistant' },
        { name: 'Zigbee' },
        { name: 'Matter' },
      ],
    },
    {
      title: { fr: 'Outils IA', en: 'AI Tools' },
      type: 'badges',
      items: [
        { name: 'Claude Code' },
        { name: 'GitHub Copilot' },
        { name: 'LM Studio' },
      ],
    },
    {
      title: { fr: 'Certifications', en: 'Certifications' },
      type: 'text',
      items: [
        { name: { fr: 'GitHub Foundations', en: 'GitHub Foundations' } },
        { name: { fr: 'Linux Essentials', en: 'Linux Essentials' } },
        { name: { fr: 'English for IT 1/2', en: 'English for IT 1/2' } },
        { name: { fr: 'IA générative (Microsoft)', en: 'Generative AI (Microsoft)' } },
        { name: { fr: 'EF SET English Certificate 69/100', en: 'EF SET English Certificate 69/100' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'lrg-2024',
      company: { fr: 'LRG Informatique (Laiteries Réunies Genève)', en: 'LRG Informatique' },
      role: { fr: 'Stagiaire Informaticien', en: 'IT Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Avril 2024 (1 semaine)', en: 'April 2024 (1 week)' },
      description: {
        fr: 'Installation et configuration de postes de travail.',
        en: 'Installation and configuration of workstations (PCs).',
      },
      techs: ['Windows', 'Hardware'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Service informatique interne LRG',
          en: 'LRG Internal IT Department',
        },
        env: {
          fr: 'Windows / Hardware',
          en: 'Windows / Hardware',
        },
        tasks: {
          fr: [
            'Installation de PC',
            'Configuration système et réseau',
          ],
          en: [
            'PC Installation',
            'System and network configuration',
          ],
        },
      },
    },
    {
      id: 'epfl-2024',
      company: { fr: 'EPFL Informatique', en: 'EPFL IT' },
      role: { fr: 'Stagiaire découverte', en: 'Discovery Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Février 2024 (3 jours)', en: 'February 2024 (3 days)' },
      description: {
        fr: 'Découverte de l\'EPFL et des activités IT. Stage d\'observation.',
        en: 'Discovery of EPFL campus and IT activities. Observation internship.',
      },
      techs: ['IT Support', 'Education'],
    },
  ],

  education: [
    {
      school: { fr: 'Geneva Institute of Technology', en: 'Geneva Institute of Technology' },
      degree: { fr: 'CFC Informaticien (Exploitation/Infra)', en: 'CFC IT Specialist (Infrastructure)' },
      period: '2024 - 2028',
    },
    {
      school: { fr: 'FuturPlus, Lausanne', en: 'FuturPlus, Lausanne' },
      degree: { fr: 'Préapprentissage', en: 'Pre-apprenticeship' },
      period: '2023 - 2024',
    },
    {
      school: { fr: 'Etablissement Secondaire de Gland', en: 'Secondary School Gland' },
      degree: { fr: 'Ecole obligatoire (Option Architecture)', en: 'Compulsory School (Architecture Option)' },
      period: '2020 - 2023',
    },
  ],

  hobbies: [
    {
      title: { fr: 'Escalade & Ski', en: 'Climbing & Skiing' },
      details: [
        { fr: 'Pratique toute l\'année (bloc et altitude)', en: 'Year-round practice (bouldering and altitude)' },
      ],
    },
    {
      title: { fr: 'SimRacing', en: 'SimRacing' },
      details: [
        { fr: 'Compétition sur simulateur', en: 'Simulator competition' },
        { fr: 'Optimisation performances', en: 'Performance optimization' },
      ],
    },
    {
      title: { fr: 'VTT', en: 'Mountain Biking' },
      details: [
        { fr: 'Parcours en sentiers', en: 'Trail riding' },
      ],
    },
  ],

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech stack:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
