import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    alignItems: 'center',
  },
  image: {
    marginTop: '23%',
    marginBottom: 41.27,
  },
  inputView: {
    backgroundColor: GlobalStyles.colors.white10,
    borderRadius: 15,
    width: 327,
    height: 49,
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: GlobalStyles.colors.gray30,
    marginBottom: 10,
  },
  textInput: {
    width: 327,
    height: 49,
    flex: 1,
    padding: 10,
    marginLeft: 20,
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
    marginTop: '35%',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  signUpBtn: {
    width: 50,
  },
});
