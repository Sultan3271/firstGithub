/**
 * @file Home.tsx
 * @description ?]
 * @ownership ?
 * @last modified 9/20/2023
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';

import Feed from '../components/Feed';
import { getUserId } from '../utils/Auth';
import { fetchPosts } from '../services/DataService';
import useUserProfileStore, {  usePostsStore } from '../zustand/UserProfileStore';

const Home = ({ navigation }: any) => {
    const allPosts = usePostsStore(store => store.posts) 

    return (
        <View style={{ flex: 1 }}>
            <Feed />
        </View>
    );
};

export default Home;
