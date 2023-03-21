import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Carrefour from '../../assets/images/carrefour.png';
import Amazon from '../../assets/images/amazon.png';
import Jumia from '../../assets/images/jumia.png';
import {useCallback, useEffect, useState} from 'react';
import styles from './ProfilePage.styles';
import {useTranslation} from 'react-i18next';
import Header from '../../Components/Header/Header';
import Person from '../../Components/Person/Person';
import PopUp from '../../Components/ActionSheet/PopUp';
import ModalPop from '../../Components/PopUp/ModalPop';
import {fetchBenefData} from '../../Util/http';
import store from '../../Redux/Store';
import {ActivityIndicator} from 'react-native';
import {setUsers, UsersDataaction} from '../../Redux/UserData';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Credentials from '../../Redux/Credentials';
const ProfilePage = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [balance, setBalance] = useState(false);
  const [Visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const userId = useSelector(state => state.Credentials.UserId);
  const Benefeciaries = useSelector(state => state.UsersData.Users);
  const dispatch = useDispatch();

  const getUsers = async refresh => {
    const users = await fetchBenefData(userId);

    console.log('This is the RESPONSE ON USE EFFECT:', users);

    setFetchedData(users);

    dispatch(setUsers(users));

    if (refresh) {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getUsers(true);
  }, []);

  const ShopData = [
    {
      id: 1,
      name: 'Carrefour',
      time: '15-11-2022',
      price: '$250',
      logo: Carrefour,
    },
    {
      id: 2,
      name: 'Amazon',
      time: '18-11-2022',
      price: '$3000',
      logo: Amazon,
    },
    {
      id: 3,
      name: 'Jumia',
      time: '22-11-2022',
      price: '$800',
      logo: Jumia,
    },

    {
      id: 4,
      name: 'Jumia',
      time: '23-11-2022',
      price: '$2000',
      logo: Jumia,
    },
    {
      id: 5,
      name: 'Amazon',
      time: '25-11-2022',
      price: '$1250',
      logo: Amazon,
    },
    {
      id: 6,
      name: 'Carrefour',
      time: '27-11-2022',
      price: '$450',
      logo: Carrefour,
    },
  ];

  ItemSeparator = () => {
    return (
      <View style={{backgroundColor: 'white', height: 1, marginBottom: 5}} />
    );
  };

  const Item = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.ShoopingList}>
            <Image source={item.logo} />
          </TouchableOpacity>

          <View>
            <Text style={{color: 'white', fontSize: 20, marginStart: 10}}>
              {item.name}
            </Text>
            <Text style={{color: 'gray', marginStart: 10, marginTop: 5}}>
              {item.time}
            </Text>
          </View>
        </View>

        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {item.price}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header navigation={navigation} />

        <ImageBackground
          source={require('../../assets/images/Rectangle.png')}
          resizeMode="cover"
          style={styles.ImageBackground}>
          <View style={styles.SecondRow}>
            <View style={styles.FirstRow}>
              <Text style={{color: 'white'}}>{t('Balance')}</Text>
              <PopUp CustomStyle={styles.CustomStyle} />
            </View>

            <View style={styles.ShowBalance}>
              <TouchableOpacity onPress={() => setBalance(!balance)}>
                {balance ? (
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    $2,346,567,00
                  </Text>
                ) : (
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    {t('Press Here To Show Balance')}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
          <Text>Press here to show modal</Text>
        </TouchableOpacity>

        {Visible && <ModalPop isVisible={value => setVisible(value)} />}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.logosComponent}>
            <TouchableOpacity style={styles.logos}>
              <Image
                style={{width: 30, backgroundColor: '#1A413C'}}
                source={require('../../assets/images/money.png')}
              />
            </TouchableOpacity>
            <Text style={{color: 'white'}}>{t('Accounts')}</Text>
          </View>
          <View style={styles.logosComponent}>
            <TouchableOpacity style={styles.logos}>
              <Image
                style={{width: 30, backgroundColor: '#1A413C'}}
                source={require('../../assets/images/money.png')}
              />
            </TouchableOpacity>
            <Text style={{color: 'white'}}>{t('Accounts')}</Text>
          </View>
          <View style={styles.logosComponent}>
            <TouchableOpacity style={styles.logos}>
              <Image
                style={{width: 30, backgroundColor: '#1A413C'}}
                source={require('../../assets/images/money.png')}
              />
            </TouchableOpacity>
            <Text style={{color: 'white'}}>{t('Accounts')}</Text>
          </View>
          <View style={styles.logosComponent}>
            <TouchableOpacity style={styles.logos}>
              <Image
                style={{width: 30, backgroundColor: '#1A413C'}}
                source={require('../../assets/images/money.png')}
              />
            </TouchableOpacity>
            <Text style={{color: 'white'}}>{t('Accounts')}</Text>
          </View>
        </View>

        <View style={styles.FourthRow}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              {t('Send Money')}
            </Text>

            <TouchableOpacity>
              <Text
                style={{color: 'gray'}}
                onPress={() => navigation.navigate('MyBenefeciaries')}>
                {t('View All')}
              </Text>
            </TouchableOpacity>
          </View>

          {fetchedData.length > 0 ? (
            <FlatList
              data={fetchedData}
              renderItem={Person}
              horizontal={true}
            />
          ) : (
            <ActivityIndicator
              animating={true}
              size="large"
              color={'#00ff00'}
            />
          )}
        </View>

        <View style={styles.FifthRow}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              {t('History')}
            </Text>
            <Text style={{color: 'gray'}}>{t('View All')}</Text>
          </View>

          <FlatList
            data={ShopData}
            renderItem={Item}
            ItemSeparatorComponent={ItemSeparator}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
