import React from 'react';
import {
  TextInput,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Fonts, Colors, Images} from '../../theme';

const InputWithLabels = ({
  placeholderTextColor,
  hideLabelLeft,
  hideLabelRight,
  labelLeft,
  labelRight,
  customInputStyle,
  value,
  onChangeText,
  placeHolder,
  secureTextEntry,
  keyboardType,
  inputCutsomStyle,
  onPressRight,
  onPressLeft,
  editable,
  textStylePhoneCode,
  countryFlag,
}) => {
  const focus = false;
  const {inputStyle, inputButtonBlock, containerStyle} = styles;

  console.log('Country Flag', countryFlag);
  return (
    <View style={[containerStyle, inputCutsomStyle]}>
      <View style={[inputButtonBlock, {borderColor: focus ? 'red' : 'white'}]}>
        <View style={[styles.labelLeftStyle, hideLabelLeft]}>
          <TouchableOpacity onPress={onPressLeft}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {countryFlag != null && (
                <Image
                  style={{height: 15, width: 15, marginLeft: 5}}
                  source={{uri: countryFlag}}
                />
              )}
              {countryFlag == null && (
                <Text style={[styles.labelLeftTextStyle, textStylePhoneCode]}>
                  {labelLeft}
                </Text>
              )}
              <Image
                style={{
                  height: 10,
                  width: 10,
                  tintColor: 'black',
                  marginHorizontal: 5,
                }}
                source={Images.down_arrow}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Text style={{marginLeft: 5}}>{labelLeft}</Text>
          <TextInput
            secureTextEntry={secureTextEntry}
            value={value}
            placeholder={placeHolder}
            onChangeText={onChangeText}
            style={[inputStyle, customInputStyle, {flex: 1}]}
            autoCorrect={false}
            keyboardType={keyboardType}
            placeholderTextColor={placeholderTextColor}
            editable={editable}
            keyboardAppearance="dark"
          />
        </View>
        <View style={[styles.labelRightStyle, hideLabelRight]}>
          <TouchableOpacity onPress={onPressRight}>
            <Text style={styles.labelRightTextStyle}>{labelRight}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 0,
    marginTop: 18,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: 'grey',
    borderRadius: 5,
  },
  inputButtonBlock: {
    position: 'relative',
    flexDirection: 'row',
  },
  inputStyle: {
    color: Colors.inputColor,
    padding: 10,
    fontSize: 14,
    backgroundColor: Colors.White,
    height: 40,
    display: 'flex',
    flex: 1,
    fontFamily: Fonts.nexaBold,
  },
  counterBtns: {
    position: 'absolute',
    right: 8,
    top: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelLeftStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.buttonBg,
    borderRightColor: 'grey',
    borderRightWidth: 1.5,
    padding: 3,
    margin: 3,
  },
  labelLeftTextStyle: {
    fontSize: 14,
    fontFamily: Fonts.robotoRegular,
    color: Colors.darGrey,
    paddingHorizontal: 15,
  },
  labelRightStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.inputLabelBgColor,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    paddingHorizontal: 15,
  },
  labelRightTextStyle: {
    fontSize: 14,
    fontFamily: Fonts.nexaLight,
    color: Colors.White,
  },
});

export {InputWithLabels};
