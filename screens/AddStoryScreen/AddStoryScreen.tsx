import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './style';

const AddStoryScreen: React.FC = () => {
  const [story, setStory] = useState('');
  const [height, setHeight] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus={true}
          placeholder="Write your story"
          onChangeText={setStory}
          value={story}
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
