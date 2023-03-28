import {View, ScrollView} from 'react-native';
import Benefeciary from '../Benefeciary/Benefeciary';
import styles from './sortedbenef.styles';
const SortedBenef = ({BenefData, navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.SortedList}>
      {BenefData.map(user => {
        return (
          <View style={{marginRight: 0}}>
            <Benefeciary item={user} navigation={navigation} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SortedBenef;
