import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  image: {
    flex: 1,
    backgroundColor: '#007236',
    alignItems: 'baseline',
  },
  FirstRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  BackButton: {
    backgroundColor: 'orange',
    padding: 8,
    width: 40,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Header: {marginTop: 15},
  HeaderTitle: {color: 'white', fontSize: 30, fontWeight: 'bold'},
  HeaderSubTitle: {color: 'white', fontSize: 16},
  borderStyleBase: {
    width: 30,
    height: 45,
    borderColor: 'black',
  },

  underlineStyleBase: {
    width: 40,
    height: 65,
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    borderColor: 'white',
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    borderColor: 'green',
  },
  CustomSubmit: {
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#007236',
    textAlign: 'center',
  },
});
