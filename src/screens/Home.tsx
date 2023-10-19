/**
 * @file Home.tsx
 * @description ?]
 * @ownership ?
 * @last modified 9/20/2023
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

import Feed from '../components/Feed';
import styles from '../styles/Styles';

const Home = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <Feed />
    </View>
  );
};

export default Home;
