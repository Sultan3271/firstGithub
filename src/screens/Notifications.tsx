import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import styles from '../styles/Styles';
import Divider from '../components/Divider';
import Icon from 'react-native-vector-icons/Ionicons';
import notificationStyles from '../styles/NotificationStyles';
import ScholarBanner, { ScholarMiniBanner } from '../components/ScholarBanner';
import Colors from '../theme/ScholarColors';

const Notifications = () => {
    
    return (
        

        <View style={styles.container}>
            
            <View style={styles.innerContainer}>
                
                <View style={styles.heading}>

                    <ScholarMiniBanner text="Notifications" size={49} />
                </View>
                <ScrollView>
                    <View style={notificationStyles.notificationContainer}>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={notificationStyles.notificationBox}>
                            <View style={notificationStyles.nIcon}>
                                <Icon name='person' size={50} />
                            </View>
                            <View>
                                <Text style={notificationStyles.nText}>David Edwards liked your contributions.  He thinks
                                    that your contributions are ...</Text>
                            </View>
                            <View style={notificationStyles.nDots}>
                                <TouchableOpacity>
                                    <Icon name='ellipsis-vertical-outline' size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>




    );
};
export default Notifications;
