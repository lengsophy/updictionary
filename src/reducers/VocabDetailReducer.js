import { Record } from 'immutable';
import {
  INITIAL_VOCAB_DETAIL
} from '../actions/ActionTypes';

const defaultState = Record({
  categories: [],
  vocab_en: '',
  description_en: '',
  image_url: '',
  tags: [],
});

let INITIALIZE_STATE = new defaultState;

export default VocabDetailReducer = (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case INITIAL_VOCAB_DETAIL: {
      const {
        category, key_en, description_en, image_url, tag
      } = action.payload;
      return state.set('categories', category)
                  .set('vocab_en', key_en)
                  .set('description_en', description_en)
                  .set('image_url', image_url)
                  .set('tags', tag)
    }
    default:
      return state;
  }
}
