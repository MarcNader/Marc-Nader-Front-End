import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F1F3FB",
        paddingTop:20,
        paddingHorizontal:20,
      },

//First Row
    FirstRow: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:5,
    },
    FirstRowPart1:{
        flexDirection:'row',
        alignItems:'center',
    },
    username: {
        flexDirection:'column',
        marginStart:5,
    },
    Notification:{
        backgroundColor:'white',
        width:40,
        padding:8,
        borderRadius:8,
    },
//---------------------------------------------------------------------------//
//Second Row
    SecondRow:{
        flexDirection:'row',
        marginTop:10,
        backgroundColor:'white',
        borderRadius:15,
        height:80,
        alignItems:'center'
    },
    BenefCard:{
        flexDirection:'row',
        marginTop:3,
    },
//---------------------------------------------------------------------------//
//Third Row  
Component:{
    flexDirection:'row', 
    justifyContent:'space-between',
    height:40,
    marginTop:15,
    paddingBottom:10,
    alignItems:'center',
},
ComponentPart1: {
    paddingBottom:5,
},
ComponentPart2:{
    fontWeight:'bold',
    fontSize:18,
    color:'black',
},

})