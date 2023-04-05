import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  ItemsContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column',
  },
  FirstRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 30,
  },

  LogOutText: {
    fontSize: 18,
    color: '#EB001B',
    marginStart: 12,
    marginLeft: -20,
    fontSize: 18,
  },

  Footer: {
    marginBottom: 30,
  },
});
