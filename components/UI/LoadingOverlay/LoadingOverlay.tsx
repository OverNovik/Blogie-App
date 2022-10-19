import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {GlobalStyles} from '../../../constants/style';
import {styles} from './style';

const LoadingOverlay: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalStyles.colors.violet20} />
    </View>
  );
};

export default LoadingOverlay;
