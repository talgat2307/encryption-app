import {
  DECODE_MESSAGE_FAILURE,
  DECODE_MESSAGE_REQUEST, DECODE_MESSAGE_SUCCESS,
  ENCODE_MESSAGE_FAILURE,
  ENCODE_MESSAGE_REQUEST,
  ENCODE_MESSAGE_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  encodedData: [],
  decodedData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENCODE_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case ENCODE_MESSAGE_SUCCESS:
      return { ...state, loading: false, encodedData: action.encoded };
    case ENCODE_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case DECODE_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case DECODE_MESSAGE_SUCCESS:
      return { ...state, loading: false, decodedData: action.decoded };
    case DECODE_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
