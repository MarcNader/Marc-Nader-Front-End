import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { View,Text,TouchableOpacity, Image } from 'react-native'
import LangButton from '../LangButton/LangButton'
import styles from "./CustomDrawer.styles"
const CustomDrawer = (props) => {
  return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
             <View style={styles.FirstRow}>
                <Image source={require("../../assets/images/BankLogo2.png")} style={{marginTop:20, marginRight:20}}/>
                <LangButton/>
             </View>

          <View style={{justifyContent:'space-between', flex:1, flexDirection:'column'}}>

             <View style={styles.ItemsList}>
            <DrawerItemList {...props}/>
             </View>
                
              <Text>Hamdaaa</Text>
              </View>

        </DrawerContentScrollView>
  )
}   

export default CustomDrawer