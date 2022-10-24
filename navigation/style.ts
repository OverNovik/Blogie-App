import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/style';

export const styles = StyleSheet.create({
  addStoryBtn: {
    backgroundColor: GlobalStyles.colors.violet20,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 4.41667,
    borderColor: GlobalStyles.colors.gray10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -25,
  },
  focusTab: {
    tintColor: GlobalStyles.colors.violet20,
  },
  backBtn: {
    backgroundColor: GlobalStyles.colors.violet10,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});