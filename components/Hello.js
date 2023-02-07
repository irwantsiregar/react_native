import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/style';

const HelloWorld = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Hello {props.name},👋</Text>
    </View>
  )
}

export default HelloWorld;

