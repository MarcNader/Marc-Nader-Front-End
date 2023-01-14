import { useState } from "react"
import { View,Text,
    TouchableOpacity,
     Image,
     ScrollView,
     FlatList,
     } from "react-native"
import styles from "./sortedbenef.styles"
const SortedBenef=()=> {
    const Data= [
        {
        Name:"Ahmad",
        Phone:"01223431361",
        Balance:"245,567,789.95$",
        },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },
        {
            Name:"Ahmad",
            Phone:"01223431361",
            Balance:"245,567,789.95$",
            },

    ]
    return(
        <ScrollView >
            <View style={styles.Row}>
            {Data.map(element=> {
                    return (
                        <TouchableOpacity style={styles.sortedBenef}>
                            <Image source={require("../../assets/images/Meshaly.png")} />
                            <Text style={{color:'black', marginTop:5}}>{element.Name}</Text>
                    </TouchableOpacity>
                    )
                })}
            </View>
                
             {/* <TouchableOpacity style={styles.sortedBenef}>
                    <Image source={require("../../../assets/images/Meshaly.png")} />
                    <Text style={{color:'black', marginTop:5}}>{"Ahmed"}</Text>
             </TouchableOpacity> */}
        </ScrollView>
    )
}

export default SortedBenef