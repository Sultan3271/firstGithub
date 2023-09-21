import { View, Text } from 'react-native'
import React from 'react'
import UserProfile from './src/screens/UserProfile'
import Login from './src/screens/Login'
import ScholarStack from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import ScholarTabs from './src/navigation/TabNavigator'

const App = () => {
  return(
    <NavigationContainer>
      <ScholarStack />
    </NavigationContainer>
  ) 
}

export default App

