import {
  REGISTER_FORM_UPDATE,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_RESET,
  REGISTER_USER__ADD_ADDR_SUCCESS,
  REGISTER_FORM_SUCCESS,
} from '../../Redux/Action/types';

const INITIAL_STATE = {
  registerEmail: '',
  registerPassword: '',
  registerUser: null,
  registerError: '',
  regLoading: false,
  fcmToken: '',
  mobileNo: '',
  mobileCountryCodeId: '211',
  mobilePhoneCode: '+66',
};

/************************************** Register reducer ****************************************************/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_FORM_UPDATE:
      // console.log(state, action);
      return { ...state, [action.payload.prop]: action.payload.value };
    case REGISTER_USER:
      return { ...state, regLoading: true, registerError: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, registerUser: action.payload, regLoading: false };
    case REGISTER_USER_FAIL:
      return { ...state, registerError: action.payload, regLoading: false };
    case REGISTER_RESET:
      return { ...state, ...INITIAL_STATE };
    case REGISTER_FORM_SUCCESS:
      return { ...state, regLoading: false };
    case REGISTER_USER__ADD_ADDR_SUCCESS:
      return { ...state, regLoading: false };
    default:
      return state;
  }
};
