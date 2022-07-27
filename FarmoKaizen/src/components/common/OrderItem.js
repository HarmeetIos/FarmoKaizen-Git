import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Fonts, Images, Colors} from '../../theme';

const OrderItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btnConatiner}>
      <Image source={props.image} style={styles.imgCont}></Image>
      <View style={styles.textContainer}>
        <Image source={Images.rightArrowIcon} style={styles.arrowImage} />
        <Text style={{fontFamily: Fonts.robotoBold, fontSize: 20}}>
          {props.title}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.robotoRegular,
            fontSize: 20,
            marginTop: 20,
          }}>
          {props.subtitle}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.robotoRegular,
            fontSize: 20,
            marginTop: 20,
          }}>
          {props.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnConatiner: {
    flexDirection: 'row',
    height: 170,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 20,
  },
  imgCont: {
    backgroundColor: 'yellow',
    flex: 0.4,
    borderRadius: 16,
  },
  textContainer: {
    backgroundColor: 'white',
    flex: 0.6,
    marginLeft: 20,
  },
  arrowImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 15,
    width: 15,
  },
});
export {OrderItem};
