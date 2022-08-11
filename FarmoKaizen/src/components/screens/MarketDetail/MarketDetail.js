import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './MarketDetailStyle';
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
  TabIcon,
  Header,
  FavouriteList,
} from '../../common';
import {Actions} from 'react-native-router-flux';

const temp = [
  {
    title: 'Grapes',
    price: '16 per/kg',
    subtitle: 'Fresh green grapes',
    rating: 4,
  },
  {
    title: 'Oranges',
    price: '11 per/kg',
    subtitle: 'Fresh Oranges',
    rating: 4.5,
  },
  {
    title: 'Oninos',
    price: '11 per/kg',
    subtitle: 'White Oninios',
    rating: 3.5,
  },
];
export class MarketDetail extends Component {
  render() {
    return (
      <>
        <Header Title={'Details'} />
        <View style={styles.mainView}>
          <FavouriteList value={temp}></FavouriteList>
        </View>
      </>
    );
  }
}

export default MarketDetail;
