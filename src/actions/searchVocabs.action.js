import axios from 'axios';
import {
  API_DOMAIN,
  LOADING_VOCABS_LIST,
  LOAD_VOCABS_LIST_SUCCESS,
  LOAD_VOCABS_LIST_FAIL,
  INITIAL_VOCAB_DETAIL,
} from './ActionTypes';
import data from './data/terms.json';

export const searchVocabs = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_VOCABS_LIST });
    axios.get(API_DOMAIN + "/api/v1/vocabs")
    .then(response => getVocabsListSuccess(dispatch, response.data))
    .catch(error => getVocabsListFail(dispatch, error))
  };
}

// export const getVocabsList = () => {
//   return (dispatch) => {
//     dispatch({ type: LOADING_VOCABS_LIST });
//     axios.get("./data/terms.json")
//     .then(response => getVocabsListSuccess(dispatch, response.data))
//     .catch(error => getVocabsListFail(dispatch, error))
//   };
// }

export const getVocabsList = () => {
  let termData = data;
  return (dispatch) => {
    dispatch({ type: LOADING_VOCABS_LIST });
    getVocabsListSuccess(dispatch, termData.data);
  };
}

export const getVocabsListSuccess = (dispatch, vocabsList) => {
  dispatch({
    type: LOAD_VOCABS_LIST_SUCCESS, payload: vocabsList
  });
}

export const getVocabsListFail = (dispatch, error) => {
  dispatch({
    type: LOAD_VOCABS_LIST_FAIL, payload: error.status
  });
}

export const initializeVocabDetail = vocab => {
  return {
    type: INITIAL_VOCAB_DETAIL,
    payload: vocab
  };
};
