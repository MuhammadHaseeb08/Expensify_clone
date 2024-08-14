import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colour } from '../theme'
import { BackwardIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

const AddTrip = (props) => {
    console.log(props.route.params);
    let [agree,setAgree]=useState(false)
    let navigation = useNavigation()
    let id= props.route.params._id
    let [cat,setCat]=useState("")
    const onSubmit = data => {
        // Do something with the form data
        let expense={
          ...data,
          cat
        }
        let sending=async()=>{

            try {
             let resp= await axios.post("http://192.168.0.103:4000/addExpense",{expense,id})
             setAgree(true)
             if (resp.data.success==true) {
                 alert("Expense added")
                 navigation.navigate("Home")
                 setAgree(false)
                 
             }else{
                 alert("An error is occuring")
                 setAgree(false)
             }
            } catch (error) {
                 console.log(error);
            }
         }
         sending()
      };
      let categories=[
        
        {
          name:"food",
          value:"food",
        },
        {
          name:"commute",
          value:"commute",
        },
        {
          name:"shopping",
          value:"shopping",
        },
        {
          name:"entertainment",
          value:"entertainment",
        },
        {
          name:"other",
          value:"other",
        },


    ]
 
      
    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'onBlur' })
    return (
        <SafeAreaView className="">
            <View className=" flex-row justify-between px-5 pt-1 mt-10">
                <TouchableOpacity onPress={() => navigation.goBack()} className=" bg-white rounded-full p-2 px-3 border border-gray-300">

                    <BackwardIcon color="black" />
                </TouchableOpacity>
                {/* <Text className={`${colour.heading} font-bold shadow-sm text-3xl `}>Add Expense</Text>z */}


            </View>

            <View className="flex-row justify-center mt-5">
                <Image source={require("../assets/images/4.png")} style={{ width: 250, height: 250 }} />
            </View>
            {/* <View className=" form space-y-5 p-6">
                    <Text className="text-gray-500 font-bold">
                        Where on Planet
                    </Text>
                    <TextInput
                        className="bg-white p-4 rounded-2xl text-gray-700"
                       
                        placeholder=''

                    />


                    <View>
                        <Text className="text-gray-500 font-bold ">
                            Which City
                        </Text>
                        <TextInput
                            className="bg-white p-4 rounded-2xl text-gray-700 mt-2"
                            
                            placeholder=''
                            

                        />
                    </View>


                    <View className="space-y-5 mt-5 ">
                        
                        <TouchableOpacity

                            className="bg-green-400 p-4   rounded-xl">
                            <Text className="font-bold text-xl text-center  ">
                               Add your Trip
                            </Text>
                        </TouchableOpacity>
                    </View>

                    
                </View> */}
            <View className="form space-y-5 p-6">



                <Controller
                    control={control}
                    rules={{  required: {
                        value: true,
                        message: 'Field is required!'
                      } }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Text className="text-gray-500 font-bold ">
                                  Descripton
                            </Text>
                            <TextInput
                                className="bg-white p-4 rounded-2xl text-gray-700 mb-5 mt-2"
                                placeholder=""
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="desc"
                    defaultValue=""
                />
                {errors.username && <Text>{errors.name.message}</Text>}

                <Controller
                    control={control}
                    rules={{  required: {
                        value: true,
                        message: 'Field is required!'
                      } }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                             <Text className="text-gray-500 font-bold ">
                             How Much
                            </Text>
                           
                        <TextInput
                            className="bg-white p-4 rounded-2xl text-gray-700 mt-2"
                           
                            dataDetectorTypes={"phoneNumber"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                         </View>
                    )}
                    name="amount"
                    defaultValue=""
                />

                <View className="flex-row flex-wrap items-center">
                   {
                    categories.map((item)=>{
                      let bg="bg-white"
                      if (item.value==cat) {
                        bg="bg-green-200"
                      }
                      return (
                        <TouchableOpacity className={`${bg} px-4 p-3 mb-2 mr-2 rounded-full`} onPress={()=>{setCat(item.value)}}><Text>{item.name}</Text></TouchableOpacity>
                      )
                    })
                   }   
                </View>
                {errors.password && <Text>{errors.password.message}</Text>}
                <View className="space-y-5 mt-5 ">
                        
                        <TouchableOpacity
                            onPress={handleSubmit(onSubmit)}
                            className="bg-green-400 p-4   rounded-xl">
                            <Text className="font-bold text-xl text-center  ">
                               Add Expense
                            </Text>
                        </TouchableOpacity>
                    </View>




            </View>
        </SafeAreaView>
    )
}

export default AddTrip