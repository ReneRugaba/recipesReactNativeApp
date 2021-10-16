

export const selectAllRecipes = store => store.listRecipesReducer.list
export const selectOneRecipe = store => store.listRecipesReducer.selectedRecipes
export const selectOneRecipeStep = store => store.listRecipesReducer.selectedRecipeStep
// celector


export const getTask = store => store.tasksList
export const getTaskCompleted = store => store.tasksList.filter(t=>t.isCompleted)