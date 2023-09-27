/**
 * @file UserProfile.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/Styles'
import FriendBox from '../components/FriendBox'

const UserProfile = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      {/* Profile Name */}
      
      {/* Profile Image */}
      <View style={styles.profilePicBox}>
        <View style={[styles.underLine,{width:'25%',}]}></View>
        <View>
          <Image style={styles.profileImage} source={{uri:'https://cdn-icons-png.flaticon.com/128/6555/6555160.png'}} />
        </View>
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
    </View>
  )
}

export default UserProfile;
