import { View,Text,Image,TextInput } from "react-native"
import styles from "./CustomInput.styles"
const CustomInput= ()=> {

    return(
        <View style={styles.CustomInput}>
                <Image source={require("../../assets/images/password.png")} style={{marginTop:13, marginLeft:10}}/>
                <View style={{flexDirection:"column"}}>
                    <Text style={{marginLeft:15, color:"white"}}>Password</Text>
                    <TextInput secureTextEntry={true} style={{marginLeft:15, padding:0, color:"white"}}/>
                </View>
            </View>
    )
}



export default CustomInput