import React from 'react';
import {StyleSheet, Text, FlatList, View, Dimensions} from 'react-native';
import Post from '../../components/Post/Post';
import posts from '../../../data/posts';
export default function HomeScreen() {
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
