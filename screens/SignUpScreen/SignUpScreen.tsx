/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Button from '../../components/UI/Button/Button';
import LoadingOverlay from '../../components/UI/LoadingOverlay/LoadingOverlay';
import {createUser} from '../../util/auth';
import {styles} from './style';

interface SignUpData {
  email: string;
  username: string;
  password: string;
}

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const signUpHandler = async () => {
    setIsAuth(true);
    await createUser(email, username, password);
    setIsAuth(false);
  };

  if (isAuth) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
        />
      </View>
      <Text style={styles.label}>Username</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          onChangeText={username => setUserName(username)}
        />
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        />
      </View>
      <Button styleProp={styles.btn} onPress={signUpHandler}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpScreen;
