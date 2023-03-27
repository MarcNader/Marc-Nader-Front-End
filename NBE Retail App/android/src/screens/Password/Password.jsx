import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './Password.styles';
import {useTranslation} from 'react-i18next';
import CustomLogoField from '../../Components/CustomLogoField/CustomLogoField';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Lock from '../../assets/images/Lock.png';

const Password = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const Submit = () => {
    navigation.navigate('Congratulations');
  };
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

        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderTitle}>{t('Verification')}</Text>
          <Text style={styles.SubHeaderTitle}>{t('Verify Password')}</Text>

          <CustomLogoField Logo={Lock} Input={'Password'} Password={true} />
          <CustomLogoField
            Logo={Lock}
            Input={'Confirm Password'}
            Password={true}
          />
        </View>
      </View>

      {/* <TouchableOpacity
        style={styles.CustomSubmit}
        onPress={() => navigation.navigate('Congratulations')}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
          {t('Submit')}
        </Text>
      </TouchableOpacity> */}
      <CustomButton text={'Submit'} onPress={Submit} />
    </View>
  );
};

export default Password;
