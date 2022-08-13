import {encryptData} from '../Utilis';
import {ANDROID_APP_LINK, BASE_URL, IOS_APP_LINK} from '../EndPoints';
import {ApiStore} from './ApiStore';

import EncryptedStorage from 'react-native-encrypted-storage';
import {Alert, Linking, Platform} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as Utils from '../Utilis';
import {logoutAndReset} from '../Redux/Action';
import {saveToAsyncStorage} from '../Utilis';
import * as Constants from '../Constants';

export const get = endpoint => {
  return new Promise((resolve, reject) => {
    console.log('url', `${BASE_URL}${endpoint}`);
    let header = {
      contentType: 'application/json',
      Authorization: global.access_token,
    };
    ApiStore.get(endpoint, {headers: header})
      .then(response => {
        // if (response.status == "204") {
        //     showUpdateAlert()
        // }
        if (response.data != undefined) {
        }
        resolve(response);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        console.log(`In error${error.response.status}`);
        // 503 maintainence

        reject(error);
      });
  });
};

export const post = (endpoint, data, UserToken) => {
  return new Promise((resolve, reject) => {
    console.log('url', `${BASE_URL}${endpoint}`);
    console.log('params', JSON.stringify(data));
    let header = {};

    header = {
      'Content-Type': 'application/json',
    };

    console.log('header', header);
    ApiStore.post(endpoint, data, {
      headers: header,
    })
      .then(response => {
        // if (response.status == "422") {
        //     showUpdateAlert()
        // }
        console.log('RESPONSE DATA', response);
        if (response.data != undefined) {
        }

        resolve(response);
      })
      .catch(error => {
        // debugger;
        reject(error);
        console.log(error);
        console.log('error message', error.message);
        console.log('error status', error.response.data.error);
      });
  });
};

export const put = (endpoint, data, UserToken) => {
  if (!global.isConnected || !global.isInternetReachable) {
    if (!this.alertPresent) {
      this.alertPresent = true;

      Alert.alert(
        '',
        'No internet connection',
        [
          {
            text: 'OK',
            onPress: () => {
              this.alertPresent = false;
            },
          },
        ],
        {cancelable: false},
      );
    }
    return new Promise((resolve, reject) => {
      reject(null);
    });
  }
  return new Promise((resolve, reject) => {
    console.log('UserToken', global.access_token);
    console.log('url', `${BASE_URL}${endpoint}`);
    console.log('params', JSON.stringify(data));
    let encrypted = encryptData(data);
    // let newParam = { 'data': encrypted }
    let header = {};

    // if (endpoint == LOGOUT_USER_API_POST) {

    //     header = {
    //         contentType: "application/json",
    //         "Authorization": UserToken,
    //         "appversion": Utils.appVersion,
    //         "devicetoken": Utils.fcmToken
    //         // 'testuser': 'harmeet@mailinator.com'

    //     }
    // } else {

    header = {
      'Content-Type': 'application/json',
      Authorization: global.access_token,
      appversion: Utils.appVersion,
    };
    // }

    ApiStore.put(endpoint, data, {
      headers: header,
    })
      .then(response => {
        // if (response.status == "422") {
        //     showUpdateAlert()
        // }
        if (response.data != undefined) {
          if (
            response.data.access_token != undefined &&
            response.data.access_token != null
          ) {
            global.access_token = response.data.access_token;
            saveToAsyncStorage(
              Constants.ACCESS_TOKEN,
              response.data.access_token,
            ).then(res => {});
          }
        }

        resolve(response);
      })
      .catch(error => {
        // debugger;
        console.log(JSON.stringify(error));

        reject(error);

        // else if (error.response.status == "422") {
        //     showLoggedInAlert()
        //     reject(null)
        // }
      });
  });
};

let showLoggedInAlert = () => {
  Utils.getAsyncStorage(Constants.USER_DEVICE_TOK).then(fcm => {
    EncryptedStorage.clear().then(res => {
      Utils.saveToAsyncStorage(
        Constants.USER_LANG,
        Utils.selectedLanguage.toString(),
      ).then(res => {
        Utils.saveToAsyncStorage(Constants.USER_DEVICE_TOK, fcm).then(ss => {});
        Actions.Login();
        // logoutAndReset()
      });
    });
  });
  if (!this.alertPresent) {
    this.alertPresent = true;
    Alert.alert(
      'FarmoKaizen',
      'You are logged in new device',
      [
        {
          text: 'OK',
          onPress: () => {
            this.alertPresent = false;
          },
        },
      ],
      {cancelable: false},
    );
  }
};

const showForcedAlert = () => {
  console.log('++++++++++++hello+++++++++++++');
  console.log('++++++++++++hello+++++++++++++' + Utils.alertPresent1);
  // if (!Utils.alertPresent1) {
  // Utils.alertPresent1 = true;
  console.log('++++++++++++hello1111+++++++++++++');
  Alert.alert(
    global.appName,
    'New version is available',
    [
      {
        text: 'Update',
        onPress: () => {
          // Utils.alertPresent1 = false;
          if (Platform.OS == 'ios') {
            Linking.openURL(IOS_APP_LINK);
          } else {
            Linking.openURL(ANDROID_APP_LINK);
          }
        },
      },
    ],
    {cancelable: false},
  );
  // }
};
