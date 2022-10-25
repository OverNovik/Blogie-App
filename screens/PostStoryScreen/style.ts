import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  imageContainer: {
    width: 129,
    height: 139,
    backgroundColor: GlobalStyles.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  addPhoto: {
    width: 24,
    height: 24,
    backgroundColor: GlobalStyles.colors.violet10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.black,
    marginBottom: 16,
  },
  connectionsView: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  connectionsImageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionsTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.black,
  },
  connectionsText: {
    width: 208,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 18,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.gray20,
  },
});
