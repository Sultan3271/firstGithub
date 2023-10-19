import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import formStyles from '../styles/formStyles';

const Button = (props: any) => {
  return (
    <TouchableOpacity style={formStyles.submitBtn} >
      <Text style={[formStyles.btnText, { color: "white" }]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button
