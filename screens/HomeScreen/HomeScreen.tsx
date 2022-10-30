import {onValue, ref} from '@firebase/database';
import {useNavigation} from '@react-navigation/core';
import React, {useContext, useRef, useState, useEffect} from 'react';
import {Dimensions, Text, View, ImageBackground, Pressable} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Input from '../../components/Auth/Input/Input';
import TabIcon from '../../components/UI/TabIcon/TabIcon';
import {db} from '../../config/firebaseConfig';
import {AuthContext} from '../../store/authContext';
import {styles} from './style';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const HomeScreen: React.FC = () => {
  const [, setIndex] = useState(0);
  const navigation = useNavigation<any>();
  const [postData, setPostData] = useState<any[]>([]);
  const isCarousel = useRef<Carousel<any> | null>(null);
  const authCtx = useContext(AuthContext);
  const userData = authCtx.userData;

  const readData = async () => {
    const response = await ref(db, 'posts/');
    onValue(response, snapshot => {
      const data = snapshot.val();
      let userPostsArr = [];
      for (const userId in data) {
        const userPosts = data[userId];
        for (const postId in userPosts) {
          userPostsArr.push(userPosts[postId]);
        }
      }
      setPostData(userPostsArr);
    });
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>
          Hello {userData?.email.split('@')[0]}
        </Text>
        <Text style={styles.welcomeTitle}>Welcome back!</Text>
        <View style={styles.inputContainer}>
          <Input
            styleProp={styles.input}
            placeholder="Search"
            keyboardType={'default'}
            secure={false}
            value={''}
          />
          <View style={styles.iconContainer}>
            <TabIcon source={require('../../assets/icons/Search.png')} />
          </View>
        </View>
        <View>
          <Text style={styles.popularTitle}>Popular</Text>
          <View>
            <Carousel
              ref={isCarousel}
              data={postData}
              renderItem={({item}) => {
                return (
                  <View style={styles.sliderItemContainer}>
                    <ImageBackground
                      source={require('../../assets/Popular.png')}
                      resizeMode="cover"
                      style={styles.sliderItemBackground}>
                      <Pressable
                        onPress={() =>
                          navigation.navigate('StoryScreen', {
                            id: item.id,
                            username: item.username,
                            title: item.title,
                            text: item.text,
                            likes: item.likes,
                            views: item.views,
                          })
                        }>
                        <View style={styles.itemContent}>
                          <Text>{item.username}</Text>
                          <Text>{item.title}</Text>
                        </View>
                      </Pressable>
                    </ImageBackground>
                  </View>
                );
              }}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              onSnapToItem={(index: number) => setIndex(index)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
