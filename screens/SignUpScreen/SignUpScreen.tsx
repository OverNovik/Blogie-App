import React, {useState} from 'react';
import {View, Image, Alert} from 'react-native';
import AuthContent from '../../components/Auth/AuthContent/AuthContent';
import LoadingOverlay from '../../components/UI/LoadingOverlay/LoadingOverlay';
import {createUser} from '../../util/auth';
import {styles} from './style';

interface signUpProps {
  email: string;
  password: string;
}

const SignUpScreen: React.FC = () => {
  const [isAuth, setAuth] = useState(false);

  const signUpHandler = async ({email, password}: signUpProps) => {
    setAuth(true);
    try {
      await createUser(email, password);
    } catch (e) {
      Alert.alert('Authorization Error.', 'Please check the entered data.');
    }
    setAuth(false);
  };

  if (isAuth) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <AuthContent
        isLogin={false}
        onAuthenticate={signUpHandler}
        children={undefined}
      />
    </View>
  );
};

export default SignUpScreen;
