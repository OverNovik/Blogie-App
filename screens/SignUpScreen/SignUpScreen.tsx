import React from 'react';
import {View, Image} from 'react-native';
import AuthContent from '../../components/Auth/AuthContent/AuthContent';
import {styles} from './style';

const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <AuthContent
        isLogin={false}
        onAuthenticate={() => {}}
        children={undefined}
      />
    </View>
  );
};

export default SignUpScreen;
