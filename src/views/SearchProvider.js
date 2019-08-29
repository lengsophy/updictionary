import React, { Component } from 'react';
import { 
  View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { getVocabsList } from '../actions/searchVocabs.action';
import { initializeVocabDetail } from '../actions/vocabDetail.action';
import SearchBar from '../components/commons/SearchBar';
import { Fonts } from './assets/Fonts';
import { PrimaryBlue, PrimaryGold } from '../components/commons/DefaultStyle';

class SearchProvider extends Component {
  constructor(props) {
    super(props)
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
          <Text style={ titleText }>Search</Text>
        </View>
      ),
      headerRight: (
        <View />
      )
    }
  };

  componentDidMount() {
    this.props.getVocabsList();
  }

  _navigateSearchProvider() {
    return false
  }

  _initialVocabDetail(vocab) {
    this.props.initializeVocabDetail(vocab);
    this.props.navigation.navigate('VocabDetail', { vocab });
  }

  _renderVocab(vocab, index) {
    const { eachVocabView, vocabText } = styles;

    return (
      <TouchableOpacity 
        style={ eachVocabView }
        onPress={() => this._initialVocabDetail(vocab) }
      >
        <Text style={ vocabText }>{vocab.key_en}</Text>
      </TouchableOpacity>
    )
  }

  _renderVocabListing() {
    return(
      <FlatList
        data={ this.props.vocabsList }
        renderItem={({ item, index }) => this._renderVocab(item, index)}
      />
    )
  }

  render () {
    const { searchProviderContainer, searchContainer, vocabContainer } = styles;

    return (
      <View style={ searchProviderContainer }>
        <View style={ searchContainer }>
          <SearchBar
            navigateSearchProvider={ this._navigateSearchProvider.bind(this) }
          />
        </View>
        <View style={ vocabContainer }>
          { this._renderVocabListing() }
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
  searchProviderContainer: {
    padding: 8,
  },
  searchContainer: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  vocabContainer: {
    paddingLeft: 8,
    paddingRight: 8,
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

const mapDispatchToProps = (dispatch) => {
  return ({
    getVocabsList: bindActionCreators(getVocabsList, dispatch),
    initializeVocabDetail: bindActionCreators(initializeVocabDetail, dispatch),
  })
}

const mapStateToProps = ({ vocabsSeaching }) => {
  const { vocabsList, loading, error } = vocabsSeaching;
  return { vocabsList, loading, error };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProvider);

