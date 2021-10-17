import React, {useEffect, useState} from 'react'
import { Image, Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { UseFetchRecipes } from './../api/recipes/useFetchRecipes';
import { useSelector, useDispatch } from 'react-redux';
import { selectOneRecipe } from '../redux/celector/celectors';
import { selectOneRecipeStep } from './../redux/celector/celectors';

export default function RecipesDetails({route}) {
    const {id}= route.params
    const {getRecipesById, getRecipeByIdSteps} = UseFetchRecipes()

    const isVisible = useState(false)
    const recipe = useSelector(selectOneRecipe)
    const steps = useSelector(selectOneRecipeStep)
    const dispatch = useDispatch()

    useEffect(()=>{
       

            getRecipesById(id)
            getRecipeByIdSteps(id)
        
        
    },[])

    if (recipe.id !== id && steps) return( <ActivityIndicator size="large" color="#00ff00" />)

    return (
        <ScrollView>
            <Image
                source={{uri:recipe.image}}
                style={styles.image}
            />
            <Text style={styles.title}>{recipe?.title}</Text>
            <Text style={styles.caption}>{`Ready in: ${recipe?.readyInMinutes} minutes`}</Text>
            <View style={styles.containerIngredient}>
                <Text style={styles.title}>Ingredients:</Text>
                {recipe?.extendedIngredients?.map((ingredient,index)=><Text key={index}>{ingredient.name}</Text>)}
            </View>
            <View style={styles.containerInstructions}>
            <Text style={styles.title}>Instructions:</Text>
                {steps?.map((step,index)=><Text key={index} style={{marginBottom:5}}>{`${step.number}) ${step.step}`}</Text>)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{},
    image:{
        width:"100%",
        height: 400,
        marginBottom:15
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:6
    },
    caption:{
        textAlign:"center",
        marginBottom:5
    },
    containerIngredient:{
        marginHorizontal:16,
        borderTopColor: "grey",
        borderTopWidth:1,
        marginVertical:10,
        padding:15,
        borderBottomColor:"gery",
        borderBottomWidth:1
    },
    containerInstructions:{
        marginHorizontal:16,
        marginVertical:10,
        padding:15,
    }
})
