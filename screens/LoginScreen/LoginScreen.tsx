/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/UI/Button/Button';
import {GlobalStyles} from '../../constants/style';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean | undefined>(
    false,
  );
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            onChangeText={email => setEmail(email)}
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
        <View style={styles.utilsContainer}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColors={{true: GlobalStyles.colors.violet20}}
            />
            <Text>Remember me?</Text>
          </View>
          <Button
            styleProp={styles.secondBtn}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            Forgot Password?
          </Button>
        </View>
        <Button onPress={() => {}}>Sign in</Button>
        <View style={styles.haveAccount}>
          <Text>Don’t have an account? </Text>
          <Button
            styleProp={[styles.secondBtn, styles.signUpBtn]}
            onPress={() => navigation.navigate('SignUpScreen')}>
            Sign up
          </Button>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
