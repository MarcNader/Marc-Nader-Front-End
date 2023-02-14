import { View, 
  Text,
   StyleSheet, 
   TouchableOpacity,
  Image, 
  Button} from 'react-native';

  import OTPInputView from '@twotalltotems/react-native-otp-input';
  import styles from "./OTP.styles"
  import { useTranslation } from 'react-i18next';

const OTP=({ navigation }) => {
  const {t, i18n}= useTranslation();

  return (
    <View style={styles.container}>
       
    
    <View style={styles.wrapper}>

    <View style={styles.FirstRow}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MobileNumber')}>
        <Image source={require("../../assets/images/Back.png")}/>
    </TouchableOpacity>
         <Image source={require("../../assets/images/BankLogo2.png")} style={{marginTop:20, marginRight:20}}/>
        </View>

        <View style={{marginTop:15, marginStart:25, flexDirection:'column'}}>
                <Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>{t("Verification")}</Text>
                <Text style={{color:'gray', fontSize:16}}>{t("Enter 5 digit code we sent to +201011315412")}</Text>
                <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row', marginTop:0}}>
              <OTPInputView
                style={{width: 340, height: 100, marginEnd:21, borderColor:'black'}}
                pinCount={5}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                placeholderCharacter="-"
                placeholderTextColor='gray'
            />
              </View>

    <Text style={{color:'gray', fontSize:15}}>{t("Didn't receive the code?")}</Text>
    <Text style={{fontWeight:'bold', color:'black', fontSize:17}}>{t("Request new one in 00:12")}</Text>

       </View>
    </View>

 
  <TouchableOpacity style={styles.CustomSubmit} onPress={() => navigation.navigate('Password')}>
  <Text style={{textAlign:"center", color:'white', fontSize:16}}>{t("Submit")}</Text>

  </TouchableOpacity>


    </View>
    
  );
}

export default OTP