import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native' ;
import Map1 from './components/Map1';
import { createStackNavigator } from '@react-navigation/stack';

import LocF from './LocF';
import DriverMapView from './components/DriverView';
import mapTest from './components/mapTest';
import Map3 from './components/Map3';
import Map2 from './components/Map2';
import Map4 from './components/Map4';



export default function App() {
  const Stack = createStackNavigator();
  return (
<Provider  store={store}>
<NavigationContainer>
<Stack.Navigator  screenOptions={{ headerShown: false }}>
    
<Stack.Screen 
       name="home"
       component={HomeScreen}
       
      />
<Stack.Screen 
       name="Map1"
       component={Map1}
   
      />
<Stack.Screen 
       name="Map2"
       component={Map2}
   
      />
      <Stack.Screen 
       name="Map3"
       component={Map3}
   
      />
     <Stack.Screen 
       name="Map4"
       component={Map4}
   
      />     



    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

