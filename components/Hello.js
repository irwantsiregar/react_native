import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/style';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Hello World!</Text>
    </View>
  )
}

export default HelloWorld;

