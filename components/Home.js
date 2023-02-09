import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About', {
        firstName: 'Irwan',
        lastName: 'Siregar'
      })} />
    </View>
  )
}