import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Fonts, Colors, Images} from '../../theme';
const ScreenBg = props => {
  return (
    <ImageBackground
      style={[styles.ScreenBgStyle, props.custumStyle]}
      source={Images.registrationBackground}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  ScreenBgStyle: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  screenTopStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  screenBottomStyle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export {ScreenBg};
