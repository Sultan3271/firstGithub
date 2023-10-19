/**
 * @file SignUp.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Divider from '../components/Divider';
import ScholarBanner from '../components/ScholarBanner';
import SignUpForm from '../components/SignUpForm';
import formStyles from '../styles/formStyles';
import styles from '../styles/Styles';

function SignUp({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>

      <ScholarBanner text="Sign Up" />
      {/* Form */}
      <View style={formStyles.container}>
        <SignUpForm nav={navigation} />
        <Divider text="OR" />

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