import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import Header from '../../Components/Header/Header';
import styles from './AirPay.styles.jsx';
import {useTheme} from '@react-navigation/native';
import BlueCard from '../../assets/images/BlueVisa.png';
import RedCard from '../../assets/images/RedVisa.png';
import GreenCard from '../../assets/images/GreenVisa.png';
import {DraxProvider, DraxView} from 'react-native-drax';
import {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
const AirPay = ({navigation}) => {
  const {colors} = useTheme();
  const [Visa, setVisa] = useState();

  const Data = [
    {
      id: 1,
      Image: BlueCard,
    },
    {
      id: 2,
      Image: RedCard,
    },
    {
      id: 3,
      Image: GreenCard,
    },
  ];
  const Card = ({item}) => {
    return (
      <DraxView
        onDragStart={() => {
          console.log('start drag');
        }}
        payload={item.Image}
        style={{marginRight: 10}}
        renderContent={() => {
          return <Image source={item.Image} style={{marginTop: 40}} />;
        }}
      />
    );
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView>
        <Header navigation={navigation} />
        <DraxProvider>
          <FlatList
            data={Data}
            renderItem={Card}
            horizontal={true}
            style={{
              height: 250,
            }}
          />
          <View style={styles.receiverContainer}>
            {!Visa && (
              <Text style={styles.Text}>
                Touch & hold a card then drag it to this box
              </Text>
            )}
            <DraxView
              style={styles.receiver}
              onReceiveDragEnter={({dragged: {payload}}) => {
                setVisa(payload);
              }}
              onReceiveDragExit={({dragged: {payload}}) => {
                setVisa();
              }}
              onDragEnd={({dragged: {payload}}) => {
                setVisa();
              }}
              onReceiveDragDrop={({dragged: {payload}}) => {
                setVisa(payload);
              }}
              renderContent={() => {
                return (
                  <>{Visa && <Image source={Visa} style={{zIndex: 1}} />}</>
                );
              }}
            />
          </View>

          <CustomButton
            text={'Pay Now'}
            CustomStyleContainer={{marginHorizontal: 20}}
          />
        </DraxProvider>
      </ScrollView>
    </View>
  );
};

export default AirPay;
