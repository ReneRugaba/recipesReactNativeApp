

export const selectAllRecipes = store => store.listRecipesReducer.list
export const selectOneRecipe = store => store.listRecipesReducer.selectedRecipes
export const selectOneRecipeStep = store => store.listRecipesReducer.selectedRecipeStep