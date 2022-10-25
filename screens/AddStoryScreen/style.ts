import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.background,
  },
  inputContainer: {
    backgroundColor: GlobalStyles.colors.white10,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: 327,
    height: 49,
    padding: 10,
    marginLeft: 20,
  },
});
