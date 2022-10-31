import {ref, set} from '@firebase/database';
import {uuidv4} from '@firebase/util';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import React, {useState, useContext} from 'react';
import {Pressable, Text, View, Switch, Image} from 'react-native';
import Input from '../../components/Auth/Input/Input';
import Button from '../../components/UI/Button/Button';
import TabIcon from '../../components/UI/TabIcon/TabIcon';
import {db} from '../../config/firebaseConfig';
import {GlobalStyles} from '../../constants/style';
import {AuthorizedNativeStackProps} from '../../navigation/types';
import {AuthContext} from '../../store/authContext';
import {StoryContext} from '../../store/storyContext';
import {styles} from './style';

type PostStoryNavigationProps = NavigationProp<
  AuthorizedNativeStackProps,
  'PostStoryScreen'
>;

const PostStoryScreen: React.FC = () => {
  const [isEnabledFacebook, setIsEnabledFacebook] = useState(false);
  const [isEnabledTwitter, setIsEnabledTwitter] = useState(false);
  const authCtx = useContext(AuthContext);
  const {storyText, storyTitle, setStoryTitle, storyLikes, storyViews} =
    useContext(StoryContext);
  const navigation = useNavigation<PostStoryNavigationProps>();

  const create = async () => {
    const userData = authCtx.userData;
    const id = uuidv4();
    await set(ref(db, `posts/${userData?.email.split('@')[0]}/${id}/`), {
      id: id,
      username: userData?.email.split('@')[0],
      text: storyText,
      title: storyTitle,
      likes: storyLikes,
      views: storyViews,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable onPress={() => {}}>
          <View style={styles.addPhoto}>
            <TabIcon source={require('../../assets/icons/Plus_violet.png')} />
          </View>
        </Pressable>
        <Text>Add photo</Text>
      </View>
      <View>
        <Input
          label="Title"
          keyboardType={'default'}
          secure={false}
          value={storyTitle}
          onUpdateValue={setStoryTitle}
        />
        <Input
          label="Tags"
          keyboardType={'default'}
          secure={false}
          value={''}
        />
      </View>
      <View>
        <Text style={styles.title}>Connections</Text>
        <View style={styles.connectionsView}>
          <View style={styles.connectionsImageContainer}>
            <Image source={require('../../assets/icons/Facebook.png')} />
          </View>
          <View>
            <Text style={styles.connectionsTitle}>Facebook</Text>
            <Text style={styles.connectionsText}>
              We will never post to Facebook or message your friends without
              your your permission.
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{true: GlobalStyles.colors.violet20}}
              thumbColor={GlobalStyles.colors.white}
              onValueChange={() =>
                setIsEnabledFacebook(previousState => !previousState)
              }
              value={isEnabledFacebook}
            />
          </View>
        </View>
        <View style={styles.connectionsView}>
          <View style={styles.connectionsImageContainer}>
            <Image source={require('../../assets/icons/Twitter.png')} />
          </View>
          <View>
            <Text style={styles.connectionsTitle}>Twitter</Text>
            <Text style={styles.connectionsText}>
              We will never post to Twitter or message your followers without
              your permission.
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{true: GlobalStyles.colors.violet20}}
              thumbColor={GlobalStyles.colors.white}
              onValueChange={() =>
                setIsEnabledTwitter(previousState => !previousState)
              }
              value={isEnabledTwitter}
            />
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          create();
          navigation.navigate('MainTabs');
        }}>
        Post
      </Button>
    </View>
  );
};

export default PostStoryScreen;
