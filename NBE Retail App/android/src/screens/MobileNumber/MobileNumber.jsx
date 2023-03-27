import {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './MobileNumber.styles';
import {useTranslation} from 'react-i18next';
import CustomLogoField from '../../Components/CustomLogoField/CustomLogoField';
import Mobile from '../../assets/images/Mobile.png';
import CustomButton from '../../Components/CustomButton/CustomButton';
const MobileNumber = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  // Handle the button press

  const signInWithPhoneNumber = async () => {
    // try {
    //   const confirmation = await auth().signInWithPhoneNumber("+1-555-123-4567");
    //   setConfirm(confirmation);
    //   console.log("confirmed");
    //   navigation.navigate('OTP');
    // } catch (error) {
    //   alert(error.message);
    // }

    navigation.navigate('OTP');
  };
  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }
  // if (!confirm) {
  //   ()=> {
  //     return signInWithPhoneNumber('+20 01223431361')
  //   }
  // }

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.FirstRow}>
            <TouchableOpacity
              style={styles.BackButton}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/Back.png')} />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/BankLogo2.png')}
              style={{marginTop: 20}}
            />
          </View>

          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderTitle}>{t('Verification')}</Text>
            <Text style={styles.SubHeaderTitle}>
              {t('Please enter your mobile number')}
            </Text>
            <CustomLogoField Logo={Mobile} Input={'Mobile Number'} />
          </View>
        </View>

        <CustomButton text={'Submit'} onPress={signInWithPhoneNumber} />
      </View>
    </ScrollView>
  );
};

export default MobileNumber;
