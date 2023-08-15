import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MapView ,{Marker , Polyline} from 'react-native-maps';
// import tw from "tailwind-react-native-classnames";
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_APIKEY}  from "@env";

export default function App() {
  const [state ] = useState({
    loca : {
      latitude :26.92275,
      longitude : 75.84584,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locb :   {
      latitude:26.938916,
      longitude:75.84679,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locc: {
      latitude :26.945586,
      longitude : 75.84004,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locd: {
      latitude :26.939336,
      longitude : 75.837089,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loce: {
      latitude :26.934777,
      longitude : 75.833335,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locf: {
      latitude :26.922569,
      longitude : 75.826897,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locg: {
      latitude :26.922569,
      longitude : 75.82637,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loch: {
      latitude :26.915894,
      longitude :75.820381,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loci: {
      latitude :26.914859,
      longitude :75.816895,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locj: {
      latitude :26.907295,
      longitude : 75.815265,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    lockk: {
      latitude :26.891575,
      longitude :75.806051,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locl: {
      latitude :26.883237,
      longitude : 75.806788,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locm: {
      latitude :26.87606,
      longitude : 75.806887,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locn: {
      latitude :26.848035,
      longitude : 75.803143,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loco: {
      latitude :26.843099,
      longitude : 75.801867,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locp: {
      latitude :26.781937,
      longitude : 75.822563,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
  

  })
  
const {loca,locb,locc,locd,loce,locf,locg,loch,loci,locj,lockk,locl,locm,locn,loco,locp,} = state

  return (
    
   
   <MapView
  style={{ flex: 1 }}
  initialRegion={{
    latitude: 26.781937,
    longitude: 75.822563,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>

    <Marker
    coordinate={{ latitude: 26.92275, longitude: 75.84584}}
    title="MEENA PETROL PUMP"
  />
  <Marker
    coordinate={{ latitude: 26.938916, longitude:75.84679 }}
    title="KHOLE KE HANUMAN JI"
  />
<Marker
    coordinate={{ latitude: 26.945586, longitude:75.84004 }}
    title="RAMGRAH MODE"
  />
<Marker
    coordinate={{ latitude: 26.939336, longitude:75.837089}}
    title="DUSSEHRA KOTHI"
  />
<Marker
    coordinate={{ latitude: 26.934777, longitude:75.833335 }}
    title="JORAWAR SINGH GATE"
  />
<Marker
    coordinate={{ latitude: 26.922569, longitude:75.826897 }}
    title=" BADI CHOPAR"
  />
<Marker
    coordinate={{ latitude: 26.921008, longitude:75.82637 }}
    title="JOHARI BAZAR"
  />
<Marker
    coordinate={{ latitude: 26.915894, longitude:75.820381 }}
    title=" NEW GATE"
  />
  <Marker
    coordinate={{ latitude: 26.914859, longitude:75.816895}}
    title="AJMERI GATE"
  />
  <Marker
    coordinate={{ latitude: 26.907295, longitude:75.815265 }}
    title="S M.S HOSPITAL"
  />
  <Marker
    coordinate={{ latitude: 26.891575, longitude:75.806051 }}
    title="LAL KOTHI"
  />
  <Marker
    coordinate={{ latitude: 26.883237, longitude:75.806788 }}
    title=" GANDHI NAGAR CLUB"
  />
  <Marker
    coordinate={{ latitude:26.87606, longitude:75.806887 }}
    title="AG COLANY"
  />
  <Marker
    coordinate={{ latitude:26.848035, longitude:75.803143 }}
    title="BHARADWAJ PETROL PUMP"
  />

 <Marker
    coordinate={{ latitude:26.843099, longitude:75.801867 }}
    title=" JAWAHAR CIRCLE"
  />
 <Marker
    coordinate={{ latitude:26.781937, longitude:75.822563 }}
    title="JECRC COLLEGE"
  />



<MapViewDirections 
  origin = {loca} 
  destination={locb}
  apikey={GOOGLE_MAPS_APIKEY}
  />


<MapViewDirections
 origin = {locb} 
 destination={locc}
 apikey={GOOGLE_MAPS_APIKEY}
/>
<MapViewDirections 
  origin = {locc} 
  destination={locd}
  apikey={GOOGLE_MAPS_APIKEY}
  />
  <MapViewDirections 
  origin = {locd} 
  destination={loce}
  apikey={GOOGLE_MAPS_APIKEY}
  />
  <MapViewDirections 
  origin = {loce} 
  destination={locf}
  apikey={GOOGLE_MAPS_APIKEY}
  />

<MapViewDirections 
  origin = {locf} 
  destination={loch}
  apikey={GOOGLE_MAPS_APIKEY}
  />
<MapViewDirections 
  origin = {loch} 
  destination={loci}
  apikey={GOOGLE_MAPS_APIKEY}
  />
<MapViewDirections 
  origin = {loci} 
  destination={locj}
  apikey={GOOGLE_MAPS_APIKEY}
  />
<MapViewDirections 
  origin = {locj} 
  destination={lockk}
  apikey={GOOGLE_MAPS_APIKEY}
  />
<MapViewDirections 
  origin = {lockk} 
  destination={locl}
  apikey={GOOGLE_MAPS_APIKEY}
  />
<MapViewDirections 
  origin = {locl} 
  destination={locm}
  apikey={GOOGLE_MAPS_APIKEY}
  />
<MapViewDirections 
  origin = {locm} 
  destination={locn}
  apikey={GOOGLE_MAPS_APIKEY}
  />
  <MapViewDirections 
  origin = {locn} 
  destination={loco}
  apikey={GOOGLE_MAPS_APIKEY}
  />
  <MapViewDirections 
  origin = {loco} 
  destination={locp}
  apikey={GOOGLE_MAPS_APIKEY}
  />







</MapView>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});