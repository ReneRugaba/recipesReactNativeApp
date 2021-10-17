import React from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { selectRecipe, setRecipesAction, selectRecipeSteps } from './../../redux/action/setRecipesAction';

const  BASE_URL_API_RECIPES = "https://api.spoonacular.com/recipes"

const API_KEY = "c0a7f4ce80be48c898e6af7e4ef9996b"
const MAX_RESULTS=30

export const UseFetchRecipes = () => {
    const dispatch = useDispatch()
        const getAllRecipes = async (page) => {
            try {
                const response = await axios.get(`${BASE_URL_API_RECIPES}/complexSearch`,{
                    params:{
                        apiKey:API_KEY,
                        maxResults:MAX_RESULTS,
                        offset: page * MAX_RESULTS
                    }
                })
                dispatch(setRecipesAction(response.data.results))
            } catch (e) {
                console.error("Erreur in hook UseFetchRecipes",e)
            }
             
        }

        const getRecipesById = async (id) => {
            try {
                const response = await axios.get(`${BASE_URL_API_RECIPES}/${id}/information`,{
                    params:{
                        apiKey:API_KEY,
                        
                    }
                })
                dispatch(selectRecipe(response.data))
                // console.log(response.data)
            } catch (e) {
                console.error("Erreur in hook UseFetchRecipes",e)
            }
        }

        const getRecipeByIdSteps = async (id) =>{
            try {
                const response= await axios.get(`${BASE_URL_API_RECIPES}/${id}/analyzedInstructions`,{
                    params:{
                        apiKey:API_KEY
                    }
                })
                dispatch(selectRecipeSteps(response?.data[0]?.steps))
            } catch (e) {
                console.error("Erreur in hook UseFetchRecipes",e)
            }
        }

    return {
        getAllRecipes,
        getRecipesById,
        getRecipeByIdSteps
    }
}