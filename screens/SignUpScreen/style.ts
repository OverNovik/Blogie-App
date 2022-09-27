import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    alignItems: 'center',
  },
  image: {
    marginTop: 92,
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
  btn: {
    width: 110,
  },
});
