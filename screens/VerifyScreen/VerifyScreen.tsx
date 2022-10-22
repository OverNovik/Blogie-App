import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../components/Auth/Input/Input';
import Button from '../../components/UI/Button/Button';
import {AuthorizedNativeStackProps} from '../../navigation/types';
import {styles} from './style';

type VerifyNavigationProps = NavigationProp<
  AuthorizedNativeStackProps,
  'VerifyScreen'
>;

const VerifyScreen: React.FC = () => {
  const navigation = useNavigation<VerifyNavigationProps>();
  const [firstInput, setFirstInput] = useState<string>('');
  const [secondInput, setSecondInput] = useState<string>('');
  const [thirdInput, setThirdInput] = useState<string>('');
  const [fourthInput, setFourthInput] = useState<string>('');

  const checkingConditions =
    firstInput === '1' &&
    secondInput === '1' &&
    thirdInput === '1' &&
    fourthInput === '1';

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
      <Button
        styleProp={styles.btn}
        onPress={() => {
          if (checkingConditions) {
            navigation.navigate('TopicsScreen');
          } else {
            Alert.alert(
              'Please check verification code',
              'Enter 1111 for verification',
            );
          }
        }}>
        Continue
      </Button>
      <Text style={styles.description}>Enter 1111 for verification</Text>
    </View>
  );
};

export default VerifyScreen;
