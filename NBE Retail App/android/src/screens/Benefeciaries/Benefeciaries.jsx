import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoBenef from "./NoBenef/NoBenef";
import AddBenef from "./AddBenef/AddBenef";
import MyBenefeciaries from "./MyBenefeciaries/MyBenefeciaries";
import TransactionHistory from "./TransactionHistory/TransactionHistory"

const Stack = createNativeStackNavigator();
const Benefeciaries=()=> {

    return(
        <Stack.Navigator initialRouteName="NoBenef" screenOptions={{
            headerShown: false
          }}>
                  <Stack.Screen name="NoBenef" component={NoBenef}/>
                  <Stack.Screen name="AddBenef" component={AddBenef}/>
                  <Stack.Screen name="MyBenefeciaries" component={MyBenefeciaries}/>
                  <Stack.Screen name="TransactionHistory" component={TransactionHistory}/>



               </Stack.Navigator>
        
       
    )
}



export default Benefeciaries