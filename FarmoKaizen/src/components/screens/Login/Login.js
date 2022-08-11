import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './LoginStyle';
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
} from '../../common';
import {Actions} from 'react-native-router-flux';
import {emailRegex, passwordRegEx_8, saveToAsyncStorage} from '../../../Utilis';
import {USER_DATA} from '../../../Constants';

class Login extends Component {
  state = {
    loginEmail: '',
    loginPass: '',
  };
  loginApi() {
    let parm = {
      email: this.state.loginEmail.toLowerCase(),
      password: this.state.loginPass,
    };

    this.props
      .requestLoginUser(parm)

      .then(res => {
        console.log('LLLLL' + JSON.stringify(res.user));
        saveToAsyncStorage(USER_DATA, JSON.stringify(res)).then(ss => {
          if (res.user.role == 'producer') {
            Actions.tabP();
          } else if (res.user.role == 'consumer') {
          } else {
          }
        });
      })
      .catch(err => {});
  }

  render() {
    return (
      <>
        <View style={styles.mainView}>
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
              <Input
                customStyle={{marginTop: 30}}
                placeholder="Password"
                value={this.state.loginPass}
                onChangeText={text => {
                  // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
                  // if (passwordRegEx_8.test(text)) {
                  this.setState({loginPass: text});
                  // }
                  // }
                  // }
                }}
              />
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'right',
                    marginRight: 20,
                    marginTop: 10,
                  }}>
                  {' '}
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <Button
                children={'LOGIN'}
                onPress={() => {
                  // Actions.tab()
                  if (!emailRegex.test(this.state.loginEmail)) {
                    alert('Enter valid Email Address');
                  } else if (this.state.loginPass.length < 8) {
                    alert('Enter valid password');
                  } else {
                    this.loginApi();
                  }
                }}
              />
            </View>
            <Button
              defaultBtn={{
                borderColor: Colors.buttonGreenColor,
                backgroundColor: 'white',
                borderWidth: 2,
              }}
              defaultBtnText={{
                color: Colors.buttonGreenColor,
                textShadowOffset: {width: 0, height: 0},
                textShadowRadius: 0,
              }}
              children={'SIGN UP'}
              onPress={() => {
                Actions.Register();
              }}
            />
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
})(Login);
