import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  welcomeText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.gray20,
    marginBottom: 3,
    marginLeft: '8%',
  },
  welcomeTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.black,
    marginLeft: '8%',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    paddingLeft: '8%',
  },
  iconContainer: {
    position: 'relative',
    bottom: '45%',
    right: '35%',
  },
  popularTitle: {
    fontFamily: 'HK Grotesk',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.black,
    marginLeft: '8%',
    marginBottom: '5%',
  },
  sliderItemContainer: {
    width: 258,
    height: 260,
  },
  sliderItemBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemContent: {
    width: 218,
    height: 129,
    backgroundColor: GlobalStyles.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
});
