import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Contact({ title, image, telephone }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.telp}>{telephone}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 50/2,
  },
  text: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  }
});