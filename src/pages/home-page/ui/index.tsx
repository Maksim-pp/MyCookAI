import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateRecipe } from 'src/pages/create-recipe'
import { Home } from 'src/pages/home/ui'
import { LibraryPage } from 'src/pages/library-page'
import { Main } from 'src/pages/main'
import { Profile } from 'src/pages/profile'
import { RecipePage } from 'src/pages/recipe-page'
import { RecipesPage } from 'src/pages/recipes-page'
import { ShoppingList } from 'src/pages/shopping-list'
import { CREATE_RECIPE_PATH, HOME_PATH, LIBRARY_PATH, PROFILE_PATH, RECIPES, SHOP_LIST_PATH } from 'src/shared'

export const HomePage = () => {
    return (
        <div>
            <Main />
            <Routes>
                <Route path={HOME_PATH} element={<Home />} />
                <Route path={SHOP_LIST_PATH} element={<ShoppingList />} />
                <Route path={CREATE_RECIPE_PATH} element={<CreateRecipe />} />
                <Route path={LIBRARY_PATH} element={<LibraryPage />} />
                <Route path={RECIPES} element={<RecipesPage />} />
                <Route path={`${RECIPES}:name`} element={<RecipePage />} />
                <Route path={PROFILE_PATH} element={<Profile />} />
            </Routes>
        </div>

    )
}
