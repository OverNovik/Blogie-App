/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/Auth/Input/Input';
import Button from '../../components/UI/Button/Button';
import {styles} from './style';

const VerifyScreen: React.FC = () => {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [thirdInput, setThirdInput] = useState('');
  const [fourthInput, setFourthInput] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Verify Account</Text>
        <Text style={styles.description}>
          Please enter the verification code we sent to your email
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          onUpdateValue={num => setFirstInput(num)}
          value={firstInput}
          keyboardType="number-pad"
          secure={false}
          styleProp={styles.input}
          length={1}
        />
        <Input
          onUpdateValue={num => setSecondInput(num)}
          value={secondInput}
          keyboardType="number-pad"
          secure={false}
          styleProp={styles.input}
          length={1}
        />
        <Input
          onUpdateValue={num => setThirdInput(num)}
          value={thirdInput}
          keyboardType="number-pad"
          secure={false}
          styleProp={styles.input}
          length={1}
        />
        <Input
          onUpdateValue={num => setFourthInput(num)}
          value={fourthInput}
          keyboardType="number-pad"
          secure={false}
          styleProp={styles.input}
          length={1}
        />
      </View>
      <Button styleProp={styles.btn} onPress={() => {}}>
        Continue
      </Button>
      <Text style={styles.description}>Enter 1111 for verification</Text>
    </View>
  );
};

export default VerifyScreen;
