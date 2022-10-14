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
    marginBottom: 39,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 220,
    height: 40,
    marginBottom: 33,
  },
  input: {
    maxWidth: 40,
    maxHeight: 40,
    marginRight: 5,
  },
  btn: {
    width: 150,
  },
});
