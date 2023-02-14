import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import Benefeciaries from '../screens/Benefeciaries/Benefeciaries';
import ProfilePage from '../screens/ProfilePage/ProfilePage';
import home from '../assets/images/Home.png';
import Transfer from '../assets/images/Transfer.png';
import Group from '../assets/images/Group.png';
import ATMLogo from "../assets/images/ATM.png";
import AirPayLogo from "../assets/images/AirPay.png"
import AirPay from '../screens/AirPay/AirPay';
import ATM from '../screens/ATM/ATM';
import Transaction from '../screens/Transactions/Transaction';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') {
            iconName = home;
          } else if (route.name === 'Transfer') {
            iconName = Transfer;
          } else if (route.name === 'Benefeciaries') {
            iconName = Group;
          }    
          else if (route.name === 'ATM') {
            iconName = ATMLogo;
          }   
          else if (route.name === 'AirPay') {
            iconName = AirPayLogo;
          }   
          return <Image source={iconName} />;
        },
        tabBarStyle: {backgroundColor: '#151A21', height: 70},
        tabBarItemStyle: {borderRadius: 10, margin: 5},
        tabBarLabelStyle: {marginBottom: 5, fontSize: 10},
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#202933',
        tabBarActiveBackgroundColor: '#007236',
        tabBarHideOnKeyboard:true,
      })}>
      <Tab.Screen name="Home" component={ProfilePage} />
      <Tab.Screen name="Transfer" component={Transaction} />
      <Tab.Screen name="Benefeciaries" component={Benefeciaries} />
      <Tab.Screen name="ATM" component={ATM} />
      <Tab.Screen name="AirPay" component={AirPay} />
     

    </Tab.Navigator>


  );
};

export default TabNavigator;
