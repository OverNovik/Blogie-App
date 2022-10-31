import React, {useState, useContext} from 'react';
import {View, Image, Alert} from 'react-native';
import AuthContent from '../../components/Auth/AuthContent/AuthContent';
import LoadingOverlay from '../../components/UI/LoadingOverlay/LoadingOverlay';
import {AuthContext} from '../../store/authContext';
import {createUser} from '../../util/auth';
import {styles} from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface signUpProps {
  email: string;
  password: string;
}

const SignUpScreen: React.FC = () => {
  const [isAuth, setAuth] = useState(false);
  const authCtx = useContext(AuthContext);

  const signUpHandler = async ({email, password}: signUpProps) => {
    setAuth(true);
    try {
      const userData = await createUser(email, password);
      authCtx.authenticate(userData);
    } catch (e) {
      Alert.alert('Authorization Error.', 'Please check the entered data.');
      setAuth(false);
    }
  };

  if (isAuth) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <KeyboardAwareScrollView>
        <AuthContent
          isLogin={false}
          onAuthenticate={signUpHandler}
          children={undefined}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUpScreen;
