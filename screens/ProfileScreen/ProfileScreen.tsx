import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/UI/Button/Button';
import {AuthContext} from '../../store/authContext';
import {styles} from './style';

const ProfileScreen: React.FC = () => {
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.transformLine} />
        <Text>ProfileScreen</Text>
        <Button onPress={authCtx.logout}>exit</Button>
      </View>
    </View>
  );
};

export default ProfileScreen;
