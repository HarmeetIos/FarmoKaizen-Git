import React, {Component} from 'react';
import {Text, View, Image, Modal} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Fonts, Images} from '../../../theme';
import {getAsyncStorage} from '../../../Utilis';
import styles from './SplashStyles';

import {connect} from 'react-redux';
import {USER_DATA} from '../../../Constants';

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      getAsyncStorage(USER_DATA).then(res => {
        console.log(JSON.stringify(res));
        if (JSON.parse(res)) {
          if (JSON.parse(res).user.role == 'producer') {
            Actions.tabP();
          } else if (JSON.parse(res).user.role == 'consumer') {
            Actions.tab();
          }
        } else {
          Actions.Login();
        }
      });
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
