import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { colour } from '../theme'
import { useDispatch } from 'react-redux'
import {resetUser} from  "../store/store"
import { useNavigation } from '@react-navigation/native'


const Header = () => {
  let dispatch=useDispatch()
  let navigation =useNavigation()
  return (
    <View className=" flex-row justify-between px-5 pt-1">
      <Text className={`${colour.heading} font-bold shadow-sm text-3xl `}>Expensify</Text>
      <TouchableOpacity className=" bg-white rounded-full p-2 px-3 border border-gray-300"
        onPress={()=>{
          dispatch(resetUser())
          navigation.navigate("Login")

        }}
      >
        <Text >
          LogOut
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header