import React from 'react';
import {StyleSheet, Text, FlatList, View, Dimensions} from 'react-native';
import Post from '../../components/Post/Post';
import posts from '../../../data/posts';
export default function HomeScreen() {
  /* const post = {
    id: 'p1',
    videoUri:
      'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    user: {
      id: 'u1',
      username: 'daviddobrik',
      imageUri:
        'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA.jpg',
    },
    description: 'hahahah oh boy @borat',
    songName: 'NF - The search',
    songImage:
      'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA.jpg',
    likes: 123,
    comments: 12,
    shares: 44,
  }; */
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => {
          return <Post post={item} />;
        }}
        keyExtractor={item => {
          return item.id;
        }}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
