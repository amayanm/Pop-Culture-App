import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, View, TextInput } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import Stopwatch from '../Stopwatch';

export default function Movies({navigation}) {

    return (
        <SafeAreaView>
        <View>
            <View style={styles.container}>
                <Text>Harry Potter and the Sorcere's Stone</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
                <Text>Cars</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
                <Text>Shark Tale</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
                <Text>13 going on 30</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
                <Text>Charlie and the Chocolate Factory</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
                <Text>Mean Girls</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
                <Text>Holes</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
                <Text>Ratatouille</Text>
                    <TextInput style={{width: 300, paddingLeft: 25,}} placeholder="Year this movie released"></TextInput>
            </View>
            <View style={styles.bodyCard}>
                <Card>
                    <Stopwatch />
                </Card>
                    <Button onPress={() => navigation.openDrawer()} title="Explore More"></Button>
            </View>
        </View>
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 5,
    },
    bodyCard: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });