import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/Styles';
import Colors from '../Theme/ScholarColors';
import { deletePostLike, setPostLike } from '../services/DataService';



const PostBottom = (props: any) => {
  const [LikeIcon,setLikeIcon]=useState('like2');
  function likePost(){
    if(LikeIcon==='like1'){
      deletePostLike(props.postID,props.userID)
      setLikeIcon('like2');
    }else{
      setPostLike(props.postID,props.userID);
      setLikeIcon('like1');
    }
    
  }
  return (
    <View>
      <View style={styles.postBottom}>
        <View>
          <Text style={{ color: Colors.text, padding: 2 }}>
            {props.likes}
          </Text>
        </View>
        <View>
          <Text style={{ color: Colors.text, padding: 2 }}>

          </Text>
        </View>
        <View>
          <Text style={{ color: Colors.text, padding: 2 }}>

          </Text>
        </View>
        <View>
          <Text style={{ color: Colors.text, padding: 2 }}>
            {props.contributes}
          </Text>
        </View>
      </View>
      <View style={styles.postBottom}>
        <TouchableOpacity style={styles.actionBtn} onPress={likePost}>
          <AntDesign name={LikeIcon} size={20} color={Colors.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <EvilIcons name='comment' size={20} color={Colors.secondary} />
        </TouchableOpacity >
        <TouchableOpacity style={styles.actionBtn}>
          <Icon name='share-outline' size={20} color={Colors.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Icon name='people-outline' size={20} color={Colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PostBottom