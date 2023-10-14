/**
 * @file UserProfile.tsx
 * @description ?
 * @ownership Shan Ayub
 * 
 * @last modified 9/20/2023
 */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import styles from '../styles/Styles'
import Colors from '../Theme/ScholarColors';
import ScholarBanner from '../components/ScholarBanner';
import { posts } from '../services/DataService';
import Icon from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../Theme/Fonts';
import { useNavigation } from '@react-navigation/native';
const EditProfile = (navigation:any) => {
  navigation=useNavigation();
  return (
    <View style={{ alignContent: 'center', justifyContent: 'center' }}>
      <View style={{margin:5}}>
        <TouchableOpacity onPress={()=>navigation.goBack('ProfilePage')}>
          <Icon name="close-outline" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <ScholarBanner text="Edit Profile" />
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Icon name={posts[0].avatar} size={90} color={Colors.primary} style={{ borderColor: Colors.text, borderWidth: 1, borderRadius: 150, padding: 10 }} />
      </View>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <TouchableOpacity>
          <Text style={{ fontFamily: Fonts.regular, color: Colors.text, fontSize: 16 }}>Edit Profile picture</Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 10 }}>
        <View style={{ margin: 5 }}>
          <TextInput style={{ backgroundColor: Colors.background, fontSize: 18 }} placeholder='Your Name'></TextInput>
        </View>
        <View style={{ margin: 5 }}>
          <TextInput style={{ backgroundColor: Colors.background, fontSize: 18 }} placeholder='Edit your College'></TextInput>
        </View>
        <View style={{ margin: 5 }}>
          <TextInput style={{ backgroundColor: Colors.background, fontSize: 18 }} placeholder='Your Major'></TextInput>
        </View>
        <View style={{ margin: 5 }}>
          <TextInput style={{ backgroundColor: Colors.background, borderBottomColor: Colors.secondary, fontSize: 18 }} placeholder='Bio'></TextInput>
        </View>
      </View>
      <View style={{alignContent:'center',alignItems:'center',padding:10,margin:20}}>
        <TouchableOpacity style={{backgroundColor:Colors.primary,width:'50%',padding:10,borderRadius:10,alignItems:'center'}}>
          <Text style={{color:Colors.text}}>
            Apply Changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfile