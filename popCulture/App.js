import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Movies from './components/Movies'
import Music from './components/Music';
import Television from './components/Tv';
import Games from './components/Games';

function HomeScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Hi there! Welcome to the Pop Culture App</Text>
      <Text style={styles.subheading}>In this app you will be exploring the 2000s pop culture</Text>
      <Button onPress={() => navigation.openDrawer()} title="Start Exploring"></Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Movies" component={Movies} />
        <Drawer.Screen name="Music" component={Music} />
        <Drawer.Screen name="Television" component={Television} />
        <Drawer.Screen name="Games" component={Games} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    padding: 10,
  },
  subheading: {
    fontSize: 15,
    padding: 10,
  }
});
