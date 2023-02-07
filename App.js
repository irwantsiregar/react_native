import React from 'react';
import { View } from 'react-native';
import HelloWorld from './components/Hello';

export default function App() {
  return (
    <View>
      <HelloWorld name="Irwan"/>
      <HelloWorld name="Nadia"/>
      <HelloWorld name="Sheera"/>
    </View>
  )
}

