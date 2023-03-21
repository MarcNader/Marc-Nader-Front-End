import {Text,TouchableOpacity,View, Image } from 'react-native'
import styles from "./PersonDetails.style"
const PersonDetails = ({item}) => {
  return (
    <TouchableOpacity style={styles.BenefDetailsContainer}  onPress={()=> navigation.navigate("TransactionHistory")}>
    <View >
     <TouchableOpacity style={styles.IconContainer}>
         <Image source={require("../../assets/images/Meshaly.png")} style={styles.Icon}/>

     </TouchableOpacity>
     </View>

     <View style={styles.BenefDetails}>
         <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>{item.firstName}</Text>

         <View style={styles.BenefCard}>
         <Image source={require("../../assets/images/Phone.png")} style={{marginEnd:5}}/>
         <Text>
            {item.phoneNumber}
            </Text>
         </View>
         
         <View style={styles.BenefCard}>
         <Image source={require("../../assets/images/Dollar.png")}  style={{marginEnd:5}}/>
         <Text>
            {item.accountNumber}
            </Text>
         </View>
      </View>

 </TouchableOpacity>
  )
}

export default PersonDetails