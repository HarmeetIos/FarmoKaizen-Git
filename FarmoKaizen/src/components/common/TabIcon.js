import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts, Colors, Images } from '../../theme';

const TabIcon = props => {
  return (
    <View style={styles.viewMainContainer}>
      <Image
        resizeMode="contain"
        source={props.focused ? props.activeImg : props.defaultImg}
        style={[
          props.ImgSize,
          {
            tintColor: props.focused
              ? Colors.yellowColor
              : Colors.lightGrayTextColor,
          },
        ]}
      />
      <Text
        style={[
          styles.titleText,
          { color: props.focused ? 'white' : 'white' },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMainContainer: {
    marginTop: 15,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    height: 40,
    alignItems: 'center',
  },
  titleText: {
    marginTop: 2,
    marginBottom: 2,
    textAlign: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    fontFamily: Fonts.latoRegular,
  },
});

export { TabIcon };
