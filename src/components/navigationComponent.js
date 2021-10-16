import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesList from './../screens/recipesScreen/index';
import RecipesDetails from './recipesDetails';
import TaskScreen from './../screens/tasks/index';

const Stack = createNativeStackNavigator()

const NavigationComponent=()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RecipesList" component={RecipesList}/>
            <Stack.Screen name="RecipesDetails" component={RecipesDetails}/>
            <Stack.Screen name="TaskScreen" component={TaskScreen}/>
        </Stack.Navigator>
    )
}

export default NavigationComponent