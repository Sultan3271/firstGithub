import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/Styles';

export default function FeedBox() 
{
    return (
        <View style={styles.post} >
            <View style={styles.postLeft}>
                <View style={styles.postHolder}>
                    <Icon name='person' size={50} color='green' />
                </View>
            </View>
            <View style={styles.postRight}>
                <View style={styles.postAdmin}>
                    <Text style={styles.postAdminName}>David Edwards</Text>
                </View>
                <View style={styles.postDescription}>
                    <Text style={styles.postDescText}>
                        someting like that, loremiposim
                        someting like that, loremiposim
                        someting like that, loremiposim
                    </Text>
                </View>
            </View>
        </View>
    );
}
