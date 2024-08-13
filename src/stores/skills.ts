import { defineStore } from "pinia";

export const useSkillsIconsStore = defineStore("skills", () => {
  interface SkillsIcon {
    title: string;
    icon: string;
  }
  const skillsIcons: SkillsIcon[] = [
    {
      title: "HTML 5",
      icon: "/assets/skills/html-5.svg",
    },
    {
      title: "CSS 3",
      icon: "/assets/skills/css-3.svg",
    },
    {
      title: "SCSS",
      icon: "/assets/skills/scss.svg",
    },
    {
      title: "JS",
      icon: "/assets/skills/js.svg",
    },
    {
      title: "TypeScript",
      icon: "/assets/skills/typescript.svg",
    },
    /*  {
      title: 'Nuxt.js',
      icon: '/assets/skills/nuxt-js.svg'
    }, */
    {
      title: "Vue.js",
      icon: "/assets/skills/vue-framework.svg",
    },
    {
      title: "Vite",
      icon: "/assets/skills/vite.svg",
    },
    {
      title: "Pinia",
      icon: "/assets/skills/pinia.svg",
    },
    {
      title: "Git",
      icon: "/assets/skills/git.svg",
    },
    {
      title: "GitHub",
      icon: "/assets/skills/github.svg",
    },
    {
      title: "NodeJs",
      icon: "/assets/skills/node-js.svg",
    },
    {
      title: "NPM",
      icon: "/assets/skills/npm.svg",
    },
  ];

  return { skillsIcons };
});
