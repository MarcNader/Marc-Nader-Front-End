import { useState } from "react";
import { View,Text, StyleSheet, 
    TouchableOpacity,
     Image,
     TextInput,
     ScrollView,
     } from "react-native"

import styles from "./AddBenef.styles"
import { useTranslation } from 'react-i18next';

const user={
        FirstName:'',
        LastName:'',
        age:0,
} ;

const UsersList=[];

const AddBenef= ({navigation})=> {
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [BankBranch,setBankBranch]=useState('');
    const [PhoneNumber,setPhoneNumber]=useState('');
    const {t, i18n}= useTranslation();

    
    const Submit=()=>{
        
        var Myuser= Object.create(user)

        Myuser.FirstName=FirstName;
        Myuser.LastName=LastName;
        Myuser.BankBranch=BankBranch;
        Myuser.PhoneNumber=PhoneNumber;
        UsersList.push(Myuser);
        console.log(UsersList);
        navigation.navigate('MyBenefeciaries');
    }

    let mydata = [{
        value: '043- Water Way Mall',
      }, {
        value: '093- Korba',
      }, {
        value: '22- samer badawy',
      }];
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.FirstRow}>

                    <View style={styles.FirstRowPart1}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NoBenef')}>
                        <Image source={require("../../../assets/images/Back.png")}/>
                    </TouchableOpacity>
                    <View>
                            <TouchableOpacity style={styles.Notification}>
                                    <Image source={require('../../../assets/images/Notification.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                <Image source={require("../../../assets/images/BankLogo2.png")} />
                </View>

                <View style={styles.SecondRow}>
                        <TouchableOpacity style={styles.AddPicContainer}>
                            <Image source={require("../Images/AddPic.png")}/>
                        </TouchableOpacity>
                </View>

                <View style={styles.ThirdRow}>
                        <TouchableOpacity style={styles.Name}>
                                <Text style={{color:'black', marginStart:15, marginTop:15, fontWeight:'bold'}}>{t("First Name")}</Text>
                                <TextInput onChangeText={
                                    (text)=>{
                                        setFirstName(text);
                                    }
                                }  style={{color:'black', marginStart:15, marginTop:10}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Name, {marginStart:10}]}>
                                <Text style={{color:'black', marginStart:15, marginTop:15, fontWeight:'bold'}}>{t("Last Name")}</Text>
                                <TextInput onChangeText={
                                    (text)=>{
                                        setLastName(text);
                                    }
                                }  style={{color:'black', marginStart:15, marginTop:10}}></TextInput>
                        </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.OtherData}>
                                <Text style={{color:'black', marginStart:15, marginTop:15, fontWeight:'bold'}}>{t("Bank Branch")}</Text>
                                <TextInput onChangeText={
                                    (text)=>{
                                        setBankBranch(text);
                                    }
                                }  style={{color:'black', marginStart:15, marginTop:10}}></TextInput>
                        </TouchableOpacity>
                <TouchableOpacity style={styles.OtherData}>
                        <Text style={{color:'black', marginStart:15, marginTop:15, fontWeight:'bold'}}>{t("Account Number")}</Text>
                        <TextInput style={{color:'black', marginStart:15, marginTop:10}}></TextInput>
                        {/* <Dropdown
                            label="Account Number"
                            data={mydata}/> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.OtherData}>
                        <Text style={{color:'black', marginStart:15, marginTop:15, fontWeight:'bold'}}>{t("Mobile Number")}</Text>
                        <TextInput onChangeText={
                                    (text)=>{
                                        setPhoneNumber(text);
                                    }
                                }  style={{color:'black', marginStart:15, marginTop:10}}></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OtherData}>
                        <Text style={{color:'black', marginStart:15, marginTop:15, fontWeight:'bold'}}>{t("Email")}</Text>
                        <TextInput style={{color:'black', marginStart:15, marginTop:10}}></TextInput>
                </TouchableOpacity>

                <TouchableOpacity style={styles.AddBenefButton} onPress={Submit}>
                    <Text style={{color:'white', fontSize:18}}>{t("Add Benefeciar")}</Text>
                </TouchableOpacity>
                </ScrollView>
        </View> 
    )
}

export default AddBenef