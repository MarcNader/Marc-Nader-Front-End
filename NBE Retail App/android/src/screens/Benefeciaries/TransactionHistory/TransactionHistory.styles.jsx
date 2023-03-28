import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3FB',
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  //---------------------------------------------------------------------------//
  //Second Row
  SecondRow: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 80,
    alignItems: 'center',
  },
  SecondRowPart1: {marginStart: 10},
  SecondRowPart2: {marginStart: 10},
  Name: {fontSize: 18, fontWeight: '700'},

  BenefCard: {
    flexDirection: 'row',
    marginTop: 3,
  },

  ListTitle: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },

  //---------------------------------------------------------------------------//
  //Third Row
  Component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 15,
    paddingBottom: 10,
    alignItems: 'center',
  },
  ComponentPart1: {
    paddingBottom: 5,
  },
  ComponentPart2: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
