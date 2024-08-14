import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { colour } from '../theme'
import { BackwardIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import axios from "axios"
import { ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { setUser } from '../store/store'
// import { setUser } from '../store/store'
import { useDispatch } from 'react-redux'


const AddTrip = () => {
    let navigation = useNavigation()
    let [agree, setAgree] = useState(false)
    let dispatch=useDispatch()
    const onSubmit = (data,e) => {
        // Do something with the form data
        // console.log(data);
        let sending = async () => {
            let resp = await axios.post("http://192.168.0.103:4000/login", { data })
            setAgree(true)
            if (resp.data.success == true) {
                alert("Account verified")
                 navigation.navigate("Home")
                //  console.log(resp.data.user);
                //  setUser(resp.data.user)
                 dispatch(setUser(resp.data.user))
                //  
               
                setAgree(false)

            } else {
                alert("An error is occuring")
                setAgree(false)
            }
        }
        sending()
        // e.target.reset();
    };
    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'onBlur' })
    return (
        <SafeAreaView className="">
            <View className=" flex-row justify-between px-5 pt-1">
                <TouchableOpacity onPress={() => navigation.goBack()} className=" bg-white rounded-full p-2 px-3 border border-gray-300">

                    <BackwardIcon color="black" />
                </TouchableOpacity>
                {/* <Text className={`${colour.heading} font-bold shadow-sm text-3xl `}>Add Trip</Text> */}


            </View>

            <View className="flex-row justify-center ">
                <Image source={require("../assets/images/login.png")} style={{ width: 250, height: 250 }} />
            </View>

            <View className="form space-y-5 p-6">



                <Controller
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Field is required!'
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Text className="text-gray-500 font-bold ">
                                Ener your Email
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
                    name="email"
                    defaultValue=""
                />
                {errors.name && <Text>{errors.name.message}</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Field is required!'
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Text className="text-gray-500 font-bold ">
                                Enter ypur password
                            </Text>

                            <TextInput
                                className="bg-white p-4 rounded-2xl text-gray-700 mt-2"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry
                            />
                        </View>
                    )}
                    name="password"
                    defaultValue=""
                />
                {errors.password && <Text>{errors.password.message}</Text>}
                <View className="space-y-5 mt-5 ">

                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        className="bg-green-400 p-4   rounded-xl">
                        {

                            agree ? <ActivityIndicator color="white" /> : <Text className="font-bold text-xl text-center  ">
                                Login
                            </Text>
                        }
                    </TouchableOpacity>
                </View>




            </View>
        </SafeAreaView>
    )
}

export default AddTrip