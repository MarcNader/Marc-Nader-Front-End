import { View } from "react-native"

import { firebase } from '@react-native-firebase/auth'
import { useState } from "react";
const Auth= ()=> {

    const[Username,setUserName]=useState('');
    const[Password,setPassword]=useState('');

     loginUser= async(Username,Password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(Username,Password);
        }catch(error){
            alert(error.message)
        }
     }
//     auth()
//   .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
    return(
        <View></View>
    )
}

export default Auth