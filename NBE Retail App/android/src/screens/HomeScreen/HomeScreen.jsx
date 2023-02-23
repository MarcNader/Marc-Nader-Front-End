import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import styles from './HomeScreen.styles';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Credentialsaction} from '../../Redux/Credentials';
import i18n from '../../l18n';
import {useTranslation} from 'react-i18next';
import store from '../../Redux/Store';
import PopUp from '../../Components/ActionSheet/PopUp';
import LangButton from '../../Components/LangButton/LangButton';
const HomeScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const loginUser = async (Username, Password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(Username, Password);
    } catch (error) {
      alert(error.message);
      return;
    }
    Alert.alert('Logged in', 'Login Successful !');

    navigation.navigate('MobileNumber');
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/images/Home-Background.png')}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.FirstRow}>
          <LangButton/>
          <Image
            source={require('../../assets/images/BankLogo.png')}
            style={{marginTop: 20, marginRight: 20}}
          />
        </View>

        <View style={{marginTop: 150, marginStart: 20, marginEnd: 20}}>
          <Text style={styles.SecondRow}>{t('Welcome to')}</Text>
          <Text style={styles.SecondRow}>{t('The National Bank')}</Text>
          <Text style={styles.SecondRow}>{t('of Egypt')}</Text>

          <View style={styles.CustomUsername}>
            <Image
              source={require('../../assets/images/atsign.png')}
              style={{marginTop: 13, marginLeft: 10}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 15, color: 'white'}}>
                {t('Username')}
              </Text>
              <TextInput
                style={{marginLeft: 15, padding: 0, color: 'white'}}
                onChangeText={username =>
                  store.dispatch(Credentialsaction.username(username))
                }
              />
            </View>
          </View>

          <View style={styles.CustomPassword}>
            <Image
              source={require('../../assets/images/password.png')}
              style={{marginTop: 13, marginLeft: 10}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 15, color: 'green'}}>
                {t('Password')}
              </Text>
              <TextInput
                onChangeText={password =>
                  store.dispatch(Credentialsaction.password(password))
                }
                secureTextEntry={true}
                style={{marginLeft: 15, padding: 0, color: 'green'}}
              />
            </View>
          </View>

          <View style={styles.CheckBoxSection}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Checkbox status="unchecked" color="red" />
              <Text style={{color: 'white', marginLeft: 5}}>
                {t('Check me')}
              </Text>
            </View>

            <Text style={{color: 'white'}}>{t('Forgot password?')}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.login}
              onPress={() =>
                loginUser(
                  store.getState().Credentials.Username,
                  store.getState().Credentials.Password,
                )
              }>
              <Text style={{color: 'white', fontSize: 15}}>{t('Log in')}</Text>
            </TouchableOpacity>

            <PopUp />
          </View>
         

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>{t("Don't have an account?")}</Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: '#F6A721',
                  textDecorationLine: 'underline',
                  marginStart: 5,
                }}>
                {t('Signup')}
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.Footer}>
          <View style={styles.FooterBody}>
            <Text style={{color: '#F6A721',fontWeight: 'bold'}}>
              {t('Contact Us')}
            </Text>
            <Text style={{color: '#F6A721', marginStart: 5,fontWeight: 'bold'}}>-</Text>
            <Text style={{color: '#F6A721', marginStart: 5,fontWeight: 'bold'}}>
              {t('FAQs')}
            </Text>
            <Text style={{color: '#F6A721', marginStart: 5,fontWeight: 'bold'}}>-</Text>
            <Text style={{color: '#F6A721', marginStart: 5,fontWeight: 'bold'}}>
              {t('Help')}
            </Text>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
              {t(
                'Copyright @ NBE 2021 All Rights Reserved - National Bank of Egypt',
              )}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;
