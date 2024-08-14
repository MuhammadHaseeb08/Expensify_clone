import { View, Text ,Image} from 'react-native'
import React from 'react'

const EmptylIst = () => {
  return (
    <View className="flex-row justify-center m-10">
    <Image source={require("../assets/images/empty.png")} style={{width:250,height:200}}/>
</View>
  )
}

export default EmptylIst