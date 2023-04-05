import {View, ScrollView} from 'react-native';
import Benefeciary from '../Benefeciary/Benefeciary';
import styles from './sortedbenef.styles';
import {useTheme} from '@react-navigation/native';

const SortedBenef = ({BenefData, navigation}) => {
  const {colors} = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.SortedList}>
      {BenefData.map(user => {
        return (
          <View style={{marginRight: 0}}>
            <Benefeciary item={user} navigation={navigation} colors={colors} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SortedBenef;
