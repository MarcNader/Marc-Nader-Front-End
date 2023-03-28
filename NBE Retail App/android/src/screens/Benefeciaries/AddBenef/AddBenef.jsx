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
import * as Yup from 'yup';
const AddBenef = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const userId = useSelector(state => state.Credentials.UserId);

  const AddUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    bankBranch: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    phoneNumber: Yup.string()
      .min(11, 'Please Enter a Valid Phone Number')
      .max(11, 'Please Enter a Valid Phone Number')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
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
      validationSchema={AddUserSchema}
      onSubmit={async (values, actions) => {
        storeBenefData(values, userId);
        navigation.navigate('Home');
      }}>
      {({
        touched,
        handleChange,
        errors,
        handleSubmit,
        values,
        setFieldTouched,
      }) => (
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
                  onBlur={() => setFieldTouched('firstName')}
                  style={{color: 'black', marginStart: 15, marginTop: 10}}
                />
                {touched.firstName && errors.firstName && (
                  <Text style={styles.ErrorMsg}>{errors.firstName}</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.Name, {marginStart: 10}]}
                onFocus={styles.ErrorMsg}>
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
                  onBlur={() => setFieldTouched('lastName')}
                  style={{
                    color: 'black',
                    marginStart: 15,
                    marginTop: 10,
                  }}></TextInput>
                {touched.lastName && errors.lastName && (
                  <Text style={styles.ErrorMsg}>{errors.lastName}</Text>
                )}
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
                onBlur={() => setFieldTouched('bankBranch')}
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 10,
                }}></TextInput>
              {touched.bankBranch && errors.bankBranch && (
                <Text style={styles.ErrorMsg}>{errors.bankBranch}</Text>
              )}
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
                onBlur={() => setFieldTouched('accountNumber')}
              />
              {touched.accountNumber && errors.accountNumber && (
                <Text style={styles.ErrorMsg}>{errors.accountNumber}</Text>
              )}
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
                onBlur={() => setFieldTouched('phoneNumber')}
                style={{
                  color: 'black',
                  marginStart: 15,
                  marginTop: 10,
                }}
                keyboardType="phone-pad"
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.ErrorMsg}>{errors.phoneNumber}</Text>
              )}
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
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.ErrorMsg}>{errors.email}</Text>
              )}
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
