import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../theme/ScholarColors'
const PopUp = (props: any) => {
    return (
        <View style={{
            position: 'absolute',
            zIndex: 99,//shan work on scholars
            alignSelf: 'center',
            backgroundColor: 'white',
            alignItems: 'center',
            height: 150,
            width: 200,
            margin: 250,
            borderRadius: 10,
            flexDirection: 'column'
        }}>
            
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center'}}>
                <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center', alignContent: 'space-between' }}>
                <View style={{margin:10}}><Text>Message Classmate</Text></View>
                    <Icon name="message" color={Colors.text} size={30} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{margin:10}}><Text>Remove Classmate</Text></View>
                    <Icon name="remove-user" color={Colors.text} size={30} />
                </View>

            </View>
        </View>
    )
}
export default PopUp;