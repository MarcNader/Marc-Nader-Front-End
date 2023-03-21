import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './AddBenef.styles';
import {useTranslation} from 'react-i18next';
import {storeBenefData} from '../../../Util/http';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
const AddBenef = ({navigation}) => {
  const {t, i18n} = useTranslation();
  // const apidata = store.getState().UsersData.userNum;
  const userId = useSelector(state => state.Credentials.UserId);
  // console.log('the current value APIDATA before ADD Func is:', apidata);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        bankBranch: '',
        accountNumber: '',
        phoneNumber: '',
        email: '',
      }}
      onSubmit={async (values, actions) => {
        storeBenefData(values, userId);
        navigation.navigate('Home');
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.FirstRow}>
              <View style={styles.FirstRowPart1}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.goBack()}>
                  <Image source={require('../../../assets/images/Back.png')} />
                </TouchableOpacity>
                <View>
                  <TouchableOpacity style={styles.Notification}>
                    <Image
                      source={require('../../../assets/images/Notification.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Image source={require('../../../assets/images/BankLogo2.png')} />
            </View>

            <View style={styles.SecondRow}>
              <TouchableOpacity style={styles.AddPicContainer}>
                <Image source={require('../../../assets/images/AddPic.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.ThirdRow}>
              <TouchableOpacity style={styles.Name}>
                <Text
                  style={{
                    color: 'black',
                    marginStart: 15,
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  {t('First Name')}
                </Text>
                <TextInput
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  style={{color: 'black', marginStart: 15, marginTop: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.Name, {marginStart: 10}]}>
                <Text
                  style={{
                    color: 'black',
                    marginStart: 15,
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  {t('Last Name')}
                </Text>
                <TextInput
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  style={{
                    color: 'black',
                    marginStart: 15,
                    marginTop: 10,
                  }}></TextInput>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.OtherData}>
              <Text
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                {t('Bank Branch')}
              </Text>
              <TextInput
                value={values.bankBranch}
                onChangeText={handleChange('bankBranch')}
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 10,
                }}></TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OtherData}>
              <Text
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                {t('Account Number')}
              </Text>
              <TextInput
                style={{color: 'black', marginStart: 15, marginTop: 10}}
                value={values.accountNumber}
                onChangeText={handleChange('accountNumber')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.OtherData}>
              <Text
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                {t('Mobile Number')}
              </Text>
              <TextInput
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 10,
                }}></TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OtherData}>
              <Text
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                {t('Email')}
              </Text>
              <TextInput
                style={{color: 'black', marginStart: 15, marginTop: 10}}
                value={values.email}
                onChangeText={handleChange('email')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.AddBenefButton}
              onPress={handleSubmit}>
              <Text style={{color: 'white', fontSize: 18}}>
                {t('Add Benefeciar')}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default AddBenef;
