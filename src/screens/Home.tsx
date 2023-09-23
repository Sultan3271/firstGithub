/**
 * @file Home.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, Text } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import { styles } from '../styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      {/* 
      * this is head part of a screen like other screens having titl and logo
      */}
       <View style={styles.headBox}>
        {/* 
        * later we will change icons and other remaining things
        */}
        <View style={styles.logoContainer}>
             <Icon name="school" size={80} color='skyblue' />
        </View>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.screenTitle}>
               The Library
            </Text>
          </View>

        </View>

       </View>
{/* /**
* this is body of home screen , we have posts here , a user will see his posts as well as 
* his/her friends and connected people posts in this section,
* will be a scrollable posts section
 */ }
       <View style={styles.bodyContainer}>
          <View style={styles.feedContainer}>
          <View style={styles.post} >
            <View style={styles.postLeft}>
              <View style={styles.postHolder}> 
                <Icon name='person' size={50} color='green' />
            </View>
            </View>
            <View style={styles.postRight}>
              <View style={styles.postAdmin}>
                <Text style={styles.postAdminName}>David Edwards</Text>
              </View>
              <View style={styles.postDescription}>
                 <Text style={styles.postDescText}>
                  someting like that, loremiposim 
                  someting like that, loremiposim
                  someting like that, loremiposim
                 
                 </Text>
                 </View>
            </View>
            </View>
            <View style={styles.post} >
            <View style={styles.postLeft}>
              <View style={styles.postHolder}> 
                <Icon name='person' size={50} color='green' />
            </View>
            </View>
            <View style={styles.postRight}>
              <View style={styles.postAdmin}>
                <Text style={styles.postAdminName}>Christian</Text>
              </View>
              <View style={styles.postDescription}>
                 <Text style={styles.postDescText}>
                  someting like that, loremiposim 
                  someting like that, loremiposim
                  someting like that, loremiposim
                 
                 </Text>
                 </View>
            </View>
            </View>
            <View style={styles.post} >
            <View style={styles.postLeft}>
              <View style={styles.postHolder}> 
                <Icon name='person' size={50} color='green' />
            </View>
            </View>
            <View style={styles.postRight}>
              <View style={styles.postAdmin}>
                <Text style={styles.postAdminName}>Shan Ayub</Text>
              </View>
              <View style={styles.postDescription}>
                 <Text style={styles.postDescText}>
                  someting like that, loremiposim 
                  someting like that, loremiposim
                  someting like that, loremiposim
                 
                 </Text>
                 </View>
            </View>
            </View>
            <View style={styles.post} >
            <View style={styles.postLeft}>
              <View style={styles.postHolder}> 
                <Icon name='person' size={50} color='green' />
            </View>
            </View>
            <View style={styles.postRight}>
              <View style={styles.postAdmin}>
                <Text style={styles.postAdminName}>Muhammad Sultan</Text>
              </View>
              <View style={styles.postDescription}>
                 <Text style={styles.postDescText}>
                  someting like that, loremiposim 
                  someting like that, loremiposim
                  someting like that, loremiposim
                 
                 </Text>
                 </View>
            </View>
            </View>
            <View style={styles.post} >
            <View style={styles.postLeft}>
              <View style={styles.postHolder}> 
                <Icon name='person' size={50} color='green' />
            </View>
            </View>
            <View style={styles.postRight}>
              <View style={styles.postAdmin}>
                <Text style={styles.postAdminName}>Ammy</Text>
              </View>
              <View style={styles.postDescription}>
                 <Text style={styles.postDescText}>
                  someting like that, loremiposim 
                  someting like that, loremiposim
                  someting like that, loremiposim
                 
                 </Text>
                 </View>
            </View>
            </View>
           </View>
       </View>
     
    </View>
  )
}

export default Home