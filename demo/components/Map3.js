import React, { Component, useState, useRef} from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";


export default function Map3() {
    const [state ] = useState({
      loca : {
        latitude :26.932834,
        longitude : 75.730969,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locb :   {
        latitude:26.905868,
        longitude:75.728948,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locc: {
        latitude :26.897922,
        longitude : 75.732448,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locd: {
        latitude :26.890439,
        longitude : 75.736289,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loce: {
        latitude :26.879623,
        longitude : 75.743379,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locf: {
        latitude :26.880826,
        longitude :  75.766752,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locg: {
        latitude :26.834543,
        longitude : 75.836525,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loch: {
        latitude :26.850881,
        longitude :75.754853,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loci: {
        latitude :26889481.,
        longitude :75.758655,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locj: {
        latitude :26.888786,
        longitude :75.768446,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      lockk: {
        latitude : 26.880836,
        longitude : 75.766727,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locl: {
        latitude :26.873638,
        longitude : 75.776497,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locm: {
        latitude :26.868604,
        longitude : 75.783787,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locn: {
        latitude :26.862836,
        longitude :75.792737,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loco: {
        latitude :26.852188,
        longitude : 75.786238,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locp: {
        latitude :26.841261,
        longitude :75.793624 ,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
    
      locq: {
        latitude :26.781937,
        longitude : 75.822563,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      
  
    })
    
  const {loca,locb,locc,locd,loce,locf,locg,loch,loci,locj,lockk,locl,locm,locn,loco,locp,locq} = state
  
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
      coordinate={loca}
      title="GANDHI NAGAR PULIYA"
    />
    <Marker
      coordinate={locb}
      title="CHITRAKOOT CHAURAHA"
    />
  <Marker
      coordinate={ locc}
      title="AKSHAR DHAM "
    />
  <Marker
      coordinate={ locd}
      title="SBI BANK"
    />
  <Marker
      coordinate={ loce }
      title="NIRMAN NAGAR"
    />
  <Marker
      coordinate={ locf }
      title=" SHYAM NAGAR"
    />
  <Marker
      coordinate={locg }
      title="LAZIZ RESTAURANT"
    />
  <Marker
      coordinate={ loch }
      title=" SANJEEVANI HOSPITAL  "
    />
    <Marker
      coordinate={ loci}
      title=" DAVI NAGAR"
    />
    <Marker
      coordinate={locj}
      title="VIVEK VIHAR "
    />
    <Marker
      coordinate={lockk}
      title="GURJAR KI THADI"
    />
    <Marker
      coordinate={locl}
      title="RIDDHI SIDDHI"
    />
    <Marker
      coordinate={locm}
      title="TRIVENI NAGAR CHAURAHA"
    />
    <Marker
      coordinate={locn}
      title="GOPAL PURA CHOKI"
    />
  
   <Marker
      coordinate={loco}
      title=" MAHAVEER NAGAR"
    />
  
  <Marker
      coordinate={locp}
      title=" DURGAPURA ROAD "
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
    destination={locg}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {locg} 
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
   <MapViewDirections 
    origin = {locp} 
    destination={locq}
    apikey={GOOGLE_MAPS_APIKEY}
    />
 
  
  
  
  </MapView>
  
    );
  };
  
  
  