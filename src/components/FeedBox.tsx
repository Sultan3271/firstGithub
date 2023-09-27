import { View, Text,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import styles from '../styles/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../Theme/ScholarColors';
import PostBottom from './PostBottom';
import { Fonts } from '../Theme/Fonts';

export default function FeedBox(props:any) 
{
    return (
        <View style={styles.post} >
                <View style={styles.postAdmin}>
                <View style={styles.avatarSection}>
                    <Icon name={props.avatar} size={30} color={Colors.primary} />
                    </View> 
                   <View style={styles.adminSection}>
                    
                    <Text style={styles.postAdminName}>{props.admin}</Text>
                    <Text style={{color:'gray'}}>
                        {props.time}
                    </Text>
                   </View>
                   
                </View>
                <View style={styles.postDescription}>
                    <Text style={styles.postDescText}>
                      {props.description}
                    </Text>
                </View>
                <View style={styles.postHolder}>
                    <Icon name={props.picture} size={150} color='green' />
                </View>
                
                <PostBottom likes={props.likes} contributes={props.contributes}/>
              
         
        </View>
    );
}
