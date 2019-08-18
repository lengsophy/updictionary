import React from 'react';
import { Platform, Dimensions, Image, View, Text } from 'react-native';
import {
  StackNavigator, DrawerNavigator, TabNavigator, TabBarTop
} from 'react-navigation';
import Home from '../views/Home';
import SearchProvider from '../views/SearchProvider';

const drawer = StackNavigator({
  Home: {
    screen: Home
  },
  SearchProvider: {
    screen: SearchProvider,
  },
});

export const Routes = DrawerNavigator({
  drawer: {
    screen: drawer,
  },
})
