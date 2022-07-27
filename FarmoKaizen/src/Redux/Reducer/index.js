import {combineReducers} from 'redux';

import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
const appReducer = combineReducers({
  loginReducer: LoginReducer,
  registerReducer: RegisterReducer,
});

export default (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};
