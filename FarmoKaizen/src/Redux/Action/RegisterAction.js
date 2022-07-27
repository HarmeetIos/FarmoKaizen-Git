import {
  REGISTER_FORM_UPDATE,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_RESET,
  REGISTER_USER__ADD_ADDR_SUCCESS,
  REGISTER_FORM_SUCCESS,
} from './types';

import {Actions} from 'react-native-router-flux';
import {
  REGISTER_USER_API_POST,
  BASE_URL,
  UPLOAD_DOC_FILE_API,
  ADD_USER_ADDRESS_API_POST,
  SAVE_USR_INTEREST_API_POST,
} from '../../EndPoints';
import {Alert} from 'react-native';
import {
  saveToAsyncStorage,
  getAsyncStorage,
  encryptData,
  showAlertWithMessage,
} from '../../Utilis';
import * as Constants from '../../Constants';
import * as APIClient from '../../Api/APIClient';
import RNFetchBlob from 'rn-fetch-blob';
import * as Utils from '../../Utilis';
/**************************************Update prop values ****************************************************/
export const registerFormUpdate = ({prop, value}) => {
  return {
    type: REGISTER_FORM_UPDATE,
    payload: {
      prop,
      value,
    },
  };
};

/**************************************Reset all prop values ****************************************************/

export const resetRegisterForm = () => {
  return {
    type: REGISTER_RESET,
  };
};

/************************************** Add user address ****************************************************/

export const addUserAddress = params => {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({type: REGISTER_USER});
    });
};
/*
export const saveUserInterests = params => {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({type: REGISTER_USER});
      APIClient.post(SAVE_USR_INTEREST_API_POST, params, '')
        .then(response => {
          console.log(
            'saveUserInterests success **** ' + JSON.stringify(response.data),
          );
          registerFormSuccess(dispatch, response.data.data);
          // saveToAsyncStorage(Constants.USER_DATA, JSON.stringify(response.data.data)).then(res => {
          resolve(response.data);
          // })
        })
        .catch(error => {
          if (error == null) {
            console.log('saveUserInterests Error **** SE');
            registerUserFail(dispatch, 'SE');
            reject('SE');
          }

          console.log('saveUserInterests Error ****', error);
          registerUserFail(
            dispatch,
            error.response.data.message
              ? error.response.data.message
              : JSON.stringify(error.response),
          );
          showAlert(
            error.response.data.message
              ? error.response.data.message
              : JSON.stringify(error.response),
          );
          reject(
            error.response.data.message
              ? error.response.data.message
              : JSON.stringify(error.response),
          );
        });
    });
};

export const skipUserInterests = params => {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({type: REGISTER_USER});
      APIClient.get('user/send_email_on_skip', '')
        .then(response => {
          console.log(
            'saveUserInterests success **** ' + JSON.stringify(response.data),
          );
          registerFormSuccess(dispatch, response.data.data);
          // saveToAsyncStorage(Constants.USER_DATA, JSON.stringify(response.data.data)).then(res => {
          resolve(response.data);
          // })
        })
        .catch(error => {
          if (error == null) {
            console.log('saveUserInterests Error **** SE');
            registerUserFail(dispatch, 'SE');
            reject('SE');
          }

          console.log('saveUserInterests Error ****', error);
          registerUserFail(
            dispatch,
            error.response.data.message
              ? error.response.data.message
              : JSON.stringify(error.response),
          );
          showAlert(
            error.response.data.message
              ? error.response.data.message
              : JSON.stringify(error.response),
          );
          reject(
            error.response.data.message
              ? error.response.data.message
              : JSON.stringify(error.response),
          );
        });
    });
};
*/

/************************************** Register User Api request ****************************************************/

const showAlert = msg => {
  showAlertWithMessage(msg);
};

/************************************** Success/Fail Dispatches ****************************************************/
const registerUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: REGISTER_USER_FAIL,
    payload: errorMessage,
  });
};
const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  });
};

const registerFormSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_FORM_SUCCESS,
    payload: user,
  });
};

const registerAddAdressSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER__ADD_ADDR_SUCCESS,
    payload: user,
  });
};
