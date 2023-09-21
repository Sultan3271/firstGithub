/**
 * @file TabNavigator.tsx
 * @description This script is responsible for controling tab navigation.
 * @ownership ?
 * @last modified 9/20/2023
 */

import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Friends from '../screens/Friends';
import UserProfile from '../screens/UserProfile';

const Tab = createBottomTabNavigator();

const routeIconUrls: { [key: string]: any } = {
  'Home': 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png',
  'Friends': 'https://cdn-icons-png.flaticon.com/128/8138/8138685.png',
  'UserProfile': 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png'
};

// NOTE: icon should probably be built in and not retrieved from the internet
// If the user ever wanted to look at the app offline icons would not appear
const TabBarIcon = ({ iconUrl, focused }: any) => {
  return (
    <Image
      source={{ uri: iconUrl }}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? 'green' : 'gray',
        marginBottom: -3,
      }}
    />
  );
};

const renderItem = ({ item }: any) => {
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TabBarIcon iconUrl={item.iconUrl} />
      <Text style={{ color: 'gray', fontSize: 12, marginTop: 4 }}>{item.key}</Text>
    </TouchableOpacity>
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
           return <TabBarIcon iconUrl={ routeIconUrls[route.name] } focused={focused} />
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false, tabBarShowLabel:false}}/>
      <Tab.Screen name="Friends" component={Friends} options={{headerShown:false, tabBarShowLabel:false}} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{headerShown:false, tabBarShowLabel:false}} />
      
    </Tab.Navigator>
  );
}

export default ScholarTabs;