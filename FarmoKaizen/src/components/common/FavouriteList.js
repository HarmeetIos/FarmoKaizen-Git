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
import {Actions} from 'react-native-router-flux';
import {Fonts, Images, Colors} from '../../theme';
import {MarketItem} from './MarketItem';

class FavouriteList extends Component {
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
            var randomnumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

            // alert(JSON.stringify(item))
            console.log(this.props.value.length);
            let imagePath = this.props.value2[index].images[0];
            return (
              <MarketItem
                image={{uri: imagePath ? imagePath : ''}}
                title={item.name}
                price={'$ ' + item.price + '/' + item.quantity + 'Kg'}
                subtitle={item.description}
                rating={randomnumber}
                onPress={() => {
                  this.props.itemClickedAt(index);
                }}
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
    fontFamily: Fonts.robotoBold,
    fontSize: 18,
    color: Colors.White,
    marginBottom: 2,
  },
  numberStyle: {
    fontFamily: Fonts.robotoBold,
    fontSize: 12,
    color: Colors.yellowColor,
  },
});

export {FavouriteList};
