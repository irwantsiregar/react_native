import React from 'react';
import { View, Text, Image, Button, Linking, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Detail = ({ navigation, route }) => {
  const { employee } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#0033ff', '#6bc1ff']} style={{ height: '20%' }} />
      <View style={{ alignItems: 'center' }}>
        <Image style={{ width: 120, height: 120, borderRadius: 120 / 2, marginTop: -50 }} source={{ uri: employee.photo }} />
      </View>
      <View style={{ alignItems: 'center', margin: 15 }}>
        <Title>{employee.name}</Title>
        <Text style={{ fontSize: 14 }}>{employee.position}</Text>
      </View>
      <Card style={{ margin: 3 }} onPress={() => { Linking.openURL(`mailto:${employee.email}`) }}>
        <View style={{ flexDirection: 'row', padding: 8 }}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={styles.text}>{employee.email}</Text>
        </View>
      </Card>
      <Card style={{ margin: 3 }} onPress={() => { Linking.openURL(`tel:${employee.phone}`) }}>
        <View style={{ flexDirection: 'row', padding: 8 }}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={styles.text}>{employee.phone}</Text>
        </View>
      </Card>
      <Card style={{ margin: 3 }}>
        <View style={{ flexDirection: 'row', padding: 8 }}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={styles.text}>{employee.salary}</Text>
        </View>
      </Card>
      <View style={{ padding: 10 }}>
        <Button title='GO BACK' onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginTop: 3,
    marginLeft: 5,
  }
})

export default Detail;