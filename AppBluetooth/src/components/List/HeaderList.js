import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import colors from 'cubobluetooth/src/res/colors';

const HeaderList = ({estado, onValueChange}) => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.toolbarTitle}>Bluetooth</Text>
      <View style={styles.toolbarButton}>
        <Switch value={estado} onValueChange={val => onValueChange(val)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 50,
    marginTop: 8,
  },
  toolbarTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    marginTop: 6,
    color: colors.white,
  },
});

export default HeaderList;
