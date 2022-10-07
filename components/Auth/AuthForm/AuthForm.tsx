import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../UI/Button/Button';
import Input from '../Input/Input';
import {styles} from './style';

interface Credentials {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface CredentialsInvalid {
  userName: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (credentials: Credentials) => void;
  credentialsInvalid: CredentialsInvalid;
  children?: React.ReactNode;
}

const AuthForm = ({
  isLogin,
  onSubmit,
  credentialsInvalid,
  children,
}: AuthFormProps) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    userName: userNameIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const submitHandler = () => {
    onSubmit({
      email: enteredEmail,
      userName: enteredUserName,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  };

  return (
    <View>
      <View>
        <Input
          label="Email"
          onUpdateValue={setEnteredEmail}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          secure={false}
        />
        {!isLogin && (
          <Input
            label="Username"
            onUpdateValue={setEnteredUserName}
            value={enteredUserName}
            keyboardType={'default'}
            isInvalid={userNameIsInvalid}
            secure={false}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={setEnteredPassword}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          keyboardType={'default'}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={setEnteredConfirmPassword}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            keyboardType={'default'}
          />
        )}
        <View>{children}</View>
        <View style={styles.buttons}>
          <Button
            styleProp={isLogin ? styles.login : styles.signup}
            onPress={submitHandler}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;
