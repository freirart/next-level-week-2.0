import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

interface InputProps{
  label: string;
  name: string;
  value: string;
  onChangeValue: Function;
}

const Input: React.FC<InputProps> = ({ label, name, value }) => {
  return(
    <View style={styles.inputBlock}>
      <Text style={styles.label}>{label}</Text>
      {name !== 'bio' && name !== 'time' && (<TextInput value={value} style={styles.input}/>)}
      {name === 'bio' && (
        <TextInput 
          style={styles.textarea}
          multiline = {true}
          numberOfLines = {10}
          value={value}
        />
      )}
      {name === 'time' && (<TextInput value={value} style={styles.inputTime} />)}
    </View>
  );
}

export default Input;