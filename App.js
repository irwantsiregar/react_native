import React from 'react';
import { View, } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <View style={{ height: 50, width: 50, backgroundColor: 'red' }} />
      <View style={{ height: 50, width: 50, backgroundColor: 'grey' }} />
      <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
    </View>
  )
}

