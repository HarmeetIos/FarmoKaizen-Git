import {Alert} from 'react-native';

import {CountryListData} from '../CountryListData';
import moment from 'moment';

import EncryptedStorage from 'react-native-encrypted-storage';
export var socket = undefined;
export var userId = 0;
export var testVariable = 0;
export var selectedLanguage = 1;
export var onSendScreen = false;
export var onKycStatusScreen = false;
export var pinLockScreenOpen = false;
export var appVersion = '1.0';
export var stage = false;
var aesKey = 'U2FsdGVkX18s6c8VorQ8aKWr5bA8B2V5kFAwxFJvKKb1nByRKfNHmTZQ3CAfmWl';
var CryptoJS = require('crypto-js');
export var fcmToken = null;
export var walletPin = 0;
export var alertPresent1 = false;
export var inBackground = false;
export var loaderValue = false;
/************************************** Regex ****************************************************/
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegEx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{10,}$/;
export const passwordRegEx_8 =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
export const digitRegEx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
export const FIVE_DECIMAL_REGEX = /^\d*\.?\d{0,5}$/;
export const FIFTEEN_DECIMAL_REGEX = /^\d*\.?\d{0,15}$/;
export const ALPHABET_REGEX = /^[a-zA-Z]*$/;
export const ALPHABET_SPACE_REGEX = /^[a-zA-Z ]*$/;
export const ONLY_ENGLISH_WORK_REGEX =
  /^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%\^&*|']*$/;
export const CHECK_NO_START_WITH_ZERO_REGEX = /^[1-9.][0-9.]*$/;
export const ONLY_NUMBER_REGEX = /^[0-9]*$/;
export const HASHTAG_REGEX = /^(#).+$/;
export const ALPHABET_REGEX_WITH_CHR = /^[a-zA-Z0-9.@-_]*$/;
// /^[0-9\b]+$/

// import NotificationSounds, { playSampleSound } from 'react-native-notification-sounds';

// export const playNotificationSound = () => {
//     NotificationSounds.getNotifications().then(soundsList => {
//         console.log('asas' + JSON.parse(soundsList))
//         playSampleSound(soundsList[Platform.OS == "ios" ? 32 : 7]);
//     });
// }

import NetInfo from '@react-native-community/netinfo';
// import { LanguageManager } from '../Localization';
// import { SOCKET_URL } from './EndPoints';
export async function isNetworkAvailable() {
  const response = await NetInfo.fetch();

  return response.isConnected && response.isInternetReachable;
}

export const showAlertWithMessage = message => {
  Alert.alert(
    'NFTY',
    message,
    [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ],
    {cancelable: false},
  );
};

/************************************** Asyncstorage methods ************************************/

export const saveToAsyncStorage = (key, value) => {
  console.log('SAVIND DATE===>', value);
  return new Promise((resolve, reject) => {
    EncryptedStorage.setItem(key, value)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const checkCheckedVersion = async () => {
  const never_ask = await EncryptedStorage.getItem('never_ask');
  return never_ask;
};

export const shouldCheckUpdate = async () => {
  const date = await EncryptedStorage.getItem('ask_me_later');
  const isAfter = date
    ? moment(date).isAfter(moment().subtract(1, 'days'))
    : true;
  if (isAfter) {
    return false;
  }
  return true;
};

export const removeUser = () => {};
export const getAsyncStorage = key => {
  return new Promise((resolve, reject) => {
    EncryptedStorage.getItem(key)
      .then(res => {
        if (res !== undefined) {
          resolve(res);
        } else {
          resolve(null);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
