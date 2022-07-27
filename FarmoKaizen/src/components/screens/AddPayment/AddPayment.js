import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './AddPaymentStyle';
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
import {Actions} from 'react-native-router-flux';
import {Colors, Fonts, Images} from '../../../theme';
import {
  Button,
  Input,
  LoaderView,
  ScreenBg,
  InputWithLabels,
  Header,
} from '../../common';

export class AddPayment extends Component {
  render() {
    return (
      <>
        <Header Title={'Add Payment Details'} />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <Image
              source={Images.accountIcon}
              style={{
                alignSelf: 'center',
                marginTop: 50,
                height: 100,
                width: 100,
              }}
            />
            <View>
              <InputWithLabels
                placeholder="Account Number"
                onChangeText={text => {}}
              />
              <InputWithLabels
                placeholder="Transit Number"
                onChangeText={text => {}}
              />
              <InputWithLabels
                placeholder="Institution Number"
                onChangeText={text => {}}
              />

              <Button def children={'Submit'} />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }
}

export default AddPayment;
