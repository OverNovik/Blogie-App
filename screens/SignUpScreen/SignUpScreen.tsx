import React, {useState} from 'react';
import {View, Image} from 'react-native';
import AuthContent from '../../components/Auth/AuthContent/AuthContent';
import LoadingOverlay from '../../components/UI/LoadingOverlay/LoadingOverlay';
import {createUser} from '../../util/auth';
import {styles} from './style';

interface signUpProps {
  email: string;
  userName: string;
  password: string;
}

const SignUpScreen: React.FC = () => {
  const [isAuth, setAuth] = useState(false);

  const signUpHandler = async ({email, userName, password}: signUpProps) => {
    setAuth(true);
    await createUser(email, userName, password);
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
