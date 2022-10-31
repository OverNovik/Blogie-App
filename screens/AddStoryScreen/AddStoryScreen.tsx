import React, {useState, useContext} from 'react';
import {View, TextInput} from 'react-native';
import {StoryContext} from '../../store/storyContext';
import {styles} from './style';

const AddStoryScreen: React.FC = () => {
  const {storyText, setStoryText} = useContext(StoryContext);
  const [height, setHeight] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus={true}
          placeholder="Write your story"
          onChangeText={setStoryText}
          value={storyText}
          multiline
          onContentSizeChange={event => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
          style={[styles.input, {height: height}]}
        />
      </View>
    </View>
  );
};

export default AddStoryScreen;
