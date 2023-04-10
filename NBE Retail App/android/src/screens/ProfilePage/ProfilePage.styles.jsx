import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  FirstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  FirstRowPart1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    flexDirection: 'column',
    marginStart: 5,
  },
  Notification: {
    backgroundColor: 'white',
    width: 40,
    padding: 8,
    borderRadius: 8,
  },
  SecondRow: {
    marginTop: 10,
  },
  ImageBackground: {
    marginTop: 20,
    backgroundColor: '#004F26',
    height: 140,
    borderRadius: 20,
    overflow: 'hidden',
  },

  CustomStyle: {
    height: 30,
    width: 30,
  },

  ShowBalance: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logos: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logosComponent: {
    flexDirection: 'column',
  },

  FourthRow: {
    marginTop: 20,
  },
  FifthRow: {
    marginTop: 20,
  },
  ShoopingList: {
    marginBottom: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  Footer: {
    position: 'absolute',
    backgroundColor: '#151A21',
    top: 598,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '111%',
    paddingVertical: 10,
    borderRadius: 15,
  },
  FooterElement: {
    paddingVertical: 10,
    backgroundColor: '#202933',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18%',
    height: '110%',
    marginStart: 5,
    marginEnd: 5,
    borderRadius: 15,
  },
});
