import { TouchableOpacity,Image, Text } from 'react-native'
import styles from "./Person.styles"
const Person = ({item}) => {
  return (
    <TouchableOpacity style={styles.FlatListComponents}>
    <Image source={item.pic} />
    <Text style={{color:'black', marginTop:5}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default Person