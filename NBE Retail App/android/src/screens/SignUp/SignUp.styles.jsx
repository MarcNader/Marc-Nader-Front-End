import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        flex:1,
     },
     button: {
         backgroundColor: "#DDDDDD",
         padding: 8,
         width:40,
         borderRadius: 10,
         marginTop:20,
         marginStart:20,
         textAlign:"center",
       },
     FirstRow: {
         justifyContent: "space-between",
         flexDirection:"row"
     },
     SecondRow:{
         color:"white",
         fontSize:40,
         fontWeight:"bold",
     },
 
     CustomUsername: {
         borderWidth:2,
         padding:6,
         borderColor:"gray",
         borderRadius:10,
         marginTop:25,
         // backgroundColor:"#282E3C",
         backgroundColor:"rgba(52, 52, 52, 0.3)",
         flexDirection:"row",
     },
     CustomPassword: {
         borderWidth:2,
         padding:6,
         borderColor:"green",
         borderRadius:10,
         marginTop:25,
         backgroundColor:"white",
         flexDirection:"row",
     },
     CheckBoxSection:{
         flexDirection:'row', 
         alignItems:'center', 
         justifyContent:'space-between',
         marginTop:10,
     },
     Signup:{
       width:"80%",
       backgroundColor:'#007236',
       alignItems:"center",
       justifyContent:'center',
       borderRadius:10,
     },
 
    
})