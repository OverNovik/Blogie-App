import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from './style';

interface ScreenSwitcherProps {
  onPressDraft?: () => void;
  onPressNext?: () => void;
  isDisabledDraft?: boolean;
  isDisabledNext?: boolean;
}

const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  onPressDraft,
  onPressNext,
  isDisabledDraft,
  isDisabledNext,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Pressable disabled={isDisabledDraft} onPress={onPressDraft}>
          <Text style={[styles.text, isDisabledDraft ? styles.disabled : null]}>
            Draft
          </Text>
        </Pressable>
      </View>
      <View style={styles.btn}>
        <Pressable disabled={isDisabledNext} onPress={onPressNext}>
          <Text style={[styles.text, isDisabledNext ? styles.disabled : null]}>
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScreenSwitcher;
