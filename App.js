import React from 'react';
import { View, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Detail from './components/Detail';

const Stack = createStackNavigator();

export default function App() {
  const splashScreen = ({ navigation }) => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/logo.png')} style={{ width: 100, height: 100 }} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={splashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Employee Data',
            headerStyle: { backgroundColor: '#006aff' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detail Employee',
            headerStyle: { backgroundColor: '#006aff' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
