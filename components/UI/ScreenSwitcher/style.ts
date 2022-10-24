import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginHorizontal: 37,
  },
  btn: {
    marginHorizontal: 11,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: GlobalStyles.colors.black,
  },
  disabled: {
    color: GlobalStyles.colors.gray20,
  },
});
