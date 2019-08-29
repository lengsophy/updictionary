import { Record } from 'immutable';
import {
  LOADING_VOCABS_LIST,
  LOAD_VOCABS_LIST_SUCCESS,
  LOAD_VOCABS_LIST_FAIL,
} from '../actions/ActionTypes';

const defaultState = Record({
  error: '',
  success: false,
  loading: false,
  vocabsList: [],
});

let INITIALIZE_STATE = new defaultState;

export default VocabsReducer = (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case LOADING_VOCABS_LIST:
      return state.set('loading', true)
    case LOAD_VOCABS_LIST_SUCCESS:
      return state.set('success', true)
                  .set('loading', false)
                  .set('vocabsList', action.payload)
    case LOAD_VOCABS_LIST_FAIL:
      return state.set('error', action.payload)
                  .set('loading', false)
    default:
      return state;
  }
}
