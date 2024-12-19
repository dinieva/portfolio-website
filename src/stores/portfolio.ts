import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', () => {
    interface PortfolioItem {
        title: string;
        descr: string;
        technology: string;
        link: string;
        imgPath: string;
    }
    const portfolioItems: Array<PortfolioItem> = [
        {
            title: 'Сайт для сбора средств трем мушкетерам',
            descr: 'Лендинг пейдж с формой обратной связи',
            technology: 'HTML, CSS, JS, PHP',
            // link: "https://dinieva.github.io/three-musketeers.github.io/",
            link: 'http://musketeerstomilan.ru.swtest.ru/',
            imgPath: '/portfolio-website/assets/projects-img/donats.jpg',
        },
        {
            title: 'Книжный клуб',
            descr: 'Регистрация, добавление книг в индивидуальные списки, в избранное, возможность предложить книгу для чтения, возможность оставлять отзыв, комментарии и оценку книге.',
            technology: 'Vue, Firebase Api',
            link: 'https://bookclub22-29689.web.app/',
            imgPath: '/portfolio-website/assets/projects-img/books.jpg',
        },
        {
            title: 'Learning Management System (LMS)',
            descr: 'Платформа для онлайн обучения со списком курсов,c возможностью студентам отправлять, а преподавателям оценивать домашниюю работу',
            technology: 'Angular, Typescript, Firebase Api',
            link: 'https://lms-tech-14189.web.app/',
            imgPath: '/portfolio-website/assets/projects-img/lms.webp',
        },
        {
            title: 'Прогноз погоды',
            descr: 'Прогноз погоды по городам на текущий день с интервалом по 3 часа, на 4 дня вперед, с корректным отображением даты и времени для выбранного города',
            technology: 'Vue, OpenWeather Api',
            link: 'https://dinieva.github.io/forecast/',
            imgPath: '/portfolio-website/assets/projects-img/forecast.jpg',
        },
        {
            title: 'Todo List',
            descr: ' Cписок задач по дням. Можно создавать задачу,выбирая приоритет по важности, отмечать выполнение, фильтровать список задач по дате, по активным задачам или выполненным',
            technology: 'Vue, Typescript',
            link: 'https://dinieva.github.io/dailyToDo/',
            imgPath: '/portfolio-website/assets/projects-img/dailyToDo.webp',
        },
        {
            title: 'Цветочный онлайн магазин',
            descr: 'Каталог, фильтрация, корзина, выбор доставки',
            technology: 'Vue',
            link: 'https://dinieva.github.io/flowers-shop/',
            imgPath: '/portfolio-website/assets/projects-img/flowers.jpg',
        },
        {
            title: 'Заказ бургера',
            descr: 'Онлайн каталог бургеров, выбор валюты, форма обратной связи',
            technology: 'Angular, TypeScript',
            link: 'https://dinieva.github.io/burger-angular/',
            imgPath: '/portfolio-website/assets/projects-img/burgers.jpg',
        },
        {
            title: 'Автомобили',
            descr: 'Онлайн каталог авто, фильтрация, форма обратной связи',
            technology: 'Angular, TypeScript',
            link: 'https://dinieva.github.io/cars-hw/',
            imgPath: '/portfolio-website/assets/projects-img/cars.jpg',
        },
        {
            title: 'Онлайн магазин зоотоваров',
            descr: 'Онлайн каталог зоотоваров, фильтрация, корзина',
            technology: 'Vue',
            link: 'https://dinieva.github.io/pet-planet/',
            imgPath: '/portfolio-website/assets/projects-img/pet-planet.jpg',
        },
    ];

    return { portfolioItems };
});
