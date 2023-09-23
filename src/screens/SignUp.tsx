/**
 * @file SignUp.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/Styles';
import { SignInForm } from '../utils/AuthServices';

const SignUp = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{uri:"https://i.ibb.co/s5Lg63K/nerd-Up-logo.jpg"}} />
      
      {/* Form */}
      <View style={styles.formContainer}>
      <Text style={[styles.firstName,{color:'gray'}]}>SignUp</Text>

        <SignInForm nav={navigation}/>

        {/* Divider */}
        <View style={styles.profilePicBox}>
          <View style={[styles.underLine,{width:'25%',}]}></View>

          <View >
            <Text>OR</Text>
          </View>

          <View style={[styles.underLine,{width:'25%',}]}></View>
        </View>

        {/* Other Sign In Options */}
        <View>
          <TouchableOpacity style={[styles.submitBtn,{backgroundColor:'#d00000',padding:10,}]}>

          <Text style={styles.btnText}>Sign Up with Google</Text>
            </TouchableOpacity>
              <TouchableOpacity style={[styles.submitBtn,{backgroundColor:'#023e8a',padding:10,}]}>
              <Text style={styles.btnText}>Sign Up With Facebook</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUp