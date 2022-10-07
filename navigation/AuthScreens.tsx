import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

const AuthScreens: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="TutorialScreen"
          component={Screens.TutorialScreen}
        />
        <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={Screens.SignUpScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={Screens.ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthScreens;
