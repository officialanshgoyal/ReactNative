import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer} from '@react-navigation/native' ;
//import Feed from './screens/Feed';

export default function App() {
  const Stack = createStackNavigator();  return (
    <NavigationContainer>
  <Stack.Navigator  screenOptions={{ headerShown: false }}>
     
 <Stack.Screen 
       name="home"
       component={HomeScreen}
       
      />
     


    </Stack.Navigator>
    </NavigationContainer>
  )
}

