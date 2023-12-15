import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/Styles';
import Colors from '../theme/ScholarColors';
import PostBottom from './PostBottom';
import { posts } from '../services/DataService';
import { UserProfileLike, UserProfilePost } from '../zustand/UserProfileStore';
import { useEffect } from 'react';

type FeedBoxProps = {
    key: number,
    navigation?: any,
    avatar?: string,
    admin?: string,
    time?: string,
    description?: string,
    picture?: string,
    likes?: UserProfileLike[],
    contributes?: any,
    postID: string,
    userID: string
}

export default function FeedBox(props: FeedBoxProps) {
    const lehLikes=()=>{
        console.log("leh");
       console.log(props.likes);   
      
    } 
    return ( 
        <View style={styles.post} >
            <View style={styles.postAdmin}>
                <View style={{ left: 350, top: 10, zIndex: 2, position: 'absolute' }}>
                    <TouchableOpacity onPress={() => props.navigation.push('Post', { props })}>
                        <View>
                            <Icon name={"ellipsis-vertical-outline"} size={25} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.avatarSection}>
                    {
                        props.avatar == " " || props.avatar == null ?
                            <Icon name={posts[0].avatar} size={30} color={Colors.primary} /> :
                            <Image source={{ uri: props.avatar }} style={styles.postHeaderProfile} />
                    }
                    {/* <Icon name={props.avatar} size={30} color={Colors.primary} /> */}
                </View>
                <View style={styles.adminSection}>

                    <Text style={styles.postAdminName}>{props.admin}</Text>
                    <Text style={{ color: 'gray' }}>
                        {props.time}
                    </Text>
                </View>

            </View>
            <View style={styles.postDescription}>
                <Text style={styles.postDescText}>
                    {props.description}
                    
                </Text>
             
            </View>
            {
                props.picture !== undefined && props.picture !== null && props.picture.length !== 0 && props.picture !== ' ' ?
                    <View style={styles.postHolder}>
                        <Image source={{ uri: props.picture }} style={{ resizeMode: 'cover', width: '100%', height: '100%' }}/>
                        {/* /<Icon name={props.picture} size={150} color='green' /> */}
                    </View> 
                    : <></>
            } 
            <PostBottom likes={props.likes} contributes={props.contributes} postID={props.postID} userID={props.userID} />
        </View>
    );
}
