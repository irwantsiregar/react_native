import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styling in react native
// 2. Inline Style
export default function App() {
  return (
    <View style={{
      flex: 1,
      padding: 10,
      margin: 20,
    }}>
      <Text style={{
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 3,
        borderRadius: 8,
        backgroundColor: 'lightgrey',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      }}>Hello World!</Text>
    </View>
  )
}

