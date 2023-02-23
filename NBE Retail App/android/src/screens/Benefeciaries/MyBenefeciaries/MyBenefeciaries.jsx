import { useState } from "react"
import { View,Text,
    TouchableOpacity,
     Image,
     ScrollView,
     FlatList,
     } from "react-native"
import SortedBenef from "../../../Components/SortedBenef/sortedbenef"
import styles from "./MyBenefeciaries.styles"
import { useTranslation } from 'react-i18next';
import Header from "../../../Components/Header/Header";

const MyBenefeciaries= ({navigation})=> {
    const {t, i18n}= useTranslation();

    const Data= [
        {
        Name:"Ahmad Meshaly",
        Phone:"01223431361",
        Balance:"245,567,789.95$",
        },
        {
            Name:"Ahmad Meshaly",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad Meshaly",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad Meshaly",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad Meshaly",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad Meshaly",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad Meshaly",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad Meshaly",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },

    ]

    const [sort,setSort]=useState(true);


    const User =({item})=> {
       return( 
        
                <TouchableOpacity style={styles.ThirdRow}  onPress={()=> navigation.navigate("TransactionHistory")}>
           <View >
            <TouchableOpacity style={[styles.ThirdRowPart1, {marginStart:10}]}>
                <Image source={require("../../../assets/images/Meshaly.png")} style={{width:60, height:60}}/>

            </TouchableOpacity>
            </View>

            <View style={[styles.ThirdRowPart2,{marginStart:10}]}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>{item.Name}</Text>

                <View style={styles.BenefCard}>
                <Image source={require("../Images/Phone.png")} style={{marginEnd:5}}/>
                <Text>{item.Phone}</Text>
                </View>
                
                <View style={styles.BenefCard}>
                <Image source={require("../Images/Dollar.png")}  style={{marginEnd:5}}/>
                <Text>{item.Balance}</Text>
                </View>
             </View>

        </TouchableOpacity>
        )
    }

    // const SortedUsers= ({item})=> {
    //     return(
    //         <View style={styles.SortedThirdRow}>
    //                 {/* <TouchableOpacity style={styles.sortedBenef}>
    //                 <Image source={require("../../../assets/images/Meshaly.png")} style={{width:60, height:60}}/>
    //                 </TouchableOpacity> */}
    //             <TouchableOpacity style={styles.sortedBenef}>
    //                     <Image source={require("../../../assets/images/Meshaly.png")} />
    //                     <Text style={{color:'black', marginTop:5}}>{"Ahmed"}</Text>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }
    return(
        <View style={styles.container}>

           <ScrollView>
            
            <Header navigation={navigation}/>
            
            <View style={styles.SecondRow}>
                    <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>{t("Benefeciaries")}</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>setSort(!sort)}>
                            <Image  source={require("../../../assets/images/SortButton.png")} style={{marginEnd:10}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddBenef')}>
                            <Image source={require("../../../assets/images/Add.png")}/>
                        </TouchableOpacity>
                    </View>
            </View>
            
            {!sort ? <FlatList
            data={Data}
            renderItem={User}
            /> : <SortedBenef/>}
            

           </ScrollView>
                </View>
    )
}


export default MyBenefeciaries