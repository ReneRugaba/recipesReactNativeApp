import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RecipesList from './src/screens/recipesScreen/index';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesDetails from './src/components/recipesDetails';



const Stack = createNativeStackNavigator()

const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

 

  return (
    <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <Stack.Navigator >
              <Stack.Screen name="RecipesList" component={RecipesList}/>
              <Stack.Screen name="RecipesDetails" component={RecipesDetails}/>
            </Stack.Navigator>
          </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
 container:{
   flex:1,
 }
});

export default App;
