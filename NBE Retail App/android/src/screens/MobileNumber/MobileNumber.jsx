import { useState } from 'react';
import { View, 
    Text,
     TouchableOpacity,
     TextInput,
    Image} from 'react-native';
    import auth from '@react-native-firebase/auth';
  import styles from "./MobileNumber.styles"
import { useTranslation } from 'react-i18next';

  const MobileNumber=({ navigation }) => {
    const {t, i18n}= useTranslation();
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
       // Handle the button press
       
 const signInWithPhoneNumber= async()=> {
  // try {
  //   const confirmation = await auth().signInWithPhoneNumber("+1-555-123-4567");
  //   setConfirm(confirmation);
  //   console.log("confirmed");
  //   navigation.navigate('OTP');
  // } catch (error) {
  //   alert(error.message);
  // }

    navigation.navigate("OTP")

  }
  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }
  // if (!confirm) {
  //   ()=> {
  //     return signInWithPhoneNumber('+20 01223431361')
  //   }
  // }
    
    return (
      <View style={styles.container}>
         
      
      <View style={styles.wrapper}>
  
      <View style={styles.FirstRow}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/images/Back.png")}/>
      </TouchableOpacity>
           <Image source={require("../../assets/images/BankLogo2.png")} style={{marginTop:20, marginRight:20}}/>
          </View>
  
          <View style={{marginTop:15, marginStart:25, flexDirection:'column'}}>
                  <Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>{t("Verification")}</Text>
                  <Text style={{color:'gray', fontSize:16}}>{t("Enter 5 digit code we sent to +201011315412")}</Text>

                  <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row', marginTop:0}}>
                  <View style={styles.CustomUsername}>
                <Image source={require("../../assets/images/Mobile.png")} style={{marginTop:13, marginLeft:10}}/>

                <View style={{flexDirection:"column"}}>
                    <Text style={{marginLeft:15, color:"#007236", fontWeight:'bold'}}>{t("Mobile Number")}</Text>
                    <TextInput style={{marginLeft:15, padding:0, color:"#007236"}}/>
                </View>
            </View>
                </View>
  
  
         </View>
      </View>
  
   
    <TouchableOpacity style={styles.CustomSubmit} onPress={()=> signInWithPhoneNumber()}>
    <Text style={{textAlign:"center", color:'white', fontSize:16}}>{t("Submit")}</Text>
  
    </TouchableOpacity>
  
  
      </View>
      
    );
  }
  
  export default MobileNumber