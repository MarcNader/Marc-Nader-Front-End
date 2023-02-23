import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './Comgratulations.styles'

const Congratulations = ({navigation}) => {
  const {t, i18n}= useTranslation();

  return (
    <ImageBackground
      source={require('../../assets/images/Congratulations.png')}
      resizeMode="stretch"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.FirstRow}>
            <Image
              source={require('../../assets/images/BankLogo.png')}
              style={{marginTop: 20}}
            />
          </View>

          <View
            style={{marginTop: 15, marginStart: 25, flexDirection: 'column'}}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              {t("Congratulations")}
            </Text>
            <Text style={{color: 'white', fontSize: 16}}>
              {t("You have successfully registered in NBE online banking service")}
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 0,
              }}></View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.CustomSubmit}
          onPress={() => navigation.navigate('DrawerNavigator')}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
            {t("Submit")}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Congratulations;
