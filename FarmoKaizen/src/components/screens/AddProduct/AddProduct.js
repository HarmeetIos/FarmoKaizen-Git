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
import {launchImageLibrary} from 'react-native-image-picker';
import {getAsyncStorage, showAlertWithMessage} from '../../../Utilis';
import {USER_DATA} from '../../../Constants';
import {ApiStore} from '../../../Api';
import {ADD_PRODUCT_POST} from '../../../EndPoints';
import * as APIClient from '../../../Api/APIClient';
export class AddProduct extends Component {
  state = {
    proName: '',
    proDes: '',
    proPrice: '',
    proQua: '',
    proName: '',
    filePath: '',
    docData: undefined,
  };

  submitButtonClicked() {
    if (this.state.proName.length == 0) {
      alert('Enter Product Name');
    } else if (this.state.proDes.length == 0) {
      alert('Enter Product Description');
    } else if (this.state.proPrice.length == 0) {
      alert('Enter Product Price');
    } else if (this.state.proQua.length == 0) {
      alert('Enter Product Quantity');
    } else if (this.state.filePath.length == 0) {
      alert('Select Product Image');
    } else {
      getAsyncStorage(USER_DATA).then(res => {
        let parm = {
          producerid: JSON.parse(res).user._id,
          name: this.state.proName,
          description: this.state.proDes,
          price: this.state.proPrice,
          quantity: this.state.proQua,
          weight: this.state.proQua,
          readytosell: 'Y',
          images: [this.state.filePath],
        };

        APIClient.post(ADD_PRODUCT_POST, parm)
          .then(response => {
            // debugger;
            console.log('pro success **** ' + JSON.stringify(response.data));
            alert('Product added successfully!');
            Actions.pop();
          })
          .catch(error => {
            if (error != null) {
              console.log('Login Error **** sE', error);

              showAlertWithMessage(error.response.data.error);
            }
          });
      });
    }
  }

  openImagePicker() {
    let options = {
      title: 'Select Image',
      allowsEditing: false,
      quality: 0.5,
      mediaType: 'photo',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (Object.keys(response).includes('error')) {
        //  alert(response.error + `. ${LanguageManager.KycScreen.enablePermissions}`)

        Alert.alert(
          'FarmoKaizen',
          response.error,
          [
            {
              text: 'OK',
              onPress: () => {},
            },
          ],
          {cancelable: false},
        );
      } else {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let assets = response.assets;

          // this.state.filePath = response.uri;
          // this.state.docData = response.data;
          console.log(assets[0].filePath);
          this.setState({filePath: assets[0].uri, docData: response.data});
        }
      }
    });
  }

  render() {
    return (
      <>
        <Header Title={'Add Product Details'} />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <View>
              <InputWithLabels
                placeholder="Product Name"
                value={this.state.proName}
                onChangeText={text => {
                  this.setState({proName: text});
                }}
              />
              <InputWithLabels
                multiline={true}
                customStyle={{height: 60}}
                placeholder="Description"
                value={this.state.proDes}
                onChangeText={text => {
                  this.setState({proDes: text});
                }}
              />
              <InputWithLabels
                customStyle={{marginTop: 20}}
                placeholder="Price"
                value={this.state.proPrice}
                onChangeText={text => {
                  this.setState({proPrice: text});
                }}
              />
              <InputWithLabels
                placeholder="Weight or Quality"
                value={this.state.proQua}
                onChangeText={text => {
                  this.setState({proQua: text});
                }}
              />
              <Text style={[styles.textStyle, {marginTop: 20}]}>
                Product Image
              </Text>

              <DocumentUploadButton
                imageSource={{
                  uri: this.state.filePath,
                }}
                onPress={() => {
                  this.openImagePicker();
                }}></DocumentUploadButton>
              <Button
                def
                children={'Submit'}
                onPress={() => {
                  this.submitButtonClicked();
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }
}

export default AddProduct;
