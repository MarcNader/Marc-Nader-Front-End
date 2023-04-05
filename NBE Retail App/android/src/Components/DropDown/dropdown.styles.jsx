import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  dropdownContainer: {
    marginVertical: 15,
    flexDirection: 'column',
    borderRadius: 10,
    height: 65,
  },
  Title: {
    backgroundColor: 'white',
    color: '#007236',
    paddingTop: 10,
    paddingBottom: 10,
    marginStart: 20,
    fontWeight: '700',
    fontSize: 14,
  },
  dropdown: {
    height: 30,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    marginStart: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginStart: 20,
    color: 'orange',
  },
  iconStyle: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: '70%',
    left: '90%',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
