/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthScreens from './AuthScreens';
import {AuthContext} from '../store/authContext';
import AuthorizedScreens from './AuthorizedScreens';
import SplashScreen from 'react-native-splash-screen';

const Main: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const userData = await AsyncStorage.getItem('userData');

      if (userData) {
        authCtx.authenticate(JSON.parse(userData));
      }
      setIsLogin(true);
    };

    getToken();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    if (isLogin) {
      SplashScreen.hide();
    } else {
      SplashScreen.show();
    }
  }, [isLogin]);

  return (
    <NavigationContainer>
      {authCtx.isAuth ? <AuthorizedScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};

export default Main;
