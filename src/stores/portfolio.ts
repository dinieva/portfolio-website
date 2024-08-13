import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", () => {
  interface PortfolioItem {
    title: string;
    descr: string;
    technology: string;
    link: string;
    imgPath: string;
  }
  const portfolioItems: Array<PortfolioItem> = [
    {
      title: "Сайт для сбора средств трем мушкетерам",
      descr: "Лендинг пейдж с формой обратной связи",
      technology: "HTML, CSS, JS, PHP",
      // link: "https://dinieva.github.io/three-musketeers.github.io/",
      link: "http://musketeerstomilan.ru.swtest.ru/",
      imgPath: "public/assets/projects-img/donats.jpg",
    },
    {
      title: "Книжный клуб",
      descr:
        "Регистрация, добавление книг в индивидуальные списки, в избранное, возможность предложить книгу для чтения, возможность оставлять отзыв, комментарии и оценку книге.",
      technology: "Vue, Firebase Api",
      link: "https://bookclub22-29689.web.app/",
      imgPath: "public/assets/projects-img/books.jpg",
    },

    {
      title: "Прогноз погоды",
      descr:
        "Прогноз погоды по городам на текущий день с интервалом по 3 часа, на 4 дня вперед, с корректным отображением даты и времени для выбранного города",
      technology: "Vue, OpenWeather Api",
      link: "https://dinieva.github.io/forecast/",
      imgPath: "public/assets/projects-img/forecast.jpg",
    },
    {
      title: "Цветочный магазин",
      descr: "Каталог, фильтрация, корзина, выбор доставки",
      technology: "Vue",
      link: "https://dinieva.github.io/flowers-shop/",
      imgPath: "public/assets/projects-img/flowers.jpg",
    },
    {
      title: "Заказ бургера",
      descr: "Онлайн каталог бургеров, выбор валюты, форма обратной связи",
      technology: "Angular, TypeScript",
      link: "https://dinieva.github.io/burger-angular/",
      imgPath: "public/assets/projects-img/burgers.jpg",
    },
    {
      title: "Аавтомобили",
      descr: "Онлайн каталог авто, фильтрация, форма обратной связи",
      technology: "Angular, TypeScript",
      link: "https://dinieva.github.io/cars-hw/",
      imgPath: "public/assets/projects-img/cars.jpg",
    },
    {
      title: "Онлайн магазин зоотоваров",
      descr: "Онлайн каталог зоотоваров, фильтрация, корзина",
      technology: "Vue",
      link: "https://dinieva.github.io/pet-planet/",
      imgPath: "public/assets/projects-img/pet-planet.jpg",
    },
  ];

  return { portfolioItems };
});
