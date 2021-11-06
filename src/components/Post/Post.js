import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
export default function Post(props) {
  const [isPaused, setIsPaused] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [post, setPost] = useState(props.post);

  const onLikePress = () => {
    if (!isLiked) {
      setPost({
        ...post,
        likes: post.likes + 1,
      });
      setIsLiked(true);
    } else {
      setPost({
        ...post,
        likes: post.likes - 1,
      });
      setIsLiked(false);
    }
  };

  const onPlayPausePress = () => {
    setIsPaused(!isPaused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: post.videoUri,
          }}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
          paused={isPaused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: post.user.imageUri,
              }}
            />
          </View>
          <TouchableOpacity onPress={onLikePress} style={styles.iconContainer}>
            <AntDesign
              name={'heart'}
              size={35}
              color={isLiked ? 'red' : 'white'}
            />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={35} color={'white'} />
            <Text style={styles.statsLabel}>{post.comments}</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <Entypo name={'share'} size={35} color={'white'} />
            <Text style={styles.statsLabel}>{post.shares}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.songDescContainer}>
              <AntDesign name={'sound'} size={30} color={'white'} />
              <Text style={styles.songName}>{post.songName}</Text>
            </View>
          </View>

          <Image
            style={styles.songImage}
            source={{
              uri: post.songImage,
            }}
          />
        </View>
      </View>
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
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    height: 300,
    marginRight: 2,
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 50,
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 5,
  },
  songDescContainer: {
    flexDirection: 'row',
  },
  handle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },
  songName: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
    alignSelf: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    marginTop: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  songImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 5,
    borderColor: 'black',
  },
});
