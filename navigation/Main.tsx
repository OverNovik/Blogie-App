import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreens from './AuthScreens';

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthScreens />
    </NavigationContainer>
  );
};

export default Main;
