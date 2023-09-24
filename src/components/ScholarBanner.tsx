import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Styles';

export default function ScholarBanner(props: any)
{
    return (
      <View style={{flexDirection: "row", marginBottom: 50}}>
        <Icon name={"school-outline"} size={100} color="#006CA2"/>
        <Text style={styles.iconHeaderText}>{props.text}</Text>
      </View>
    );
}