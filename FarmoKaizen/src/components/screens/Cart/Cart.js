import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './CartStyle';
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

import {Colors, Fonts, Images} from '../../../theme';
import {
  Button,
  Input,
  LoaderView,
  ScreenBg,
  InputWithLabels,
  OrderList,
  TabIcon,
  HeaderHome,
} from '../../common';
import {Actions} from 'react-native-router-flux';

export class Cart extends Component {
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

  render() {
    return (
      <>
        <HeaderHome Title={'Cart'} hideLeftBtn={{display: 'none'}} />
        <View style={styles.mainView}>
          <OrderList value={[1, 2, 3, 4, 5, 6, 7]}></OrderList>
        </View>
      </>
    );
  }
}

export default Cart;
