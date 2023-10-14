/**
 * @file SignUpForm.tsx
 * @description Components for authenticating users.
 * @ownership Christian Marcellino
 * @last modified 9/23/2023
 */

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/Styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import formStyles from '../styles/formStyles';

import { getProfile } from '../services/DataService';

/**
 * Used to create a sign in form that connects with Firebase.
 * 
 * On Submit: Adds the new user to the Users firestore database collection.
 * @param props (nav) property used to pass in the current navigation controls.
 */



export default function SignUpForm(props: any)
{
    const [ usrName, setUserName ] = useState("");
    const [ usrEmail, setUserEmail ] = useState("");
    const [ usrPassword1, setUserPassword1 ] = useState("");
    const [ usrPassword2, setUserPassword2 ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");
    const [ isSubmitDisabled, setIsSubmitDisabled ] = useState(false);
    



    function setInProfile(userID:any){
     
        console.log(userID);
        console.log("normal", userID);
        const profileId= userID+"sp"+userID[3];
        
        firestore()
        .collection("Profile").doc(profileId)
        .set({ 
            userId: userID,
            profileId,
            bio: '',
            profilePic:'',
            schoolName:'',
            class:'',
            usrName: usrName,
            
        })
        .then(()=>{
        console.log("success!");
        getProfile(profileId)
        .then((userData) => {
         
          console.log('Received user data:', userData[0]);
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
        });
       
        //props.nav.navigate('Splash');
        
    
        })
        .catch(err =>{
            console.log(err);
            
        })
      
      }
  


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
                const userId= user?.uid;
                //console.log(userId);
                
                // adds the new user to the Users firestore database collection
                firestore()

        
                    .collection("Users").doc(userId)
                    .set({ 
                        usrName: usrName,
                        usrEmail: usrEmail,
                        usrPassword: usrPassword1,
                    })
                    .then(() => {
                        Alert.alert("Success creating account!");
                        //props.nav.navigate('Splash');
                        console.log(result);

                        setInProfile(userId);
                        
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
