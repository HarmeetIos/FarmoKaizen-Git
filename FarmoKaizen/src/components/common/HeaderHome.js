import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Fonts, Colors, Images} from '../../theme';
import {Actions} from 'react-native-router-flux';

const HeaderHome = props => {
  return (
    <>
      <SafeAreaView
        style={{backgroundColor: 'rgb(247,247,247) '}}></SafeAreaView>
      <View style={styles.headerHomeS}>
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
            <Image style={{tintColor: 'black'}} source={Images.iconBack} />
          </TouchableOpacity>
        </View>

        <View
          style={[
            {
              width: props.rightTitle != undefined ? 100 : 26,
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
                  {textAlign: 'center', fontSize: 12},
                ]}>
                {props.rightTitle}
              </Text>
            ) : (
              <Image
                style={{height: 20, width: 20, resizeMode: 'contain'}}
                source={props.rightIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerHomeS: {
    flexDirection: 'row',
    backgroundColor: 'rgb(247,247,247)',
    height: 64,
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
  },
  titleStyle: {
    fontFamily: Fonts.robotoBold,
    color: Colors.darGrey,
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightTitleStyle: {
    fontFamily: Fonts.robotoRegular,
    color: Colors.darGrey,
    fontSize: 14,
  },
});

export {HeaderHome};
