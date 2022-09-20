import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../constants/style';

export const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 40,
    backgroundColor: GlobalStyles.colors.violet20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    width: 50,
    height: 21,
    textAlign: 'center',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: GlobalStyles.colors.white,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.gray10,
    borderRadius: 4,
  },
});
