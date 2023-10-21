import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import formStyles from '../styles/formStyles';
import Colors from '../Theme/ScholarColors';

const SButton = (props: any) => {

  if (props.styleType === "Sentence")
  {
    return (
      <TouchableOpacity onPress={() => props.action()}>
        <Text style={formStyles.btnText}>{props.text}</Text>
      </TouchableOpacity>
    )
  }
  else if (props.styleType === "BorderButton")
  {
    return (
      <TouchableOpacity style={[formStyles.submitBtn, {backgroundColor: Colors.background, borderColor: "black", borderRadius: 10, borderWidth: 5}]} onPress={() => props.action()}>
          <Text style={[formStyles.btnText, { color: "black" }]}>{props.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={formStyles.submitBtn} onPress={() => props.action()}>
      <Text style={[formStyles.btnText, {color: "white"}]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default SButton
