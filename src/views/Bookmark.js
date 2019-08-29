import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Fonts } from './assets/Fonts';
import { PrimaryBlue, PrimaryGold } from '../components/commons/DefaultStyle';

class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vocabsList: {}
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { titleContainer, titleText } = detailNavigation;

    return {
      headerLeft: (
        <View style={ titleContainer }>
          <TouchableOpacity
            onPress={()=>{ navigation.goBack() }} style={{ padding: 16 }}
          >
            <Icon 
              name={'ios-arrow-back'} 
              size={16}
              style={{color: PrimaryBlue}}
            />
          </TouchableOpacity>
          <Text style={ titleText }>Bookmark List</Text>
        </View>
      ),
      headerRight: (
        <View />
      )
    }
  };

  componentWillMount() {
    let self = this;
    this.getVocabs(self);
  }

  getVocabs = async (self) => {
    let vocabsStorage = {};
    try {
      await AsyncStorage.getItem('vocabs').then( (value) => {
        vocabsStorage = JSON.parse(value);
        self.setState({ vocabsList: vocabsStorage });
      })
    } catch (error) {
      console.error('Failed to load');
    }
    return vocabsStorage;
  }

  _renderBookmarkList() {
    if(this.state.vocabsList.hasOwnProperty('description_en') == true) {
      const { vocab_en } = this.state.vocabsList;
      const { eachVocabView, vocabText } = styles;
      return (
        <View style={ eachVocabView }>
          <Text style={ vocabText }>{ vocab_en }</Text>
        </View>
      )
    } else {
      return false;      
    }
  }

  render () {
    const { container } = styles;

    return (
      <View style={ container }>
        { this._renderBookmarkList() }
      </View>
    )
  }
}

const detailNavigation = {
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  titleText: {
    fontFamily: Fonts.Bold,
    color: PrimaryBlue,
    ...Platform.select({
      ios: {
        fontSize: 22,
      },
      android: {
        fontSize: 20,
      }
    }),
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  eachVocabView: {
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#717479',
  },
  vocabText: {
    fontFamily: Fonts.TextPrimary,
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default Bookmark;
