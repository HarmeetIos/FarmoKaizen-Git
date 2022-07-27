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
    let header = {
      contentType: 'application/json',
      Authorization: global.access_token,
      appversion: Utils.appVersion,
      devicetoken: Utils.fcmToken,
      // 'testuser': 'harmeet@mailinator.com'
    };
    ApiStore.get(endpoint, {headers: header})
      .then(response => {
        // if (response.status == "204") {
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
            ).then(() => {});
          }
        }
        resolve(response);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        console.log(`In error${error.response.status}`);
        // 503 maintainence
        if (error.response.status == '401') {
          logoutUser(true, '');
          reject(null);
        } else if (error.response.status == '502') {
          alert('Server is not responding.Please try again.');
          reject(null);
        } else if (error.response.status == '503') {
          logoutUser(false, error.response.data.message);
          reject(null);
        } else if (error.response.status == '423') {
          showForcedAlert();
          reject(null);
        } else if (error.response.status == '409') {
          logoutUser(false, error.response.data.message);
          reject(null);
        } else {
          reject(error);
        }
      });
  });
};

export const post = (endpoint, data, UserToken) => {
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
        console.log(error);
        console.log('error message', error.message);
        console.log('error status', error.response.data);
        if (error.response.status == '400') {
          Alert.alert(
            'ERROR!',
            error.response.data.message,
            [
              {
                text: 'OK',
                onPress: () => {},
              },
            ],
            {cancelable: false},
          );

          reject(null);
        } else if (error.response.status == '401') {
          logoutUser(true, '');
          reject(null);
        } else if (error.response.status == '502') {
          Alert.alert(
            'NFTY',
            'Server is not responding.Please try again.',
            [
              {
                text: 'OK',
                onPress: () => {},
              },
            ],
            {cancelable: false},
          );

          reject(null);
        } else if (error.response.status == '503') {
          logoutUser(false, error.response.data.message);
          reject(null);
        } else if (error.response.status == '423') {
          showForcedAlert();
          console.log('in 432');
          reject(null);
        } else if (error.response.status == '409') {
          logoutUser(false, error.response.data.message);
          reject(null);
        } else {
          reject(error);
        }
        // else if (error.response.status == "422") {
        //     showLoggedInAlert()
        //     reject(null)
        // }
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
        if (error.response.status == '401') {
          logoutUser(true, '');
          reject(null);
        } else if (error.response.status == '502') {
          Alert.alert(
            'FarmoKaizen',
            'Server is not responding.Please try again.',
            [
              {
                text: 'OK',
                onPress: () => {},
              },
            ],
            {cancelable: false},
          );

          reject(null);
        } else if (error.response.status == '503') {
          logoutUser(false, error.response.data.message);
          reject(null);
        } else if (error.response.status == '423') {
          showForcedAlert();
          reject(null);
        } else if (error.response.status == '409') {
          logoutUser(false, error.response.data.message);
          reject(null);
        } else {
          reject(error);
        }
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

const logoutUser = (session, message) => {
  if (!this.alertPresent) {
    this.alertPresent = true;

    Alert.alert(
      global.appName,
      session == true ? 'Session expired' : message,
      [
        {
          text: 'OK',
          onPress: () => {
            this.alertPresent = false;
            console.log('qwqwqwqwqwqwqw');
            if (session == true) {
              Actions.Login();
              logoutAndReset();
            } else {
              Utils.getAsyncStorage(Constants.USER_DEVICE_TOK).then(fcmm => {
                EncryptedStorage.clear().then(res => {
                  Utils.saveToAsyncStorage(
                    Constants.USER_DEVICE_TOK,
                    fcmm,
                  ).then(res => {});
                  Actions.Login();
                  logoutAndReset();
                  // Utils.socket.emit("logout", { "userId": Utils.userId })
                });
              });
            }
          },
        },
      ],
      {cancelable: false},
    );
  }
};
