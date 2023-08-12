import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ChevronLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  

  return (
    
    <View  style={tw` p-1   top-7`} >
         <View style={tw`   top-1 m-2 bg-blue-300 `}>
        <TouchableOpacity
           onPress={() => navigation.navigate('Map1')}
                        style={{ 
                            marginRight: 329,
                            justifyContent:'flex-start', 
                           
                            backgroundColor: 'rgba(255,255,255, 0.2)',
                            
                            borderColor: 'white',
                            marginLeft: 7 ,
                            marginTop:8
                            

                        }}
                       
                    >
                            <ChevronLeftIcon style={{color: 'white', marginLeft: 3 }} />
                    </TouchableOpacity>
          
        

   
        <Text style={tw` bottom-4 text-center justify-evenly text-3xl  font-bold`}> Select Route </Text>
    </View>


    <View style={{ marginTop: 35}} >
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 7 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute  `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>1</Text>  
       <Text style={tw`top-9 `} >NIRWARU - JECRC </Text> 
           
    </View>
   
    {/* <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> */}

      <TouchableOpacity    
       
       >
        <View>
      <Icon  style={tw `bg-gray-100 absolute top-0  right-10`}
       name="location-arrow" size={28} color="black" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-12 right-4 `}>TRACK</Text>
       </View>
       </TouchableOpacity>
       <View style={tw `border-t border-black mt-10`}></View>

    </View>
  
    <View>
    
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 77 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>2</Text>  
       <Text style={tw`top-9 `} >MEENA PETROL PUMP - JECRC</Text>      
    </View>
   

   
    <TouchableOpacity
>
      <View>
      <Icon  style={tw `bg-gray-100  absolute  flex-1  mr-7  right-4`}
       name="location-arrow" size={28} color="black" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-7 right-4 mr-12 `}>TRACK</Text>
       </View>
 </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
      
    </View>

    <View>
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 77 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>3</Text>  
       <Text style={tw`top-9 `} >NIRWARU - JECRC </Text>      
    </View>

    <TouchableOpacity>
<Icon  style={tw `bg-gray-100  absolute z-30 mr-7 right-4 `}
 name="location-arrow" size={28} color="black" />
  <Text style={tw `bg-gray-100  absolute z-30 mr-7 right-4 mr-12 `}>TRACK</Text>
 
 </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
</View>

<View>
<View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 77 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>3</Text>  
       <Text style={tw`top-9 `} >NIRWARU - JECRC </Text>      
    </View>

<TouchableOpacity>
<View>

<Icon  style={tw `bg-gray-100  absolute z-50 mr-7 right-4 `}
 name="location-arrow" size={28} color="black" />
 <Text style={tw `bg-gray-100  absolute z-30 mr-7 right-4 mr-12 `}>TRACK</Text>
 </View>
 </TouchableOpacity> 
 <View style={tw `border-t border-black mt-10`}></View>

</View>


    {/* <View  style={tw` h-3/4  top-10 bottom-20 `}> */}
    {/* <FlatList 
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
    <View style={{ flexDirection: 'row' , alignItems: 'center' }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name={item.icon} size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>{item.name} </Text>  
       <Text style={tw`top-9 `} >{item.text}</Text>      
    </View>
  )}
 
  ItemSeparatorComponent={ItemSeparator}/> */}

      {/* </View>   */}
    </View> 
  )
}

export default HomeScreen;