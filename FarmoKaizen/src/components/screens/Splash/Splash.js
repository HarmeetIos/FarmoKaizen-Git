import React, {Component} from 'react';
import {Text, View, Image, Modal} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Fonts, Images} from '../../../theme';
import {getAsyncStorage} from '../../../Utilis';
import styles from './SplashStyles';

import {connect} from 'react-redux';

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.Login();
    }, 2000);
  }

  render() {
    console.log('THis is the splash screen');
    return (
      <View style={styles.mainView}>
        <Image
          source={Images.splashBack}
          style={{height: '100%', width: '100%'}}></Image>
      </View>
    );
  }
}
const mapStateToProp = state => {
  const {getUserDetails, loginLoading} = state.loginReducer;
  return {getUserDetails, loginLoading};
};

export default connect(mapStateToProp, {})(Splash);
