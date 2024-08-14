import { View, Text,Image } from 'react-native'
import React from 'react'

export default function ImageH() {
  return (
    <View className="flex-row justify-center">
    <Image source={require("../assets/images/banner.png")} style={{width:250,height:200}}/>
</View>
  )
}