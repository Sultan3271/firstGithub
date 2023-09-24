/**
 * @file SignUpForm.tsx
 * @description Components for authenticating users.
 * @ownership Christian Marcellino
 * @last modified 9/23/2023
 */

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/Styles';
import auth from '@react-native-firebase/auth';

/**
 * Used to create a login in form that connects with Firebase.
 * @param props (nav) property used to pass in the current navigation controls.
 */
export default function LoginForm(props: any)
{
    const [ usrEmail, setUserEmail ] = useState("");
    const [ usrPassword, setUserPassword ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");
    const [ isSubmitDisabled, setIsSubmitDisabled ] = useState(false);

    function tryAndLogIn()
    {
        setIsSubmitDisabled(true);

        if (usrEmail.length === 0)
        {
            Alert.alert("Email required!");
            setIsSubmitDisabled(false);
            return;
        }
        
        if (usrPassword.length === 0)
        {
            Alert.alert("Password required!");
            setIsSubmitDisabled(false);
            return;
        }

        auth().signInWithEmailAndPassword(usrEmail, usrPassword)
                .then(user => {
                    Alert.alert("Login successfull!");
                    props.nav.navigate('Splash');
                    console.log(user);
                })
                .catch(error => {
                    // Alert.alert("Account could not be authenticated!");
                    setErrorMsg(error);
                    console.log(error);

                    setIsSubmitDisabled(false);
                });
    }

    return (
        <View>
            <View style={styles.inputFieldsContainer}>
                <TextInput style={styles.formField} placeholder='Enter email...' onChangeText={text=>setUserEmail(text)}></TextInput>
                <TextInput style={styles.formField} placeholder='Enter Password...' onChangeText={text=>setUserPassword(text)}></TextInput>
            </View>

            <Text style={{color: "red"}}>{ errorMsg.toString() }</Text>

            {/* Submit Button */}
            <View style={styles.submitBtnContainer}>
                <TouchableOpacity style={styles.submitBtn} onPress={()=>tryAndLogIn()} disabled={isSubmitDisabled}>
                    <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>props.nav.navigate('SignUp')}>
                    <Text style={[styles.btnText,{fontWeight:'500',fontSize:16,color:'green'}]}>Don't have an account? SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
}
