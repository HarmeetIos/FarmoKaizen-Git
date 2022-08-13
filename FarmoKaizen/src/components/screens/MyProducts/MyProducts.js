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
import * as APIClient from '../../../Api/APIClient';
import {Actions} from 'react-native-router-flux';
import {USER_DATA} from '../../../Constants';
import {getAsyncStorage} from '../../../Utilis';

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
  state = {
    proList: [],
    proImages: [],
  };

  componentDidMount() {
    console.log('aaaaaaaaaaa');
    getAsyncStorage(USER_DATA).then(res => {
      console.log(JSON.parse(res));
      APIClient.get('product/readOneProducerById/' + JSON.parse(res).user._id)
        .then(response => {
          // debugger;
          console.log('pro list success **** ' + JSON.stringify(response.data));
          this.setState({
            proList: response.data.products,
            proImages: response.data.productimage,
          });
        })
        .catch(error => {
          if (error != null) {
            console.log(' Error **** sE');

            showAlertWithMessage(error.response.data.error);
          }
        });
    });
  }

  render() {
    return (
      <>
        <Header Title={'My Products'} />
        <View style={styles.mainView}>
          <OrderList
            value2={this.state.proImages}
            value={this.state.proList}></OrderList>
        </View>
      </>
    );
  }
}

export default MyProducts;
