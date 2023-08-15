import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FIREBASE_DB } from '../FirebaseConfig';
import { onValue, off, ref } from 'firebase/database';
import tw from "tailwind-react-native-classnames";


const DriverMapView = () => {
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
      const intervalId = setInterval(fetchData, 10000);
  
      // Clean up interval and data listener when component unmounts
      return () => {
        clearInterval(intervalId);
        off(databaseRef);
      };
    }, []);
  
    return (
      <View style={ {flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title="Driver Location"
            description="Latest driver location"
          />
        </MapView>
      </View>
    );
  };
  
  export default DriverMapView;
  