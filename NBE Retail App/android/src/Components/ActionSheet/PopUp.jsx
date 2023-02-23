import { useRef } from "react";
import {Text, View,TouchableOpacity, Image } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import styles from "./PopUp.styles"
import i18n from '../../l18n';
import {useTranslation} from 'react-i18next';

const PopUp = ({CustomStyle}) => {
    const actionSheetRef = useRef();
    const {t, i18n} = useTranslation();
    
  return (
    <View>
       <TouchableOpacity style={{width:"14%"}} onPress={()=>actionSheetRef.current?.show()}>
                <Image style={CustomStyle} source={require("../../assets/images/fingerprint.png")}/>
            </TouchableOpacity>
         <ActionSheet ref={actionSheetRef} containerStyle={styles.container} 
         >


      <Text style={styles.header1}>{t('FingerPrint for NBE Mobile')}</Text>
      <Text style={styles.header2}>{t('Login with your fingerprint')}</Text>

      <TouchableOpacity style={styles.fingerprint} onPress={()=>actionSheetRef.current?.hide()}>
      <Image source={require("../../assets/images/FingerPrintSensor.png")}/>
      </TouchableOpacity>
      <Text style={{textAlign:"center", marginTop:10, fontSize:18}}>{t("Touch the fingerprint sensor")}</Text>
      <Text style={styles.cancel} onPress={()=>actionSheetRef.current?.hide()} >{t("Cancel")}</Text>

    </ActionSheet>

    </View>
   
  )
}

export default PopUp