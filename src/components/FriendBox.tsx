import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/Styles';
import { posts } from '../services/DataService';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Theme/ScholarColors';

const FriendBox=(props:any)=>{
    return(
        <View style={styles.friendBoxStyle}>
            <Icon style={[styles.profileImage,{height:70,width:70}]} name={posts[0].avatar} size={50} color={Colors.primary}/>
            {/* <Image style={[styles.profileImage,{height:70,width:70}]} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/6555/6555160.png' }}></Image> */}
            <Text style={styles.friendBoxTextStyle}>
                <Text>{props.data.friendName}</Text>
            </Text>
        </View>
    );
}
export default FriendBox;
