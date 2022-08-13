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

export const requestRegisterUser = params => {
  debugger;
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({type: REGISTER_USER});
      // alert(JSON.stringify(params))

      APIClient.post(REGISTER_USER_API_POST, params)
        .then(response => {
          console.log('Register success **** ' + JSON.stringify(response.data));

          registerUserSuccess(dispatch, response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log('Register Error ****', error.response.data.message);
          registerUserFail(dispatch, error.response.data.message);
          showAlert(error.response.data.message);
          reject(error.response.data.message);
        });
    });
};

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
