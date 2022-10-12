import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreens from './AuthScreens';
import AuthProvider from '../store/AuthProvider';

const Main: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthScreens />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Main;
