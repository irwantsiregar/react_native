import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
      .catch(error => { console.log; })
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.nama} - Rp. {item.harga} Rb</Text>
        )}
      />
    </View >
  )
}
