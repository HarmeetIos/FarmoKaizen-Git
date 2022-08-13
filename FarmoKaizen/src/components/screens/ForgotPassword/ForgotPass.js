import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './ForgotPassStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Clipboard,
  Modal,
  Platform,
  Alert,
  AsyncStorage,
} from 'react-native';
import {
  loginFormUpdate,
  requestLoginUser,
  registerFormUpdate,
} from '../../../Redux/Action';

import {Colors, Fonts, Images} from '../../../theme';
import {
  Button,
  Input,
  LoaderView,
  ScreenBg,
  InputWithLabels,
  Header,
} from '../../common';
import {Actions} from 'react-native-router-flux';
import {emailRegex, passwordRegEx_8, saveToAsyncStorage} from '../../../Utilis';
import {USER_DATA} from '../../../Constants';

class ForgotPass extends Component {
  state = {
    loginEmail: '',
    loginPass: '',
  };

  render() {
    return (
      <>
        <View style={styles.mainView}>
          <Header Title={'Forgot Password'} />
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <View>
              <Image
                resizeMode="stretch"
                style={[styles.loginLogo, {height: 200, width: 200}]}
                source={Images.login_Icon}
              />
              <Input
                customStyle={{marginTop: '30%'}}
                placeholder="Email"
                value={this.state.loginEmail}
                onChangeText={text => {
                  // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
                  // if (ALPHABET_REGEX_WITH_CHR.test(text)) {
                  this.setState({loginEmail: text.replace(/\s+/g, '')});
                  // }

                  // }
                }}
              />

              <Button
                children={'Submit'}
                onPress={() => {
                  // Actions.tab()
                  if (!emailRegex.test(this.state.loginEmail)) {
                    alert('Enter valid Email Address');
                  } else {
                    // this.loginApi();
                  }
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProp = state => {
  const {loginEmail, loginMobile, loginPassword, loginLoading, address} =
    state.loginReducer;
  const {fcmToken, mobilePhoneCode, mobileCountryCodeId} =
    state.registerReducer;
  return {
    loginEmail,
    loginMobile,
    loginPassword,
    loginLoading,
    fcmToken,
    mobilePhoneCode,
    mobileCountryCodeId,
    address,
  };
};

export default connect(mapStateToProp, {
  loginFormUpdate,
  requestLoginUser,
  registerFormUpdate,
})(ForgotPass);
