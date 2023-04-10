import SplashScreen from 'react-native-splash-screen';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OTP from './android/src/screens/OTP/OTP';
import MobileNumber from './android/src/screens/MobileNumber/MobileNumber';
import Password from './android/src/screens/Password/Password';
import TabNavigator from './android/src/navigation/TabNavigator';
import HomeScreen from './android/src/screens/HomeScreen/HomeScreen';
import Congratulations from './android/src/screens/Congratulations/Congratulations';
import {firebase} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import SignUp from './android/src/screens/SignUp/SignUp';
import DrawerNavigator from './android/src/navigation/DrawerNavigator';
import store from './android/src/Redux/Store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const scheme = useColorScheme();
  const CustomDark = {
    dark: true,
    colors: {
      primary: 'rgba(255, 255, 255, 0.05)',
      // secondary: ' rgba(255, 255, 255, 0.05)',
      background: 'rgba(31, 41, 51, 1)',
      card: 'rgb(255, 255, 255)',
      text: 'white',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  const CustomDefault = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'rgba(241, 243, 251, 1)',
      card: 'rgba(241, 243, 251, 1)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={scheme === 'dark' ? CustomDark : CustomDefault}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
          options={{title: 'Login Screen'}}>
          <Stack.Screen name="Login" component={HomeScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="MobileNumber" component={MobileNumber} />
          <Stack.Screen name="Password" component={Password} />
          <Stack.Screen name="Congratulations" component={Congratulations} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
