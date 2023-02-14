import { View,Text, StyleSheet, 
    TouchableOpacity,
     Image,
     ScrollView,
     FlatList,
     } from "react-native"
import styles from "./TransactionHistory.styles"
import { useTranslation } from 'react-i18next';

const TransactionHistory=({navigation})=> {
    const {t, i18n}= useTranslation();

    const Data= [
        {
            Name:"Flat Rent",
            Date:"28-11-2022",
            Price:"$892,48.0",
        },
        {
            Name:"House Fixes",
            Date:"27-11-2022",
            Price:"$560.0",
        },
        {
            Name:"New Laptop",
            Date:"26-11-2022",
            Price:"$2355.76",
        },
        {
            Name:"Flat Rent",
            Date:"28-11-2022",
            Price:"$892,48.0",
        },
        {
            Name:"House Fixes",
            Date:"27-11-2022",
            Price:"$560.0",
        },
        {
            Name:"New Laptop",
            Date:"26-11-2022",
            Price:"$2355.76",
        },
        {
            Name:"Flat Rent",
            Date:"28-11-2022",
            Price:"$892,48.0",
        },
        {
            Name:"House Fixes",
            Date:"27-11-2022",
            Price:"$560.0",
        },
        {
            Name:"New Laptop",
            Date:"26-11-2022",
            Price:"$2355.76",
        },
    ]

    ItemSeparator=()=>{
        return <View style={{backgroundColor:'black', height:1, marginBottom:5}}/>
    }

    const History=({item})=> {

       return( <View style={styles.Component}>

                <View style={styles.ComponentPart1}>
                            <Text style={{color:'black', fontSize:18, fontWeight:'bold', marginBottom:5}}>{item.Name}</Text>
                            <Text style={{color:'gray'}}>{item.Date}</Text>
                </View>

                            <Text style={styles.ComponentPart2}>{item.Price}</Text>
                
        </View>
)
    }
    return(
        <View style={styles.container}>
            <ScrollView>

            <View style={styles.FirstRow}>

            <View style={styles.FirstRowPart1}>
                    <Image source={require("../../../assets/images/DropList.png")} style={{backgroundColor:'black'}}/>
                    <TouchableOpacity  onPress={()=>navigation.navigate('MyBenefeciaries')}>
                        <Image source={require('../../../assets/images/Meshaly.png')} 
                        style={{marginStart:5, borderRadius:10}} 
                       />
                    </TouchableOpacity>
                    

                    <View style={styles.username} >
                            <Text style={{color:'gray'}}>{t("Good morning")}</Text>
                            <Text style={{color:'black', fontWeight:'bold'}}>{t("Marc")}</Text>
                    </View>
            </View>


            <View style={styles.FirstRowPart2}>
            <TouchableOpacity style={styles.Notification}>
                    <Image source={require('../../../assets/images/Notification.png')}/>
            </TouchableOpacity>
            </View>
            </View>

            <TouchableOpacity style={styles.SecondRow} >
            <TouchableOpacity style={[styles.SecondRowPart1, {marginStart:10}]}>
    
                <Image source={require("../../../assets/images/Meshaly.png")} style={{width:60, height:60}}/>

            </TouchableOpacity>

            <View style={[styles.SecondRowPart2,{marginStart:10}]}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>{t("Ahmad Meshaly")}</Text>

                <View style={styles.BenefCard}>
                <Image source={require("../Images/Phone.png")} style={{marginEnd:5}}/>
                <Text>01223431361</Text>
                </View>
                
                <View style={styles.BenefCard}>
                <Image source={require("../Images/Dollar.png")}  style={{marginEnd:5}}/>
                <Text>245,567,789.95$</Text>
                </View>
             </View>

            </TouchableOpacity>

            <Text style={{color:'black', fontSize:18, marginTop:10, fontWeight:'bold'}}>{t("Transactions History")}</Text>
            
            <FlatList
            data={Data}
            renderItem={History}
            ItemSeparatorComponent={ItemSeparator}

            />


            </ScrollView>
        </View>
    )
}
export default TransactionHistory