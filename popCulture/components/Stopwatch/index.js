import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class Stopwatch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: this.props.strValue,
            time: 60,
        }
    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
          time: this.state.time - 1
        }), 1000)
      }
    stopTimer() {
        clearInterval(this.timer)
      }

    render() {
      return(
        <View>
            <Text>Click start when you are ready to take the quiz</Text>
            <Button onPress={() => this.startTimer()} title="Start Quiz" style={{paddingBottom:10}}></Button>
            <Button onPress={() => this.stopTimer()} title="SUBMIT"></Button>
            <Text>Time to complete: {this.state.time} seconds</Text>
        </View>
      );
    }
}