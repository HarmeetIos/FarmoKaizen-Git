import {StyleSheet} from 'react-native';
import {Images, Colors, Fonts} from '../../../theme';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },

  textStyle: {
    marginTop: 20,
    alignSelf: 'center',
    width: '85%',
    marginBottom: 10,
    fontFamily: Fonts.robotoMedium,
  },
});
