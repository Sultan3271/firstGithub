import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/Styles'
import {t} from 'react-native-tailwindcss'

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
        <View style={[t.p2, t.flex , t.flexWrap, t.justifyCenter, t.alignCenter]}>
        <Text style={[t.fontBold,t.textBlue600,t.p10,t.bgIndigo200]}>Hi,</Text>
        </View>
 
    </View>
  )
}

export default UserProfile