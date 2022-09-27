/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Button from '../../components/UI/Button/Button';
import {styles} from './style';

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  const [username, setUserName] = useState<string | null>('');
  const [confirmPassword, setConfirmPassword] = useState<string | null>('');
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
      <Button styleProp={styles.btn} onPress={() => {}}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpScreen;
