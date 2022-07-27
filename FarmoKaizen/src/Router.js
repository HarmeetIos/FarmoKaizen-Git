import React from 'react';
import {Scene, Router, Tabs} from 'react-native-router-flux';

import {
  Login,
  // FBLogin,
  // Signup,
  // VerifyOTP,
  // PinLock,
  // Mnemonics,
  // MnemonicsVerify,
  // SelectInterests,
  // Profile,
  // MarketPlace,
  // CreateNft,
  // CreateNftDetails,
  // NftDetails,
  // NftTrxHistory,
  // BuyNft,
  // MarketNft,
  // Pin,
  // ProfileSetting,
  // ProfileDetails,
  // ChangePassword,
  // NFTYElite,
  // ForgotPassword,
  // ReceiveCurrency,
  // ProfileWallets,
  // ProfileDeposit,
  // WithdrawToken,
  // HomeScreen,
  // Comments,
  // HomeDetails,
  // Contacts,
  // UserDetails,
  // AddContact,
  // Following
} from './components/screens/index';
// import NftView from './components/common/NftView';
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
        {/* <Scene
          key="Splash"
          hideNavBar={true}
          component={Splash}
          gestureEnable={false}
          panHandlers={null}
        /> */}
        <Scene
          initial
          key="Login"
          hideNavBar={true}
          component={Login}
          gestureEnable={false}
          panHandlers={null}
          type="reset"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
