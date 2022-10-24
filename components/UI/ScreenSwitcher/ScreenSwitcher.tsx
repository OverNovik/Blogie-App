import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from './style';

interface ScreenSwitcherProps {
  onPressDraft?: () => void;
  onPressNext?: () => void;
  disabledDraft?: boolean;
  disabledNext?: boolean;
}

const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  onPressDraft,
  onPressNext,
  disabledDraft,
  disabledNext,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Pressable disabled={disabledDraft} onPress={onPressDraft}>
          <Text style={[styles.text, disabledDraft ? styles.disabled : null]}>
            Draft
          </Text>
        </Pressable>
      </View>
      <View style={styles.btn}>
        <Pressable disabled={disabledNext} onPress={onPressNext}>
          <Text style={[styles.text, disabledNext ? styles.disabled : null]}>
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScreenSwitcher;
