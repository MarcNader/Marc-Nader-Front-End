
import { View,Text, StyleSheet, 
    TouchableOpacity,
     Image,
     } from "react-native"

import styles from "./NoBenef.styles"
import { useTranslation } from 'react-i18next';
import Header from "../../../Components/Header/Header";

const NoBenef= ({navigation})=> {
    const {t, i18n}= useTranslation();

    return(

         <View style={styles.container}>

            <Header navigation={navigation}/>
            

            <View style={styles.SecondRow}>
                    <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>{t("Benefeciaries")}</Text>
                    <View style={{flexDirection:'row'}}>
                        {/* <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'green', width:50, height:30, borderRadius:30}}>
                            <Image source={require("../../assets/images/squares.png")} />
                            <Image source={require("../../assets/images/squares.png")}/>

                        </TouchableOpacity> */}
                        <TouchableOpacity>
                            <Image source={require("../../../assets/images/SortButton.png")} style={{marginEnd:10}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddBenef')}>
                            <Image source={require("../../../assets/images/Add.png")}/>
                        </TouchableOpacity>
                    </View>
            </View>

            <View style={styles.ThirdRow}>
                <Image source={require("../../../assets/images/NoBenef.png")}/>

                <View>
                <Text style={{textAlign:'center', color:'black', fontSize:18}}>{t("No Benefeciaries")}</Text>
                <Text>{t("You don't have any benefeciaries, add")}</Text> 
                <Text style={{textAlign:'center'}}>{t("some so you can send money")}</Text>
                <TouchableOpacity style={{alignItems:'center', marginTop:5}} onPress={() => navigation.navigate('AddBenef')}>
                            <Image source={require("../../../assets/images/Add.png")}/>
                        </TouchableOpacity>
                </View>
               
            </View>

        </View>
    )
}

export default NoBenef