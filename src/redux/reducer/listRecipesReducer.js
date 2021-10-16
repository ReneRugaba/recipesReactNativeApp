
import { GET_RECIPES, SELECT_RECIPE, SELECT_RECIPE_STEPS } from './../action/index';

const iniState = {
    list:[],
    selectedRecipes:{},
    selectedRecipeStep:[]
}



export const listRecipesReducer = (state=iniState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                list:[...state.list, ...action.payload.recipesArray]
            }
          
        case SELECT_RECIPE:
            return{
                ...state,
                selectedRecipes:action.payload.recipeInfos
            }
        case SELECT_RECIPE_STEPS:
            return {
                ...state,
                selectedRecipeStep:action.payload.recipeSteps
            }
        default:
            return state
    }
}