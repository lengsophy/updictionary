import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PrimaryBlue, PrimaryGold } from '../components/commons/DefaultStyle';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {
      container, headerStyle, bodyStyle, footerStyle, imageLogo
    } = styles;

    return (
      <View style={container}>
        <View style={ headerStyle }>
          <Image
            source={require('./assets/images/up_inapp.png')}
            style={ imageLogo }
          />
        </View>
        <View style={ bodyStyle }></View>
        <View style={ footerStyle }></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerStyle: {
    flex: 1,
    backgroundColor: PrimaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyStyle: {
    flex: 4,
    backgroundColor: '#ffffff',
  },
  footerStyle: {
    flex: 0.5,
    backgroundColor: PrimaryBlue,
  },
  imageLogo: {
    height: '80%',
    resizeMode: 'contain',
  },
})

export default Home;
