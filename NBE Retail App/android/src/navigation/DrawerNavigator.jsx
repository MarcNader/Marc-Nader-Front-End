
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from '../screens/ProfilePage/ProfilePage';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import {  Image} from "react-native"

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    
<Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props}/>}
          screenOptions={{
            headerShown: false,
            drawerStyle:{borderTopRightRadius:40, backgroundColor:"#F1F3FB"}
          }} 
          >
        
        <Drawer.Screen name="Account Summary" component={TabNavigator} 
        options={{
            drawerIcon: ()=>{
                return(
                    <Image source={require("../assets/Icons/AccountSummary.png")}/>
                )
            },
        }} />
        <Drawer.Screen name="Customer Service" component={ProfilePage}
         options={{
            drawerIcon: ()=>{
                return(
                    <Image source={require("../assets/Icons/AccountSummary.png")}/>
                )
            },
            drawerItemStyle:{display:"none"}
           
        }} />
</Drawer.Navigator>
  )
}

export default DrawerNavigator

