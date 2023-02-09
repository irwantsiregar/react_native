import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Employee from '../assets/data/employees';

const Home = ({ navigation }) => {
  const [data, setData] = useState(Employee);

  const listEmployee = ({ item }) => {
    return (
      <Card style={styles.cardMain} onPress={() => navigation.navigate('Detail', { employee: item })}>
        <View style={styles.cardView}>
          <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={{ uri: item.photo }} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={data} renderItem={listEmployee} keyExtractor={item => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  cardMain: {
    margin: 5,
    shadowColor: '#470000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 16
  }
})

export default Home;