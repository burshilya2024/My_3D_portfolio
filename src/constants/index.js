import { meta, shopify, starbucks, tesla } from "../assets/images";
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
    typescript
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
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "company 1",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2022 - April 2023",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "company 2",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Dec 2023",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Company 3",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "dec 2023 - May 2024",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Company 4",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "May 2024 - Present",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicin, laborum possimus quos, explicabo eius esse nihil doloremque.",
            "ILorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, i",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea iusto, illum distinctio nisi repudiandae, laborum possimus quos, explicabo eius esse nihil doloremque.",
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
        link: 'https://github.com/burshilya2023',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://github.com/burshilya2023',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'интернет магазин',
        description: 'разработка интернет магазина с использованием state management Redux Query',
        link: 'https://github.com/burshilya2023/next-shopping-cart-rtk',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'телеграм бот',
        description: 'Взаимодействие пользователя с API openal stable diffusion, покупка платной подписки, развертывание проекта на сервере Google Cloud (pm2), работа с базой данных NoSQL MongoDB, решение лог ошибок, использование локализации на 5 языках (i18n), взаимодействие с Google API (текст, аудио)',
        link: 'https://github.com/burshilya2023/tg-bot-chatGPT-imagine-voice',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'стажировка IT-Incubator',
        description: 'Взаимодействие с командой 5 frontend разработчиков и 2 backend, выполнение обязанностей тимлида, проверка кода frontend разработчиков, deploy в продакшен (Jenkins + Kubernetes), проект на Next.js на FSD архитектуре',
        link: 'https://github.com/burshilya2024/snapix',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'Егоров энерджи',
        description: 'Разработка и поддержка пользовательских интерфейсов с использованием React.js. Реализация интерактивных и адаптивных веб-приложений, обеспечение их производительности и масштабируемости. Работа в тесном взаимодействии с командой дизайнеров и back-end разработчиков для создания интуитивно понятных и визуально привлекательных продуктов',
        link: 'https://github.com/burshilya2023',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'проект 5',
    //     description: '',
    //     link: '',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'проект 6',
    //     description: '',
    //     link: '',
    // }
];