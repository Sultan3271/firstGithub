/**
 * @file Home.tsx
 * @description ?]
 * @ownership ?
 * @last modified 9/20/2023
 */

import React, { useEffect } from 'react';
import { View,FlatList } from 'react-native';

import {  usePostsStore } from '../zustand/UserProfileStore';
import FeedBox from '../components/FeedBox';
import { extractTime } from '../utils/UtilityFunctions';
const Home = ({ navigation }: any) => {
    const allPosts = usePostsStore(store => store.posts) 

    return (
        <View style={{ flex: 1 }}>
            <FlatList


onStartReachedThreshold={0.01}


onEndReachedThreshold={0.01}

showsVerticalScrollIndicator={false}

data={allPosts} 
renderItem={({ item,index }) => (

    <FeedBox key={index}  
    time={extractTime(item.time)}
    picture={item.image}
    contributes={0}
    description={item.description}
    postID={item.postId}
    userID={item.userID}
    navigation={navigation}
    />

)}
/>
        </View>
    );
};

export default Home;
