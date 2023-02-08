import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import MenuItem from './components/Menu';

export default function App() {
  return (
    <ImageBackground source={require('./assets/icons/workingspace.jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.top}>
          <Text style={styles.text}>H O M E</Text>
        </View>
        <View style={styles.menu}>
          <MenuItem icon={require('./assets/icons/instagram.png')} />
          <MenuItem icon={require('./assets/icons/linkedin.png')} />
          <MenuItem icon={require('./assets/icons/whatsapp.png')} />
          <MenuItem icon={require('./assets/icons/twitter.png')} />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(47, 163, 218, .4)'
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  menu: {
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

