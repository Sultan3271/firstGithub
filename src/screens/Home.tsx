import { View, Text } from 'react-native'
import React from 'react'
import MyTabs from '../navigation/TabNavigator'
import BottomTabs from '../Components/BottomTabs'

const Home = () => {
  return (
   <View>
    <Text>Home</Text>
    <BottomTabs />
   </View>
  )
}

export default Home