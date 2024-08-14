import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from "./screens/MyStack"
import { Provider } from 'react-redux';
import meraStore from './store/store';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <Provider store={meraStore}>
    <NavigationContainer>
    <View className="flex-1 ">
      

      <MyStack/>
      
    </View>
    </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    //   <Text className="text-red-700">sdf</Text>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
