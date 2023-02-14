import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#F1F3FB",
      justifyContent:'space-between',
    },
  FirstRow: {
    justifyContent: "space-between",
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
  
  CustomPassword: {
    borderWidth:2,
    padding:6,
    flex:1,
    marginEnd:20,
    borderColor:"#007236",
    borderRadius:10,
    marginTop:25,
    backgroundColor:"white",
    flexDirection:"row",
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