import {StyleSheet} from 'react-native';
import {Images, Colors, Fonts} from '../../../theme';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginLogo: {
    marginTop: '20%',
    height: 80,
    width: 180,
    alignSelf: 'center',
  },
  loginButton: {
    width: '85%',
    alignSelf: 'center',
    height: 40,
    marginTop: 20,
    backgroundColor: Colors.buttonBlueColor,
  },
  hintBtnStyle: {
    position: 'absolute',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: '8%',
    top: 15,
    zIndex: 1,
  },
});
