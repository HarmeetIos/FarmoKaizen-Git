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
import {OrderItem} from './OrderItem';

class OrderList extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ListFooterComponent={() => {
            if (this.props.value.length == 0) {
              return (
                <View
                  style={{
                    height: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      {
                        fontFamily: Fonts.nexaBold,
                        color: Colors.White,
                        fontSize: 13,
                        marginLeft: 5,
                      },
                      {fontSize: 18},
                    ]}>
                    {'No Records'}
                  </Text>
                </View>
              );
            } else {
              return <View />;
            }
          }}
          extraData={this.props.extraData}
          data={this.props.value}
          renderItem={({item, index}) => {
            // alert(JSON.stringify(item))
            return (
              <OrderItem
                title="Tiee"
                subtitle="jkjkj"
                date="1212"
                onPress={() => {}}
              />
            );
          }}
          //   keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contactList: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  avatarStyle: {
    borderRadius: 100,
    width: 60,
    height: 60,
    overflow: 'hidden',
    marginRight: 10,
  },
  contactInfoRowStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  nameStyle: {
    fontFamily: Fonts.nexaBold,
    fontSize: 18,
    color: Colors.White,
    marginBottom: 2,
  },
  numberStyle: {
    fontFamily: Fonts.nexaBold,
    fontSize: 12,
    color: Colors.yellowColor,
  },
});

export {OrderList};
