import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SearchBar from '../components/commons/SearchBar';
import { PrimaryBlue, PrimaryGold } from '../components/commons/DefaultStyle';
import { Fonts } from './assets/Fonts';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _navigateSearchProvider() {
    this.props.navigation.navigate('SearchProvider')
  }

  render () {
    const {
      container, headerStyle, bodyStyle, footerStyle, imageLogo, searchCaption
    } = styles;

    return (
      <View style={container}>
        <View style={ headerStyle }>
          <Image
            source={require('./assets/images/up_inapp.png')}
            style={ imageLogo }
          />
        </View>
        <View style={ bodyStyle }>
          <Text style={ searchCaption }>Medical Terminology</Text>
          <Text style={ [searchCaption, { paddingBottom: 4}] }>Dictionary</Text>
          <SearchBar
            navigateSearchProvider={ this._navigateSearchProvider.bind(this) }
          />
        </View>
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
    flex: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  footerStyle: {
    flex: 0.5,
    backgroundColor: PrimaryBlue,
  },
  imageLogo: {
    height: '90%',
    resizeMode: 'contain',
  },
  searchCaption: {
    color: PrimaryGold,
    fontSize: 18,
    fontFamily: Fonts.Bold,
    alignSelf: 'center',
  }
})

export default Home;
