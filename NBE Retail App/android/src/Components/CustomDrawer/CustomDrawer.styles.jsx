import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  FirstRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 30,
  },

  LogOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  LogOutText: {
    fontSize: 18,
    color: '#EB001B',
    marginStart: 12,
  },

  Footer: {
    marginBottom: 30,
    marginHorizontal: 20,
  },
});
