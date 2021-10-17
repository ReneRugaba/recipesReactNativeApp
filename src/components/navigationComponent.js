import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesList from './../screens/recipesScreen/index';
import RecipesDetails from './recipesDetails';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {  NavigationContainer } from '@react-navigation/native';
import TaskScreen from '../screens/tasks/index';

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const recipesStack = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen name="RecipesList" component={RecipesList}/>
            <Stack.Screen name="RecipesDetails" component={RecipesDetails}/>
        </Stack.Navigator>
    )
}

const NavigationComponent=()=> {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{headerShown:false}}>
                <Tabs.Screen name="recipesStack" component={recipesStack}/>
                <Tabs.Screen name="TaskScreen" component={TaskScreen}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default NavigationComponent