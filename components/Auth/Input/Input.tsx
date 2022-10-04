import React from 'react';
import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';
import {styles} from './style';

interface InputProps {
  label: string;
  keyboardType: KeyboardTypeOptions;
  secure: boolean;
  onUpdateValue?: (text: string) => void;
  value: string;
  isInvalid?: boolean;
}

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: InputProps) => {
  return (
    <>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isInvalid && styles.inputInvalid]}
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={secure}
          onChangeText={onUpdateValue}
          value={value}
        />
      </View>
    </>
  );
};

export default Input;
