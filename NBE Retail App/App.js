import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTP from './android/src/screens/OTP/OTP';
import MobileNumber from './android/src/screens/MobileNumber/MobileNumber';
import Password from './android/src/screens/Password/Password';
import TabNavigator from './android/src/navigation/TabNavigator';
import HomeScreen from './android/src/screens/HomeScreen/HomeScreen';
import Congratulations from './android/src/screens/Congratulations/Congratulations';
import { firebase } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import SignUp from './android/src/screens/SignUp/SignUp';
import DrawerNavigator from './android/src/navigation/DrawerNavigator';
const Stack = createNativeStackNavigator();
const App= () => {
  // const [init,setInit]=useState(true);
  // const [user,setUser]=useState();

  // const onAuthStateChange=(user)=>{
  //     setUser(user);
  //     if(init) setInit(false);
  // } 

  // useEffect(()=>{
  //   const subscriber= firebase.auth().onAuthStateChanged(onAuthStateChange);
  //   return subscriber
  // }, [])

  return (
      <NavigationContainer>
        <Stack.Navigator  
          screenOptions={{
            headerShown: false
          }}
        initialRouteName="Home"  options={{ title: 'My home' }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="OTP" component={OTP}/>
            <Stack.Screen name="MobileNumber" component={MobileNumber}/>
            <Stack.Screen name="Password" component={Password}/>
            <Stack.Screen name="Congratulations" component={Congratulations}/>
            <Stack.Screen name="TabNavigator" component={TabNavigator}/>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>

      </Stack.Navigator>
      
    </NavigationContainer>
  
   
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
 
});

export default App;
