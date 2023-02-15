import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        flex:1,
     },
     button: {
         backgroundColor: "#DDDDDD",
         width:40,
         height:40,
         borderRadius: 10,
         marginTop:20,
         marginStart:20,
         textAlign:"center",
         justifyContent:'center',
         alignItems:'center'
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
         backgroundColor:"#00000030",
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
     login:{
       width:"80%",
       backgroundColor:'#007236',
       alignItems:"center",
       justifyContent:'center',
       borderRadius:10,
     },
 
     Footer:{
         marginTop:20,
         backgroundColor:"#00000050",  //each color has 6 digits, then you put the percentage of intensity of the color
         padding:16,
         justifyContent:"center",
         alignItems:'center',
     },
     FooterBody:{
         flexDirection:'row',
     }
    
})