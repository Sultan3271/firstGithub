import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Styles';

export default function ScholarBanner(props: any) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 10, alignItems: 'center', left: 20, }}>
      <Icon name={"school"} size={100} color="#2a9d8f" />
      <Text style={styles.iconHeaderText}>{props.text}</Text>
    </View>
  );
}