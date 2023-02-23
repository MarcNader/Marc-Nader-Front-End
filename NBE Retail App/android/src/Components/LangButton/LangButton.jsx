import {Text,TouchableOpacity,I18nManager } from 'react-native'
import i18n from '../../l18n';
import {useEffect, useRef, useState} from 'react';
import RNRestart from 'react-native-restart'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./LangButton.style"
const LangButton = () => {
    const [AsyncValue, setAsyncValue] = useState("");

    const storedata= async()=>{
        try {
          await AsyncStorage.setItem(
            "Language",
            i18n.language,
          )
        } catch (error) {
          console.log("Error occured in Async Storage");
        }
      }
    
      const retrievedata= async ()=>{
        try {
          const value = await AsyncStorage.getItem("Language");
          if(value != null){
            setAsyncValue(value);
          }
          else {
            storedata();
          }
        } catch (error) {
          console.log("We encountered an error in retrieving data from Async and the error is:",error);
        }
      }
    
      retrievedata();
    
      const LanguageHandler = async () => {
        if (AsyncValue == 'ar') {
          i18n.changeLanguage('en');
          I18nManager.forceRTL(false);
        } else {
          i18n.changeLanguage('ar');
          I18nManager.forceRTL(true);
        }
        storedata();
        RNRestart.restart();    
      };
  return (
    <>
        <TouchableOpacity
            style={styles.button}
            onPress={() => LanguageHandler()}>
           {AsyncValue == 'en' ? <Text style={{color: '#007236', fontSize: 22, fontWeight: 'bold'}}>
              Ar
            </Text>:<Text style={{color: '#007236', fontSize: 22, fontWeight: 'bold'}}>
              En
            </Text> }
          </TouchableOpacity>
    </>
  )
}

export default LangButton