import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import styles from '../styles/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../Theme/ScholarColors';
import Icon from 'react-native-vector-icons/Ionicons';
const PostBottom = (props:any) => {
  return (
    <View>
    <View style={styles.postBottom}>
                    <View>
                    <Text style={{color:Colors.text,padding:2}}>
                        {props.likes}
                    </Text>
                    </View>
                    <View>
                    <Text style={{color:Colors.text,padding:2}}>
                        
                    </Text>
                    </View>
                    <View>
                    <Text style={{color:Colors.text,padding:2}}>
                        
                    </Text>
                    </View>
                    <View>
                    <Text style={{color:Colors.text,padding:2}}>
                        {props.contributes}
                    </Text>
                    </View>
                </View>
    <View style={styles.postBottom}>
                 <TouchableOpacity style={styles.actionBtn}>
                    <AntDesign name='like2' size={20} color={Colors.secondary} />
                 </TouchableOpacity >
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