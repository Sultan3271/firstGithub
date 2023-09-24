/**
 * @file Home.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */

import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../styles/Styles';
import FeedBox from '../components/FeedBox';


const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <Text>Home</Text>

      {/* 
      * this is head part of a screen like other screens having title and logo
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
          <FeedBox />
          <FeedBox />
          <FeedBox />
          <FeedBox />
        </View>
      </View>

    </View>
  )
}

export default Home