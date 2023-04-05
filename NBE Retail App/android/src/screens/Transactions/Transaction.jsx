import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import DropdownComponent from '../../Components/DropDown/dropdown';
import styles from './Transaction.styles';
import {useTranslation} from 'react-i18next';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {useTheme} from '@react-navigation/native';

const Transaction = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const Transfer = () => navigation.navigate('OTP');
  const {colors} = useTheme();

  const betweenAccounts = [
    {label: t('Between your accounts'), value: 'CIB credit'},
    {label: t('To another account'), value: 'CIB debit'},
  ];

  const TransferFrom = [
    {label: '045-6598768321 - $5,564,600.87', value: '$5,564,600.87'},
    {label: '042-6543658321 - $2,234,456.56', value: '$2,234,456.56'},
  ];

  const TransferTo = [
    {label: '042-6543658321 - $2,234,456.56', value: '$2,234,456.56'},
    {label: '045-6598768321 - $5,564,600.87', value: '$5,564,600.87'},
  ];

  const Data = [
    {
      id: 1,
      title: t('Type of transfer'),
      type: betweenAccounts,
    },

    {
      id: 2,
      title: t('Transfer From'),
      type: TransferFrom,
    },
    {
      id: 3,
      title: t('Transfer To'),
      type: TransferTo,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.ScrollViewContainer,
        {backgroundColor: colors.background},
      ]}
      automaticallyAdjustKeyboardInsets={true}>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <View style={styles.wrapper}>
          <View style={styles.FirstRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/Back.png')} />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/BankLogo2.png')}
              style={{marginTop: 20, marginRight: 20}}
            />
          </View>

          <Text style={{fontSize: 20, fontWeight: '700', marginTop: 20}}>
            {t('Transfer')}
          </Text>

          {Data.map(data => {
            return <DropdownComponent data={data.type} title={data.title} />;
          })}

          <TouchableOpacity style={styles.OtherData}>
            <Text style={styles.Title}>{t('Amount To Transfer')}</Text>
            <TextInput
              style={{
                color: 'orange',
                marginStart: 20,
                marginTop: 10,
                fontSize: 14,
              }}
              placeholder="Enter desired amount"
            />
          </TouchableOpacity>
        </View>

        <CustomButton text={t('Transfer')} onPress={Transfer} />
      </View>
    </ScrollView>
  );
};

export default Transaction;
