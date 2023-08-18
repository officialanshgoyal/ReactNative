import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
//import DrawerNavigator from 'eslint-plugin-react';
import Busroute from './Busroute';
import Driverlist from './Driverlist';
import Emergencycontatcts from './Emergencycontatcts';
import AboutUs from './AboutUs';
import ReportIssue from './ReportIssue';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {LinearGradient} from 'expo-linear-gradient';
import MIcon from 'react-native-vector-icons/MaterialIcons';





const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    
    <Drawer.Navigator
      //drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        
        headerShown: true,
        drawerActiveBackgroundColor:'#302a75',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
         // fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Bus Routes"
        component={Busroute}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Driver's List"
        component={Driverlist}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Emergency Contacts"
        component={Emergencycontatcts}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
            <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="information-circle-outline" size={22} color={color} />
          ),
        }}
      />
	<Drawer.Screen
        name="ReportIssue"
        component={ReportIssue}
        options={{
          drawerIcon: ({color}) => (
            <MIcon name="report" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
   
  );
};

export default HomeScreen;