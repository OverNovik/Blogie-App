/* eslint-disable react-hooks/exhaustive-deps */
import {ref, set} from '@firebase/database';
import {useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {db} from '../../config/firebaseConfig';
import {styles} from './style';

const ProfileScreen: React.FC = () => {
  const route = useRoute<any>();
  const {id, username, title, text, views, likes} = route.params;

  const updatePost = async () => {
    await set(ref(db, `posts/${username}/${id}/`), {
      id: id,
      username: username,
      text: text,
      title: title,
      likes: likes,
      views: views + 1,
    });
    await set(ref(db, `user/${username}/`), {
      readedList: [id],
      likedPostList: [id],
    });
  };

  useEffect(() => {
    updatePost();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/icons/Image.png')} />
        </View>
        <View style={styles.utilsContainer}>
          <View style={styles.utils}>
            <Image source={require('../../assets/icons/Show.png')} />
            <Text>{views}</Text>
          </View>
          <View style={styles.utils}>
            <Image source={require('../../assets/icons/Comment.png')} />
            <Text>0</Text>
          </View>
          <View style={styles.utils}>
            <Image source={require('../../assets/icons/Heart.png')} />
            <Text>0</Text>
          </View>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
