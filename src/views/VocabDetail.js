import React, { Component } from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, Platform
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Fonts } from './assets/Fonts';
import { PrimaryBlue, PrimaryGold } from '../components/commons/DefaultStyle';
import Footer from '../components/commons/Footer';

class VocabDetail extends Component {

  static navigationOptions = ({ navigation }) => {
    const { vocab } = navigation.state.params;
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
          <Text style={ titleText }>
            { vocab.key_en }
          </Text>
        </View>
      ),
      headerRight: (
        <View />
      )
    }
  };

  _bookmarkVocab = async vocab => {
    // debugger;
    try {
      var jsonOfItem = await AsyncStorage.setItem('vocabs', JSON.stringify(vocab));
      return jsonOfItem;
      // debugger;
    } catch (error) {
      // debugger;
      console.log(error.message);
    }
  };

  _getVocabs = async () => {
    let vocabs = [];
    try {
      vocabs = await AsyncStorage.getItem('vocabs') || 'none';
      debugger;
    } catch (error) {
      // Error retrieving data
      debugger;
      console.error('Failed to save name.')
    }
    return vocabs;
  }

  render () {
    const { vocab_en, description_en, image_url } = this.props.vocabDetail;
    const { 
      container, keywordStyle, descriptionContainer, descriptionText, imgContainer, imgDescription
    } = styles;

    return (
      <View style={ container }>
        <Text style={ keywordStyle }>{ vocab_en }</Text>
        <View style={ descriptionContainer }>
          <Text style={ descriptionText }>{ description_en }</Text>
        </View>
        <View style={ imgContainer }>
          <Image 
            source={require('./assets/images/terms/1.png')}
            style={ imgDescription }
          />
        </View>
        <View style={{ paddingBottom: 50 }}>
          <TouchableOpacity 
            onPress={() => this._bookmarkVocab(this.props.vocabDetail) 
          }>
            <Text>Bookmark Me!</Text>
          </TouchableOpacity>
        </View>
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
    fontFamily: Fonts.Primary,
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
  keywordStyle: {
    fontFamily: Fonts.TextPrimary,
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  descriptionContainer: {
    paddingTop: 8,
  },
  descriptionText: {
    fontFamily: Fonts.TextPrimary,
    fontSize: 16,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
  },
  imgDescription: {
    height: 200,
    resizeMode: 'contain',
  }
});

const mapStateToProps = ({ vocabDetail }) => {
  return { vocabDetail };
}

export default connect(mapStateToProps)(VocabDetail);
