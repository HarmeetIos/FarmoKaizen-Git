import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Fonts, Colors, Images} from '../../theme/';
import {Actions} from 'react-native-router-flux';

const HeaderHome = props => {
  return (
    <>
      <SafeAreaView
        style={{backgroundColor: Colors.buttonGreenColor}}></SafeAreaView>
      <View style={styles.headerHome}>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            left: 10,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.titleStyle, {marginTop: 15}]}>
            {props.Title}
          </Text>
        </View>
        <View style={{width: 26}}>
          <TouchableOpacity
            style={props.hideLeftBtn}
            onPress={() => {
              Actions.pop();
            }}>
            <Image style={[styles.imgStyle]} source={Images.iconBack} />
          </TouchableOpacity>
        </View>

        <View
          style={[
            {
              width: props.rightTitle != undefined ? 100 : 26,
              alignItems: 'flex-end',
              borderColor: 'white',
              borderWidth: props.rightTitle != undefined ? 1 : 0,
              borderRadius: 12,
              minHeight: 25,
              justifyContent: 'center',
              alignItems: 'center',
            },
            props.rightView,
          ]}>
          <TouchableOpacity
            style={[
              props.hideRightBtn,
              {justifyContent: 'center', alignItems: 'center'},
            ]}
            onPress={props.addLink}>
            {props.rightTitle != undefined ? (
              <Text
                style={[
                  styles.rightTitleStyle,
                  props.rightTextColor,
                  {
                    textAlign: 'center',
                  },
                ]}>
                {props.rightTitle}
              </Text>
            ) : (
              <Image style={[styles.imgStyle]} source={Images.icon_cancel} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerHome: {
    flexDirection: 'row',
    backgroundColor: Colors.buttonGreenColor,
    height: 64,
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  titleStyle: {
    fontFamily: Fonts.robotoBold,

    color: 'white',
    fontSize: 18,
  },
  rightTitleStyle: {
    fontFamily: Fonts.robotoRegular,
    color: 'white',
    fontSize: 14,
  },
});

export {HeaderHome};
