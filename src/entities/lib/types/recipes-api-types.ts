export interface IRecipes {
    id: number
    name: string
    ingredients: [] | string
    instructions: [] | string
    prepTimeMinutes: number
    cookTimeMinutes: number
    cuisine: string
    image: string
}

