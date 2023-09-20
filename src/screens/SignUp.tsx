import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/Styles'
import {useNavigation} from '@react-navigation/native';
import {t} from 'react-native-tailwindcss';
const SignUp = () => {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{uri:"https://i.ibb.co/s5Lg63K/nerd-Up-logo.jpg"}} />
      <View style={styles.formContainer}>
      <Text style={[styles.firstName,{color:'gray'}]}>SignUp</Text>
      <View style={styles.inputFieldsContainer}>
      <Text style={[t.absolute,t.bgBlack,t.fontPadding]}>Nerd Up</Text>
      
         <TextInput style={styles.formField} placeholder='Enter Name...'></TextInput>
         <TextInput style={styles.formField} placeholder='Enter Email...'></TextInput>
         <TextInput style={styles.formField} placeholder='Enter Password...'></TextInput>
         <TextInput style={styles.formField} placeholder='Confirm Password...'></TextInput>
      </View>
      <View style={styles.submitBtnContainer}>
        <TouchableOpacity style={styles.submitBtn} onPress={()=>navigation.navigate('UserProfile')}>
            <Text style={styles.btnText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('Login')}>
            <Text style={[styles.btnText,{fontWeight:'500',fontSize:16,color:'green'}]}>Already have an account? SignIn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profilePicBox}>
        <View style={[styles.underLine,{width:'25%',}]}>

        </View>
        <View >
          <Text>OR</Text>
                  </View>
        <View style={[styles.underLine,{width:'25%',}]}>

        </View>
        </View>
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