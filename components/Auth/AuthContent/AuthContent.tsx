import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import AuthForm from '../AuthForm/AuthForm';

interface User {
  email: string;
  userName: string;
  password: string;
}

interface AuthContentProps {
  isLogin: boolean;
  onAuthenticate: ({email, userName, password}: User) => void;
  children: React.ReactNode;
}

interface Credentials {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AuthContent = ({isLogin, onAuthenticate, children}: AuthContentProps) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    userName: false,
    password: false,
    confirmPassword: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const switchAuthModeHandler = () => {};

  const submitHandler = (credentials: Credentials) => {
    let {email, userName, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const userNameIsValid = userName.length > 1;
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
        userName: !userNameIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({email, userName, password});
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
