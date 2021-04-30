import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, Button, Text, Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';

export default function Music({navigation}) {

    const [showMusic, setShowMusic] = useState(false)
    const [showMusic1, setShowMusic1] = useState(false)
    const [showMusic2, setShowMusic2] = useState(false)
    const [showMusic3, setShowMusic3] = useState(false)

    return (
    <SafeAreaView>
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{padding: 10, fontSize: 20,}}>Try to think of the artist</Text>
            <Text style={{padding: 10, fontSize: 15,}}>When you think you've got it, press on the song name!</Text>
            <Button style={{paddingBottom: 10,}} onPress={() => setShowMusic(true)} title="Umbrella"></Button>
                <Overlay isVisible={showMusic} ModalComponent={Modal}>
                    <Card>
                        <Card.Title>Umbrella</Card.Title>
                            <Text>Rihanna</Text>
                        <Card.Divider></Card.Divider>
                            <Text>2008</Text>
                    </Card>
                    <Button title="I remember!" onPress={() => { setShowMusic(false) }}></Button>
                </Overlay>
            <Button style={{paddingBottom: 10,}} onPress={() => setShowMusic1(true)} title="Seven Nation Army"></Button>
                <Overlay isVisible={showMusic1} ModalComponent={Modal}>
                    <Card>
                        <Card.Title>Seven Nation Army</Card.Title>
                            <Text>The White Stripes</Text>
                        <Card.Divider></Card.Divider>
                            <Text>2003</Text>
                    </Card>
                    <Button title="I remember!" onPress={() => { setShowMusic1(false) }}></Button>
                </Overlay>
            <Button style={{paddingBottom: 10,}} onPress={() => setShowMusic2(true)} title="Mr. Brightside"></Button>
                <Overlay isVisible={showMusic2} ModalComponent={Modal}>
                    <Card>
                        <Card.Title>Mr.Brightside</Card.Title>
                            <Text>The Killers</Text>
                        <Card.Divider></Card.Divider>
                            <Text>2004</Text>
                    </Card>
                    <Button title="I remember!" onPress={() => { setShowMusic2(false) }}></Button>
                </Overlay>
            <Button style={{paddingBottom: 10,}} onPress={() => setShowMusic3(true)} title="We Belong Together"></Button>
                <Overlay isVisible={showMusic3} ModalComponent={Modal}>
                    <Card>
                        <Card.Title>We Belong Together</Card.Title>
                            <Text>Mariah Carey</Text>
                        <Card.Divider></Card.Divider>
                            <Text>2005</Text>
                    </Card>
                    <Button title="I remember!" onPress={() => { setShowMusic3(false) }}></Button>
                </Overlay>
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
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });