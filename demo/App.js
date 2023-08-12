import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native' ;
import Map1 from './components/Map1';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const Stack = createStackNavigator();
  return (
<Provider  store={store}>
<NavigationContainer>
<Stack.Navigator>
    
<Stack.Screen 
       name="HomeScreen"
       component={HomeScreen}
       options={{ headerShown: false,}}
      />
      <Stack.Screen 
       name="Map1"
       component={Map1}
       options={{ headerShown: false,}}
      />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

