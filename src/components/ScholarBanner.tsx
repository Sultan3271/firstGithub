import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/Styles';
import Colors from '../theme/ScholarColors';
import { Fonts } from "../theme/Fonts";
export default function ScholarBanner(props: any) {
    const iconColor = Colors.primary
    return (
        <View style={{ flexDirection: "row", marginBottom: 10, alignItems: 'center', justifyContent: "center" }}>
            <Icon name={"school"} size={90} style={{ color: Colors.primary }} />
            <Text style={styles.iconHeaderText}>{props.text}</Text>
        </View>
    );
}

export  function ScholarMiniBanner(props: any) {
    const iconColor = Colors.primary
    return (
        <View style={bannerStyles.miniBanner}>
            <Icon name={"school"} size={props.size} style={{ color: Colors.primary }} />
            <Text style={bannerStyles.miniHeaderText}>{props.text}</Text>
        </View>
    );
}


const bannerStyles= StyleSheet.create({
    miniBanner:{
        flexDirection:'row',
        margin:2,
        alignItems:'center'
    },
    miniHeaderText:{
        fontFamily: "JustAnotherHand-Regular",
        textAlignVertical: "center",
        fontSize: 49,
        color: Colors.primary,
       marginLeft:10,
    }
})