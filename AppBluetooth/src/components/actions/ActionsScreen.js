import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';

import Action from './ActionItem';
import colors from 'cubobluetooth/src/res/colors';

class ActionsScreen extends Component {
  toggleSwitch(comando) {
    console.log(`enviando la variable`, comando);
    BluetoothSerial.write(comando)
      .then(res => {
        console.log(res);
        console.log('Successfuly wrote to device');
        this.setState({connected: true});
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <View style={styles.container}>
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="a"
          title="Off"
        />
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="b"
          title="On"
        />
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="c"
          title="Spiral"
        />
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="d"
          title="Roate"
        />
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="e"
          title="Blink"
        />
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="f"
          title="Curtains"
        />
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="g"
          title="Elevator Up"
        />
        <Action
          onPress={dato => this.toggleSwitch.bind(this, dato)}
          dato="h"
          title="Elevator Down"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.primario,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ActionsScreen;
