import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './FavouriteStyle';
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
  HeaderHome,
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
export class Favourite extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <>
          <TabIcon
            focused={focused}
            title={'FAVOURITE'}
            ImgSize={{width: 20, height: 20}}
            activeImg={Images.favIcon}
            defaultImg={Images.favIcon}
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
        <HeaderHome Title={'Favourite'} hideLeftBtn={{display: 'none'}} />
        <View style={styles.mainView}>
          <FavouriteList value={temp}></FavouriteList>
        </View>
      </>
    );
  }
}

export default Favourite;
