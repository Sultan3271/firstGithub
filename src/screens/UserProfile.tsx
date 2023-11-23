/**
 * @file UserProfile.tsx
 * @description ?
 * @ownership Shan Ayub
 *
 * @last modified 14/10/2023
 */

import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchPosts, getPostLikes, posts } from '../services/DataService';
import FeedBox from '../components/FeedBox';

import Colors from '../theme/ScholarColors';
import Divider from '../components/Divider';
import { useIsFocused } from '@react-navigation/native';

import FriendBox from '../components/FriendBox';
import MissionLine from '../components/MissionLine';
import { getProfile } from '../services/DataService';
import { userId } from '../services/UserId';

import styles from '../styles/Styles';

const UserProfile = ({ navigation }: any) => {

	const isFocused = useIsFocused();
	const [profileData, setProfileData] = useState({});

	/**
	 * useEffect used for loading data from DB
	 */
	const [profilePic, setProfilePic] = useState('');
	const [postsData, setPostsData]: any = useState([]);
	const [allLikes, setAllLikes] = useState('');
	/**
	 * useEffect used for loading data from DB
	 */
	const PostLikes = (postID: string, userID: string) => {
		var likesArray: any = [];
		getPostLikes(postID, userID).then((likes) => {
			likes.forEach((like: any) => {
				likesArray.push(like);
			})
		})
			.catch((error) => { console.log("error:" + error); });
		setAllLikes(likesArray);

	}
	const setAllPosts = (posts: any) => {
		let allPosts: any = [];
		posts.forEach((post: any) => {
			console.log("=>" + post.time);
			allPosts.push(post);

		})
		allPosts.map((post: any) => { console.log("unSorted posts :" + post.time); })
		const postsWithDateObjects = allPosts.map((post: any) => ({
			...post,
			dateObject: new Date(post.time)
		}));
		// Sort the posts in descending order
		postsWithDateObjects.sort((a: any, b: any) => b.dateObject.getTime() - a.dateObject.getTime());
		setPostsData(postsWithDateObjects);
		postsWithDateObjects.map((post: any) => { console.log("Sorted posts :" + post.time); })
	}
	const extractTime = (time: string) => {
		const timestamp = new Date(time);
		const hours = timestamp.getHours();
		const minutes = timestamp.getMinutes();
		let dayOrNight = "PM";
		if (hours < 12) {
			dayOrNight = "AM"
		}
		console.log("Hours: " + hours + " minutes" + minutes);
		return (hours + ":" + minutes + " " + dayOrNight);
	}
	useEffect(() => {
		
		getProfile(userId)
			.then(profile => {
				setProfileData(profile);
				setProfilePic(profile.profilePic);
			})
			.catch(error => {
				console.error('Errffor :', error);
			});
	}, [isFocused]);
	useEffect(() => {
		fetchPosts(userId).then(posts => {
			setAllPosts(posts);
			console.log("Hy");
			
		}).catch(err => console.log("No posts"))
	},[isFocused])
	return (
		<ScrollView>
		<View style={{
			padding: 10,
		}}>
			{/* Profile header */}
		
			<View>
				<View style={styles.profilePicBox}>
					<View style={styles.avatarSection}>
						{
							profileData?.profilePic == " " || profileData?.profilePic == null ?
								<Icon name={posts[0].avatar} size={90} color={Colors.primary} /> :
								<Image source={{ uri: profileData?.profilePic }} style={styles.profilePictur} />
						}
					</View>
					<View style={{ flex: 1, margin: 5, justifyContent: 'center' }}>
						<Text style={styles.userNameStyle}>{profileData.usrName}</Text>
						<View style={{ marginTop: 5 }}>
							<Text
								style={{
									fontFamily: 'Just Another Hand,Inter',
									fontSize: 20,
									color: 'black',
								}}>
								{profileData.schoolName}
							</Text>
						</View>
					</View>
					<TouchableOpacity
						style={{ top: 1, position: 'absolute', left: 80 }}
						onPress={() => navigation.push('EditProfile', { profileData })}>
						<Icon name="create-outline" size={20} color={'black'} />
					</TouchableOpacity>
				</View>
				<Divider width={'90%'} />
			</View>
			{/* Year */}
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.headingStyle}>{profileData.Class}</Text>
			</View>
			<View>
				<Text style={styles.headingStyle}>Bio</Text>
				<View style={{ margin: 5 }}>
					<Text style={styles.contentStyle}>{profileData.bio}</Text>
				</View>
			</View>
			{/* Friends List */}
			<Text style={styles.headingStyle}>Friends</Text>
			<View style={styles.friendBoxContainer}>
				<ScrollView horizontal={true} nestedScrollEnabled={true}>
					<View style={styles.friendBoxes}>
						<FriendBox data={{ friendName: 'Shaan' }} />
						<FriendBox data={{ friendName: 'Sultan' }} />
						<FriendBox data={{ friendName: 'Christian' }} />
						<FriendBox data={{ friendName: 'Amy' }} />
						<FriendBox data={{ friendName: 'John' }} />
					</View>
				</ScrollView>
				<View
					style={{
						borderBlockColor: 'black',
						borderWidth: 0.19,
						margin: 3,
					}}></View>
			</View>
			<View></View>
			<View>
				<Text style={styles.headingStyle}>Posts</Text>
			</View>
			<View
				style={{
					margin: 5,
					flexDirection: 'row',
					justifyContent: 'space-between',
					borderWidth: 1,
					borderColor: 'gray',
					padding: 10,
					borderRadius: 10,
				}}>
				<View>
					<Icon
						style={{ width: 35, height: 35 }}
						name={posts[0].avatar}
						size={30}
						color={Colors.primary}
					/>
				</View>
				<TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.push('Post', { profileData })}>
					<View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
						<Text
						// style={{textAlign:'center', width: '90%',fontSize:Fonts.regular }}
						>Make a post...</Text>
					</View>
				</TouchableOpacity>
				<View style={{ marginLeft: 5 }}>
					<TouchableOpacity>
						<Icon name="image" size={35} color={Colors.primary} />
					</TouchableOpacity>
				</View>
			</View>
			<MissionLine text="Stay connected" />
			<View style={styles.container}>
								<View style={{ padding: 10 }}>
									{/* <Feed /> */}
									<View style={{ backgroundColor: Colors.feedBackground }}>
										{postsData.map((item: any, index: Int16Array) =>
											<FeedBox key={index} admin={profileData?.usrName} avatar={profileData?.profilePic}
												time={extractTime(item.time)}
												picture={item.image}
												likes={allLikes.length}
												contributes={0}
												description={item.description}
												postID={item.postId}
												userID={item.userID}
												navigation={navigation}
											/>)
										}
									</View>
								</View>
							</View>
		</View>
		</ScrollView>
	);
};
export default UserProfile;
