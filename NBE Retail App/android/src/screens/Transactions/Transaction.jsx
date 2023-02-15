
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native'
import DropdownComponent from '../../Components/DropDown/dropdown';
import styles from "./Transaction.styles";
import { useTranslation } from 'react-i18next';

const Transaction = ({navigation}) => {
  const {t, i18n}= useTranslation();

  const betweenAccounts = [
    { label: t("Between your accounts"), value: 'CIB credit' },
    { label: t("To another account"), value: 'CIB debit' },
  ];

  const TransferFrom= [
    { label: '045-6598768321 - $5,564,600.87', value: '$5,564,600.87' },
    { label: '042-6543658321 - $2,234,456.56', value: '$2,234,456.56' },
  ]

  const TransferTo=[
      { label: '042-6543658321 - $2,234,456.56', value: '$2,234,456.56' },
      { label: '045-6598768321 - $5,564,600.87', value: '$5,564,600.87' },
          
  ]
  
    const Data= [
      { 
        id:1,
        title:t("Type of transfer"),
        type:betweenAccounts,
      },
      
      { 
        id:2,
        title:t("Transfer From"),
        type:TransferFrom,
      },
      { 
        id:3,
        title:t("Transfer To"),
        type:TransferTo,
      },
    ]
    


  return (
      <ScrollView contentContainerStyle={styles.container} automaticallyAdjustKeyboardInsets={true}>
         {/* <KeyboardAvoidingView style={styles.container}> */}
    <View style={styles.container}>
       
    
    <View style={styles.wrapper}>

    <View style={styles.FirstRow}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransactionHistory')}>
        <Image source={require("../../assets/images/Back.png")}/>
    </TouchableOpacity>
         <Image source={require("../../assets/images/BankLogo2.png")} style={{marginTop:20, marginRight:20}}/>
        </View>

                {Data.map((data)=> {
              return <DropdownComponent data={data.type} title={data.title}/>
              })}
              
              <TouchableOpacity style={styles.OtherData} onPress={()=>{
    
              }}>
                        <Text style={{color:'black', paddingTop:17, paddingBottom:10, marginStart:20}}>{t("Amount To Transfer")}</Text>
                        <TextInput style={{color:'black', marginStart:20, marginTop:10}}>$</TextInput>
                </TouchableOpacity>
           
              



       </View>

 
  <TouchableOpacity style={styles.CustomSubmit} onPress={() => navigation.navigate('OTP')}>
  <Text style={{textAlign:"center", color:'white', fontSize:16}}>{t("Transfer")}</Text>

  </TouchableOpacity>
  



    </View>
             {/* </KeyboardAvoidingView> */}
    </ScrollView>
  )
}

export default Transaction