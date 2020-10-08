import {
  DECODE_MESSAGE_FAILURE,
  DECODE_MESSAGE_REQUEST, DECODE_MESSAGE_SUCCESS,
  ENCODE_MESSAGE_FAILURE,
  ENCODE_MESSAGE_REQUEST,
  ENCODE_MESSAGE_SUCCESS,
} from './actionTypes';
import axiosApi from '../axiosApi';

const encodeMessageRequest = () => {
  return { type: ENCODE_MESSAGE_REQUEST };
};

const encodeMessageSuccess = (encoded) => {
  return { type: ENCODE_MESSAGE_SUCCESS, encoded };
};

const encodeMessageFailure = () => {
  return { type: ENCODE_MESSAGE_FAILURE };
};

export const encodeMessage = (encodeMessage) => {
  return async dispatch => {
    encodeMessageRequest();
    try {
      const response = await axiosApi.post('/encode', encodeMessage);
      dispatch(encodeMessageSuccess(response.data));
    } catch (e) {
      encodeMessageFailure(e);
    }
  };

};

const decodeMessageRequest = () => {
  return { type: DECODE_MESSAGE_REQUEST };
};

const decodeMessageSuccess = (decoded) => {
  return { type: DECODE_MESSAGE_SUCCESS, decoded};
};

const decodeMessageFailure = () => {
  return { type: DECODE_MESSAGE_FAILURE };
};

export const decodeMessage = (decodeMessage) => {
  return async dispatch => {
    decodeMessageRequest();
    try {
      const response = await axiosApi.post('/decode', decodeMessage);
      dispatch(decodeMessageSuccess(response.data));
    } catch (e) {
      dispatch(decodeMessageFailure(e));
    }
  };
};

