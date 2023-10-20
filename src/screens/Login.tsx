/**
 * @file Login.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Divider from '../components/Divider';
import LoginForm from '../components/LoginForm';
import MissionLine from '../components/MissionLine';
import ScholarBanner from '../components/ScholarBanner';
import formStyles from '../styles/formStyles';
import styles from '../styles/Styles';

function Login({ navigation }: any) 
{
  return (
    <ScrollView style={styles.container}>
      
      <ScholarBanner text="Login"/>
      {/* Form */}
      <View style={formStyles.container}>
        <LoginForm nav={navigation}/>
        <Divider text="OR" width={'25%'}/>

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
        <MissionLine text = "Peer to Peer learning!"/>
      </View>
    </ScrollView>
  )
}

export default Login