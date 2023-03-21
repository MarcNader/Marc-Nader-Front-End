import { TouchableOpacity,Image, Text } from 'react-native'
import styles from "./Person.styles"
import Mshaly from "../../assets/images/Meshaly.png"
const Person = (props) => {
  const {item}=props
  return (

    <TouchableOpacity style={styles.UserCard}>
      <Image source={Mshaly} />
      <Text style={{color:'black', marginTop:5}}>{item.firstName}</Text>
      </TouchableOpacity>
    
  )
}

export default Person