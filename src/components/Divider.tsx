import { View, Text } from 'react-native'
import styles from '../styles/Styles'

export default function Divider(props: any)
{
    return (
        <View style={styles.dividerContainer}>
            <View style={[styles.underLine, { width: '25%', }]}></View>

            <View >
                <Text>{props.text}</Text>
            </View>

            <View style={[styles.underLine, { width: '25%', }]}></View>
        </View>
    );
}