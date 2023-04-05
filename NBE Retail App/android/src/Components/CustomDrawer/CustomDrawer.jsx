import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LangButton from '../LangButton/LangButton';
import styles from './CustomDrawer.styles';
import LogOut from '../../assets/images/LogOut.png';
import PersonDetails from '../PersonDetails/PersonDetails';
import {firebase} from '@react-native-firebase/auth';
const CustomDrawer = props => {
  const User = {
    firstName: 'Marc',
    phoneNumber: '01223431361',
  };

  const SignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      alert(error.message);
      return;
    }
    console.log('USER IS SIGNED OUT');
    props.navigation.navigate('Login');
  };
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={styles.FirstRow}>
        <Image
          source={require('../../assets/images/BankLogo2.png')}
          style={{marginTop: 20}}
        />
        <LangButton />
      </View>

      <View style={styles.ItemsContainer}>
        <View style={styles.ItemsList}>
          <DrawerItemList {...props} />
        </View>

        <View style={styles.Footer}>
          <DrawerItem
            label={'Log Out'}
            onPress={() => SignOut()}
            labelStyle={styles.LogOutText}
            icon={() => {
              return <Image source={LogOut} />;
            }}
            activeTintColor={'orange'}
            activeBackgroundColor={'#007236'}
          />

          <PersonDetails
            item={User}
            CustomContainer={{
              marginHorizontal: 15,
              borderRadius: 29,
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
