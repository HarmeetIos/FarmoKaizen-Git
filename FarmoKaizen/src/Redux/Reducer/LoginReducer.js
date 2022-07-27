import {
  LOGIN_FORM_UPDATE,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_RESET,
  GET_LOGIN_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_IMAGE_PENDING,
  UPDATE_IMAGE_SUCCESS,
  UPDATE_IMAGE_FAIL,
} from '../Action/types';

const INITIAL_STATE = {
  loginEmail: '',
  loginMobile: '',
  loginPassword: '',
  mobileCountryCodeId: '211',
  mobilePhoneCode: '+66',
  loginUser: null,
  loginError: '',
  loginLoading: false,
  fcmToken: '',
  address: '',
  getUserDetails: null,
};

/************************************** Login reducer ****************************************************/
export default (state = INITIAL_STATE, action) => {
  console.log('Login Reducer', action);
  switch (action.type) {
    case LOGIN_FORM_UPDATE:
      console.log(state, action);
      return {...state, [action.payload.prop]: action.payload.value};
    case LOGIN_USER:
      return {...state, loginLoading: true, loginError: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, loginUser: action.payload, ...INITIAL_STATE};
    case GET_LOGIN_USER_INFO_SUCCESS:
      return {...state, getUserDetails: action.payload, loginLoading: false};

    case UPDATE_USER_INFO_SUCCESS:
      return {...state, loginLoading: false};

    case LOGIN_USER_FAIL:
      return {...state, loginLoading: false};
    case LOGIN_RESET:
      return {...state, ...INITIAL_STATE};

    case UPDATE_IMAGE_PENDING:
      return {...state, loginLoading: true};

    case UPDATE_IMAGE_SUCCESS:
      let userdetails = state.getUserDetails;
      console.log('User Details from State', userdetails);
      userdetails.image = action.payload;
      console.log('NEW User Details from State', userdetails);
      return {...state, loginLoading: false};

    case UPDATE_IMAGE_FAIL:
      return {...state, loginLoading: false};

    default:
      return state;
  }
};
