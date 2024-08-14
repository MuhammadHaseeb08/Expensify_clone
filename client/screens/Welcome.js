import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
// import UserInput from '../components/UserInput'

const Welcome = ({ navigation }) => {
  return (
    <View className="">
    <View className=" bg-white h-full " >
      <View className=" flex justify-between my-4">
        
        <View className="flex-row justify-center">
            <Image source={require("../assets/images/welcome.gif")} style={{width:350,height:350}}/>
        </View>
        <Text className="text-black text-center text-4xl font-bold">
            Expensify
        </Text>
        <View>
            {/* <UserInput name={"SignUp"}/> */}
            <View className="space-y-2 my-2 ">
      {/* <Text className="text-blue-800">UserInput</Text> */}
      <TouchableOpacity 
        onPress={()=>{navigation.navigate("SignUp")}}
        className="bg-green-400 p-5  mx-5 rounded-xl">
          <Text className="font-bold text-xl text-white text-center  ">
           SignUp
          </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>{navigation.navigate("Login")}}
        className="bg-green-400  p-5  mx-5 rounded-xl">
          <Text className="font-bold text-xl text-center text-white  ">
           Sign In
          </Text>
      </TouchableOpacity>
    </View>
        
        </View>
       

      </View>
    </View>
    </View>
  )
}

export default Welcome