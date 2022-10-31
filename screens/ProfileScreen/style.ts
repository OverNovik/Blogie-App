import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    width: '80%',
    backgroundColor: GlobalStyles.colors.background,
  },
  transformLine: {
    width: '100%',
    height: 96,
    backgroundColor: GlobalStyles.colors.violet20,
    // transform: [{rotate: '-13.23deg'}],
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
