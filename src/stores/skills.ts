import { defineStore } from 'pinia';

export const useSkillsIconsStore = defineStore('skills', () => {
    interface SkillsIcon {
        title: string;
        icon: string;
    }
    const skillsIcons: SkillsIcon[] = [
        {
            title: 'HTML 5',
            icon: '/portfolio-website/assets/skills/html-5.svg',
        },
        {
            title: 'CSS 3',
            icon: '/portfolio-website/assets/skills/css-3.svg',
        },
        {
            title: 'SCSS',
            icon: '/portfolio-website/assets/skills/scss.svg',
        },
        {
            title: 'JS',
            icon: '/portfolio-website/assets/skills/js.svg',
        },
        {
            title: 'TypeScript',
            icon: '/portfolio-website/assets/skills/typescript.svg',
        },
        /*  {
      title: 'Nuxt.js',
      icon: '/assets/skills/nuxt-js.svg'
    }, */
        {
            title: 'Vue.js',
            icon: '/portfolio-website/assets/skills/vue-framework.svg',
        },
        {
            title: 'Angular',
            icon: '/portfolio-website/assets/skills/angular-leg.png',
        },
        {
            title: 'Vite',
            icon: '/portfolio-website/assets/skills/vite.svg',
        },
        {
            title: 'Pinia',
            icon: '/portfolio-website/assets/skills/pinia.svg',
        },
        {
            title: 'Git',
            icon: '/portfolio-website/assets/skills/git.svg',
        },
        {
            title: 'GitHub',
            icon: '/portfolio-website/assets/skills/github.svg',
        },
        {
            title: 'NodeJs',
            icon: '/portfolio-website/assets/skills/node-js.svg',
        },
        {
            title: 'NPM',
            icon: '/portfolio-website/assets/skills/npm.svg',
        },
    ];

    return { skillsIcons };
});
