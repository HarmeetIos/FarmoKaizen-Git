import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './ProfileStyle';
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
  HeaderHome,
  InputWithLabels,
  TabIcon,
} from '../../common';
import {Actions} from 'react-native-router-flux';
const settingItem = [
  {
    title: 'My Delivered Orders',
    image: Images.shoppingBagIcon,
  },
  {
    title: 'Manage Payments',
    image: Images.piggyBankIcon,
  },
  {
    title: 'My Orders',
    image: Images.myOrdersIcon,
  },
  {
    title: 'Un Assigned Orders',
    image: Images.unOrderIcon,
  },
  {
    title: 'Setting',
    image: Images.settingsIcon,
  },
  {
    title: 'Help',
    image: Images.questionIcon,
  },
  {
    title: 'Logout',
    image: Images.logoutIcon,
  },
];
export class Profile extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <>
          <TabIcon
            focused={focused}
            title={'PROFILE'}
            ImgSize={{width: 20, height: 20}}
            activeImg={Images.profileIcon}
            defaultImg={Images.profileIcon}
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
        <HeaderHome Title={''} hideLeftBtn={{display: 'none'}} />
        <View style={styles.mainView}>
          <FlatList
            bounces={false}
            data={settingItem}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 60,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    padding: 15,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      height: 25,
                      width: 25,
                    }}></Image>
                  <Text
                    style={{
                      fontFamily: Fonts.robotoMedium,
                      marginLeft: 20,
                      fontSize: 20,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
            ListHeaderComponent={() => {
              return (
                <View
                  style={{
                    height: 200,
                    backgroundColor: Colors.buttonGreenColor,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                      backgroundColor: 'red',
                    }}></Image>
                  <Text
                    style={{
                      fontFamily: Fonts.robotoBold,
                      color: 'white',
                      fontSize: 18,
                      marginTop: 10,
                    }}>
                    {'John deo'}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.robotoBold,
                      color: 'white',
                      fontSize: 18,
                      marginTop: 10,
                    }}>
                    {'Joh@gmail.com'}
                  </Text>
                </View>
              );
            }}></FlatList>
        </View>
      </>
    );
  }
}

export default Profile;
