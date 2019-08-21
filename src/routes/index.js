import React from 'react';
import { Platform, Dimensions, Image, View, Text } from 'react-native';
import {
  createStackNavigator, createBottomTabNavigator, createAppContainer
} from 'react-navigation';
import Home from '../views/Home';
import SearchProvider from '../views/SearchProvider';
import Setting from '../views/Setting';
import Bookmark from '../views/Bookmark';

const drawer = createStackNavigator(
  {
    SearchProvider: { screen: SearchProvider },
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerMode: 'none',
      headerBackTitle: null,
      headerTintColor: '#000',
      headerMode: 'none',
    },
  },
);

const TabNavigation = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Bookmark: { screen: Bookmark },
    Setting: { screen: Setting },
  }, {
    initialRouteName: 'Home',
    lazy: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
    },
  }
)

const AppContainer = createAppContainer(TabNavigation);
export default AppContainer;
