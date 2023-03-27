import {StyleSheet} from 'react-native';
export default StyleSheet.create({
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
  HeaderContainer: {
    marginTop: 15,
    flexDirection: 'column',
  },
  HeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  SubHeaderTitle: {
    color: 'gray',
    fontSize: 16,
  },
  BackButton: {
    backgroundColor: '#007236',
    padding: 8,
    width: 40,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
