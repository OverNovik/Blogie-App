// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/UI/Button/Button';
import {styles} from './style';

const TopicsScreen: React.FC = () => {
  // const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Blogie!</Text>
        <Text style={styles.description}>
          Select at least 3 topics to personalize your homepage
        </Text>
      </View>
      <Button styleProp={styles.btn} onPress={() => {}}>
        Continue
      </Button>
    </View>
  );
};

export default TopicsScreen;
