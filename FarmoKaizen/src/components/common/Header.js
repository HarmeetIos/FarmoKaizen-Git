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

const Header = props => {
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
            <Image style={{tintColor: 'white'}} source={Images.iconBack} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerHome: {
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    backgroundColor: Colors.buttonGreenColor,
  },
  titleStyle: {
    fontFamily: Fonts.robotoBold,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rightTitleStyle: {
    fontFamily: Fonts.robotoRegular,
    color: Colors.White,
    fontSize: 14,
  },
});

export {Header};
