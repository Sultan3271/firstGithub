import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import FeedBox from '../components/FeedBox';
import { posts } from '../services/DataService';
import Colors from '../Theme/ScholarColors';

const Feed = (props: any) => {

    function onStartReachedCallback() {
        if (props.onStartReached !== undefined)
            props.onStartReached();
    }

    function onEndReachedCallback() {
        if (props.onEndReached !== undefined)
            props.onEndReached();
    }

    return (
        <View style={{ backgroundColor: Colors.feedBackground }}>
            <FlatList

                onStartReached={onStartReachedCallback}
                onStartReachedThreshold={0.01}

                onEndReached={onEndReachedCallback}
                onEndReachedThreshold={0.01}

                showsVerticalScrollIndicator={false}
                scrollEnabled={props.scrollEnabled}
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

export default Feed