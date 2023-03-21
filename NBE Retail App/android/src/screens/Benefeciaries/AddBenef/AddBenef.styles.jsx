import { StyleSheet, Dimensions } from "react-native";
const deviceHeight =  Dimensions.get("window").height;
const deviceWidth =  Dimensions.get("window").width;
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F1F3FB",
        paddingTop:deviceHeight <900 ? 20 : 30,
        // paddingHorizontal:20,
        paddingHorizontal:(deviceWidth*5/100),
      },

    //First Row
    FirstRow: {
      justifyContent: "space-between",
      flexDirection:"row"
    },
    FirstRowPart1:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
    },
    button: {
        backgroundColor: "#007236",
        padding: 8,
        width:40,
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center',
      },

    Notification:{
        backgroundColor:'white',
        width:40,
        padding:8,
        borderRadius:8,
        marginStart:5,
    },

//------------------------------------------------------------------------------//

//Second Row
    SecondRow: {
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
    },
    AddPicContainer:{
        width:80,
        height:80,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },
//------------------------------------------------------------------------------//

//Third Row:
    ThirdRow:{
        flexDirection:'row'
    },
    Name:{
        backgroundColor:'white',
        width:"48%",
        height:60,
        marginTop:20,
        borderRadius:15,
        justifyContent:'space-around',
    },
//------------------------------------------------------------------------------//
//Fourth Row
    OtherData:{
        height:60,
        marginTop:10,
        width:'100%',
        backgroundColor:'white',
        borderRadius:15,
        justifyContent:'space-around',
    },
//------------------------------------------------------------------------------//
//Add Benef Button
    AddBenefButton:{
            backgroundColor:'#007236',
            justifyContent:'center',
            alignItems:'center',
            height:50,
            marginTop:17,
            borderRadius:15,
    },

})