/**
 * @file TabNavigator.tsx
 * @description This script is responsible for controling tab navigation.
 * @ownership ?
 * @last modified 9/20/2023
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Friends from '../screens/Friends';
import UserProfile from '../screens/UserProfile';
import MaterialCommunityIcon from 'react-native-vector-icons//MaterialCommunityIcons';
import Colors from '../Theme/ScholarColors';
import Notifications from '../screens/Notifications';

const Tab = createBottomTabNavigator();

const routeIconUrls: { [key: string]: any } = {
  'Home': 'home',
  'Friends': 'account-multiple',
  'Notifications': 'bell',
  'UserProfile': 'account',
  
};

function TabBarIcon({ iconName, focused }: any) 
{
  return (
    <MaterialCommunityIcon name={iconName} color={focused ? Colors.secondary : 'gray'}  size={focused ? 35 : 30} />
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
           return <TabBarIcon iconName={ routeIconUrls[route.name] } focused={focused} />
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