/**
 * @file SignUp.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/Styles';
import SignUpForm from '../components/SignUpForm';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import formStyles from '../styles/formStyles';
import Divider from '../components/Divider';
import ScholarBanner from '../components/ScholarBanner';

function SignUp({ navigation }: any)
{
  return (
    <ScrollView style={styles.container}>

<ScholarBanner text="Sign Up"/>
      {/* Form */}
      <View style={formStyles.container}>

        
        <SignUpForm nav={navigation}/>
        <Divider text="OR"/>

        {/* Other Sign In Options */}
        <View>
          <TouchableOpacity style={[formStyles.submitBtn, { backgroundColor: '#d00000', flexDirection: "row", justifyContent: "center", columnGap: 10 }]}>
            <Icon name='logo-google' size={30} color="white"></Icon>
            <Text style={styles.btnText}>Sign In with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[formStyles.submitBtn, { backgroundColor: '#023e8a', flexDirection: "row", justifyContent: "center", columnGap: 10 }]}>
            <Icon name='logo-facebook' size={30} color="white" />
            <Text style={styles.btnText}>Sign In With Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp