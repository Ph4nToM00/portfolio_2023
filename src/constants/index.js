import { svl, epitech, ribera } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    php,
    symfony,
    laravel,
    prestashop,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "Php",
        type: "Backend",
    },
    {
        imageUrl: symfony,
        name: "Symfony",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: prestashop,
        name: "Prestashop",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Software",
    }
];

export const experiences = [
    {
        title: "Développeur Web & PDG",
        company_name: "RiberaDev",
        icon: ribera,
        iconBg: "#b7e4c7",
        date: "Nov 2023 - Aujourd'hui",
        points: [
            "Création de modules pour Prestashop.",
            "Conception et développement de sites web.",
            "Développement d'application mobile en React Native.",
            
        ],
    },
    {
        title: "Développeur Web & Résponsable Cybersécurité",
        company_name: "Serres Val de Loire",
        icon: svl,
        iconBg: "#accbe1",
        date: "Mai 2023 - Aujourd'hui",
        points: [
            "Développement de modules ou de fonctionnalités pour les sites sous Prestashop.",
            "Cybersécurité, j'ai dû analyser les risques cyber et trouver des solutions pour renforcer la sécurité dans l'entreprise.",
            "Réseau, création et configuration de serveurs apache en local pour de la dev, gestion d'utilisateurs sur le domaine, gestion des serveurs et baie de brassage de l'entreprise.",
            
        ],
    },
    {
        title: "Web@cademy",
        company_name: "Epitech",
        icon: epitech,
        iconBg: "#fbc3bc",
        date: "Nov 2020 - Nov 2022",
        points: [
            "Apprentissage des langages de développement web en formation sur 2 ans, pour devenir développeur fullstack.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ph4nToM00',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tristan-m-671094171/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Création de modules Prestashop',
        description: 'Développement de module Prestashop à la demande ou selon mes inspirations.',
        link: 'https://addons.prestashop.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'OSINT : Outils Python pour la recherche d\'informations, Peek-A-Who',
        description: 'Peek-A-Who est un outil conçu en python et bientôt en format web pour l\'Osint, la recherche d\'information open-source.',
        link: 'https://github.com/c0dejump/Peek-A-Who',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Portfolio',
        description: 'Le portfolio, un CV numérique que j\'ai pu développer avec des technos actuelle (ReactJS, ThreeJS pour la 3D).',
        link: 'https://github.com/Ph4nToM00/portfolio_2023',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'HAWKSCAN: Outil de scan de vulnérabilité web',
        description: 'c\'est un outil de cybersécurité, j\'ai pu participé à ce projet en collaboration, cet outil sert à scanner les possibles vulnérabilités d\'un site web.',
        link: 'https://github.com/Ph4nToM00/HawkScan',
    },
];