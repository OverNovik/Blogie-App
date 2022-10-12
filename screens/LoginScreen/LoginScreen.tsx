import React, {useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/UI/Button/Button';
import {GlobalStyles} from '../../constants/style';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import AuthContent from '../../components/Auth/AuthContent/AuthContent';
import {login} from '../../util/auth';
import LoadingOverlay from '../../components/UI/LoadingOverlay/LoadingOverlay';

interface loginProps {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean | undefined>(
    false,
  );
  const [isAuth, setAuth] = useState(false);

  const loginHandler = async ({email, password}: loginProps) => {
    setAuth(true);
    try {
      await login(email, password);
    } catch (e) {
      Alert.alert('Authorization Error.', 'Please check the entered data.');
    }
    setAuth(false);
  };

  if (isAuth) {
    return <LoadingOverlay />;
  }
  return (
    <>
      <View style={styles.contentContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <AuthContent isLogin={true} onAuthenticate={loginHandler}>
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
        </AuthContent>
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
