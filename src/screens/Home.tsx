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
import useUserProfileStore, { useLikesStore, usePostsStore } from '../zustand/UserProfileStore';

const Home = ({ navigation }: any) => {
    const allPosts = usePostsStore(store => store.posts) 
    const setPostsData = usePostsStore(store => store.setAllPosts) 
    const allLikes = useLikesStore(store => store.likes)  
    const setAllLikes = useLikesStore(store => store.setAllLikes)


    // useEffect(() => {
	// 	fetchPosts(getUserId()).then((posts: any) => {
	// 		(posts);
	// 		console.log("Hy");
			
	// 	}).catch((err: any) => console.log("No posts"))
	// },[isFocused])
    return (
        <View style={{ flex: 1 }}>
            <Feed />
        </View>
    );
};

export default Home;
