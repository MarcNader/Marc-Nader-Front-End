import {StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfilePage from '../ProfilePage/ProfilePage';
import AddBenef from './AddBenef/AddBenef';
import MyBenefeciaries from './MyBenefeciaries/MyBenefeciaries';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const Stack = createNativeStackNavigator();
const Benefeciaries = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyBenefeciaries"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyBenefeciaries" component={MyBenefeciaries} />
      <Stack.Screen name="AddBenef" component={AddBenef} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
    </Stack.Navigator>
  );
};

export default Benefeciaries;
