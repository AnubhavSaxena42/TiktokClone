import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import HomeScreen from '../src/screens/Home/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plusIcon from '../data/plus-icon.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={30} color="white" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={30} color="white" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Upload"
        options={{
          tabBarIcon: ({color}) => (
            <Image
              resizeMode={'contain'}
              source={plusIcon}
              style={{
                width: 70,
                height: 45,
              }}
            />
          ),
          tabBarLabel: () => {},
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Inbox"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="message-minus-outline"
              size={30}
              color="white"
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={30} color="white" />
          ),
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
