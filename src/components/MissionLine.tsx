import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/Styles';

const MissionLine = (props: any) => {
  return (
    <View style={{ margin: 2, alignItems: 'center' }}>
      <Text style={[styles.iconHeaderText, { fontSize: 32 }]}>{props.text}</Text>
    </View>
  )
}

export default MissionLine