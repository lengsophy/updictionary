import { INITIAL_VOCAB_DETAIL } from './ActionTypes';

export const initializeVocabDetail = vocab => {
  return {
    type: INITIAL_VOCAB_DETAIL,
    payload: vocab
  };
};
