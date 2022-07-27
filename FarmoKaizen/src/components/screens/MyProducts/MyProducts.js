import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './MyProductsStyle';
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
  OrderList,
} from '../../common';
import {Actions} from 'react-native-router-flux';

dummy = [
  {id: 1, title: 'hello'},
  {id: 2, title: 'hello'},
  ,
  {id: 3, title: 'hello'},
  ,
  {id: 4, title: 'hello'},
  ,
  {id: 5, title: 'hello'},
  ,
  {id: 6, title: 'hello'},
];

export class MyProducts extends Component {
  render() {
    return (
      <>
        <Header Title={'My Products'} />
        <View style={styles.mainView}>
          <OrderList value={[1, 2, 3, 4, 5, 6, 7]}></OrderList>
        </View>
      </>
    );
  }
}

export default MyProducts;
