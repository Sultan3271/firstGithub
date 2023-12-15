/**
 * @file Friends.tsx
 * @description ?
 * @ownership ?
 * @last modified 9/20/2023
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import styles from '../styles/Styles';
import { ScholarMiniBanner } from '../components/ScholarBanner';
import Divider from '../components/Divider';
import Colors from '../theme/ScholarColors';
import Icon from 'react-native-vector-icons/Ionicons';


const Friends = ({ navigation }: any) => {
    const PopUp = (props: any) => {
        return (
            <View style={{
                position: 'absolute',
                zIndex: 99,
                alignSelf: 'center',
                backgroundColor: 'white',
                alignItems: 'center',
                height: 200,
                width: 300,
                margin: 250,
                borderRadius: 10,
                flexDirection: 'column'
            }}>
                <TouchableOpacity style={{ position: 'absolute', right: 270 }}>
                    <Icon name="close-outline" color={Colors.text} size={30} />
                </TouchableOpacity>
                <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', alignContent: 'space-between' }}>
                        <Text>Message Classmate</Text>
                        <Icon name="direct-outline" color={Colors.text} size={30} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Remove Classmate</Text>
                        <Icon name="close-outline" color={Colors.text} size={30} />
                    </View>
                </View>
            </View>
        )
    }
    return (

        <View style={styles.container}>
            <PopUp></PopUp>
            <View style={{ marginLeft: 15 }}>
                <ScholarMiniBanner text="Classmates" size={49} />
            </View>
            <Divider />
            <View style={stylings.searchBar}>
                <TextInput style={stylings.searchBarInput} placeholder='Search for Classmate'>

                </TextInput>
            </View>
            <ScrollView>
                <View style={stylings.classmatesList}>
                    <View style={stylings.classmate}>
                        <View style={stylings.classmateIcon}>
                            <Icon name='person' size={65} />
                        </View>
                        <View style={stylings.classmateTexts}>
                            <Text style={stylings.classmateName}>
                                David Edwards
                            </Text>
                            <Text style={stylings.classmateSchool}>
                                University of West Florida
                            </Text>
                            <Text style={stylings.classmateMajor}>
                                Engineering Technology
                            </Text>

                        </View>
                        <View style={stylings.dots}>
                            <TouchableOpacity>
                                <Icon name='ellipsis-vertical-outline' size={25} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={stylings.classmate}>
                        <View style={stylings.classmateIcon}>
                            <Icon name='person' size={65} />
                        </View>
                        <View style={stylings.classmateTexts}>
                            <Text style={stylings.classmateName}>
                                David Edwards
                            </Text>
                            <Text style={stylings.classmateSchool}>
                                University of West Florida
                            </Text>
                            <Text style={stylings.classmateMajor}>
                                Engineering Technology
                            </Text>

                        </View>
                        <View style={stylings.dots}>
                            <TouchableOpacity>
                                <Icon name='ellipsis-vertical-outline' size={25} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={stylings.classmate}>
                        <View style={stylings.classmateIcon}>
                            <Icon name='person' size={65} />
                        </View>
                        <View style={stylings.classmateTexts}>
                            <Text style={stylings.classmateName}>
                                David Edwards
                            </Text>
                            <Text style={stylings.classmateSchool}>
                                University of West Florida
                            </Text>
                            <Text style={stylings.classmateMajor}>
                                Engineering Technology
                            </Text>

                        </View>
                        <View style={stylings.dots}>
                            <TouchableOpacity>
                                <Icon name='ellipsis-vertical-outline' size={25} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={stylings.classmate}>
                        <View style={stylings.classmateIcon}>
                            <Icon name='person' size={65} />
                        </View>
                        <View style={stylings.classmateTexts}>
                            <Text style={stylings.classmateName}>
                                David Edwards
                            </Text>
                            <Text style={stylings.classmateSchool}>
                                University of West Florida
                            </Text>
                            <Text style={stylings.classmateMajor}>
                                Engineering Technology
                            </Text>

                        </View>
                        <View style={stylings.dots}>
                            <Icon name='ellipsis-vertical-outline' size={25} />
                        </View>

                    </View>
                    <View style={stylings.classmate}>
                        <View style={stylings.classmateIcon}>
                            <Icon name='person' size={65} />
                        </View>
                        <View style={stylings.classmateTexts}>
                            <Text style={stylings.classmateName}>
                                David Edwards
                            </Text>
                            <Text style={stylings.classmateSchool}>
                                University of West Florida
                            </Text>
                            <Text style={stylings.classmateMajor}>
                                Engineering Technology
                            </Text>

                        </View>
                        <View style={stylings.dots}>
                            <TouchableOpacity>
                                <Icon name='ellipsis-vertical-outline' size={25} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={stylings.classmate}>
                        <View style={stylings.classmateIcon}>
                            <Icon name='person' size={65} />
                        </View>
                        <View style={stylings.classmateTexts}>
                            <Text style={stylings.classmateName}>
                                David Edwards
                            </Text>
                            <Text style={stylings.classmateSchool}>
                                University of West Florida
                            </Text>
                            <Text style={stylings.classmateMajor}>
                                Engineering Technology
                            </Text>

                        </View>
                        <View style={stylings.dots}>
                            <TouchableOpacity>
                                <Icon name='ellipsis-vertical-outline' size={25} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={stylings.classmate}>
                        <View style={stylings.classmateIcon}>
                            <Icon name='person' size={65} />
                        </View>
                        <View style={stylings.classmateTexts}>
                            <Text style={stylings.classmateName}>
                                David Edwards
                            </Text>
                            <Text style={stylings.classmateSchool}>
                                University of West Florida
                            </Text>
                            <Text style={stylings.classmateMajor}>
                                Engineering Technology
                            </Text>

                        </View>
                        <View style={stylings.dots}>
                            <TouchableOpacity>
                                <Icon name='ellipsis-vertical-outline' size={25} />
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </View>
    )

}

export default Friends;

const stylings = StyleSheet.create({
    searchBar: {
        margin: 5,
        padding: 5,
        justifyContent: 'center',

    },
    searchBarInput: {
        marginLeft: 8,
        marginRight: 8,
        padding: 5,
        backgroundColor: Colors.lightBackground,
        fontSize: 15,
        borderRadius: 10,
    }
    ,
    classmatesList: {
        margin: 5,
        padding: 5,

    },
    classmate: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        margin: 4,
    },
    classmateName: {
        color: Colors.primary,
        fontWeight: 'bold'

    },
    classmateIcon: {
        borderRadius: 50,
    },
    classmateSchool: {
        color: Colors.text,

    },
    classmateTexts: {
        marginLeft: 9,
        padding: 2,
    },

    dots: {
        marginLeft: 95,

    }
})

