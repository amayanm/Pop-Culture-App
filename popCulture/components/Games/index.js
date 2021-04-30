import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

export default function Games({navigation}) {

    const [games, setGames] = useState(0)

    return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card>
          <Card.Title>Wii Sports</Card.Title>
            <Text>2006</Text>
            <Text>Nintendo</Text>
            <Button title="Played" style={{paddingBottom:10}} onPress={() => setGames((prevValue) => prevValue+1)}></Button>
          <Card.Title>Scene it? Lights, Camera, Action</Card.Title>
            <Text>2007</Text>
            <Text>Microsoft Game Studio</Text>
            <Button title="Played" style={{paddingBottom:10}} onPress={() => setGames((prevValue) => prevValue+1)}></Button>
          <Card.Title>Angry Birds</Card.Title>
            <Text>2009</Text>
            <Text>Rovio Entertainment</Text>
            <Button title="Played" style={{paddingBottom:10}} onPress={() => setGames((prevValue) => prevValue+1)}></Button>
          <Card.Title>Just Dance</Card.Title>
            <Text>2009</Text>
            <Text>Ubisoft</Text>
            <Button title="Played" style={{paddingBottom:10}} onPress={() => setGames((prevValue) => prevValue+1)}></Button>
        </Card>
        <Card>
            <Text>Number of Games Played: {games}</Text>
            <Button title="Clear All" style={{padding:10}} onPress={() => setGames(0)}></Button>
        </Card>
        <Button onPress={() => navigation.openDrawer()} title="Explore More"></Button>
      </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });