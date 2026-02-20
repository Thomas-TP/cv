import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Thomas Prud\'homme',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Apprenti CFC Informaticien Exploitation & Infrastructure',
      en: 'IT Operations & Infrastructure Apprentice',
    },
    subtitle: {
      fr: 'Recherche d\'une alternance à partir de juillet 2026 (Arc lémanique)',
      en: 'Seeking a work-study program from July 2026 (Lake Geneva region)',
    },
    location: 'Gland, Vaud, Suisse',
  },

  seo: {
    title: 'Thomas Prud\'homme — Apprenti CFC Informaticien',
    description: 'CV interactif de Thomas Prud\'homme, apprenti CFC Informaticien spécialisé en Linux, Web, Cloud et IoT.',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'email', label: 'T+CV@prudhomme.li' },
    { type: 'phone', label: '076 376 45 51' },
    { type: 'linkedin', label: 'Thomas Prud\'homme', href: 'https://www.linkedin.com/in/thomas-tp' },
    { type: 'website', label: 'Mes Liens (thomastp.me)', href: 'https://thomastp.me/link' },
    { type: 'website', label: 'Badges Credly', href: 'https://www.credly.com/users/thomas-prudhomme' },
    { type: 'location', label: 'Gland, Vaud, Suisse' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Maternelle', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Niveau B2', en: 'B2 Level' } },
        { name: { fr: 'Allemand', en: 'German' }, level: { fr: 'Scolaire', en: 'School Level' } },
      ],
    },
    {
      title: { fr: 'Systèmes & OS', en: 'OS & Systems' },
      type: 'badges',
      items: [
        { name: 'Linux' },
        { name: 'Debian' },
        { name: 'Bash' },
      ],
    },
    {
      title: { fr: 'Développement Web', en: 'Web Development' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'TypeScript' },
      ],
    },
    {
      title: { fr: 'Cloud', en: 'Cloud' },
      type: 'badges',
      items: [
        { name: 'AWS' },
        { name: 'Azure' },
        { name: 'Google Cloud' },
      ],
    },
    {
      title: { fr: 'IoT & Smart Home', en: 'IoT & Smart Home' },
      type: 'badges',
      items: [
        { name: 'Home Assistant', color: '#41BDF5' },
        { name: 'Zigbee', color: '#EB0443' },
        { name: 'Matter', color: '#000000' },
      ],
    },
    {
      title: { fr: 'Intelligence Artificielle', en: 'Artificial Intelligence' },
      type: 'badges',
      items: [
        { name: 'GitHub Copilot' },
        { name: 'Claude', color: '#D97757' },
        { name: 'LM Studio', color: '#5C4EE5' },
      ],
    },
    {
      title: { fr: 'Certifications', en: 'Certifications' },
      type: 'text',
      items: [
        { name: { fr: 'GitHub Foundations', en: 'GitHub Foundations' } },
        { name: { fr: 'Linux Essentials', en: 'Linux Essentials' } },
        { name: { fr: 'IA générative par Microsoft', en: 'Generative AI by Microsoft' } },
        { name: { fr: 'English for IT 1/2', en: 'English for IT 1/2' } },
        { name: { fr: 'EF SET English Certificate 69/100', en: 'EF SET English Certificate 69/100' } },
      ],
    },
    {
      title: { fr: 'Autres compétences', en: 'Other skills' },
      type: 'text',
      items: [
        { name: { fr: 'Permis de conduire', en: 'Driver\'s License' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'lrg-stage',
      company: { fr: 'Laiteries Réunies Genève (LRG)', en: 'Laiteries Réunies Genève (LRG)' },
      role: { fr: 'Stagiaire Informaticien', en: 'IT Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Avril 2024', en: 'April 2024' },
      description: {
        fr: 'Installation et configuration de postes informatiques (PC).',
        en: 'Installation and configuration of workstations (PCs).',
      },
      techs: ['Windows', 'Hardware'],
      isHighlighted: true,
    },
    {
      id: 'epfl-stage',
      company: { fr: 'EPFL', en: 'EPFL' },
      role: { fr: 'Stagiaire Informaticien', en: 'IT Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Février 2024', en: 'February 2024' },
      description: {
        fr: 'Découverte de l\'EPFL et des activités liées à l\'infrastructure informatique.',
        en: 'Discovery of EPFL and activities related to IT infrastructure.',
      },
      techs: ['Linux', 'Hardware'],
    },
  ],

  education: [
    {
      school: { fr: 'Geneva Institute of Technology', en: 'Geneva Institute of Technology' },
      degree: { fr: 'CFC Informaticien exploitation et infrastructure', en: 'Federal VET Diploma in IT Operations and Infrastructure' },
      period: '2024 - 2028',
    },
    {
      school: { fr: 'FuturPlus, Lausanne', en: 'FuturPlus, Lausanne' },
      degree: { fr: 'Année de préapprentissage', en: 'Pre-apprenticeship year' },
      specialty: { fr: 'Option Architecture et dessins techniques', en: 'Architecture and technical drawing option' },
      period: '2023 - 2024',
    },
    {
      school: { fr: 'Établissement Secondaire de Gland', en: 'Gland Secondary School' },
      degree: { fr: 'École obligatoire', en: 'Compulsory Education' },
      period: '2020 - 2023',
    },
  ],

  hobbies: [
    {
      title: { fr: 'Escalade & Ski', en: 'Climbing & Skiing' },
      details: [
        { fr: 'Pratique suivie toute l\'année, bloc et sorties en altitude', en: 'Year-round practice, bouldering and altitude trips' },
      ],
    },
    {
      title: { fr: 'SimRacing', en: 'SimRacing' },
      details: [
        { fr: 'Simulateur régulier, lecture de piste et optimisation', en: 'Regular simulator use, track reading and optimization' },
      ],
    },
    {
      title: { fr: 'VTT', en: 'Mountain Biking' },
      details: [
        { fr: 'Parcours en sentiers et découverte', en: 'Trail riding and discovery' },
      ],
    },
  ],

  theme: {
    preset: 'ocean',
  },

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
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
