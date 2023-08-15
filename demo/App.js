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



    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

