/**
 * @file AuthServices.tsx
 * @description Components for authenticating users.
 * @ownership Christian Marcellino
 * @last modified 9/22/2023
 */

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/Styles';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DialogScrollArea from 'react-native-paper/lib/typescript/components/Dialog/DialogScrollArea';

/**
 * Used to create a login in form that connects with Firebase.
 * @param props (nav) property used to pass in the current navigation controls.
 */
function LoginForm(props: any)
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

/**
 * Used to create a sign in form that connects with Firebase.
 * 
 * On Submit: Adds the new user to the Users firestore database collection.
 * @param props (nav) property used to pass in the current navigation controls.
 */
function SignInForm(props: any)
{
    const [ usrName, setUserName ] = useState("");
    const [ usrEmail, setUserEmail ] = useState("");
    const [ usrPassword1, setUserPassword1 ] = useState("");
    const [ usrPassword2, setUserPassword2 ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");
    const [ isSubmitDisabled, setIsSubmitDisabled ] = useState(false);

    function tryAndSignIn()
    {
        setIsSubmitDisabled(true);

        if (usrName.length === 0)
        {
            Alert.alert("Name required!");
            setIsSubmitDisabled(false);
            return;
        }
        
        if (usrEmail.length === 0)
        {
            Alert.alert("Email required!");
            setIsSubmitDisabled(false);
            return;
        }

        if (usrPassword1.length === 0)
        {
            Alert.alert("Password required!");
            setIsSubmitDisabled(false);
            return;
        }

        if (usrPassword1.length === 0)
        {
            Alert.alert("Must re-type password!");
            setIsSubmitDisabled(false);
            return;
        }

        if (usrPassword1 !== usrPassword2)
        {
            Alert.alert("Passwords do not match!");
            setIsSubmitDisabled(false);
            return;
        }

        // creates and authenticates a new user
        auth().createUserWithEmailAndPassword(usrEmail, usrPassword1)
            .then(result => {
                const user = auth().currentUser;

                // adds the new user to the Users firestore database collection
                firestore()
                    .collection("Users").doc(user?.uid)
                    .set({ 
                        usrName: usrName,
                        usrEmail: usrEmail,
                        usrPassword: usrPassword1,
                    })
                    .then(() => {
                        Alert.alert("Success creating account!");
                        props.nav.navigate('UserProfile');
                        console.log(result);
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
        <View>
            {/* Input Fields */}
            <View style={styles.inputFieldsContainer}>
                <TextInput style={styles.formField} placeholder='Enter Name...' onChangeText={text=>setUserName(text)}></TextInput>
                <TextInput style={styles.formField} placeholder='Enter Email...' onChangeText={text=>setUserEmail(text)}></TextInput>
                <TextInput style={styles.formField} placeholder='Enter Password...' onChangeText={text=>setUserPassword1(text)}></TextInput>
                <TextInput style={styles.formField} placeholder='Confirm Password...' onChangeText={text=>setUserPassword2(text)}></TextInput>
            </View>

            <Text style={{color: "red"}}>{ errorMsg.toString() }</Text>

            {/* Submit Button */}
            <View style={styles.submitBtnContainer}>
                <TouchableOpacity style={styles.submitBtn} onPress={()=>tryAndSignIn()} disabled={isSubmitDisabled}>
                <Text style={styles.btnText}>SignUp</Text>

                </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={()=>props.nav.navigate('Login')}>
                    <Text style={[styles.btnText,{fontWeight:'500',fontSize:16,color:'green'}]}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
}

export { LoginForm, SignInForm };