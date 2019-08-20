import React from 'react';
import { Platform, Dimensions, Image, View, Text } from 'react-native';
import {
  createStackNavigator, createBottomTabNavigator, createAppContainer
} from 'react-navigation';
import Home from '../views/Home';
import SearchProvider from '../views/SearchProvider';
import Setting from '../views/Setting';
import Bookmark from '../views/Bookmark';

const TabNavigation = createBottomTabNavigator(
  {
    Bookmark: { screen: Bookmark },
    Setting: { screen: Setting },
  }
)

const drawer = createStackNavigator(
  {
    Home: { screen: Home },
    SearchProvider: { screen: SearchProvider },
    TabNavigation: { screen: TabNavigation },
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

const AppContainer = createAppContainer(drawer);
export default AppContainer;
