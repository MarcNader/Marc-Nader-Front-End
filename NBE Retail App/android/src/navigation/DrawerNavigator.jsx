import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfilePage from '../screens/ProfilePage/ProfilePage';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import {Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Dimensions} from 'react-native';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const {t, i18n} = useTranslation();
  const Width = Dimensions.get('window').width;
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderTopRightRadius: 40,
          backgroundColor: '#F1F3FB',
          borderBottomRightRadius: 40,
          width: (Width * 85) / 100,
        },
        drawerActiveBackgroundColor: '#007236',
        drawerActiveTintColor: 'orange',
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 18,
        },
        drawerItemStyle: {borderRadius: 13},
        drawerStatusBarAnimation: 'slide',
      }}>
      <Drawer.Screen
        name={t('Account Summary')}
        component={TabNavigator}
        options={{
          drawerIcon: () => {
            return (
              <Image source={require('../assets/Icons/AccountSummary.png')} />
            );
          },
        }}
      />

      <Drawer.Screen
        name={t('Customer Service')}
        component={ProfilePage}
        options={{
          drawerIcon: () => {
            return (
              <Image source={require('../assets/Icons/AccountSummary.png')} />
            );
          },
          // drawerItemStyle: {display: 'none'}, //This is used to hide an item
        }}
      />

      {/* <Drawer.Screen
        name={t('Log Out')}
        component={ProfilePage}
        options={{
          drawerIcon: () => {
            return <Image source={require('../assets/images/LogOut.png')} />;
          },
          // drawerItemStyle: {display: 'none'}, //This is used to hide an item
          drawerItemStyle: {marginTop: 350},
          drawerLabelStyle: {color: '#EB001B', marginLeft: -20, fontSize: 18},
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
