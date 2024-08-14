import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colour } from '../theme'
import Header from '../Components/Header'
import ImageH from "../Components/Image"
import Recent from '../Components/Recent'
import { StatusBar } from 'expo-status-bar';
import { BackwardIcon } from "react-native-heroicons/solid"
// import Expense from "../"
import ExpenseCard from "../Components/ExpenseCard"
import EmptylIst from '../Components/EmptylIst'
import { useNavigation } from '@react-navigation/native'
// import BackButton from '../components/backButton


const TripExpense = (props) => {
  // console.log(props.route.params);
  const navigation=useNavigation()
  const {country,city,_id,expenses}=props.route.params

 // for dummy expense
  
  return (
    <SafeAreaView className="flex-1 mt-10 ">
      <StatusBar style='auto' />
      <View className="relative mt-5 " >
        <View className="absolute top-2 left-5 z-10">
        <TouchableOpacity onPress={() => navigation.goBack()} className=" bg-white rounded-full p-2 px-3 border border-gray-300">

<BackwardIcon color="black" />
</TouchableOpacity>
        </View>
        <View>
            <Text className={`${colour.heading} text-xl font-thick text-center`}>{city}</Text>
            <Text className={`${colour.heading} text-lg font-thin text-center`}>{country}</Text>
        </View>
        
</View> 
      <View className=" m-4 rounded-xl">

        <View className="flex-row justify-center">
          <Image source={require("../assets/images/7.png")} style={{ width: 300, height: 300 }} />
        </View>
      </View>
      <View>
        <View>
          <View className="flex-row justify-between px-4 pb-2">
            <Text className="font-bold text-xl">
              Expenses
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("AddExpense",{_id})} className=" bg-white rounded-full p-2 shadow-lg px-3 border border-gray-300">
              <Text >
                Add Expenses
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              data={expenses}
              ListEmptyComponent={<EmptylIst />}

              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <ExpenseCard item={item} />

                )
              }}

            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TripExpense

{/* <View className="px-4">
<View className="relative mt-5">
        <View className="absolute top-2 left-0 z-10">
            <BackButton />
        </View>
        <View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>{place}</Text>
            <Text className={`${colors.heading} text-xs text-center`}>{country}</Text>
        </View>
        
</View> */}