import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  receiverContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 330,
    height: 200,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'green',
    borderRadius: 27,
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 30,
  },
  receiver: {
    width: 200,
    height: 200,
    position: 'absolute',
  },
  Text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    marginHorizontal: 20,
    lineHeight: 24,
    zIndex: 0,
  },
});
