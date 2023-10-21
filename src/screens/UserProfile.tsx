/**
 * @file UserProfile.tsx
 * @description ?
 * @ownership Shan Ayub
 *
 * @last modified 14/10/2023
 */

import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { useIsFocused } from '@react-navigation/native';

import Divider from '../components/Divider';
import Feed from '../components/Feed';
import FeedBox from '../components/FeedBox';
import FriendBox from '../components/FriendBox';
import MissionLine from '../components/MissionLine';
import { getProfile, posts } from '../services/DataService';
import { userId } from '../services/UserId';
import styles from '../styles/Styles';
import Colors from '../Theme/ScholarColors';
import EditProfile from './EditProfile';

const UserProfile = ({ navigation }: any) => {
	const isFocused = useIsFocused();
	const [profileData, setProfileData] = useState({});
	const [edit, setEdit] = useState(false);
	/**
	 * useEffect used for loading data from DB
	 */
	useEffect(() => {
		getProfile(userId)
			.then(profile => {
				setProfileData(profile);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}, [isFocused]);

	return (
		<View style={styles.container}>
			{/* Container for user profile */}
			<View style={{ padding: 10 }}>
				<View>
					{/* Profile header */}
					<View style={styles.profilePicBox}>
						<View style={styles.avatarSection}>
							<Icon name={posts[0].avatar} size={90} color={Colors.primary} />
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
					<Divider/>
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
					<ScrollView horizontal={true}>
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
					<View style={{ width: '80%', alignItems: 'center' }}>
						<TextInput
							style={{ backgroundColor: 'transparent', height: 30, width: '90%' }}
							placeholder="Make a post..."></TextInput>
					</View>
					<View style={{ marginLeft: 5 }}>
						<TouchableOpacity>
							<Icon name="image" size={35} color={Colors.primary} />
						</TouchableOpacity>
					</View>
				</View>
				<MissionLine text="Stay connected" />
			</View>
			<Feed />
		</View>
	);
};

export default UserProfile;
