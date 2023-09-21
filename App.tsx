import { } from 'react-native'
import React, { useEffect } from 'react'
import ScholarStack from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import firestore, { firebase } from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

const App = () => {

  auth().signInWithEmailAndPassword("nerdupcompany@gmail.com", "#n3rdup321");

  const user = firestore()
                .collection("Users")
                .doc("Cam")
                .get()
                .then(user => {
                  console.log(user.data()!.birthday);
                })
                .catch(error => {
                  console.error(error);
                });

  return(
    <NavigationContainer>
      <ScholarStack />
    </NavigationContainer>
  ) 
}

export default App

