/**
 * @file SignUpForm.tsx
 * @description Components for authenticating users.
 * @ownership Christian Marcellino
 * @last modified 9/23/2023
 */

import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import auth from '@react-native-firebase/auth';

import { getProfile } from '../services/DataService';
import formStyles from '../styles/formStyles';
import styles from '../styles/Styles';
import Colors from '../Theme/ScholarColors';
import SButton from './SButton';
import { setInProfile } from '../services/DataService';

/**
 * Used to create a login in form that connects with Firebase.
 * @param props (nav) property used to pass in the current navigation controls.
 */
export default function LoginForm(props: any) {
  
  const [usrEmail, setUserEmail] = useState("");
  const [usrPassword, setUserPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  function LoginAnonymously() {
    auth().signInAnonymously()
          .then(user => {
            Alert.alert("Login successfull!");
            const userId = user.user.uid.toString();
            props.nav.navigate('Splash', { userId });

            getProfile(userId)
              .then((profile) => {
                console.log(profile);
                if (profile === undefined) {
                  console.log("Added profile");
                  setInProfile(userId, 'no bio', ' ', 'no school', 'no major', 'Anonomous');
                }
              })
              .catch((error) => {
                console.error(error);
              })
          })
  }

  function tryAndLogIn() {
    setIsSubmitDisabled(true);

    if (usrEmail.length === 0) {
      Alert.alert("Email required!");
      setIsSubmitDisabled(false);
      return;
    }

    if (usrPassword.length === 0) {
      Alert.alert("Password required!");
      setIsSubmitDisabled(false);
      return;
    }

    auth().signInWithEmailAndPassword(usrEmail, usrPassword)
      .then(user => {

        Alert.alert("Login successfull!");
        const userId = user.user.uid.toString();
        props.nav.navigate('Splash', { userId });
        getProfile(userId)
          .then((profile) => {
            console.log(profile);

          })
          .catch((error) => {
            console.log(error);

          })
        // console.log("user = ",usrId);
      })
      .catch(error => {
        // Alert.alert("Account could not be authenticated!");
        setErrorMsg(error);
        console.log(error);

        setIsSubmitDisabled(false);
      });
  }

  return (
    <View style={formStyles.submitContainer}>
      <View>
        <TextInput style={styles.formField} placeholder='Enter email...' onChangeText={text => setUserEmail(text)}></TextInput>
        <TextInput style={styles.formField} placeholder='Enter Password...' onChangeText={text => setUserPassword(text)} secureTextEntry={true}></TextInput>
      </View>

      <Text style={{ color: "red" }}>{errorMsg.toString()}</Text>

      {/* Submit Button */}
      <View style={formStyles.submitBtnContainer}>
        <SButton text="Log in" action={() => tryAndLogIn()}></SButton>
        <SButton styleType="Sentence" text="Don't have an account? SignUp" action={() => props.nav.navigate('SignUp')}></SButton>
      </View>

      <SButton styleType="BorderButton" text="Developement Only Login" action={() => LoginAnonymously()}></SButton>
    </View>
  );
}
