/**
 * @file SignUpForm.tsx
 * @description Components for authenticating users.
 * @ownership Christian Marcellino
 * @last modified 9/23/2023
 */

import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import auth from '@react-native-firebase/auth';

import { getProfile, setInProfile } from '../services/DataService';
import formStyles from '../styles/FormStyles';
import styles from '../styles/Styles';
import { getUserId } from '../utils/Auth';
import SButton from './SButton';
import useUserProfileStore from '../zustand/UserProfileStore';

/**
 * Used to create a login in form that connects with Firebase.
 * @param props (nav) property used to pass in the current navigation controls.
 */
export default function LoginForm(props: any) {

    const [usrEmail, setUserEmail] = useState("");
    const [usrPassword, setUserPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const userProfile = useUserProfileStore(store=>store)

    const setProfileData = useUserProfileStore(store=>store.setProfileData)

    // Log in anonymously
    function LoginAnonymously() {
        // use the authentication login system
        auth().signInAnonymously()
            // if login anonomous successful
            .then(() => {

                Alert.alert("Login successfull!");
                const userId = getUserId();
                props.nav.navigate('Splash', { userId });

                getProfile(userId)
                    .then((profile: any) => {

                        console.log(profile);

                        // if could not find a profile for anonomous
                        if (profile === undefined) {
                            console.log("Added profile");
                            setInProfile(userId, 'no bio', ' ', 'no school', 'no major', 'Anonomous');
                        }
                        
                        setProfileData({ userID: getUserId(), ...profile })
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Login with Form data
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
            })
            .catch(error => {
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
