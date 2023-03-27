import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  I18nManager,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './SignUp.styles';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import i18n from '../../l18n';
import {useTranslation} from 'react-i18next';
import CustomLogoField from '../../Components/CustomLogoField/CustomLogoField';
import atsign from '../../assets/images/atsign.png';
import Lock from '../../assets/images/Lock.png';
import LangButton from '../../Components/LangButton/LangButton';
const SignUp = ({navigation}) => {
  const [Username, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const {t, i18n} = useTranslation();

  const todo = firebase.firestore().collection('Users');

  const SignUpUser = async (Username, Password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(Username, Password);
      await todo
        .add({
          Email: Username,
        })
        .then(() => {
          alert('All good');
        });
    } catch (error) {
      alert(error.message);
      return;
    }

    navigation.navigate('MobileNumber');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Home-Background.png')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView>
        <View style={styles.FirstRow}>
          <LangButton />
          <Image
            source={require('../../assets/images/BankLogo.png')}
            style={{marginTop: 20, marginRight: 20}}
          />
        </View>

        <View style={{marginTop: 150, marginStart: 20, marginEnd: 20}}>
          <Text style={styles.SecondRow}>{t('Welcome to')}</Text>
          <Text style={styles.SecondRow}>{t('The National Bank')}</Text>
          <Text style={styles.SecondRow}>{t('of Egypt')}</Text>

          <CustomLogoField
            setField={setUserName}
            Logo={atsign}
            Input={'Username'}
          />

          <CustomLogoField
            setField={setPassword}
            Logo={Lock}
            Input={'Password'}
            Password={true}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={styles.Signup}
              onPress={() => SignUpUser(Username, Password)}>
              <Text style={{color: 'white', fontSize: 15}}>{t('Signup')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: '14%'}}>
              <Image source={require('../../assets/images/fingerprint.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUp;
