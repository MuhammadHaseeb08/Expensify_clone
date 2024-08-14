import { View, Text } from 'react-native'
import React from 'react'
import { categoryBG } from '../theme'

const ExpenseCard = ({item}) => {
  return (
    <View style={{backgroundColor:categoryBG[item.cat]}} className="  m-5 rounded-xl flex-row justify-between p-3 px-5">
        <View >
        <Text className="font-bold text-lg">{item.desc}</Text>
      <Text className="text-gray-600">{item.cat}</Text>
        </View>
     
      <Text className="font-bold text-lg text-gray-600">{item.amount}</Text>


    </View>
  )
}

export default ExpenseCard