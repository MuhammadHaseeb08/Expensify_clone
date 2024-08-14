import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colour } from '../theme'
import Header from '../Components/Header'
import ImageH from "../Components/Image"
import Recent from '../Components/Recent'
import { StatusBar } from 'expo-status-bar';


const Home = () => {
  return (
    <SafeAreaView className="flex-1 mt-10 ">
         <StatusBar style='dark'/>
      <Header/>
      <View className="bg-gray-400 m-4 rounded-xl">

      <ImageH/>
      </View>
      <View>
        <Recent/>
      </View>
    </SafeAreaView>
  )
}

export default Home