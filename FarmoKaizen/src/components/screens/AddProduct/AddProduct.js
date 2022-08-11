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
import ImagePicker from 'react-native-image-picker';
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

    ImagePicker.launchImageLibrary(options, response => {
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
          if (response.fileSize < 5242880) {
            this.state.filePath = response.uri;
            this.state.docData = response.data;
            this.setState({});
          } else {
            // alert(LanguageManager.KycScreen.largeImageAlert)

            Alert.alert(
              'FarmoKaizen',
              'Image is larger',
              [
                {
                  text: 'OK',
                  onPress: () => {},
                },
              ],
              {cancelable: false},
            );
          }
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
                Product Image
              </Text>
              <DocumentUploadButton
                onPress={() => {
                  this.openImagePicker();
                }}></DocumentUploadButton>
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
