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
import Icon from   'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const routeIconUrls: { [key: string]: any } = {
  'Home': 'home',
  'Friends': 'people',
  'UserProfile': 'person'
};

// we are using builtin icons

const TabBarIcon = ({ name, focused }: any) => {
  return (
   
    <Icon name={name} color= {focused? 'green' : 'gray'} size={focused?35:30} 
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
           return <TabBarIcon name={ routeIconUrls[route.name] } focused={focused} />
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