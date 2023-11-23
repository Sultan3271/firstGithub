/**
 * @file TabNavigator.tsx
 * @description This script is responsible for controling tab navigation.
 * @ownership ?
 * @last modified 9/20/2023
 */

import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons//MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Friends from '../screens/Friends';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import UserProfile from '../screens/UserProfile';
import Colors from '../theme/ScholarColors';

const Tab = createBottomTabNavigator();

const routeIconUrls: { [key: string]: any } = {
    'Home': 'home',
    'Friends': 'account-multiple',
    'Notifications': 'bell',
    'UserProfile': 'account',
};

function TabBarIcon({ iconName, focused }: any) {
    return (
        <MaterialCommunityIcon name={iconName} color={focused ? Colors.primary : 'gray'} size={focused ? 35 : 30} />
    );
};

function ScholarTabs() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: 60,
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                },
                tabBarIcon: ({ focused }: any) => {
                    return <TabBarIcon iconName={routeIconUrls[route.name]} focused={focused} />
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarShowLabel: false }} />
            <Tab.Screen name="Friends" component={Friends} options={{ headerShown: false, tabBarShowLabel: false }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{ headerShown: false, tabBarShowLabel: false }} />
            <Tab.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false, tabBarShowLabel: false }} />

        </Tab.Navigator>
    );
}

export default ScholarTabs;