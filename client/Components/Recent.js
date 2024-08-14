import { View, Text,TouchableOpacity,FlatList,Image,RefreshControl } from 'react-native'
import React from 'react'
import randomImage from '../assets/images/randomImage'
import EmptylIst from './EmptylIst'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import axios from 'axios'
// import {useState} from "react"
import { useState } from 'react'
import {useSelector} from "react-redux"


const Recent = ({}) => {

  let [alltrips,setATrips] = useState([])
  let [agree,setagree]=useState(false)
  let [fetch,setfetch]=useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const navigation=useNavigation()
  let user= useSelector((store)=>{
    return store.user

  })
  let getting= async()=>{
    try {
      let resp= await axios.get("http://192.168.0.103:4000/trips")
      // console.log(resp.data);
      if (resp.data.success==true) {
          setATrips(resp.data.founded)
         
        
      }else{
        setATrips([])
      }
    } catch (error) {
      
    }

  }
  const onRefresh = async () => {
    setRefreshing(true);
    await getting();
    setRefreshing(false);
  };
  

  useEffect(() => {
   
    
    getting()
    // console.log(alltrips);
   
  }, [])

  let filterd=alltrips.filter((item)=>{
    if (item.userId==user._id) {
     return true
    }
   })

  //  console.log(filterd);
    let trips=[
        {
            id:1,
            place:"Gujrat",
            Country:"Pakistan"
        },
        {
            id:2,
            place:"australai",
            Country:"Pakistan"
        },
        {
            id:3,
            place:"Gujrat",
            Country:"Pakistan"
        }, {
            id:4,
            place:"Gujrat",
            Country:"Pakistan"
        },
        {
            id:4,
            place:"Gujrat",
            Country:"Pakistan"
        }, {
            id:4,
            place:"Gujrat",
            Country:"Pakistan"
        }, {
            id:4,
            place:"Gujrat",
            Country:"Pakistan"
        },
    ]
  return (
    <View>
      <View className="flex-row justify-between px-4 pb-2">
        <Text className="font-bold text-xl">
            Recent Trips
        </Text>

        <TouchableOpacity onPress={()=>navigation.navigate("AddTrip")} className=" bg-white rounded-full p-2 shadow-lg px-3 border border-gray-300">
        <Text >
          Add trip
        </Text>
      </TouchableOpacity>
      </View>

      {alltrips? <View style={{height:430}}>
        <FlatList
        data={filterd}
        ListEmptyComponent={<EmptylIst/>}
        numColumns={2}
        keyExtractor={item=>item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
           return(
            <View className="bg-white rounded-2xl m-2 p-2 ">
            <TouchableOpacity onPress={()=>{navigation.navigate("TripExpense",{...item});  setfetch(!fetch)}}>
                <View className="text-center items-center">
                    <Image source={randomImage()} className=" mb-2 p-3"  style={{width:150,height:100}}/>
                    <Text className="font-bold text-md">{item.country}</Text>
                    <Text className="text-sm">{item.city}</Text>

                </View>
            </TouchableOpacity>
            </View>

           )
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        
        
        />
      </View>:""}
     
    </View>
  )
}

export default Recent