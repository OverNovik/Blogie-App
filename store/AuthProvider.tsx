import React, {useState} from 'react';
import {AuthContext} from './authContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>('');

  const authenticate = (token: string) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token: authToken,
        isAuth: !!authToken,
        authenticate: authenticate,
        logout: logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
