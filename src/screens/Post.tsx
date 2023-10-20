import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

import Colors from '../Theme/ScholarColors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { uploadImage } from '../services/UploadFunctions'
import { launchImageLibrary } from 'react-native-image-picker'

export default function Post(navigation: any) {
  const route = useRoute();
  const Name = route.params?.profileData.usrName;
  const prfPic = route.params?.profileData.profilePic
  const [selectedImage,setSelectedImage]=useState('');
  navigation=useNavigation();
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
      console.log('Selected image URI:', response.assets[0].uri);
      setSelectedImage(response.assets[0].uri);
    }
  });
}
  
  useEffect(() => {
    console.log(Name)
    console.log(prfPic)
  }, [])
  return (
    <View style={[styles.container, { margin: 5 }]}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Icon name="close-outline" size={30} color={'black'} />
        </TouchableOpacity>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: Colors.text }}>Create Post</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row'}}>
        <View style={styles.avatarSection}>
          <Image source={{ uri: prfPic }} style={{ height: 60, width: 60, borderRadius: 50 }} />
        </View>
        <View style={[styles.adminSection, { marginTop: 10 }]}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>{Name}</Text>
        </View>
      </View>
      <View>
        <TextInput
          style={{ margin: 5, height: 200, textAlignVertical: 'top', borderWidth: 1 }}
          multiline={true}
          numberOfLines={4}
          placeholder="Share your Thoughts...." />
      </View>
      <View style={{margin:10}}>
        {
          selectedImage===''?null:
          <View>
            <View>
              <TouchableOpacity style={{ position:'absolute', top: 10, right: 10 }}>
                  <Icon name="close-outline" style={{ width: 30, height: 30 }}/>
              </TouchableOpacity>
            </View>
            <Image source={{uri:selectedImage}} style={{ borderRadius:10,width: 100, height: 150 }}></Image>
          </View>
        }
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', margin: 10 }}>
        <View style={{ width: '90%' }}>
          <TouchableOpacity>
            <Text style={{ backgroundColor: Colors.primary, margin: 5, textAlign: 'center', padding: 5, borderRadius: 10 }}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '10%', margin: 5 }}>
          <TouchableOpacity onPress={openImagePicker}>
            <Icon name="images-outline" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}