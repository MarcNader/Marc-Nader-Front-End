import { StyleSheet } from "react-native";
  
export default StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'space-between',
    },
    image: {
       flex:1,
        backgroundColor:'#007236',
        alignItems:'baseline'
     },
  FirstRow: {
    justifyContent: "flex-end",
    flexDirection:"row"
  },
  button: {
    backgroundColor: "#007236",
    padding: 8,
    width:40,
    borderRadius: 10,
    marginTop:20,
    marginStart:20,
    alignItems:'center',
    justifyContent:'center',
  },
  
  borderStyleBase: {
    width: 30,
    height: 45,
    borderColor:'black'
  },
  
  underlineStyleBase: {
    width: 40,
    height: 65,
    borderWidth: 1,
    backgroundColor:'white',
    color:'black',
    fontSize:20,
    borderColor:'white',
    borderRadius:10,
  },
  
  underlineStyleHighLighted: {
    borderColor: "green",
  },
  CustomSubmit: {
    marginHorizontal:20,
    marginBottom:20, 
    paddingVertical:12, 
    borderRadius:10, 
    backgroundColor:'#007236',
    textAlign:"center",
  }
  })