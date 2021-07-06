import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
var _ = require('lodash');
import BluetoothSerial from 'react-native-bluetooth-serial';

import HeaderList from './HeaderList';
import DeviceItem from './DeviceItem';
import colors from 'cubobluetooth/src/res/colors';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnable: false,
      discovering: false,
      connecting: false,
      unpairedDevices: [],
      devices: [],
    };
  }
  componentDidMount() {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
      values => {
        const [isEnable, devices] = values;

        this.setState({isEnable, devices});
      },
    );
    BluetoothSerial.on('bluetoothEnable', () => {
      Promise.all([BluetoothSerial.isEnable(), BluetoothSerial.list()]).then(
        values => {
          const [isEnable, devices] = values;
          this.setState({devices});
        },
      );

      BluetoothSerial.on('bluetoothDisabled', () => {
        this.setState({devices});
      });
      BluetoothSerial.on('error', err =>
        console.error(`Error: ${err.message}`),
      );
    });
  }

  async connectar(device) {
    console.log(`conectando con ${device.name}`);
    this.setState({connecting: true});
    BluetoothSerial.connect(device.id)
      .then(res => {
        console.log(`Connected to device ${device.name}`);
        ToastAndroid.show(
          `Connected to device ${device.name}`,
          ToastAndroid.SHORT,
        );
      })
      .catch(err => console.log(`Error: ${err.message}`));
  }

  enable() {
    BluetoothSerial.enable()
      .then(res => this.setState({isEnable: true}))
      .catch(err => Toast.showShortBottom(`Error: ${err.message}`));
  }
  disable() {
    BluetoothSerial.disable()
      .then(res => this.setState({isEnable: false}))
      .catch(err => Toast.showShortBottom(err.message));
  }
  toggleBluetooth(value) {
    if (value == true) {
      this.enable();
    } else {
      this.disable();
    }
  }

  discoverAvailableDevices() {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
      values => {
        const [isEnable, devices] = values;

        this.setState({isEnable, devices});
      },
    );
    console.log('discovering');
    if (this.state.discovering) {
      return false;
    } else {
      this.setState({discovering: true});
      BluetoothSerial.discoverUnpairedDevices()
        .then(unpairedDevices => {
          const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
          console.log(uniqueDevices);
          this.setState({uniqueDevices: uniqueDevices, discovering: false});
        })
        .catch(err => console.log(`Error: ${err.message}`));
    }
  }

  handlePress = () => {
    console.log('go to detils', this.props);

    this.props.navigation.navigate('DeviceDetail');
  };

  render() {
    const devices = this.state.devices;

    return (
      <View style={styles.container}>
        <HeaderList
          estado={this.state.isEnable}
          onValueChange={val => this.toggleBluetooth(val)}
        />

        <FlatList
          data={devices}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DeviceItem item={item} onPress={() => this.connectar(item)} />
          )}
        />

        <Pressable
          style={styles.btn}
          onPress={this.discoverAvailableDevices.bind(this)}>
          <Text style={styles.btnText}>Scan Devices</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primario,
  },
  titleTxt: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: colors.azul,
    padding: 8,
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ListScreen;
