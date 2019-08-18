import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Home from './src/views/Home';
import { Routes } from './src/routes';

class MedicalTerm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialComponent: <Home />,
    }
  }

  componentDidMount() {
    const self = this;
    setTimeout(function () {
      self.setState({
        initialComponent: <Routes />
      })
    }, 1000);
  }

  render () {
    return (
      <View>
        { this.state.initialComponent }
      </View>
    )
  }
}

AppRegistry.registerComponent(appName, () => MedicalTerm);
