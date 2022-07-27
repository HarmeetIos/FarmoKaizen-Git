import React from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../theme';

const InputWithLabels = props => {
  return (
    <View style={({flexDirection: 'column'}, props.customStyle)}>
      <Text style={styles.textStyle}>{props.placeholder}</Text>
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
        style={[styles.inputStyle, props.customStyleInput]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '85%',
    height: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderColor: 'grey',
    borderWidth: 1.5,
    borderRadius: 4,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
  textStyle: {
    marginTop: 20,
    alignSelf: 'center',
    width: '85%',
    marginBottom: 10,
    fontFamily: Fonts.robotoMedium,
  },
});

export {InputWithLabels};
