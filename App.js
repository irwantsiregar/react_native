import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: -7.797068,
          longitude: 110.371754,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <Marker coordinate={{ latitude: -7.800686, longitude: 110.367715 }} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})