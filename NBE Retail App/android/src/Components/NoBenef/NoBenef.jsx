import { 
    View,
    Text,
    TouchableOpacity,
     Image,
            } from "react-native"
import { useTranslation } from 'react-i18next';
import styles from "./NoBenef.style";

const NoBenef = ({navigation}) => {
const {t, i18n}= useTranslation();

  return (
    <View style={styles.Container}>

                <Image source={require("../../assets/images/NoBenef.png")}/>

                <View>
                <Text style={styles.title}>{t("No Benefeciaries")}</Text>
                <Text>{t("You don't have any benefeciaries, add")}</Text> 
                <Text style={{textAlign:'center'}}>{t("some so you can send money")}</Text>
                <TouchableOpacity style={{alignItems:'center', marginTop:5}} onPress={() => navigation.navigate('AddBenef')}>
                            <Image source={require("../../assets/images/Add.png")}/>
                        </TouchableOpacity>
                </View>
               
            </View>
  )
}

export default NoBenef