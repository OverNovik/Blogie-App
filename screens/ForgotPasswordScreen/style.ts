import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: GlobalStyles.colors.gray30,
    marginTop: '20%',
  },
  description: {
    width: 297,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: GlobalStyles.colors.gray20,
    marginTop: 29,
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
    marginTop: 39,
  },
  textInput: {
    width: 327,
    height: 49,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  btn: {
    width: 150,
  },
});
