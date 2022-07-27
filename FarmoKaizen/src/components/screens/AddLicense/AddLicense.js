import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './AddLicenseStyle';
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
  DocumentUploadButton,
} from '../../common';
import {Actions} from 'react-native-router-flux';

export class AddLicense extends Component {
  render() {
    return (
      <>
        <Header Title={'Add License Details'} />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <View>
              <InputWithLabels
                placeholder="License Number"
                onChangeText={text => {}}
              />
              <InputWithLabels
                placeholder="Licesne Expiry Date"
                onChangeText={text => {}}
              />
              <Text style={styles.textStyle}>License Image</Text>
              <DocumentUploadButton></DocumentUploadButton>
              <Button
                def
                children={'Submit'}
                onPress={() => Actions.AddPayment()}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }
}

export default AddLicense;
