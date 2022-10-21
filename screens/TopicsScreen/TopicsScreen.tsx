import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Button from '../../components/UI/Button/Button';
import {
  topicsFirstColumData,
  topicsSecondColumData,
} from '../../data/topicsData';
import {AuthorizedNativeStackProps} from '../../navigation/types';
import {styles} from './style';

type TopicsNavigationProps = NavigationProp<
  AuthorizedNativeStackProps,
  'TopicsScreen'
>;

const TopicsScreen: React.FC = () => {
  const navigation = useNavigation<TopicsNavigationProps>();
  const topicInitData = [
    ...topicsFirstColumData,
    ...topicsSecondColumData,
  ].reduce((acc, item) => {
    return {
      ...acc,
      [item.id]: false,
    };
  }, {});

  const [selectedTopics, setSelectedTopics] = useState<{
    [key: string]: boolean;
  }>(topicInitData);

  const toggleTopic = (id: number) => {
    const count = Object.values(selectedTopics).filter(
      item => item === true,
    ).length;

    if (count < 3) {
      setSelectedTopics({...selectedTopics, [id]: !selectedTopics[id]});
    } else {
      setSelectedTopics({...selectedTopics, [id]: false});
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to Blogie!</Text>
          <Text style={styles.description}>
            Select at least 3 topics to personalize your homepage
          </Text>
        </View>
        <View style={styles.topicsContainer}>
          <View style={styles.column}>
            {topicsFirstColumData.map(item => (
              <View key={item.id}>
                <Pressable
                  onPress={() => toggleTopic(item.id)}
                  style={[
                    styles.topicBtn,
                    selectedTopics[item.id] ? styles.pressed : null,
                  ]}>
                  <View style={styles.topicContent}>
                    <Image source={item.image} />
                    <Text style={styles.text}>{item.text}</Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
          <View style={styles.column}>
            {topicsSecondColumData.map(item => (
              <View key={item.id}>
                <Pressable
                  onPress={() => toggleTopic(item.id)}
                  style={[
                    styles.topicBtn,
                    selectedTopics[item.id] ? styles.pressed : null,
                  ]}>
                  <View style={styles.topicContent}>
                    <Image source={item.image} />
                    <Text style={styles.text}>{item.text}</Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
        <Button
          styleProp={styles.btn}
          onPress={() => navigation.navigate('MainTabs')}>
          Continue
        </Button>
      </View>
    </ScrollView>
  );
};

export default TopicsScreen;
