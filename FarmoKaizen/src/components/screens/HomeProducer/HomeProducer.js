import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './HomeProducerStyle';
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
  FlatList,
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

export class HomeProducer extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <>
          <TabIcon
            focused={focused}
            title={'HOME'}
            ImgSize={{width: 20, height: 20}}
            activeImg={Images.homeIcon}
            defaultImg={Images.homeIcon}
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
        <View style={styles.mainView}>
          {/* <KeyboardAwareScrollView style={{marginTop: 20}}> */}

          <Button
            children={'Add product'}
            onPress={() => {
              Actions.AddProduct();
            }}
          />
          {/*
            <Button
              children={'Add pro'}
              onPress={() => {
                Actions.MyProducts();
              }}
            />
            <Button children={'Add pro'} onPress={() => {}} />
            <Button children={'Add pro'} onPress={() => {}} /> */}
          {/* </KeyboardAwareScrollView> */}
        </View>
      </>
    );
  }
}

export default HomeProducer;
