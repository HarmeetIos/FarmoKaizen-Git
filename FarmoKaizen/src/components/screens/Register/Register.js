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
import {registerFormUpdate, requestRegisterUser} from '../../../Redux/Action';
import RNPickerSelect from 'react-native-picker-select';
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
import {ApiStore} from '../../../Api';
import * as Utils from '../../../Utilis';
class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    areYou: '',
    emailAdd: '',
    phnNo: '',
    pass: '',
  };
  registerUserApi() {
    let param = {
      name: this.state.firstName + ' ' + this.state.lastName,
      email: this.state.emailAdd,
      password: this.state.pass,
      role: this.state.areYou.toLowerCase(),
      phone: this.state.phnNo,
      date_created: Date.now(),
    };

    this.props
      .requestRegisterUser(param)
      .then(res => {
        Utils.showAlertWithMessage('Registered Successfully');
        Actions.pop();
      })
      .catch(err => {});
  }

  render() {
    return (
      <>
        <Header Title={'Register'} />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <View>
              <InputWithLabels
                placeholder="First Name"
                value={this.state.firstName}
                onChangeText={text => {
                  this.setState({firstName: text});
                }}
              />
              <InputWithLabels
                placeholder="Last Name"
                value={this.state.lastName}
                onChangeText={text => {
                  this.setState({lastName: text});
                }}
              />
              <InputWithLabels
                placeholder="Are you(eg. producer, consumer, driver)"
                value={this.state.areYou}
                onChangeText={text => {
                  this.setState({areYou: text});
                }}
              />
              <InputWithLabels
                placeholder="Email Address"
                value={this.state.emailAdd}
                onChangeText={text => {
                  this.setState({emailAdd: text});
                }}
              />
              <InputWithLabels
                placeholder="Password"
                value={this.state.pass}
                onChangeText={text => {
                  this.setState({pass: text});
                }}
              />
              <InputWithLabels
                customStyle={{marginBottom: 40}}
                placeholder="Phone No"
                value={this.state.phnNo}
                onChangeText={text => {
                  this.setState({phnNo: text});
                }}
              />
              <Button
                def
                children={'REGISTER'}
                onPress={() => {
                  if (this.state.firstName.length == 0) {
                    alert('Enter first name');
                  } else if (this.state.lastName.length == 0) {
                    alert('Enter last name');
                  } else if (this.state.areYou.length == 0) {
                    alert('Are you?');
                  } else if (this.state.emailAdd.length == 0) {
                    alert('Enter email');
                  } else if (!Utils.passwordRegEx_8.test(this.state.pass)) {
                    Utils.showAlertWithMessage('Enter valid password');
                    return;
                  } else if (this.state.phnNo.length != 10) {
                    alert('Enter valid mobile no with 10 digits');
                  } else {
                    this.registerUserApi();
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
  requestRegisterUser,
})(Register);
