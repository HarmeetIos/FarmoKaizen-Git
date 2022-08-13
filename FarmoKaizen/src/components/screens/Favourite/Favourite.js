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

import * as APIClient from '../../../Api/APIClient';
import {Actions} from 'react-native-router-flux';
import {USER_DATA} from '../../../Constants';
import {getAsyncStorage, showAlertWithMessage} from '../../../Utilis';

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

  state = {
    listItem: [],
    imagesArray: [],
  };

  componentDidMount() {
    console.log('aaaaaaaaaaa');
    getAsyncStorage(USER_DATA).then(res => {
      console.log(JSON.parse(res));
      APIClient.get('product/read/')
        .then(response => {
          // debugger;
          console.log('pro list success **** ' + JSON.stringify(response.data));
          this.setState({
            listItem: response.data.products,
            imagesArray: response.data.productimages,
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
        <HeaderHome Title={'Favourite'} hideLeftBtn={{display: 'none'}} />
        <View style={styles.mainView}>
          <FavouriteList
            itemClickedAt={index => {
              Actions.ProductDetails({
                proDetails: this.state.listItem[index],
                proImage: this.state.imagesArray[index].images[0],
              });
            }}
            value2={this.state.imagesArray}
            value={this.state.listItem}></FavouriteList>
        </View>
      </>
    );
  }
}

export default Favourite;
