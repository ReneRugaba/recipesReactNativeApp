import { ADD_TASK, DELETE_TASK, GET_RECIPES, SELECT_RECIPE, SELECT_RECIPE_STEPS, TOGGLE_TASK } from './index';

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




export function addTask(title){
    return {
        type: ADD_TASK,
        payload:{
            title
        }
    }
}



export const toggleTask = (id)=> ({
    type:TOGGLE_TASK,
    payload:{
        id
    }
})



export const deleteTask = (id)=>({
    type:DELETE_TASK,
    payload:{
        id
    }
})
