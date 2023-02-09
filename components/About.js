import React from 'react';
import { View, Text, Button } from 'react-native';

export default function About({ navigation, route }) {
  // get the data from the previous screen
  const { firstName, lastName } = route.params;

  return (
    <View>
      <Text>About Screen</Text>
      <Text>First Name : {firstName}</Text>
      <Text>Last Name : {lastName}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}