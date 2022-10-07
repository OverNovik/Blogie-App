import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    alignItems: 'center',
  },
  image: {
    marginTop: '13%',
    marginBottom: 41.27,
  },
  utilsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '25%',
  },
  secondBtn: {
    backgroundColor: GlobalStyles.colors.white,
    color: GlobalStyles.colors.violet20,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 17,
    width: 108,
  },
  haveAccount: {
    marginTop: '40%',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  signUpBtn: {
    width: 50,
  },
});
