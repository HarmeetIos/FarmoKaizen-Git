import React, {Component} from 'react';
import Router from './Router';
import {Provider} from 'react-redux';
import reducers from './Redux/Reducer';
import {configureStore, applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

import {AppState, LogBox} from 'react-native';

import FlashMessage from 'react-native-flash-message';
import {TextInput} from 'react-native';
// TextInput.defaultProps.fontFamily = Fonts.robotoRegular;

import {showMessage, hideMessage} from 'react-native-flash-message';
import {Fonts} from './theme';
import {getAsyncStorage} from './Utilis';
import * as Constants from './Constants';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Router />
        <FlashMessage position="top" />
      </Provider>
    );
  }
}
