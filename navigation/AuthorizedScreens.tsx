import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from '../screens';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();

const AuthorizedScreens: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="VerifyScreen" component={Screens.VerifyScreen} />
        <Stack.Screen name="TopicsScreen" component={Screens.TopicsScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </>
  );
};

export default AuthorizedScreens;
