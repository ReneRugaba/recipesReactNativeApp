
import React from 'react'
import { Image, View, Text, StyleSheet, Pressable } from 'react-native'

export default function CardRecipe({recipe, navigation}) {
    return (
        <Pressable onPress={
            ()=>navigation.navigate("RecipesDetails",{id:recipe.id})
        }>

        <View style={styles.container}>
            <Image
                source={{uri:recipe.image}}
                style={styles.image}
            />
            <View style={styles.subContainer}>
                <Text style={styles.text}>{recipe.title}</Text>
            </View>
        </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        borderColor:"grey",
        borderWidth:1
    },
    image:{
        width:"30%",
        height:90,
      
    },
    text:{
        fontSize:16,
        fontWeight:"bold"
    },
    subContainer:{
        width:"70%",
        padding:7
    }
})