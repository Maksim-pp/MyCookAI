import axios from "axios"
import { IRecipes } from ".."
import { useEffect, useState } from "react"

export const fetchRecipes = () => {
    const [recipes, setRecipes] = useState<IRecipes[]>([])

    useEffect(() =>{
        fetchRecipes()
    }, [])

    async function fetchRecipes() {
        try {
            const response = await axios.get('https://dummyjson.com/recipes')
            setRecipes(response.data.recipes)
        } catch (error) {
            alert(error)
        }
    }
    return ({recipes})
}
