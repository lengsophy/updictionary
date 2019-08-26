import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, Icon, Button } from 'native-base';
import { PrimaryGold, PrimaryBlue } from './DefaultStyle';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { footerContainer, footerStyle, footerWrapper, iconStyle } = styles;

    return (
      <View style={ footerContainer }>
        <View style={ footerStyle }>
          <View style={ footerWrapper }>
            <Button transparent onPress={() => this.props.navigateBookmark()}>
              <Icon name='star' style={ iconStyle } />
            </Button>
          </View>
          <View style={ footerWrapper }>
            <Button transparent onPress={() => this.props.navigateBookmark()}>
              <Icon name='md-settings' style={ iconStyle } />
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.5,
    backgroundColor: PrimaryBlue,
  },
  footerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  footerWrapper: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: PrimaryGold,
    fontSize: 32,
  },
})

export default Footer;
