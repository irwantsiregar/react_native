import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Hello World!</Text>
    </View>
  )
}

// Styling in react native

// 1. Internal Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 20,
  },
  teks: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderRadius: 8,
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
