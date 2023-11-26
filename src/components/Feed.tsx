import React from 'react';
import { FlatList, View } from 'react-native';

import FeedBox from '../components/FeedBox';
import { posts } from '../services/DataService';
import Colors from '../theme/ScholarColors';

type FeedProps = {
    scrollEnabled?: boolean,
    startReachedThreshold?: number,
    endReachedThreshold?: number,
    onStartReached?: () => void,
    onEndReached?: () => void,
}

const Feed = (props: FeedProps) => {

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

                    <FeedBox key={0} admin={item.admin} avatar={item.avatar}
                        time={item.time}
                        picture={item.picture}
                        likes={item.likes}
                        contributes={item.contributes}
                        description={item.description}
                        postID={''}
                        userID={''}
                    />

                )}
            />
        </View>
    )
}

export default Feed