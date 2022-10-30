import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {styles} from './style';

interface InputProps {
  label?: string;
  keyboardType: KeyboardTypeOptions;
  secure: boolean;
  onUpdateValue?: (text: string) => void;
  value: string;
  isInvalid?: boolean;
  styleProp?: StyleProp<ViewStyle>;
  length?: number;
  placeholder?: string;
}

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  styleProp,
  length,
  placeholder,
}: InputProps) => {
  return (
    <>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <View style={[styles.inputContainer, styleProp]}>
        <TextInput
          style={[styles.input, styleProp, isInvalid && styles.inputInvalid]}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={secure}
          onChangeText={onUpdateValue}
          value={value}
          maxLength={length}
        />
      </View>
    </>
  );
};

export default Input;
