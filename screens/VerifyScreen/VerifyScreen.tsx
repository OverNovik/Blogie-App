import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/UI/Button/Button';
import {AuthContext} from '../../store/authContext';

const VerifyScreen: React.FC = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <View>
      <Text>11111112</Text>
      <Button onPress={authCtx.logout}>111</Button>
    </View>
  );
};

export default VerifyScreen;
