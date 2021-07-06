import React from 'react';
import {View, Text, Pressable, Platform, StyleSheet} from 'react-native';
import colors from 'cubobluetooth/src/res/colors';

const DeviceItem = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.nameText}>{item.name ? item.name : item.id}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: colors.zircon,
    borderBottomWidth: 1,
    paddingLeft: Platform.OS == 'ios' ? 0 : 16,
    marginLeft: Platform.OS == 'ios' ? 16 : 0,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 16,
  },
});

export default DeviceItem;
