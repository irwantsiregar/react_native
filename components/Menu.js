import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function MenuItem({ icon }) {
  return (
    <View style={styles.item}>
      <Image source={icon} style={styles.gambar} />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    height: '50%',
    width: '33%',
    padding: 25,
  },
  gambar: {
    height: '100%',
    width: '100%',
  }
});