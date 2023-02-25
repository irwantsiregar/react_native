import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function BestSeller() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/best.json')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.bestseller))
      .catch(error => { console.log; })
  }, []);

  const listBook = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail', { buku: item })}>
        <View style={styles.listItem}>
          <Image source={{ uri: item.image }} style={styles.coverImage} />
          <View style={{ marginLeft: 5 }}>
            <Text style={styles.title}>{item.judul}</Text>
            <Text style={styles.text}>Harga: Rp. {item.judul}</Text>
            <Text style={styles.text}>Penulis: {item.penulis}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={listBook}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  coverImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    width: 200,
    padding: 10
  },
  title: {
    fontSize: 16,
    width: 220,
    fontWeight: 'bold',
    marginBottom: 15
  },
});