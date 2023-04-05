import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  ScrollViewContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#F1F3FB',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  FirstRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007236',
    padding: 8,
    width: 40,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  OtherData: {
    height: 70,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'space-around',
  },

  Title: {
    color: '#007236',
    paddingTop: 17,
    paddingBottom: 10,
    marginStart: 20,
    fontWeight: '700',
    fontSize: 14,
  },
});
