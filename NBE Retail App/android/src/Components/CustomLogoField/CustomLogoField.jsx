import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './CustomLogoField.style';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import HidePass from '../../assets/images/Password.png';

const CustomLogoField = ({
  setField,
  Logo,
  Input,
  Password,
  CustomStyleFocus,
  CustomStyleBlur,
}) => {
  const {t, i18n} = useTranslation();
  const [focus, setFocus] = useState(false);
  const [hide, setHide] = useState(Password);
  return (
    <View
      style={
        focus
          ? [styles.FocusedContainer, CustomStyleFocus]
          : [styles.UnfocusedContainer, CustomStyleBlur]
      }>
      <Image source={Logo} style={styles.Logo} />

      <View style={styles.SecondPart}>
        <View style={styles.TitleWrapper}>
          <Text style={focus ? styles.FocusedTitle : styles.UnfocusedTitle}>
            {t(Input)}
          </Text>

          <TextInput
            style={focus ? styles.FocusedInput : styles.UnfocusedInput}
            onChangeText={setField ? username => setField(username) : () => {}}
            onFocus={() => {
              setFocus(true);
            }}
            secureTextEntry={hide}
          />
        </View>
        {Password && (
          <TouchableOpacity onPress={() => setHide(!hide)}>
            <Image
              source={HidePass}
              style={{marginRight: 10, marginBottom: 5}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomLogoField;
