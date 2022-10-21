import React from 'react';
import {Image, ImageRequireSource} from 'react-native';
import {styles} from './style';

interface TabIconProps {
  source: ImageRequireSource;
  focused: boolean;
}

const TabIcon = ({source, focused}: TabIconProps) => {
  return (
    <>
      <Image source={source} style={focused ? styles.focusTab : null} />
    </>
  );
};

export default TabIcon;
