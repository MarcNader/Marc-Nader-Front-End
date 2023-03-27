import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './OTP.styles';
import {useTranslation} from 'react-i18next';
import CustomButton from '../../Components/CustomButton/CustomButton';

const OTP = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const Submit = () => navigation.navigate('Password');
  return (
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

        <View style={{marginTop: 15}}>
          <Text style={styles.header}>{t('Verification')}</Text>
          <Text style={{color: 'gray', fontSize: 16}}>
            {t('Enter 5 digit code we sent to +201011315412')}
          </Text>
          <View style={styles.OTPContainer}>
            <OTPInputView
              style={{
                width: 340,
                height: 100,
                marginEnd: 21,
                borderColor: 'black',
              }}
              pinCount={5}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              placeholderCharacter="-"
              placeholderTextColor="gray"
            />
          </View>

          <Text style={{color: 'gray', fontSize: 15}}>
            {t("Didn't receive the code?")}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>
            {t('Request new one in 00:12')}
          </Text>
        </View>
      </View>

      <CustomButton text={'Submit'} onPress={Submit} />
    </View>
  );
};

export default OTP;
