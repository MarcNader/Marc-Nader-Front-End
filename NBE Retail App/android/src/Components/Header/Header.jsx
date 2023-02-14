import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useTranslation } from 'react-i18next';
import styles from "./Header.styles"
const Header = ({navigation}) => {
    const {t, i18n}= useTranslation();

  return (
    <View style={styles.FirstRow}>

                    <View style={styles.FirstRowPart1}>
                        <TouchableOpacity onPress={()=> navigation.openDrawer()}> 
                            <Image source={require("../../assets/Icons/Drawer.png")}/>
                            </TouchableOpacity>
                           
                            <Image source={require('../../assets/images/Meshaly.png')} style={{marginHorizontal:5, borderRadius:10}}/>
                            <View style={styles.username} >
                                    <Text style={{color:'black'}}>{t("Good morning")}</Text>
                                    <Text style={{color:'black'}}>{t("Marc")}</Text>
                            </View>
                    </View>
               

                <View style={styles.FirstRowPart2}>
                    <TouchableOpacity style={styles.Notification}>
                            <Image source={require('../../assets/images/Notification.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
  )
}

export default Header