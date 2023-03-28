import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './TransactionHistory.styles';
import {useTranslation} from 'react-i18next';
import Header from '../../../Components/Header/Header';

const TransactionHistory = ({navigation, route}) => {
  const {t, i18n} = useTranslation();
  const {item} = route.params;
  const Data = [
    {
      Name: 'Flat Rent',
      Date: '28-11-2022',
      Price: '$892,48.0',
    },
    {
      Name: 'House Fixes',
      Date: '27-11-2022',
      Price: '$560.0',
    },
    {
      Name: 'New Laptop',
      Date: '26-11-2022',
      Price: '$2355.76',
    },
    {
      Name: 'Flat Rent',
      Date: '28-11-2022',
      Price: '$892,48.0',
    },
    {
      Name: 'House Fixes',
      Date: '27-11-2022',
      Price: '$560.0',
    },
    {
      Name: 'New Laptop',
      Date: '26-11-2022',
      Price: '$2355.76',
    },
    {
      Name: 'Flat Rent',
      Date: '28-11-2022',
      Price: '$892,48.0',
    },
    {
      Name: 'House Fixes',
      Date: '27-11-2022',
      Price: '$560.0',
    },
    {
      Name: 'New Laptop',
      Date: '26-11-2022',
      Price: '$2355.76',
    },
  ];

  ItemSeparator = () => {
    return (
      <View style={{backgroundColor: 'black', height: 1, marginBottom: 5}} />
    );
  };

  const History = ({item}) => {
    return (
      <View style={styles.Component}>
        <View style={styles.ComponentPart1}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            {item.Name}
          </Text>
          <Text style={{color: 'gray'}}>{item.Date}</Text>
        </View>

        <Text style={styles.ComponentPart2}>{item.Price}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />

        <TouchableOpacity style={styles.SecondRow}>
          <TouchableOpacity style={styles.SecondRowPart1}>
            <Image
              source={require('../../../assets/images/Meshaly.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>

          <View style={styles.SecondRowPart2}>
            <Text style={styles.Name}>{item.firstName}</Text>

            <View style={styles.BenefCard}>
              <Image
                source={require('../../../assets/images/Phone.png')}
                style={{marginEnd: 5}}
              />
              <Text>{item.phoneNumber}</Text>
            </View>

            <View style={styles.BenefCard}>
              <Image
                source={require('../../../assets/images/Dollar.png')}
                style={{marginEnd: 5}}
              />
              <Text>{item.accountNumber}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.ListTitle}>{t('Transactions History')}</Text>

        <FlatList
          data={Data}
          renderItem={History}
          ItemSeparatorComponent={ItemSeparator}
        />
      </ScrollView>
    </View>
  );
};
export default TransactionHistory;
