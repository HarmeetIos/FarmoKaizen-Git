import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return (
    <TextInput
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      autoCorrect={false}
      placeholderTextColor={props.placeholderTextColor}
      editable={props.editable}
      multiline={props.multiline}
      style={[styles.inputStyle, props.customStyle]}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '85%',
    height: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 1.5,
    borderRadius: 4,
    paddingLeft: 10,
    textAlignVertical: 'top'
  },
});

export { Input };
