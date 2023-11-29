/**
 * @file Home.tsx
 * @description ?]
 * @ownership ?
 * @last modified 9/20/2023
 */

import React from 'react';
import { View } from 'react-native';

import Feed from '../components/Feed';

const Home = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <Feed />
        </View>
    );
};

export default Home;
