import {TouchableOpacity, Image, Text} from 'react-native';
import styles from './Benefeciary.styles';
import Mshaly from '../../assets/images/Meshaly.png';
const Benefeciary = props => {
  const {item, navigation, colors} = props;
  return (
    <TouchableOpacity
      style={[styles.UserCard, {backgroundColor: colors.primary}]}
      onPress={() => navigation.navigate('TransactionHistory', {item})}>
      <Image source={Mshaly} />
      <Text style={{color: 'black', marginTop: 5}}>{item.firstName}</Text>
    </TouchableOpacity>
  );
};

export default Benefeciary;
