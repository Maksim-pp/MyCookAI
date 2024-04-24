import { CREATE_RECIPE_PATH, RECIPES, SHOP_LIST_PATH } from "./path";
import Foto1 from 'src/app/assets/images/personal-space-1.png';
import Foto2 from 'src/app/assets/images/personal-space-2.png';
import Foto3 from 'src/app/assets/images/personal-space-3.png';

export const button = [
    {
        id:1,
        img: Foto1,
        text: 'Сгенерировать рецепт',
        path: CREATE_RECIPE_PATH,
    },
    {
        id:2,
        img: Foto2,
        text: 'Библиотека рецептов',
        path: RECIPES,
    },
    {
        id:3,
        img: Foto3,
        text: 'Планирование рецепта',
        path: SHOP_LIST_PATH, 
    }
]