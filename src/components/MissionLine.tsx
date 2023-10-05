import { View, Text } from 'react-native'
import React from 'react'
import formStyles from '../styles/formStyles'
import styles from '../styles/Styles'

const MissionLine = (props:any) => {
  return (
    <View style={{margin: 2, alignItems: 'center'}}>
      <Text style={[styles.iconHeaderText, {fontSize: 32}]}>{props.text}</Text>
    </View>
  )
}

export default MissionLine