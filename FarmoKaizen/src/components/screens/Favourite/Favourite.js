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
} from '../../common';
import {Actions} from 'react-native-router-flux';

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
        <HeaderHome Title={'FarmoKaizen'} hideLeftBtn={{display: 'none'}} />
        <View>
          <Text>Favourite</Text>
        </View>
      </>
    );
  }
}

export default Favourite;
