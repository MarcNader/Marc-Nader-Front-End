import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import styles from './Congratulations.styles';
import CustomButton from '../../Components/CustomButton/CustomButton';

const Congratulations = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const Finish = () => {
    navigation.navigate('DrawerNavigator');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/Congratulations.png')}
      resizeMode="stretch"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.FirstRow}>
            <TouchableOpacity
              style={styles.BackButton}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/Back.png')} />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/BankLogo.png')}
              style={{marginTop: 20}}
            />
          </View>

          <View style={styles.Header}>
            <Text style={styles.HeaderTitle}>{t('Congratulations')}</Text>
            <Text style={styles.HeaderSubTitle}>
              {t(
                'You have successfully registered in NBE online banking service',
              )}
            </Text>
          </View>
        </View>

        <CustomButton
          text={'Finish'}
          onPress={Finish}
          CustomStyleContainer={{backgroundColor: 'orange'}}
        />
      </View>
    </ImageBackground>
  );
};

export default Congratulations;
