import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  contentContainer: {
    alignItems: 'center',
  },
  username: {
    width: '80%',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.3,
    textAlign: 'center',
    color: GlobalStyles.colors.black,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: -0.3,
    textAlign: 'center',
    color: GlobalStyles.colors.black,
  },
  imageContainer: {
    width: 327,
    height: 209,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.gray10,
    borderRadius: 20,
  },
  utilsContainer: {
    flexDirection: 'row',
  },
  utils: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  text: {
    width: '80%',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.3,
    textAlign: 'justify',
    color: GlobalStyles.colors.black,
  },
});
