import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Friends from '../screens/Friends';
import UserProfile from '../screens/UserProfile';

const Tab = createBottomTabNavigator();

const data = [
  { key: 'Home', iconUrl: 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png' },
  { key: 'Friends', iconUrl: 'https://cdn-icons-png.flaticon.com/128/8138/8138685.png' },
  { key: 'UserProfile', iconUrl: 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png' },
];

const TabBarIcon = ({ iconUrl, focused }) => {
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

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TabBarIcon iconUrl={item.iconUrl} />
      <Text style={{ color: 'gray', fontSize: 12, marginTop: 4 }}>{item.key}</Text>
    </TouchableOpacity>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: 'white',
          borderTopWidth: 0,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const item = data.find((d) => d.key === route.name);
          return <TabBarIcon iconUrl={item.iconUrl} focused={focused} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false, tabBarShowLabel:false}}/>
      <Tab.Screen name="Friends" component={Friends} options={{headerShown:false, tabBarShowLabel:false}} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{headerShown:false, tabBarShowLabel:false}} />
      
    </Tab.Navigator>
  );
}



export default MyTabs;
