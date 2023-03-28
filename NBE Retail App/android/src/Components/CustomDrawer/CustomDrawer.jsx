import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LangButton from '../LangButton/LangButton';
import styles from './CustomDrawer.styles';
import LogOut from '../../assets/images/LogOut.png';
import PersonDetails from '../PersonDetails/PersonDetails';
import TabNavigator from '../../navigation/TabNavigator';
const CustomDrawer = props => {
  const User = {
    firstName: 'Marc',
    phoneNumber: '01223431361',
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

      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          flexDirection: 'column',
        }}>
        <View style={styles.ItemsList}>
          <DrawerItemList {...props} />
          {/* <DrawerItemList /> */}
        </View>

        <View style={styles.Footer}>
          <TouchableOpacity style={styles.LogOutContainer}>
            <Image source={LogOut} />
            <Text style={styles.LogOutText}>Log Out</Text>
          </TouchableOpacity>
          <PersonDetails item={User} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
