import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { colour } from '../theme'
import { BackwardIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import {useSelector} from "react-redux"
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import axios from 'axios'

const AddTrip = () => {
    let navigation = useNavigation()
    let [agree,setAgree]=useState(false)

    let user=useSelector((store)=>{
        return store.user
    })
    let userId=user._id
    // console.log(user);
    const onSubmit = data => {
        // Do something with the form data
        let trip={
            ...data,
            userId
        }
        let sending=async()=>{

            try {
             let resp= await axios.post("http://192.168.0.103:4000/addTrip",{trip})
             setAgree(true)
             if (resp.data.success==true) {
                 alert("Trip added")
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
                <Text className={`${colour.heading} font-bold shadow-sm text-3xl `}>Add Trip</Text>


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
                                  Which Country
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
                    name="country"
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
                             Which City
                            </Text>
                           
                        <TextInput
                            className="bg-white p-4 rounded-2xl text-gray-700 mt-2"
                           
                            
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                         </View>
                    )}
                    name="city"
                    defaultValue=""
                />
                {errors.password && <Text>{errors.password.message}</Text>}
                <View className="space-y-5 mt-5 ">
                        
                        <TouchableOpacity
                            onPress={handleSubmit(onSubmit)}
                            className="bg-green-400 p-4   rounded-xl">
                            <Text className="font-bold text-xl text-center  ">
                               Add your Trip
                            </Text>
                        </TouchableOpacity>
                    </View>




            </View>
        </SafeAreaView>
    )
}

export default AddTrip