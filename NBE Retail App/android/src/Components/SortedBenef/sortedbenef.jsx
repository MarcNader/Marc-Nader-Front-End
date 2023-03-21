import { useState } from "react"
import { View,Text,
    TouchableOpacity,
     Image,
     ScrollView,
     FlatList,
     } from "react-native"
import Person from "../Person/Person"
import PersonDetails from "../PersonDetails/PersonDetails"
import styles from "./sortedbenef.styles"
const SortedBenef=({BenefData})=> {
   
    return(
                <ScrollView contentContainerStyle={styles.SortedList} >
            {BenefData.map(user=> {
                    return (
                            <View style={{marginRight:0}}>
                                <Person item={user}/>
                            </View>
                    )
                })}
        </ScrollView>
    )
}

export default SortedBenef