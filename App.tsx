import { View, Text } from 'react-native'
import React from 'react'
import UserProfile from './src/screens/UserProfile'
import Login from './src/screens/Login'
import MyStack from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import MyTabs from './src/navigation/TabNavigator'

const App = () => {
  return(
    <NavigationContainer>
      <MyStack /> 
    </NavigationContainer>
   
  ) 
}

export default App

