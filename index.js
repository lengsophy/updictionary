import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import AppContainer from './src/routes';
import configureStore from './src/reducers/configureStore';

const store = configureStore();

class MedicalTerm extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => MedicalTerm);
