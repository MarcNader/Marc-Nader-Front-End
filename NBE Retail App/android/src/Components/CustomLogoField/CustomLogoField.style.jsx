import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  UnfocusedContainer: {
    borderWidth: 1.5,
    height: 65,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 25,
    backgroundColor: '#00000030',
    flexDirection: 'row',
    alignItems: 'center',
  },

  FocusedContainer: {
    borderWidth: 1.5,
    height: 65,
    borderColor: 'green',
    borderRadius: 10,
    marginTop: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },

  Logo: {
    marginHorizontal: 22,
  },
  UnfocusedTitle: {
    color: 'white',
    lineHeight: 17,
  },
  FocusedTitle: {
    color: '#007236',
    lineHeight: 17,
  },

  UnfocusedInput: {
    padding: 0,
    color: 'white',
  },

  FocusedInput: {
    padding: 0,
  },

  SecondPart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
