import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getVocabsList } from '../actions/searchVocabs.action';
import SearchBar from '../components/commons/SearchBar';
import Footer from '../components/commons/Footer';
import { PrimaryBlue, PrimaryGold } from '../components/commons/DefaultStyle';
import { Fonts } from './assets/Fonts';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.getVocabsList();
  }

  _navigateSearchProvider() {
    this.props.navigation.navigate('SearchProvider')
  }

  _navigateSetting() {
    this.props.navigation.navigate('Setting');
  }

  _navigateBookmark() {
    this.props.navigation.navigate('Bookmark');
  }

  render () {
    const {
      container, headerStyle, bodyStyle, imageLogo, searchCaption
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
        <Footer 
          navigateSetting={ this._navigateSetting.bind(this) }
          navigateBookmark={ this._navigateBookmark.bind(this) }
        />
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

const mapDispatchToProps = (dispatch) => {
  return ({
    getVocabsList: bindActionCreators(getVocabsList, dispatch),
  })
}

const mapStateToProps = ({ vocabsSeaching }) => {
  const { vocabsList, loading, error } = vocabsSeaching;
  return { vocabsList, loading, error };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
