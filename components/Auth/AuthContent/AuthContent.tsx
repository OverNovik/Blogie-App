import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import AuthForm from '../AuthForm/AuthForm';

interface User {
  email: string;
  username: string;
  password: string;
}

interface AuthContentProps {
  isLogin: boolean;
  onAuthenticate: ({email, username, password}: User) => void;
  children: React.ReactNode;
}

interface Credentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AuthContent = ({isLogin, onAuthenticate, children}: AuthContentProps) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  const submitHandler = (credentials: Credentials) => {
    let {email, username, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const userNameIsValid = username.length > 1;
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!userNameIsValid || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check the entered data');
      setCredentialsInvalid({
        email: !emailIsValid,
        username: !userNameIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({email, username, password});
  };

  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
        children={children}
      />
    </View>
  );
};

export default AuthContent;
