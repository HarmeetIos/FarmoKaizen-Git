import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Fonts, Colors, Images} from '../../theme';

const DocumentUploadButton = ({
  onPress,
  children,
  defaultBtn,
  defaultBtnText,
  disabled,
  accessibilityLabel,
  testID,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      accessible
      accessibilityLabel={accessibilityLabel}
      style={[styles.buttonStyle, defaultBtn]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.textStyle, defaultBtnText]}>{children}</Text>
      <Image style={styles.imageStyle} source={Images.uploadIcon}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'relative',
    height: 200,
    maxHeight: 200,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'grey',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 5,
    zIndex: 2,
    margin: 25,
  },
  textStyle: {
    // fontFamily: Fonts.robotoMedium,
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3,
    textShadowColor: '#000000',
    elevation: 1,
    zIndex: 999999,
  },
  imageStyle: {
    tintColor: 'grey',
    alignSelf: 'center',
  },
});

export {DocumentUploadButton};
