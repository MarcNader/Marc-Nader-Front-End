import { View, Image, Text, TouchableOpacity, ImageBackground, FlatList, ScrollView } from "react-native"
import Mshaly from "../../assets/images/Meshaly.png"
import Carrefour from "../../assets/images/carrefour.png"
import Amazon from "../../assets/images/amazon.png"
import Jumia from "../../assets/images/jumia.png"
import { useEffect, useState } from "react"
import styles from "./ProfilePage.styles"
import { useTranslation } from 'react-i18next';
import Header from "../../Components/Header/Header"
import Person from "../../Components/Person/Person"
import PopUp from "../../Components/ActionSheet/PopUp"

const ProfilePage= ({navigation})=> {
    const {t, i18n}= useTranslation();

    const Data= [
        {
            id:1,
            name:"Marc",
            pic:Mshaly,
        },
        {
            id:2,
            name:"Ezra",
            // pic:Girl1,
            pic:Mshaly,
        },
        {
            id:3,
            name:"Eyad",
            // pic:Man1,
            pic:Mshaly,
        },
        {
            id:4,
            name:"Marc",
            // pic:Man2,
            pic:Mshaly,
        },
        {
            id:5,
            name:"Nader",
            // pic:Man2,
            pic:Mshaly,
        },
        {
            id:6,
            name:"Reem",
            // pic:Girl2,
            pic:Mshaly,
        },
    ]

    const ShopData=[
        {
            id:1,
            name:"Carrefour",
            time:"15-11-2022",
            price:"$250",
            logo:Carrefour,
        },
        {
            id:2,
            name:"Amazon",
            time:"18-11-2022",
            price:"$3000",
            logo:Amazon,
        },
        {
            id:3,
            name:"Jumia",
            time:"22-11-2022",
            price:"$800",
            logo:Jumia,
        },

        {
            id:4,
            name:"Jumia",
            time:"23-11-2022",
            price:"$2000",
            logo:Jumia,
        },
        {
            id:5,
            name:"Amazon",
            time:"25-11-2022",
            price:"$1250",
            logo:Amazon,
        },
        {
            id:6,
            name:"Carrefour",
            time:"27-11-2022",
            price:"$450",
            logo:Carrefour,
        },
    ]

    ItemSeparator=()=>{
        return <View style={{backgroundColor:'white', height:1, marginBottom:5}}/>
    }
    const Item= ({item})=> {
        return (
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

                <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.ShoopingList}>
                            <Image source={item.logo}/>
                    </TouchableOpacity>

                        <View>
                            <Text style={{color:'white',fontSize:20, marginStart:10}}>{item.name}</Text>
                            <Text style={{color:'gray', marginStart:10, marginTop:5}}>{item.time}</Text>

                        </View>
                </View>

                <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>{item.price}</Text>

            </View>
             
        )
      }

    const [balance,setBalance]=useState(true);
    const [status,setStatus]=useState(false);
    useEffect(()=>{
            setBalance(!balance);

    }, [status])



    return(
        <View style={styles.container}>
            <ScrollView>
            <Header navigation={navigation}/>

            <ImageBackground source={require('../../assets/images/Rectangle.png')} resizeMode="cover" style={styles.ImageBackground} >
            <View style={styles.SecondRow}>
                <View style={styles.FirstRow}>

                    <Text style={{color:'white'}}>{t("Balance")}</Text>
                    <PopUp CustomStyle={styles.CustomStyle}/>
                    
                </View>

                <View style={styles.ShowBalance}>

                    <TouchableOpacity onPress={setStatus}>
                        {balance ? <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>$2,346,567,00</Text>:
                        <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{t("Press Here To Show Balance")}</Text> 
                        }
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>

            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                <View style={styles.logosComponent}>
                <TouchableOpacity style={styles.logos}>
                        <Image style={{width:30, backgroundColor:'#1A413C'}} source={require("../../assets/images/money.png")}/>
                    </TouchableOpacity>
                    <Text style={{color:"white"}}>{t("Accounts")}</Text>
                </View>
                <View style={styles.logosComponent}>
                <TouchableOpacity style={styles.logos}>
                        <Image style={{width:30, backgroundColor:'#1A413C'}} source={require("../../assets/images/money.png")}/>
                    </TouchableOpacity>
                    <Text style={{color:"white"}}>{t("Accounts")}</Text>
                </View>
                <View style={styles.logosComponent}>
                <TouchableOpacity style={styles.logos}>
                        <Image style={{width:30, backgroundColor:'#1A413C'}} source={require("../../assets/images/money.png")}/>
                    </TouchableOpacity>
                    <Text style={{color:"white"}}>{t("Accounts")}</Text>
                </View>
                <View style={styles.logosComponent}>
                <TouchableOpacity style={styles.logos}>
                        <Image style={{width:30, backgroundColor:'#1A413C'}} source={require("../../assets/images/money.png")}/>
                    </TouchableOpacity>
                    <Text style={{color:"white"}}>{t("Accounts")}</Text>
                </View>
           

                    

                   
            </View>

            <View style={styles.FourthRow}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:5}}>
                    <Text style={{color:"white", fontSize:20, fontWeight:'bold'}}>{t("Send Money")}</Text>
                    
                    <TouchableOpacity>
                    <Text style={{color:'gray'}} onPress={()=>navigation.navigate('MyBenefeciaries')}>{t("View All")}</Text>

                    </TouchableOpacity>
                </View>
                <FlatList
                data={Data}
                renderItem={Person}
                horizontal={true}
                />
            </View>

            
            <View style={styles.FifthRow}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:5}}>
                    <Text style={{color:"white", fontSize:20, fontWeight:'bold'}}>{t("History")}</Text>
                    <Text style={{color:'gray'}}>{t("View All")}</Text>
                </View>

             
                <FlatList
                data={ShopData}
                renderItem={Item}
                ItemSeparatorComponent={ItemSeparator}
                />

               
            </View>

</ScrollView>
        </View>
    )
}


export default ProfilePage