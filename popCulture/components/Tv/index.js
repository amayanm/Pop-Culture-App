import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

export default function Television({navigation}) {

    const [tv, setTv] = useState(0)
    const [tv1, setTv1] = useState(0)
    const [tv2, setTv2] = useState(0)
    const [tv3, setTv3] = useState(0)
    const [tv4, setTv4] = useState(0)

    return (
      <SafeAreaView>
        <View style={styles.container}>
            <Text style={{fontSize: 20,}}>Can you guess how many seasons are in each show?</Text>
            <Text style={{fontSize: 15,}}>Find out below!</Text>
        </View>
        <View style={styles.container}>
            <Card>
                <Card.Title>The Office</Card.Title>
                    <Text>Seasons: {tv}</Text>
                <Button title="How Many?" style={{paddingBottom:10}} onPress={() => setTv((prevValue) => prevValue+9)}></Button>
            </Card>
            <Card>
                <Card.Title>Avatar: The Last Airbender</Card.Title>
                    <Text>Seasons: {tv1}</Text>
                <Button title="How Many?" style={{paddingBottom:10}} onPress={() => setTv1((prevValue) => prevValue+3)}></Button>
            </Card>
            <Card>
                <Card.Title>The King of Queens</Card.Title>
                    <Text>Seasons: {tv2}</Text>
                <Button title="How Many?" style={{paddingBottom:10}} onPress={() => setTv2((prevValue) => prevValue+9)}></Button>
            </Card>
            <Card>
                <Card.Title>Punk'd</Card.Title>
                    <Text>Seasons: {tv3}</Text>
                <Button title="How Many?" style={{paddingBottom:10}} onPress={() => setTv3((prevValue) => prevValue+9)}></Button>
            </Card>
            <Card>
                <Card.Title>Lost</Card.Title>
                    <Text>Seasons: {tv4}</Text>
                <Button title="How Many?" style={{paddingBottom:10}} onPress={() => setTv4((prevValue) => prevValue+6)}></Button>
            </Card>
        </View>
        <View style={styles.container}>
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
      padding: 10,
    },
  });