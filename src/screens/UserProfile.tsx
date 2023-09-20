import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/Styles'
import {t} from 'react-native-tailwindcss'
import FriendBox from '../Components/FriendBox'

const UserProfile = () => {

  return (
    <View style={styles.container}>
        <View style={styles.boxContainer}>
        <Text style={styles.firstName}>BEN</Text>
        <Text style={styles.lastName}>COLLINS</Text>
        <Image style={styles.starIcon} source={{uri:'https://cdn-icons-png.flaticon.com/128/7364/7364407.png'}} />
        </View>
        <View style={styles.underLine}>

        </View>
        <View style={styles.profilePicBox}>
        <View style={[styles.underLine,{width:'25%',}]}>

        </View>
        <View >
           <Image style={styles.profileImage} source={{uri:'https://cdn-icons-png.flaticon.com/128/6555/6555160.png'}} />
        </View>
        <View style={[styles.underLine,{width:'25%'}]}>
        </View>
        </View>
        <View>

          <View style={styles.heading}>

          <View>

            <Text style={styles.friendTextStyle}>
              Friends
            </Text>
          </View>
            <View style={styles.friendBoxContainer}>
            <ScrollView
            horizontal={true}>
              <FriendBox/>
              <FriendBox/>
              <FriendBox/>
              <FriendBox/>
              <FriendBox/>

              <FriendBox/> 
            </ScrollView>
            </View>
        /**  resolved conflicts  */
            <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
                <View style={styles.infoHeadBox}>
                   <Text style={styles.headingField}>
                    College:
                   </Text>
                </View>
                <View style={styles.textField}>
                   <Text style={styles.nameText}>
                     University Of West Florida
                         
                   </Text>
                </View>
                
               </View>
               <View style={styles.infoBox}>
                <View style={styles.infoHeadBox}>
                   <Text style={styles.headingField}>
                    College:
                   </Text>
                </View>
                <View style={styles.textField}>
                   <Text style={styles.nameText}>
                     University Of West Florida
                         
                   </Text>
                </View>
                
               </View>
               <View style={styles.infoBox}>
                <View style={styles.infoHeadBox}>
                   <Text style={styles.headingField}>
                    College:
                   </Text>
                </View>
                <View style={styles.textField}>
                   <Text style={styles.nameText}>
                     University Of West Florida
                         
                   </Text>
                </View>
                
               </View>
            </View>
              <FriendBox/>
            </ScrollView>
            </View>
        </View>
 
    </View>
  )
}

export default UserProfile;