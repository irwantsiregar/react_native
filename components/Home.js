import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/db.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.bukulokomedia);
        setSearch(responseJson.bukulokomedia);
      }
      )
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

  const searchData = (text) => {
    const newData = search.filter((item) => {
      const itemData = item.judul.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
    setText(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.TextInput}>
        <TextInput
          onChangeText={(text) => searchData(text)}
          value={text}
          placeholder="Search title the book.."
        />
      </View>
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