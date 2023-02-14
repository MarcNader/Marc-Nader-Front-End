import { View, 
    Text,
     TouchableOpacity,
     TextInput,
    Image} from 'react-native';
  import styles from "./Password.styles"
  import { useTranslation } from 'react-i18next';

  const Password=({ navigation }) => {
    const {t, i18n}= useTranslation();

    return (
      <View style={styles.container}>
         
      
      <View style={styles.wrapper}>
  
      <View style={styles.FirstRow}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OTP')}>
          <Image source={require("../../assets/images/Back.png")}/>
      </TouchableOpacity>
           <Image source={require("../../assets/images/BankLogo2.png")} style={{marginTop:20, marginRight:20}}/>
          </View>
  
          <View style={{marginTop:15, marginStart:25, flexDirection:'column'}}>
                  <Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>Verification</Text>
                  <Text style={{color:'gray', fontSize:16}}>{t("Verify Password")}</Text>

                  <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row', marginTop:0}}>
                    <View style={styles.CustomPassword}>
                            <Image source={require("../../assets/images/password.png")} style={{marginTop:13, marginLeft:10}}/>
                            <View style={{flexDirection:"column"}}>
                                <Text style={{marginLeft:15, color:"green", fontWeight:'bold'}}>{t("Password")}</Text>
                                <TextInput secureTextEntry={true} style={{marginLeft:15, padding:0, color:"green"}}/>
                            </View>
                    </View>
                </View>

                <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row', marginTop:0}}>
                    <View style={styles.CustomPassword}>
                            <Image source={require("../../assets/images/password.png")} style={{marginTop:13, marginLeft:10}}/>
                            <View style={{flexDirection:"column"}}>
                                <Text style={{marginLeft:15, color:"green", fontWeight:'bold'}}>{t("Confirm Password")}</Text>
                                <TextInput placeholder='re-write your password here' placeholderTextColor={"gray"} secureTextEntry={true} style={{marginLeft:15, padding:0, color:"green"}}/>
                            </View>
                    </View>
                </View>

                    
  
  
         </View>
      </View>
  
   
    <TouchableOpacity style={styles.CustomSubmit} onPress={() => navigation.navigate('Congratulations')}>
    <Text style={{textAlign:"center", color:'white', fontSize:16}}>{t("Submit")}</Text>
  
    </TouchableOpacity>
  
  
      </View>
      
    );
  }
 
  export default Password