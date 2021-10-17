import React from 'react';
import {

  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationComponent from './src/components/navigationComponent';





const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

 

  return (
    <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
           <NavigationComponent/>
    </Provider>
  );
};

const styles = StyleSheet.create({
 container:{
   flex:1,
 }
});

export default App;
