import React from 'react';
import { View } from 'react-native';
import Contact from './components/Contact';

export default function App() {
  return (
    <View>
      <Contact
        image="https://via.placeholder.com/300/92c952"
        title="Leonardi Dicaprio"
        telephone="085762166699"
      />
      <Contact
        image="https://via.placeholder.com/300/92c952"
        title="Taylor Swift"
        telephone="085762164479"
      />
      <Contact
        image="https://via.placeholder.com/300/92c952"
        title="Tom Cruise"
        telephone="085762167789"
      />
      <Contact
        image="https://via.placeholder.com/300/92c952"
        title="Hillary Swank"
        telephone="085762162244"
      />
    </View>
  )
}
