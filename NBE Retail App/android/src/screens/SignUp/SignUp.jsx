import {View, Text, ImageBackground, 
    TouchableOpacity, 
    Image, 
    TextInput,
    I18nManager,
    ScrollView,
    Alert} from 'react-native';
import { Checkbox} from 'react-native-paper'
import styles from "./SignUp.styles"
import { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from "react";
import { FirstSliceaction } from '../../Redux/FirstSlice';
import i18n from '../../l18n';
import { useTranslation } from 'react-i18next';
const SignUp=({ navigation }) => {
    const[Username,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const {t, i18n}= useTranslation();

  
     const todo=firebase.firestore().collection("Users")
     
     const SignUpUser= async(Username,Password)=>{
        try {
            await firebase.auth().createUserWithEmailAndPassword(Username,Password)
            await todo.add({
                Email:Username,
            }).then(()=> {
                alert("All good")
            })
        } catch (error) {
            alert(error.message)
            return
        }
    
        navigation.navigate('MobileNumber');

     }

     const istrue= false;
     const LanguageHandler = async()=> {
            i18n.changeLanguage("ar");
            I18nManager.forceRTL(false);
     }
  return (
      <ImageBackground source={require('../../assets/images/Home-Background.png')} resizeMode="cover" style={styles.image}>
          <ScrollView >
        
        <View style={styles.FirstRow}>
                <TouchableOpacity style={styles.button} onPress={()=>LanguageHandler()}>
                    <Text style={{color:"#007236", fontSize:22, fontWeight:"bold"}}>Ar</Text>
                </TouchableOpacity>
                     <Image source={require("../../assets/images/BankLogo.png")} style={{marginTop:20, marginRight:20}}/>
        </View>

        <View style={{marginTop:150, marginStart:20, marginEnd:20}} >
            <Text style={styles.SecondRow}>{t("Welcome to")}</Text>
            <Text style={styles.SecondRow}>{t("The National Bank")}</Text>
            <Text style={styles.SecondRow}>{t("of Egypt")}</Text>

            <View style={styles.CustomUsername}>
                <Image source={require("../../assets/images/atsign.png")} style={{marginTop:13, marginLeft:10}}/>
                <View style={{flexDirection:"column"}}>
                    <Text style={{marginLeft:15, color:"white"}}>{t("Username")}</Text>
                    <TextInput style={{marginLeft:15, padding:0, color:"white"}} 
                    onChangeText={(username)=>setUserName(username)}
                    />
                </View>
            </View>

            <View style={styles.CustomPassword}>
                <Image source={require("../../assets/images/password.png")} style={{marginTop:13, marginLeft:10}}/>
                <View style={{flexDirection:"column"}}>
                    <Text style={{marginLeft:15, color:"green"}}>{t("Password")}</Text>
                    <TextInput 
                    onChangeText={(password)=>setPassword(password)}
                    secureTextEntry={true} style={{marginLeft:15, padding:0, color:"green"}}/>
                </View>
            </View>
            

            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}} >
            <TouchableOpacity style={styles.Signup}  onPress={() => SignUpUser(Username,Password)}>
                <Text style={{color:'white', fontSize:15}}>{t("Signup")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:"14%"}}>
                <Image source={require("../../assets/images/fingerprint.png")}/>
            </TouchableOpacity>
             </View>

        </View>

      

      </ScrollView>
      </ImageBackground>
  );
}

export default SignUp
