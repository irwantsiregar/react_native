import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Styling in react native
// 3. External Style
import { styles } from './assets/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Hello World!</Text>
    </View>
  )
}

