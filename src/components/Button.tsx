import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import formStyles from '../styles/formStyles'
const Button = (props:any) => {
  return (
    <TouchableOpacity style={formStyles.submitBtn} >
    <Text style={[formStyles.btnText, {color: "white"}]}>{props.text}</Text>
</TouchableOpacity>
  ) 
}

export default Button
