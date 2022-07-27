import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts, Colors} from '../../theme';

const Button = ({
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
      style={[styles.buttonStyle]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.textStyle, defaultBtnText]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'relative',
    height: 42,
    maxHeight: 42,
    backgroundColor: Colors.buttonGreenColor,
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
});

export {Button};
