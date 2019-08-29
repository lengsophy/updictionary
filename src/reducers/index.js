import { combineReducers } from 'redux';
import VocabsReducer from './VocabsReducer';
import VocabDetailReducer from './VocabDetailReducer';

export default combineReducers({
  vocabsSeaching: VocabsReducer,
  vocabDetail: VocabDetailReducer,
});
