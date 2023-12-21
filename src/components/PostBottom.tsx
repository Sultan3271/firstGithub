import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/Styles';
import Colors from '../theme/ScholarColors';
import { deletePostLike, getPostLikes, posts, setPostLike } from '../services/DataService';
import { usePostLikesStore } from '../zustand/UserProfileStore';

type PostBottomProps = {
    postID: string,
    userID: string,
    contributes?: any
}

const PostBottom = (props: PostBottomProps) => {
    
    const addLikeToPost = usePostLikesStore(store => store.addLikeToPost);
    const removeLikeFromPost = usePostLikesStore(store => store.removeLikeFromPost);
    const allLikes = usePostLikesStore(store => store.likes);
    const [LikeIcon, setLikeIcon] = useState('like2');

    function likePost() {
        if (LikeIcon === 'like1') {
            deletePostLike(props.postID, props.userID);
            
            setLikeIcon('like2');
        } else {
            setPostLike(props.postID, props.userID);
            getPostLikes(props.postID,props.userID)
            .then((likes:any) =>{
                const postLikes = likes.filter((l:any) => l.postId == props.postID);
                likes.forEach((like: any) => {
                    if (!postLikes.includes(like.postId))
                        addLikeToPost(like, like.postID); 
                });
            })  
            setLikeIcon('like1');
        }
    }

    return (
        <View>
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
    
            <View style={styles.postBottom}>
                <View>
                   <TouchableOpacity onPress={()=>{}}>
                   <Text style={{ color: Colors.text, padding: 2 }}>
                        {allLikes[props.postID]? allLikes[props.postID].length: 0}
                    </Text>
                   </TouchableOpacity>
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
        </View>
    )
}

export default PostBottom