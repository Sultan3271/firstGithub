/**
 * @file UserProfile.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FriendBox from '../components/FriendBox'
import styles from '../styles/Styles'
import MissionLine from '../components/MissionLine'
import Colors from '../Theme/ScholarColors'
import EditProfile from './EditProfile'

const UserProfile = ({ navigation }: any) => {
  const [edit,setEdit] = useState(false);
  return (
    
     
    <View style={styles.container}>
       
      {/* Profile Name */}
      <View style={styles.boxContainer}>
        <Text style={styles.firstName}>BEN</Text>
        <Text style={styles.lastName}>COLLINS</Text>
        <Image style={styles.starIcon} source={{uri:'https://cdn-icons-png.flaticon.com/128/7364/7364407.png'}} />
      </View>

      {/* Profile Image */}
      <View style={styles.profilePicBox}>
        <TouchableOpacity style={{position:'absolute',left:300,backgroundColor:Colors.primary,padding:5,}}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <View style={[styles.underLine,{width:'25%',}]}></View>
        <View>
          <Image style={styles.profileImage} source={{uri:'https://cdn-icons-png.flaticon.com/128/6555/6555160.png'}} />
        </View>
        <View style={[styles.underLine,{width:'25%'}]}></View>
      </View>

      {/* Friends List */}
      <View style={styles.friendBoxContainer}>
        <View>
          <Text style={styles.friendTextStyle}>Friends</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.friendBoxes}>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/> 
          </View>
        </ScrollView>
      </View>
      <MissionLine text="Be Nice and Have Fun Learning" /> 
    </View>
    
  )
}

export default UserProfile;
