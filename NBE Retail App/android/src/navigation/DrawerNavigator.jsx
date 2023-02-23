
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from '../screens/ProfilePage/ProfilePage';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import {Image} from "react-native"
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const {t, i18n} = useTranslation();
  return (
    
<Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props}/>}
          screenOptions={{
            headerShown: false,
            drawerStyle:{borderTopRightRadius:40, backgroundColor:"#F1F3FB", borderBottomRightRadius:40}
          }} 
          >
       
        <Drawer.Screen name= {t('Account Summary')} component={TabNavigator} 
        options={{
            drawerIcon: ()=>{
                return(
                    <Image source={require("../assets/Icons/AccountSummary.png")}/>
                )
            },
        }} />
     
        <Drawer.Screen name={t("Customer Service")} component={ProfilePage}
         options={{
            drawerIcon: ()=>{
                return(
                    <Image source={require("../assets/Icons/AccountSummary.png")}/>
                )
            },
            // drawerItemStyle:{display:"none"}      //This is used to hide an item 
           
        }} />
</Drawer.Navigator>
  )
}

export default DrawerNavigator

