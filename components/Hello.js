import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../assets/style';

const HelloWorld = ({ name }) => {
  const [number, setNumber] = useState(0);

  const updateNumber = (_number) => {
    setNumber(_number);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="write number" onChangeText={updateNumber} />
      <Text style={styles.teks}>Hello {name},👋</Text>
      <Text style={styles.teks}>Your favorite number {number}</Text>
    </View>
  )
}

export default HelloWorld;

