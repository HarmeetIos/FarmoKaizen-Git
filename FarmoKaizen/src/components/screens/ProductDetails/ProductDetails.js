import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './ProductDetailsStyle';
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

import {getAsyncStorage, showAlertWithMessage} from '../../../Utilis';
import {USER_DATA} from '../../../Constants';
import {ApiStore} from '../../../Api';
import {ADD_PRODUCT_POST} from '../../../EndPoints';
import * as APIClient from '../../../Api/APIClient';

import {Colors, Fonts, Images} from '../../../theme';
import {
  Button,
  Input,
  LoaderView,
  ScreenBg,
  InputWithLabels,
  OrderListCart,
  TabIcon,
  HeaderHome,
} from '../../common';
import {Actions} from 'react-native-router-flux';

export class ProductDetails extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <>
          <TabIcon
            focused={focused}
            title={'CART'}
            ImgSize={{width: 20, height: 20}}
            activeImg={Images.cartIcon}
            defaultImg={Images.cartIcon}
          />
        </>
      ),
      tabBarOptions: {
        style: {
          height: 60,
        },
      },
    };
  };

  state = {
    quantity: 1,
  };

  componentDidMount() {
    // console.log(this.props.proImage);
  }

  addToCartClicked() {
    if (this.state.quantity.length == 0 || this.state.quantity == 0) {
      alert('Enter Product quantity');
    } else {
      getAsyncStorage(USER_DATA).then(res => {
        let parm = {
          consumerid: JSON.parse(res).user._id,
          productid: this.props.proDetails._id,
          quantity: this.state.quantity,
          weight: this.state.quantity,
          cost: this.props.proDetails.price,
        };
        APIClient.post('cart/create', parm)
          .then(response => {
            // debugger;
            console.log(
              'add to cart success **** ' + JSON.stringify(response.data),
            );
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

  render() {
    return (
      <>
        <HeaderHome Title={'Details'} />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{marginTop: 20}}>
            <Image
              source={{uri: this.props.proImage}}
              style={{height: 300, width: 400, backgroundColor: 'red'}}></Image>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 30,
                fontFamily: Fonts.robotoBold,
                fontSize: 20,
              }}>
              {this.props.proDetails.name}
            </Text>
            <Text
              style={{
                margin: 10,
                marginLeft: 30,
                fontFamily: Fonts.robotoRegular,
                fontSize: 20,
              }}>
              {this.props.proDetails.description}
            </Text>
            <Text
              style={{
                margin: 10,
                marginLeft: 30,
                fontFamily: Fonts.robotoRegular,
                fontSize: 20,
              }}>
              {'$ ' +
                this.props.proDetails.price +
                '/' +
                this.props.proDetails.quantity +
                'Kg'}
            </Text>
            <InputWithLabels placeholder="Quantity"></InputWithLabels>
            <Button
              onPress={() => {
                this.addToCartClicked();
              }}
              children={'Add to cart'}></Button>
            <Button children={'Add to Favourite'}></Button>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }
}

export default ProductDetails;
