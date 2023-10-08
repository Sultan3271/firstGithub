/**
 * @file Home.tsx
 * @description ?]
 * @ownership ?
 * @last modified 9/20/2023
 */

import { View, FlatList} from 'react-native';
import React from 'react';
import FeedBox from '../components/FeedBox';
import { posts } from '../services/DataService';

const Home = ({ navigation }: any) => {
  return (
    <View style={{flex:1,backgroundColor:'#adb5bd'}}>
    <FlatList
    
      data={posts}
      renderItem={({ item }) => (
        
          <FeedBox admin={item.admin} avatar={item.avatar}
            time={item.time}
          picture={item.picture}
          likes={item.likes}
          contributes={item.contributes} 
          description={item.description}  
          
          /> 
      )}
    />
    </View>
    
  )
}

export default Home