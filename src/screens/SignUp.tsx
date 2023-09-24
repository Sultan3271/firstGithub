/**
 * @file SignUp.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/Styles';
import SignUpForm from '../components/SignUpForm';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

function SignUp({ navigation }: any)
{
  return (
    <ScrollView style={styles.container}>

      {/* Form */}
      <View style={styles.formContainer}>

        <View style={{flexDirection: "row", marginBottom: 50}}>
          <Icon name={"school-outline"} size={100} color="black"/>
          <Text style={[styles.firstName,{textAlignVertical: "center"}]}>Sign Up</Text>
        </View>

        <SignUpForm nav={navigation}/>

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
    </ScrollView>
  )
}

export default SignUp