import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import { PrimaryGold } from './DefaultStyle';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchBoxContainerStyle, searchIconStyle, btnSearchStyle } = styles;

    return (
      <Item rounded style={ searchBoxContainerStyle } >
        <Input placeholder='Search ...' />
        <Button transparent>
          <Icon name='search' style={ searchIconStyle } />
        </Button>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  searchBoxContainerStyle: {
    borderColor: PrimaryGold,
    borderWidth: 5,
  },
  searchIconStyle: {
    color: PrimaryGold,
    fontWeight: 'bold',
  },
  btnSearchStyle: {
    backgroundColor: PrimaryGold,
  }
})

export default SearchBar;
