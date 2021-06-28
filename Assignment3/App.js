import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Provider} from './BlogContext'
import IndexScreen from './IndexScreen';
import ShowScreen from './ShowScreen'
import CreateScreen from './CreateScreen';
import EditScreen from "./EditScreen"

const navigator = createStackNavigator(

  {

    Index: IndexScreen,

    Show: ShowScreen,

    Create: CreateScreen,

    Edit: EditScreen

  },

  {

    initialRouteName: 'Index',

    defaultNavigationOptions: {

      title: 'Blogs'

    }

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