import React from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './style';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  styleProp?: StyleProp<ViewStyle>;
  effect?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({children, onPress, styleProp, effect}) => {
  return (
    <View style={styleProp}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && [styles.pressed, effect]}>
        <View style={[styles.button, styleProp]}>
          <Text style={[styles.buttonText, styleProp]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
