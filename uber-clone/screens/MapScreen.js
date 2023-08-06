import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';


const MapScreen = () => {
  return (
    <View  style={tw`h-2/3`}>
      <Text >here is the map get help </Text>
      
      <Map/>
     

    </View>
    
    
  );
}

export default MapScreen;

const styles = StyleSheet.create({});