import React from 'react';
import {Pressable, View} from 'react-native';
import TabIcon from '../TabIcon/TabIcon';
import {styles} from './style';

interface BackButtonProps {
  onPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <View style={styles.backBtn}>
      <Pressable onPress={onPress}>
        <View>
          <TabIcon source={require('../../../assets/icons/Fill.png')} />
        </View>
      </Pressable>
    </View>
  );
};

export default BackButton;
