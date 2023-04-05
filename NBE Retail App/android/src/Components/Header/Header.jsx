import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './Header.styles';
import {useTheme} from '@react-navigation/native';
const Header = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const {colors} = useTheme();

  return (
    <View style={[styles.FirstRow, {backgroundColor: colors.background}]}>
      <View style={styles.FirstRowPart1}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../../assets/Icons/Drawer.png')} />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/Meshaly.png')}
          style={{marginHorizontal: 5, borderRadius: 10}}
        />
        <View style={styles.username}>
          <Text style={{color: colors.text}}>{t('Good morning,')}</Text>
          <Text style={{fontWeight: '700', color: colors.text}}>
            {t('Marc')}
          </Text>
        </View>
      </View>

      <View style={styles.FirstRowPart2}>
        <TouchableOpacity style={styles.Notification}>
          <Image source={require('../../assets/images/Notification.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
