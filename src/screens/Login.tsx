/**
 * @file Login.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from '../styles/Styles';
import LoginForm from '../components/LoginForm';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import formStyles from '../styles/formStyles';
import Divider from '../components/Divider';
import ScholarBanner from '../components/ScholarBanner';
import Button from '../components/Button';

function Login({ navigation }: any) 
{
  return (
    <ScrollView style={styles.container}>
      
      <ScholarBanner text="Login"/>
      {/* Form */}
      <View style={formStyles.container}>  

        
        <LoginForm nav={navigation}/>
        <Divider text="OR"/>

        {/* Other Log In Options */}
        <View>
          <TouchableOpacity style={[formStyles.submitBtn,{backgroundColor:'#d00000',flexDirection: "row",justifyContent: "center", columnGap: 10}]}>
            <Icon name='logo-google' size={30} color="white"></Icon>
            <Text style={styles.btnText}>Sign In with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[formStyles.submitBtn,{backgroundColor:'#023e8a',flexDirection: "row",justifyContent: "center", columnGap: 10}]}>
            <Icon name='logo-facebook' size={30} color="white"/>
            <Text style={styles.btnText}>Sign In With Facebook</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </ScrollView>
  )
}

export default Login