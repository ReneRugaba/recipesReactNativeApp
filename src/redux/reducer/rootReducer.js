import { combineReducers } from "redux";
import { listRecipesReducer } from './listRecipesReducer';
import { tasksList } from './taskList';

export const rootReducer = combineReducers({
    listRecipesReducer,
    tasksList,
})