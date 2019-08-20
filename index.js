import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import {name as appName} from './app.json';
import AppContainer from './src/routes';

class MedicalTerm extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <AppContainer />
    )
  }
}

AppRegistry.registerComponent(appName, () => MedicalTerm);
