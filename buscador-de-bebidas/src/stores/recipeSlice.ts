import { StateCreator } from "zustand"
import { getCategories } from "../services/ReciveService"
import type { Category } from "../types"


export type RecipeSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}


export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set ({
            categories
       } )
    }
})