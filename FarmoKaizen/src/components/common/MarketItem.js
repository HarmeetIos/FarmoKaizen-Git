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
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Button} from './Button';
const MarketItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btnConatiner}>
      <Image source={props.image} style={styles.imgCont}></Image>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontFamily: Fonts.robotoBold, fontSize: 20}}>
            {props.title}
          </Text>
          <Text style={{fontFamily: Fonts.robotoBold, fontSize: 20}}>
            {props.price}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: Fonts.robotoRegular,
            fontSize: 20,
            color: 'grey',
            marginTop: 10,
          }}>
          {props.subtitle}
        </Text>
        <Rating
          fractions={2}
          readonly={true}
          startingValue={props.rating}
          imageSize={20}
          onFinishRating={() => {}}
          style={{paddingVertical: 10, width: 100}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderColor: 'black',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontFamily: Fonts.robotoBold, fontSize: 20}}>
                {'-'}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: Fonts.robotoBold,
                fontSize: 20,
                marginLeft: 10,
                marginRight: 10,
                marginVertical: 5,
              }}>
              {'1'}
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderColor: 'black',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontFamily: Fonts.robotoBold, fontSize: 20}}>
                {'+'}
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            children={'Add'}
            defaultBtn={{
              height: 30,
              width: 70,
              margin: 0,
              backgroundColor: Colors.buttonGreenColor,
            }}
          />
        </View>
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
export {MarketItem};
