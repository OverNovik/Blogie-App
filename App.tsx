import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {GlobalStyles} from './constants/style';
import * as Screens from './screens';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={GlobalStyles.colors.white}
      />
      <NavigationContainer>
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
      </NavigationContainer>
    </>
  );
};

export default App;
