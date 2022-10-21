/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../components/Auth/Input/Input';
import Button from '../../components/UI/Button/Button';
import {styles} from './style';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.description}>
          Please enter your registered email address to receive your password
          reset instruction{' '}
        </Text>
      </View>
      <Input
        label="Email"
        onUpdateValue={email => setEmail(email)}
        value={email}
        keyboardType="email-address"
        secure={false}
      />
      <Button
        styleProp={styles.btn}
        onPress={() =>
          Alert.alert('Success', 'Instruction has been sent to your email')
        }>
        Submit
      </Button>
    </View>
  );
};

export default ForgotPasswordScreen;
