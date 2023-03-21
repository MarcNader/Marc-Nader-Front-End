import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3FB',
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    position: 'relative',
  },

  //------------------------------------------------------------------------------//

  //Second Row
  SecondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  //------------------------------------------------------------------------------//
  //Third Row
  ThirdRow: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 80,
    alignItems: 'center',
  },
  BenefCard: {
    flexDirection: 'row',
    marginTop: 3,
  },

  // Sorted Third Row
  SortedThirdRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  sortedBenef: {
    borderRadius: 15,
    marginEnd: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
  },
});
