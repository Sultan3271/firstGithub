import { } from 'react-native'
import React, { useEffect } from 'react'
import ScholarStack from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import firestore, { firebase } from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

const App = () => {
  return(
    <NavigationContainer>
      <ScholarStack />
    </NavigationContainer>
  ) 
}

export default App