import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './style';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;
