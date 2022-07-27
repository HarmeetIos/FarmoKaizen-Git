import React from 'react';
import {Scene, Router, Tabs} from 'react-native-router-flux';

import {
  Login,
  Register,
  AddLicense,
  AddPayment,
  Splash,
  Home,
  Cart,
  Favourite,
  Profile,
  AddProduct,
} from './components/screens/index';

import {EventRegister} from 'react-native-event-listeners';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottomWidth: 0,
      }}
      hideNavBar={false}
      leftButtonIconStyle={{width: 21, height: 18}}
      titleStyle={{color: '#fff'}}>
      <Scene key="root" hideNavBar>
        <Scene
          initial
          key="Splash"
          hideNavBar={true}
          component={Splash}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="Login"
          hideNavBar={true}
          component={Login}
          gestureEnable={false}
          panHandlers={null}
          type="reset"
        />
        <Scene
          key="Register"
          hideNavBar={true}
          component={Register}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="AddLicense"
          hideNavBar={true}
          component={AddLicense}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="AddPayment"
          hideNavBar={true}
          component={AddPayment}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="AddProduct"
          hideNavBar={true}
          component={AddProduct}
          gestureEnable={false}
          panHandlers={null}
        />

        <Tabs
          showLabel={false}
          lazy={true}
          // tabStyle={styles.tab}
          // tabBarStyle={styles.tabs}
          // labelStyle={styles.label}
          swipeEnabled={false}
          gestureEnable={false}
          panHandlers={null}
          // tabStyle={{ backgroundColor: 'rgba(17,17,17,1)' }}
          tabBarStyle={{bottom: 10}}
          type="reset"
          key="tab">
          <Scene
            key="Home"
            hideNavBar={true}
            component={Home}
            gestureEnable={false}
            panHandlers={null}
          />

          <Scene
            hideNavBar={true}
            key="Cart"
            component={Cart}
            gestureEnable={false}
            panHandlers={null}
            tabBarOnPress={obj => {
              // alert(JSON.stringify(obj))
              const routeName = obj.navigation.state.key;
              obj.navigation.navigate(obj.navigation.state.routeName);
              // EventRegister.emit('CreateNFTClicked', 'it works!!!')
            }}
          />
          <Scene
            hideNavBar={true}
            key="Favourite"
            component={Favourite}
            gestureEnable={false}
            type="reset"
            panHandlers={null}
            tabBarOnPress={obj => {
              // alert(JSON.stringify(obj))
              const routeName = obj.navigation.state.key;
              obj.navigation.navigate(obj.navigation.state.routeName);
              //EventRegister.emit('FavouriteClicked', 'it works!!!');
            }}
          />
          <Scene
            hideNavBar={true}
            key="Profile"
            component={Profile}
            gestureEnable={false}
            panHandlers={null}
            tabBarOnPress={obj => {
              // alert(JSON.stringify(obj))
              const routeName = obj.navigation.state.key;
              obj.navigation.navigate(obj.navigation.state.routeName);
              //EventRegister.emit('ProfileClicked', 'it works!!!');
            }}
          />
        </Tabs>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
