import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';

export default function Detail({ route }) {
  const { book } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4 }}>
        <ImageBackground
          source={{ uri: book.image }}
          style={styles.backward}
        />
        <View style={styles.overlay}></View>
        <View style={{ flex: 5, paddingTop: 36, alignItems: 'center' }}>
          <Image
            source={{ uri: book.image }}
            style={{ flex: 1, width: 220, height: 'auto' }}
          />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{book.judul}</Text>
          <Text style={{ fontSize: 15 }}>{book.penulis}</Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, flexDirection: 'row', padding: 24 }}>
          <ScrollView>
            <Text style={{ fontSize: 16, marginBottom: 14 }}>Sinopsis</Text>
            <Text style={{ fontSize: 14 }}>{book.sinopsis}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backward: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(240, 240, 232, 0.5)',
  }
});