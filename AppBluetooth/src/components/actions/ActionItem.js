import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import colors from 'cubobluetooth/src/res/colors';

const ActionItem = ({onPress, dato, title}) => {
  return (
    <Pressable onPress={onPress(dato)} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.azul,
    margin: 30,
    width: 120,
    height: 100,
    borderRadius: 40,
  },
  text: {
    fontSize: 20,
    marginTop: 35,
    textAlign: 'center',
    color: colors.white,
  },
});

export default ActionItem;
