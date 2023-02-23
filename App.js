import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import HTMLRender from 'react-native-render-html';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://phoneradar.com/wp-json/wp/v2/posts/')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
      .catch(error => { console.log; })
  }, []);

  const listNews = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: item.jetpack_featured_media_url }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            <HTMLRender html={item.title.rendered} />
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={listNews}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
  },
  titleWrapper: {
    height: '10%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
});