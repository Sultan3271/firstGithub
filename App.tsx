import { } from 'react-native'
import React from 'react'
import ScholarStack from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return(
    <NavigationContainer>
      <ScholarStack />
    </NavigationContainer>
  ) 
}

export default App