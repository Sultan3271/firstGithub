/**
 * @file Login.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../styles/Styles';
import auth from '@react-native-firebase/auth';
import { LoginForm } from '../utils/AuthServices'

const Login = ({ navigation }: any) => {

  // navigation.navigate('Home');

  return (
    <View style={styles.container}>
      
      {/* Company Icon */}
      <Image style={styles.profileImage} source={require('../images/NerdUpLogo.jpg')} />
      
      {/* Form */}
      <View style={styles.formContainer}>  
        <Text style={[styles.firstName,{color:'gray'}]}>Login</Text>

        <LoginForm nav={ navigation }/>

        {/* Divider */}
        <View style={styles.profilePicBox}>
          <View style={[styles.underLine,{width:'25%',}]}></View>

          <View >
            <Text>OR</Text>
          </View>

          <View style={[styles.underLine,{width:'25%',}]}></View>
        </View>

        {/* Other Log In Options */}
        <View>
          <TouchableOpacity style={[styles.submitBtn,{backgroundColor:'#d00000',padding:10,}]}>
            <Text style={styles.btnText}>Sign In with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.submitBtn,{backgroundColor:'#023e8a',padding:10,}]}>
            <Text style={styles.btnText}>Sign In With Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login