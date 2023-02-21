import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ImageBackground, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
      .catch(error => { console.log; })
  }, []);

  const listHomeStay = ({ item }) => {
    return (
      <Card style={styles.cardUtama}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item.nama}</Text>
        </View>
        <View style={styles.containerImage}>
          <ImageBackground
            style={styles.image}
            source={{ uri: item.fotoUrl }}
          >
            <Text style={styles.price}>Rp. {item.harga} Rb</Text>
          </ImageBackground>
        </View>
      </Card>
    )
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={listHomeStay}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardUtama: {
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.5,
    height: 220,
    margin: 10,
  },
  containerTitle: {
    height: '15%',
    padding: 7
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  containerImage: {
    width: '100%',
    height: '80%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    margin: 10,
  },
});