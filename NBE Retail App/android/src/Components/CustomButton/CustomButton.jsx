import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CustomButton.styles';
import {useTranslation} from 'react-i18next';

const CustomButton = ({onPress, CustomStyleContainer, CustomText, text}) => {
  const {t, i18n} = useTranslation();

  return (
    <TouchableOpacity
      style={[styles.ButtonBody, CustomStyleContainer]}
      onPress={() => onPress()}>
      <Text style={[styles.ButtonText, CustomText]}>{t(text)}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
