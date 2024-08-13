import { defineStore } from "pinia";

export const useSkillsIconsStore = defineStore("skills", () => {
  interface SkillsIcon {
    title: string;
    icon: string;
  }
  const skillsIcons: SkillsIcon[] = [
    {
      title: "HTML 5",
      icon: "public/assets/skills/html-5.svg",
    },
    {
      title: "CSS 3",
      icon: "public/assets/skills/css-3.svg",
    },
    {
      title: "SCSS",
      icon: "public/assets/skills/scss.svg",
    },
    {
      title: "JS",
      icon: "public/assets/skills/js.svg",
    },
    {
      title: "TypeScript",
      icon: "public/assets/skills/typescript.svg",
    },
    /*  {
      title: 'Nuxt.js',
      icon: 'public/assets/skills/nuxt-js.svg'
    }, */
    {
      title: "Vue.js",
      icon: "public/assets/skills/vue-framework.svg",
    },
    {
      title: "Vite",
      icon: "public/assets/skills/vite.svg",
    },
    {
      title: "Pinia",
      icon: "public/assets/skills/pinia.svg",
    },
    {
      title: "Git",
      icon: "public/assets/skills/git.svg",
    },
    {
      title: "GitHub",
      icon: "public/assets/skills/github.svg",
    },
    {
      title: "NodeJs",
      icon: "public/assets/skills/node-js.svg",
    },
    {
      title: "NPM",
      icon: "public/assets/skills/npm.svg",
    },
  ];

  return { skillsIcons };
});
