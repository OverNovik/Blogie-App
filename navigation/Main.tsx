import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreens from './AuthScreens';
import {AuthContext} from '../store/authContext';
import AuthorizedScreens from './AuthorizedScreens';

const Main: React.FC = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <NavigationContainer>
      {authCtx.isAuth ? <AuthorizedScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};

export default Main;
