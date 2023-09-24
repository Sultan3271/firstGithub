import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Styles';

const FriendBox=()=>{
    return(
        <View style={styles.friendBoxStyle}>
            <Image style={[styles.profileImage,{height:60,width:60}]} source={{uri:'https://cdn-icons-png.flaticon.com/128/7364/7364407.png'}}></Image>
            <Text style={styles.friendBoxTextStyle}>
                <Text>Sultan</Text>
            </Text>
        </View>
    );
}
export default FriendBox;
