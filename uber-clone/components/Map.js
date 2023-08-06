import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView ,{Marker}from 'react-native-maps';
import tw from "tailwind-react-native-classnames";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
  const origin= useSelector(selectOrigin)
  return (
    <MapView
    style={tw`h-2/3`}
    mapType='mutedStandard'
    initialRegion={{
      latitude: 7234,
      longitude: 3123,
      latitudeDelta: 0.355,
      longitudeDelta: 0.0121,
    }}
  />
  );
};

export default Map;

const styles = StyleSheet.create({});