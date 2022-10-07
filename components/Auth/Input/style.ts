import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../constants/style';

export const styles = StyleSheet.create({
  inputContainer: {
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
  labelInvalid: {
    color: GlobalStyles.colors.error20,
  },
  input: {
    flex: 1,
    width: 327,
    height: 49,
    padding: 10,
    marginLeft: 20,
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.error10,
    borderRadius: 15,
    marginRight: 15,
  },
});
