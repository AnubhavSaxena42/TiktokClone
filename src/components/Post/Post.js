import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
export default function Post() {
  const [isPaused, setIsPaused] = useState(false);

  const onPlayPausePress = () => {
    setIsPaused(!isPaused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
          paused={isPaused}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});
