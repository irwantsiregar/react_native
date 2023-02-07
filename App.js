import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://images.unsplash.com/profile-1446404465118-3a53b909cc82' }} style={styles.gambar} />
      <Text style={styles.teks}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teks: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  gambar: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 30 / 2,
  }
})
