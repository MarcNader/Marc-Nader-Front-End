import {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';
import SortedBenef from '../../../Components/SortedBenef/sortedbenef';
import styles from './MyBenefeciaries.styles';
import {useTranslation} from 'react-i18next';
import Header from '../../../Components/Header/Header';
import NoBenef from '../../../Components/NoBenef/NoBenef';
import PersonDetails from '../../../Components/PersonDetails/PersonDetails';
import {fetchBenefData, fetchData} from '../../../Util/http';
import {ActivityIndicator} from 'react-native';
import store from '../../../Redux/Store';
import {useSelector} from 'react-redux';
const MyBenefeciaries = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [sort, setSort] = useState(true);

  const Benefeciaries = useSelector(state => state.UsersData.Users);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Header navigation={navigation} />

        <View style={styles.SecondRow}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            {t('Benefeciaries')}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setSort(!sort)}>
              <Image
                source={require('../../../assets/images/SortButton.png')}
                style={{marginEnd: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddBenef')}>
              <Image source={require('../../../assets/images/Add.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {Benefeciaries.length > 0 ? (
          !sort ? (
            <FlatList data={Benefeciaries} renderItem={PersonDetails} />
          ) : (
            <SortedBenef BenefData={Benefeciaries} />
          )
        ) : (
          <>
            <NoBenef navigation={navigation} />
            {/* <ActivityIndicator animating={true} size="large" color={"#00ff00"}/> */}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default MyBenefeciaries;
