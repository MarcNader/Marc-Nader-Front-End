import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { View,Text,TouchableOpacity, Image } from 'react-native'
import styles from "./CustomDrawer.styles"
const CustomDrawer = (props) => {
  return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
             <View style={styles.FirstRow}>
                <Image source={require("../../assets/images/BankLogo2.png")} style={{marginTop:20, marginRight:20}}/>
                <TouchableOpacity style={styles.button} onPress={()=>LanguageHandler()}>
                    <Text style={{color:"#007236", fontSize:16, fontWeight:"bold", textAlign:'center'}}>AR</Text>
                </TouchableOpacity>
        </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
  )
}   

export default CustomDrawer