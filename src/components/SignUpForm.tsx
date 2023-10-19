/**
 * @file SignUpForm.tsx
 * @description Components for authenticating users.
 * @ownership Christian Marcellino
 * @last modified 9/23/2023
 */

import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { getProfile, setInProfile } from '../services/DataService';
import formStyles from '../styles/formStyles';
import styles from '../styles/Styles';

/**
 * Used to create a sign in form that connects with Firebase.
 * 
 * On Submit: Adds the new user to the Users firestore database collection.
 * @param props (nav) property used to pass in the current navigation controls.
 */
export default function SignUpForm(props: any) {
  const [usrName, setUserName] = useState("");
  const [usrEmail, setUserEmail] = useState("");
  const [usrPassword1, setUserPassword1] = useState("");
  const [usrPassword2, setUserPassword2] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);


  function tryAndSignIn() {

    setIsSubmitDisabled(true);

    if (usrName.length === 0) {
      Alert.alert("Name required!");
      setIsSubmitDisabled(false);
      return;
    }

    if (usrEmail.length === 0) {
      Alert.alert("Email required!");
      setIsSubmitDisabled(false);
      return;
    }

    if (usrPassword1.length === 0) {
      Alert.alert("Password required!");
      setIsSubmitDisabled(false);
      return;
    }

    if (usrPassword1.length === 0) {
      Alert.alert("Must re-type password!");
      setIsSubmitDisabled(false);
      return;
    }

    if (usrPassword1 !== usrPassword2) {
      Alert.alert("Passwords do not match!");
      setIsSubmitDisabled(false);
      return;
    }

    // creates and authenticates a new user
    auth().createUserWithEmailAndPassword(usrEmail, usrPassword1)
      .then(result => {
        const user = auth().currentUser;
        const userId = user?.uid;
        //console.log(userId);

        // adds the new user to the Users firestore database collection
        firestore()


          .collection("Users").doc(userId).collection("Credentials")
          .doc(userId)
          .set({
            usrName: usrName,
            usrEmail: usrEmail,
            usrPassword: usrPassword1,
          })
          .then(() => {
            Alert.alert("Success creating account!");
            props.nav.navigate('Splash', { userId });
            console.log(result);
            setInProfile(userId, 'no bio', ' ', 'no school', 'no major', usrName)

          })
          .catch(error => {
            setErrorMsg(error);
            console.log(error);

            setIsSubmitDisabled(false);
          });
      })
      .catch(error => {
        // Alert.alert("Error creating account!");
        setErrorMsg(error);
        console.log(error);

        setIsSubmitDisabled(false);
      });
  }

  return (
    <View style={formStyles.submitContainer}>
      {/* Input Fields */}
      <View>
        <TextInput style={styles.formField} placeholder='Enter Name...' onChangeText={text => setUserName(text)}></TextInput>
        <TextInput style={styles.formField} placeholder='Enter Email...' onChangeText={text => setUserEmail(text)}></TextInput>
        <TextInput style={styles.formField} placeholder='Enter Password...' onChangeText={text => setUserPassword1(text)} secureTextEntry={true}></TextInput>
        <TextInput style={styles.formField} placeholder='Confirm Password...' onChangeText={text => setUserPassword2(text)} secureTextEntry={true}></TextInput>
      </View>

      <Text style={{ color: "red" }}>{errorMsg.toString()}</Text>

      {/* Submit Button */}
      <View style={formStyles.submitBtnContainer}>
        <TouchableOpacity style={formStyles.submitBtn} onPress={() => tryAndSignIn()} disabled={isSubmitDisabled}>
          <Text style={[formStyles.btnText, { color: "white" }]}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.nav.navigate('Login')}>
          <Text style={formStyles.btnText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
