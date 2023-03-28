import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './PersonDetails.style';
const PersonDetails = ({item, navigation, CustomContainer}) => {
  return (
    <TouchableOpacity
      style={[styles.BenefDetailsContainer, CustomContainer]}
      onPress={() => navigation.navigate('TransactionHistory', {item})}>
      <View>
        <TouchableOpacity style={styles.IconContainer}>
          <Image
            source={require('../../assets/images/Meshaly.png')}
            style={styles.Icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.BenefDetails}>
        {item.firstName && (
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {item.firstName}
          </Text>
        )}

        {item.phoneNumber && (
          <View style={styles.BenefCard}>
            <Image
              source={require('../../assets/images/Phone.png')}
              style={{marginEnd: 5}}
            />
            <Text>{item.phoneNumber}</Text>
          </View>
        )}

        {item.accountNumber && (
          <View style={styles.BenefCard}>
            <Image
              source={require('../../assets/images/Dollar.png')}
              style={{marginEnd: 5}}
            />
            <Text>{item.accountNumber}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PersonDetails;
