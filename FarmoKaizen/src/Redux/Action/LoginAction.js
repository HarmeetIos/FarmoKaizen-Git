import {
  LOGIN_FORM_UPDATE,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  UPDATE_IMAGE_PENDING,
  UPDATE_IMAGE_FAIL,
  UPDATE_IMAGE_SUCCESS,
  LOGIN_USER,
  LOGIN_RESET,
  GET_LOGIN_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_SUCCESS,
} from './types';
import {ApiStore} from '../../Api';
import {Actions} from 'react-native-router-flux';
import {
  LOGIN_USER_API_POST,
  SOCIAL_LOGIN_USER_API_POST,
  GET_USERINFO_API,
  UPDATE_USERINFO_API_PUT,
  UPDATE_USER_IMAGE,
  BASE_URL,
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
export const loginFormUpdate = ({prop, value}) => {
  return {
    type: LOGIN_FORM_UPDATE,
    payload: {prop, value},
  };
};

/**************************************Reset all prop values ****************************************************/

export const resetLoginForm = () => {
  return {
    type: LOGIN_RESET,
  };
};

export const logoutAndReset = () => {
  return dispatch => {
    dispatch({type: 'LOGOUT'});
  };
};
/************************************** Login User Api request ****************************************************/

export const requestLoginUser = params => {
  console.log(params);
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({type: LOGIN_USER});

      APIClient.post(LOGIN_USER_API_POST, params)
        .then(response => {
          // debugger;
          console.log('Login success **** ' + JSON.stringify(response.data));
          resolve(response.data);
          loginUserSuccess(dispatch, response.data);
        })
        .catch(error => {
          if (error != null) {
            console.log('Login Error **** sE');
            loginUserFail(dispatch, 'se');
            showAlert(error.response.data.error);
            console.log('Login Error ****', error.response.data.message);
            reject('se');
          }
        });
    });
};

const showAlert = msg => {
  showAlertWithMessage(msg);
};
/*
export const requestGetUserDetails = () => {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({ type: LOGIN_USER });

      getAsyncStorage(Constants.ACCESS_TOKEN).then(res => {
        let userToken = res;
        APIClient.get(GET_USERINFO_API, userToken)
          .then(response => {
            // debugger;
            console.log(
              'getUserDetailsSuccess success **** ' ,
                response.data,
            );

            saveToAsyncStorage(
              Constants.USER_DATA,
              JSON.stringify(response.data.data),
            ).then(res => {
              resolve(response.data.data);

              // console.log("****** logout token *****" + response.data.logout_token)
              // saveToAsyncStorage(Constants.LOGOUT_TOKEN, response.data.logout_token).then(log => {
              getUserDetailsSuccess(dispatch, response.data.data);
              // })
            });
            // resolve(response.data.data)
          })
          .catch(error => {
            // debugger;
            console.log('getUserDetailsSuccess Error1 ****', error);
            if (error == null) {
              console.log('getUserDetailsSuccess Error **** Session expire');
              loginUserFail(dispatch, 'Session expire');
              reject('Session expire');
            }
            loginUserFail(
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
    });
};

export const requestUpdateUserDetails = param => {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({ type: LOGIN_USER });

      getAsyncStorage(Constants.ACCESS_TOKEN).then(res => {
        let userToken = res;
        APIClient.put(UPDATE_USERINFO_API_PUT, param, '')
          .then(response => {
            // debugger;
            console.log(
              'requestUpdateUserDetails success **** ' +
                JSON.stringify(response.data),
            );

            // saveToAsyncStorage(
            //   Constants.USER_DATA,
            //   JSON.stringify(response.data.data),
            // ).then(res => {
            resolve(response.data.data);

            // console.log("****** logout token *****" + response.data.logout_token)
            // saveToAsyncStorage(Constants.LOGOUT_TOKEN, response.data.logout_token).then(log => {
            profileUpdatedSuccess(dispatch, response.data.data);
            // })
            // });
            // resolve(response.data.data)
          })
          .catch(error => {
            // debugger;
            if (error == null) {
              console.log('requestUpdateUserDetails Error **** Session expire');
              loginUserFail(dispatch, 'Session expire');
              reject('Session expire');
            }

            console.log('requestUpdateUserDetails Error ****', error);
            loginUserFail(
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
    });
};


const updatePic = async (dispatch, paramImage) => {
  try {
    dispatch({ type: UPDATE_IMAGE_PENDING });
    const token = await getAsyncStorage(Constants.ACCESS_TOKEN);
    console.log("TOKEN FOR IMAGE", token);
    const response = await RNFetchBlob.fetch(
      'POST',
      BASE_URL + UPDATE_USER_IMAGE,
      {
        'Content-Type': 'multipart/form-data',
        'appversion': Utils.appVersion,
        'Authorization': token,
      },
      [paramImage],
      token
    );
    // const response = await APIClient.post(UPDATE_USER_IMAGE, paramImage, token);
    const data = response.json().data;
    console.log("Update Image Response", data);
    dispatch({ type: UPDATE_IMAGE_SUCCESS, payload: data });
  } catch (e) {
    console.log("ERror", e);
    dispatch({ type: UPDATE_IMAGE_FAIL, payload: e });
  }
};

export const updatePicture = (paramImage) => {
  return dispatch => updatePic(dispatch, paramImage);
};
*
/************************************** Success/Fail Dispatches ****************************************************/
const loginUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: errorMessage,
  });
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

const getUserDetailsSuccess = (dispatch, user) => {
  dispatch({
    type: GET_LOGIN_USER_INFO_SUCCESS,
    payload: user,
  });
};

const profileUpdatedSuccess = (dispatch, user) => {
  dispatch({
    type: UPDATE_USER_INFO_SUCCESS,
    payload: user,
  });
};
