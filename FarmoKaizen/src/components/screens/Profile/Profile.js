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
import EncryptedStorage from 'react-native-encrypted-storage';
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
import {getAsyncStorage, saveToAsyncStorage} from '../../../Utilis';
import {USER_DATA} from '../../../Constants';
const settingItemP = [
  {
    title: 'My Products',
    image: Images.shoppingBagIcon,
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

const settingItemD = [
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

const settingItemC = [
  {
    title: 'Manage Payments',
    image: Images.piggyBankIcon,
  },
  {
    title: 'My Orders',
    image: Images.myOrdersIcon,
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

  logoutUser() {
    Alert.alert(
      'FarmoKaizen',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => {
            EncryptedStorage.clear().then(res => {
              Actions.Login();
            });
          },
        },
        {
          text: 'NO',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  state = {
    userInfo: undefined,
    listItems: [],
  };

  componentDidMount() {
    getAsyncStorage(USER_DATA).then(userData => {
      this.setState({userInfo: JSON.parse(userData)});
      if (JSON.parse(userData).user.role == 'producer') {
        this.setState({listItems: settingItemP});
      } else if (JSON.parse(userData).user.role == 'consumer') {
        this.setState({listItems: settingItemC});
      } else {
        this.setState({listItems: settingItemD});
      }
    });
  }

  render() {
    return (
      <>
        <HeaderHome Title={''} hideLeftBtn={{display: 'none'}} />
        <View style={styles.mainView}>
          <FlatList
            bounces={false}
            data={this.state.listItems}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.listItems == settingItemP) {
                      if (index == 0) {
                        Actions.MyProducts();
                      } else {
                        this.logoutUser();
                      }
                    } else if (this.state.listItems == settingItemC) {
                      if (index == 0) {
                        Actions.AddPayment();
                      } else {
                        this.logoutUser();
                      }
                    }
                  }}
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
                    source={Images.userPlaceholderImage}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                    }}></Image>
                  <Text
                    style={{
                      fontFamily: Fonts.robotoBold,
                      color: 'white',
                      fontSize: 18,
                      marginTop: 10,
                    }}>
                    {this.state.userInfo != undefined
                      ? this.state.userInfo.user.name
                      : ''}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.robotoBold,
                      color: 'white',
                      fontSize: 18,
                      marginTop: 10,
                    }}>
                    {this.state.userInfo != undefined
                      ? this.state.userInfo.user.email
                      : ''}
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
