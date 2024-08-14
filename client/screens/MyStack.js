import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import AddTrip from './AddTrip';
import TripExpense from "./TripExpenses"
import AddExpense from "./AddExpense"
import Welcome from './Welcome';
import SignUp from "./SignUp"
import Login from "./Login"


const MyStack = () => {
    const Stack = createNativeStackNavigator();
  return (
   
         <Stack.Navigator>
      <Stack.Screen name="Welcome" options={{headerShown:false }} component={Welcome} />
      <Stack.Screen name="Home" options={{headerShown:false }} component={Home} />
      <Stack.Screen name="SignUp" options={{headerShown:false }} component={SignUp} />
      <Stack.Screen name="Login" options={{headerShown:false }} component={Login} />





      <Stack.Screen name="AddTrip" options={{headerShown:false }} component={AddTrip} />
      <Stack.Screen name="TripExpense" options={{headerShown:false }} component={TripExpense} />
      <Stack.Screen name="AddExpense" options={{headerShown:false }} component={AddExpense} />



      </Stack.Navigator>
    
  )
}

export default MyStack