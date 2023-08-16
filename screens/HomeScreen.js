import { createDrawerNavigator } from '@react-navigation/drawer';
import Article from './Article';
import Feed from './Feed';
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
//import DrawerNavigator from 'eslint-plugin-react';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
 function HomeScreen(){
  return(
     
      <Drawer.Navigator>
    <Drawer.Screen name="feed" component={Feed} />
    <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
   
  )
 }

 export default HomeScreen;