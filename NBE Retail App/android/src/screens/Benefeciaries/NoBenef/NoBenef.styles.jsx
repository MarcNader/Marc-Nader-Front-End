import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F1F3FB',
        paddingTop:20,
        paddingHorizontal:20,
    },

//------------------------------------------------------//
// First Row:
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

//------------------------------------------------------//
// Second Row:
    SecondRow: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },

//------------------------------------------------------//
// Third Row:
    ThirdRow:{
        position:'absolute',
        top:"40%",
        left:'25%',
        alignItems:'center',
        justifyContent:'center',
    }
})