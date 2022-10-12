import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

const AuthorizedScreens: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="VerifyScreen" component={Screens.VerifyScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthorizedScreens;
