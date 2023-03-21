import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    borderRadius: 30,
  },

  HeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 21,
  },
  Header: {
    fontSize: 20,
    fontWeight: '700',
  },

  SubHeader: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18.75,
    textAlign: 'center',
    width: 200,
    color: '#B7B7B7',
  },

  CustomFinish: {
    marginHorizontal: 20,
    marginBottom: 18,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#007236',
    textAlign: 'center',
  },
});
