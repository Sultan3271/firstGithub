/**
 * @file Login.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/Styles';

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      {/* Company Icon */}
      <Image style={styles.profileImage} source={require('../images/NerdUpLogo.jpg')} />
      
      {/* Form */}
      <View style={styles.formContainer}>  
        <Text style={[styles.firstName,{color:'gray'}]}>Login</Text>

        <View style={styles.inputFieldsContainer}> 
          <TextInput style={styles.formField} placeholder='Enter email...'></TextInput>
          <TextInput style={styles.formField} placeholder='Enter Password...'></TextInput>
        </View>

        {/* Submit Button */}
        <View style={styles.submitBtnContainer}>
          <TouchableOpacity style={styles.submitBtn} onPress={()=>navigation.navigate('Splash')}>
              <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('SignUp')}>
              <Text style={[styles.btnText,{fontWeight:'500',fontSize:16,color:'green'}]}>Don't have an account? SignUp</Text>
          </TouchableOpacity>
        </View>

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