// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Button from '../../components/UI/Button/Button';
import {
  topicsFirstColumData,
  topicsSecondColumData,
} from '../../data/topicsData';
import {styles} from './style';

const TopicsScreen: React.FC = () => {
  const topicInitData = [
    ...topicsFirstColumData,
    ...topicsSecondColumData,
  ].reduce((acc, item) => {
    return {
      ...acc,
      [item.id]: false,
    };
  }, {});
  const [selectedTopics, setSelectedTopics] = useState<any>(topicInitData);
  // const navigation = useNavigation<any>();

  const toggleTopic = (id: number) => {
    setSelectedTopics({...selectedTopics, [id]: !selectedTopics[id]});
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
          <View>
            {topicsFirstColumData.map(item => (
              <Button
                key={item.id}
                styleProp={[
                  styles.topicBtn,
                  selectedTopics[item.id] ? styles.pressed : null,
                ]}
                onPress={() => toggleTopic(item.id)}>
                <Image source={item.image} key={Math.random()} />
                {'\n'}
                <Text style={styles.text}>{item.text}</Text>
              </Button>
            ))}
          </View>
          <View>
            {topicsSecondColumData.map(item => (
              <Button
                key={item.id}
                styleProp={[
                  styles.topicBtn,
                  selectedTopics[item.id] ? styles.pressed : null,
                ]}
                onPress={() => toggleTopic(item.id)}>
                <Image source={item.image} key={Math.random()} />
                {'\n'}
                <Text style={styles.text}>{item.text}</Text>
              </Button>
            ))}
          </View>
        </View>
        <Button styleProp={styles.btn} onPress={() => {}}>
          Continue
        </Button>
      </View>
    </ScrollView>
  );
};

export default TopicsScreen;
