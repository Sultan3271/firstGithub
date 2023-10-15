/**
 * @file Home.tsx
 * @description ?]
 * @ownership ?
 * @last modified 9/20/2023
 */

import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../styles/Styles';
import Feed from '../components/Feed';

const Home = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <Feed />
    </View>
  );
};

export default Home;
