import { CREATE_RECIPE_PATH, RECIPES, SHOP_LIST_PATH } from "./path";

export const button = [
    {
        id:1,
        img: '/src/app/assets/images/personal-space-1.png',
        text: 'Сгенерировать рецепт',
        path: CREATE_RECIPE_PATH,
    },
    {
        id:2,
        img: '/src/app/assets/images/personal-space-2.png',
        text: 'Библиотека рецептов',
        path: RECIPES,
    },
    {
        id:3,
        img: '/src/app/assets/images/personal-space-3.png',
        text: 'Планирование рецепта',
        path: SHOP_LIST_PATH, 
    }
]