import { GET_RECIPES, SELECT_RECIPE, SELECT_RECIPE_STEPS } from './index';

export const setRecipesAction =(recipesArray)=>({
    type:GET_RECIPES,
    payload:{
        recipesArray
    }
})

export const selectRecipe = (recipeInfos) => ({
    type: SELECT_RECIPE,
    payload:{
        recipeInfos
    }
})

export const selectRecipeSteps =(recipeSteps)=>({
    type:SELECT_RECIPE_STEPS,
    payload:{
        recipeSteps
    }
})