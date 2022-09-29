import React from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import Button from '../../components/UI/Button/Button';
import {styles} from './style';

const ForgotPasswordScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.description}>
          Please enter your registered email address to receive your password
          reset instruction{' '}
        </Text>
      </View>
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} />
      </View>
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
