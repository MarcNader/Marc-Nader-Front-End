import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CustomButton.styles';
import {useTranslation} from 'react-i18next';

const CustomButton = ({onPress, CustomContainer, CustomText, text}) => {
  const {t, i18n} = useTranslation();

  return (
    <TouchableOpacity
      style={[styles.ButtonBody, CustomContainer]}
      onPress={() => onPress()}>
      <Text style={[styles.ButtonText, CustomText]}>{t(text)}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
