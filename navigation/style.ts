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
    marginBottom: 35,
  },
  focusAddStory: {
    backgroundColor: GlobalStyles.colors.white,
    tintColor: GlobalStyles.colors.violet20,
  },
  focusTab: {
    tintColor: GlobalStyles.colors.violet20,
  },
});
