import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './components/Home';
import Detail from './components/Detail';
import BestSeller from './components/BestSeller';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Utama" component={Home} options={{
        title: 'Lokomedia Catalog',
        headerStyle: { backgroundColor: '#F9813A' },
        headerTitleAlign: 'center',
        headerTintColor: '#FFF'
      }} />
      <Stack.Screen name="Detail" component={Detail} options={{
        title: 'Book Detail',
        headerStyle: { backgroundColor: '#F9813A' },
        headerTintColor: '#FFF'
      }} />
    </Stack.Navigator>
  )
}

function BestNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Best Seller" component={BestSeller} options={{
        title: 'Best Seller',
        headerStyle: { backgroundColor: '#F9813A' },
        headerTitleAlign: 'center',
        headerTintColor: '#FFF'
      }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Best Seller') {
              iconName = 'star';
            }
            return <MaterialIcons name={iconName} size={28} color={color} />
          }
        })}
      >
        <Tabs.Screen name="Home" component={HomeNavigator} />
        <Tabs.Screen name="Best Seller" component={BestNavigator} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
