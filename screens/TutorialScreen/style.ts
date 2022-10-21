import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  imagesContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 130.73,
    height: 131.78,
  },
  title: {
    width: 306,
    height: 86,
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 33,
    lineHeight: 43,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.gray30,
  },
  text: {
    marginLeft: 5,
    width: 322,
    height: 65,
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.3,
    color: GlobalStyles.colors.gray20,
  },
  skipBtn: {
    width: 100,
  },
  startedBtn: {
    width: 120,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: GlobalStyles.colors.violet20,
  },
  inactiveDot: {
    backgroundColor: GlobalStyles.colors.gray10,
  },
});
