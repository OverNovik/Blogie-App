import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, UserData} from './authContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const authenticate = (authUserData: UserData) => {
    setUserData(authUserData);
    AsyncStorage.setItem('userData', JSON.stringify(authUserData));
  };

  const logout = () => {
    setUserData(null);
    AsyncStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider
      value={{
        userData: userData,
        isAuth: !!userData,
        authenticate: authenticate,
        logout: logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
