import React from 'react';
import { Platform, Dimensions, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../views/Home';
import SearchProvider from '../views/SearchProvider';
import Setting from '../views/Setting';
import Bookmark from '../views/Bookmark';

const drawer = createStackNavigator(
  {

    Home: { screen: Home },
    Bookmark: { screen: Bookmark },
    Setting: { screen: Setting },
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

const AppContainer = createAppContainer(drawer);
export default AppContainer;
