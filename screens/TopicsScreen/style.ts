import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    alignItems: 'center',
    paddingBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    width: 123,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: GlobalStyles.colors.gray30,
    marginTop: '5%',
  },
  description: {
    width: 232,
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
  topicsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicBtn: {
    width: 150,
    height: 150,
    backgroundColor: GlobalStyles.colors.white,
  },
  topicContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    color: GlobalStyles.colors.gray20,
    marginTop: 20,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.violet10,
    borderRadius: 15,
  },
  btn: {
    width: 135,
  },
});
