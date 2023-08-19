import tw from 'tailwind-react-native-classnames';
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground} from 'react-native';
import React, { useState,useEffect } from 'react';
import MapView ,{Marker , Polyline} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_APIKEY} from '@env';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { FIREBASE_DB } from '../FirebaseConfig';
import { onValue, off, ref } from 'firebase/database';


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export default function Map3() {

    const name = [
        
        {text:'GANDHI NAGAR PULIYA'},
        {text:'CHITRAKOOT CHAURAHA'},
        {text:'AKSHAR DHAM'},
        {text:'SBI BANK'},
        {text:'NIRMAN NAGAR'},
        {text:'SHYAM NAGAR'},          
        {text:'SANJEEVANI HOSPITAL'},
        
        {text:'VIVEK VIHAR'},
        {text:'GURJAR KI THADI'}, 
        {text:'RIDDHI SIDDHI'},   

        {text:'TRIVENI NAGAR CHAURAHA'},
        {text:'GOPAL PURA CHOKI'},
        {text:' MAHAVEER NAGAR'},
        {text:'DURGAPURA ROAD'}, 
        
        {text:'JECRC COLLEGE'}, 
        {text:'END'}
        
     
      ];




      const [latitude, setLatitude] = useState(0);
      const [longitude, setLongitude] = useState(0);
    
      useEffect(() => {
        const db = FIREBASE_DB;
        const dbPath = 'user'; // Change this path to match your Firebase data structure
    
        const fetchData = () => {
          const databaseRef = ref(db, dbPath);
    
          onValue(databaseRef, (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const keys = Object.keys(data);
              const lastKey = keys[keys.length - 1];
              const latestData = data[lastKey];
              setLatitude(latestData.latitude);
              setLongitude(latestData.longitude);
            }
          });
        };
    
        // Fetch data initially
        fetchData();
    
        // Set up interval to fetch data every 15 seconds
        const intervalId = setInterval(fetchData, 30000);
    
        // Clean up interval and data listener when component unmounts
        return () => {
          clearInterval(intervalId);
          off(databaseRef);
        };
      }, []);












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
        latitude :26.886170,
        longitude : 75.744620,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locf: {
        latitude :26.880826,
        longitude :  75.766752,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
  
      loch: {
        latitude :26.889768,
        longitude :75.768554,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
     // loci: {
       // latitude :26.887194,
       // longitude :75.768246,
       // latitudeDelta: 0.005,
     //  longitudeDelta: 0.005,
     // },
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
        latitude :26.850098,
        longitude : 75.794182,
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
    
  const {loca,locb,locc,locd,loce,locf,loch,locj,lockk,locl,locm,locn,loco,locp,locq} = state
  
    return (
   <SafeAreaView>
        <View style={tw`flex:1`}>
          <View  style={tw`flex:1  h-1/2`}>
      
     
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
      coordinate={ loch }
      title=" SANJEEVANI HOSPITAL  "
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
    destination={loch}
    apikey={GOOGLE_MAPS_APIKEY}
    />
 
  <MapViewDirections 
    origin = {loch} 
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
    </View>


  
<View  style={tw`flex:1  h-1/2 bg-white `}>
<Text  style={tw` text-2xl top-2 text-center font-bold bg-current ` }>
  Route Details
</Text>
<View style={tw `border-t border-black mt-2`}></View>

<View  style={tw`aligned-center flex:1  rounded-half  top-4 justify-evenly justify-center h-3/4 bottom-32`}>

  <FlatList 

    data={name}
    keyExtractor={(inx) => inx.toString()}
    renderItem={({ item ,inx}) => (
    <View style={tw`text-center justify-center `}>

           {inx > 0 && <Text style={tw` mx-48 `}>•</Text>} 
           {inx > 0 && <Text style={tw` mx-48 `}>•</Text>} 
       <Text style={tw` mx-28 text-center bg-green-400 `}>{item.text}</Text>     
       <MIcon 
       style={tw` mx-28 bottom-5`}
       name="bus-stop" size={20} color="red" /> 

    </View>      
  )}


  />
</View>

    







  <View   style={tw` flex:1 rounded-full  bg-blue-300 h-1/4 bottom-11`}>
   <Icon style={tw`  top-8 left-2 absolute  `}
       name="user-circle" size={50} color="white" />
  
  <Text   style={tw` text-xl  text-center  font-bold ` }>
  
    Driver Details
    
  </Text>
 <Text  style={tw`  left-16` }>
  Name: Ram ji
 </Text>
 <Text  style={tw`  left-16` }>
  Contact no: 48942454
 </Text>
 <Text  style={tw`  left-16` }>
  Bus No: RJ14GC7643
 </Text>
 

  </View>

</View>
  </View>
  </SafeAreaView>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });




  
  
  