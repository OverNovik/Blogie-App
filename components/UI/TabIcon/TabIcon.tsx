import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Image,
  ImageRequireSource,
  ImageStyle,
} from 'react-native';

interface TabIconProps {
  source: ImageRequireSource;
  focused: boolean;
  styleImage: StyleProp<ImageStyle>;
  styleContainer?: StyleProp<ViewStyle>;
}

const TabIcon = ({
  source,
  focused,
  styleImage,
  styleContainer,
}: TabIconProps) => {
  return (
    <View style={[styleContainer]}>
      <Image source={source} style={focused ? styleImage : null} />
    </View>
  );
};

export default TabIcon;
