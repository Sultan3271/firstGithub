/**
 * @file UserProfile.tsx
 * @description ?
 * @ownership Shan Ayub
 *
 * @last modified 14/10/2023
*/

import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation, useRoute } from '@react-navigation/native';

import ScholarBanner from '../../components/ScholarBanner';
import { posts, setInProfile } from '../../services/DataService';
import { userId } from '../../services/UserId';
import styles from '../../styles/Styles';
import { Fonts } from '../../theme/Fonts';
import Colors from '../../theme/ScholarColors';
import { uploadImage } from '../../services/UploadFunctions';
import { launchImageLibrary } from 'react-native-image-picker';

/**
 * @description This screen is an additive screen
 */
const EditProfile = () => {
    // getting data from navigation props
    // Purpose: so we can show user it's previous details in fields
    // This will eventually be replaced by redux
    const route = useRoute();
    const Name = route.params?.profileData.usrName;
    const School = route.params?.profileData.schoolName;
    const Major = route.params?.profileData.Class;
    const Bio = route.params?.profileData.bio;
    const prfPic = route.params?.profileData.profilePic
    const [name, setName] = useState(Name);
    const [school, setSchool] = useState(School);
    const [major, setMajor] = useState(Major);
    const [bio, setBio] = useState(Bio);
    const [profilePic, setProfilePic] = useState(prfPic);
    navigation = useNavigation();

    /**
     * updating information
     */
    function setChanges() {
        if (name.length == 0) {
            Alert.alert('Name cannot be Empty!');
        } else {
            setInProfile(userId, bio, profilePic, school, major, name);
            Alert.alert('Updated!');
            navigation.goBack();
        }
    }

    const openImagePicker = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('Image picker was canceled');
            } else if (response.error) {
                console.error('Image picker error:', response.error);
            } else {
                // Handle the selected image here

                const uri = response.assets[0].uri;
                const fileName = response.assets[0].fileName;
                const path = `images/users/${userId}/profilePictures/${fileName}`.toString();
                uploadImage(uri, path)
                    .then(imgurl => {
                        setProfilePic(imgurl);
                    })
                    .catch(err => {
                        console.log("something went wrong!");

                    })
            }
        });
    };

    return (
        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
            <View style={{ margin: 5 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="close-outline" size={30} color={'black'} />
                </TouchableOpacity>
            </View>
            <ScholarBanner text="Edit Profile" />
            <View
                style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                {
                    profilePic.length == 0 ?
                        <Icon
                            name={posts[0].avatar}
                            size={90}
                            color={Colors.primary}
                            style={{
                                borderColor: Colors.text,
                                borderWidth: 1,
                                borderRadius: 150,
                                padding: 10,
                            }}
                        />
                        :
                        <Image style={styles.profilePictur} source={{ uri: profilePic }} />
                }
            </View>
            <View style={{ alignItems: 'center', margin: 10 }}>
                <TouchableOpacity onPress={openImagePicker}>
                    <Text
                        style={{
                            fontFamily: Fonts.regular,
                            color: Colors.linkColor,
                            fontSize: 16,
                        }}>
                        Edit Profile picture
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 10 }}>
                <View style={{ margin: 5 }}>
                    <TextInput
                        style={{ backgroundColor: Colors.background, fontSize: 18 }}
                        value={name}
                        placeholder="Your Name"
                        onChangeText={text => setName(text)}></TextInput>
                </View>
                <View style={{ margin: 5 }}>
                    <TextInput
                        style={{ backgroundColor: Colors.background, fontSize: 18 }}
                        value={school}
                        placeholder="Edit your College"
                        onChangeText={text => setSchool(text)}></TextInput>
                </View>
                <View style={{ margin: 5 }}>
                    <TextInput
                        style={{ backgroundColor: Colors.background, fontSize: 18 }}
                        placeholder="Your Major"
                        value={major}
                        onChangeText={text => setMajor(text)}></TextInput>
                </View>
                <View style={{ margin: 5 }}>
                    <TextInput
                        style={{
                            backgroundColor: Colors.background,
                            borderBottomColor: Colors.secondary,
                            fontSize: 18,
                        }}
                        value={bio}
                        placeholder="Bio"
                        onChangeText={text => setBio(text)}></TextInput>
                </View>
            </View>
            <View
                style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    margin: 20,
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.primary,
                        width: '50%',
                        padding: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                    }}
                    onPress={setChanges}>
                    <Text style={{ color: Colors.text }}>Apply Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditProfile;
