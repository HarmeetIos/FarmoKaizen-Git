import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './RegisterStyle';
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
import {registerFormUpdate} from '../../../Redux/Action';

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

class Register extends Component {
  render() {
    return (
      <>
        <Header Title={'Register'} />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <View>
              <InputWithLabels
                placeholder="First Name"
                onChangeText={text => {}}
              />
              <InputWithLabels
                placeholder="Last Name"
                onChangeText={text => {}}
              />
              <InputWithLabels
                placeholder="Are you"
                onChangeText={text => {}}
              />
              <InputWithLabels
                customStyle={{marginBottom: 40}}
                placeholder="Email Address"
                onChangeText={text => {}}
              />
              <Button
                def
                children={'REGISTER'}
                onPress={() => Actions.AddLicense()}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProp = state => {
  const {
    registerEmail,
    registerPassword,
    regLoading,
    fcmToken,
    mobileNo,
    mobileCountryCodeId,
    mobilePhoneCode,
  } = state.registerReducer;

  return {
    registerEmail,
    registerPassword,
    regLoading,
    fcmToken,
    mobileNo,
    mobileCountryCodeId,
    mobilePhoneCode,
  };
};

export default connect(mapStateToProp, {
  registerFormUpdate,
})(Register);
