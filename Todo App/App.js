import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
//import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
//import { NavigationContainer } from '@react-navigation/native';
import {Provider} from './TodoContext'
import IndexScreen from './IndexScreen';
import ShowScreen from './ShowScreen'
import CreateScreen from './CreateScreen';
import EditScreen from "./EditScreen";
import HomeScreen from "./HomeScreen"

const navigator = createStackNavigator(

  {


    Index: IndexScreen,

    Show: ShowScreen,

    Create: CreateScreen,

    Edit: EditScreen,
   Home: HomeScreen

  },

  {

    initialRouteName: 'Home',
    headerShown: false,
    defaultNavigationOptions: {

          //headerShown: false,
          //title:
          headerStyle: {
                      backgroundColor: 'blue',

                    },
          headerTintColor: 'white'
        },

  }


);

 const App = createAppContainer(navigator);



export default () => {

   return (
     <Provider>

       <App></App>

     </Provider>

  );

 };
