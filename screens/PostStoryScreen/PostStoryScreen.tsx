import React, {useState} from 'react';
import {Pressable, Text, View, Switch, Image} from 'react-native';
import Input from '../../components/Auth/Input/Input';
import Button from '../../components/UI/Button/Button';
import TabIcon from '../../components/UI/TabIcon/TabIcon';
import {GlobalStyles} from '../../constants/style';
import {styles} from './style';

const PostStoryScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
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
          value={''}
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
                setIsEnabled(previousState => !previousState)
              }
              value={isEnabled}
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
                setIsEnabled(previousState => !previousState)
              }
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      <Button onPress={() => {}}>Post</Button>
    </View>
  );
};

export default PostStoryScreen;
