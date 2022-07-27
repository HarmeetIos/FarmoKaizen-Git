import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './AddProductStyle';
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

export class AddProduct extends Component {
  render() {
    return (
      <>
        <Header Title={'Add Product Details'} />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <View>
              <InputWithLabels
                placeholder="Product Name"
                onChangeText={text => {}}
              />
              <InputWithLabels
                multiline={true}
                customStyle={{height: 60}}
                placeholder="Description"
                onChangeText={text => {}}
              />
              <InputWithLabels
                customStyle={{marginTop: 20}}
                placeholder="Price"
                onChangeText={text => {}}
              />
              <InputWithLabels
                placeholder="Weight or Quality"
                onChangeText={text => {}}
              />
              <Text style={[styles.textStyle, {marginTop: 20}]}>
                License Image
              </Text>
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

export default AddProduct;
