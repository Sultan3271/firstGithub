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
import LoginForm from '../components/LoginForm';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

function Login({ navigation }: any) 
{
  return (
    <ScrollView style={styles.container}>
      
      {/* Form */}
      <View style={styles.formContainer}>  

        <View style={{flexDirection: "row", marginBottom: 50}}>
          <Icon name={"school-outline"} size={100} color="black"/>
          <Text style={styles.iconHeaderText}>Login</Text>
        </View>

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
    </ScrollView>
  )
}

export default Login