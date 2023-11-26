import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/Styles';
import Colors from '../theme/ScholarColors';

type ScholarBannerProps = {
    text: string,
}

export default function ScholarBanner(props: ScholarBannerProps) {
    return (
        <View style={{ flexDirection: "row", marginBottom: 10, alignItems: 'center', justifyContent: "center" }}>
            <Icon name={"school"} size={100} style={{ color: Colors.primary }} />
            <Text style={styles.iconHeaderText}>{props.text}</Text>
        </View>
    );
}